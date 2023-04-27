const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const emailRegular = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const passwordRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/

const userSchema = new Schema(
  {
    password: {
      type: String,
      match: passwordRegular,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: emailRegular,
      unique: true,
      required: [true, "Email is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required:true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegular).required(),
  password: Joi.string().pattern(passwordRegular).required(),
})

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegular).required(),
  password: Joi.string().pattern(passwordRegular).required(),
})

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegular).required(),
})

const updateSubSchema = Joi.object({
  subscription: Joi.any().valid("starter", "pro", "business"),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateSubSchema,
  emailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
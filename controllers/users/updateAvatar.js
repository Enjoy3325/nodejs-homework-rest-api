const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');
const { User } = require('../../models');

const avatarsDir = path.join(__dirname, "..", "..", "public", "avatars");

const updateAvatar = async (req, res) => {
    const {_id} = req.user;
    const { path: tempUpload, filename } = req.file;
    const avatarName = `${_id}_${filename}`;
     const image = await Jimp.read(tempUpload);
  await image
    .autocrop()
    .cover(250, 250, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE)
    .writeAsync(tempUpload);
    const resultUpload = path.join(avatarsDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", avatarName);
    await User.findByIdAndUpdate(_id, {avatarURL});

    res.json({avatarURL,});
}

module.exports = updateAvatar;
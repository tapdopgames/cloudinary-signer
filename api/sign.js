// api/sign.js
export default function handler(req, res) {
  const crypto = require("crypto");

  const { timestamp, uploadPreset } = req.query;
  const secret = process.env.CLOUDINARY_API_SECRET;

  const signature = crypto
    .createHash("sha1")
    .update(`timestamp=${timestamp}&upload_preset=${uploadPreset}${secret}`)
    .digest("hex");

  res.status(200).json({ signature });
}


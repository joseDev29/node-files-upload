const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/uploads"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLowerCase());
  },
});

const uploadFiles = multer({
  storage: storage,
  limits: {
    fileSize: 1000000, //1 mb en bytes
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif|svg/;
    const mimetype = filetypes.test(file.mimetype);

    const extname = filetypes.test(path.extname(file.originalname));

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: El archivo de be ser una imagen valida (.jpg , .png, .gif, .svg)"
    );
  },
}).single("image-file"); //Debe ser igual al atributo name del input-file del html

module.exports = uploadFiles;

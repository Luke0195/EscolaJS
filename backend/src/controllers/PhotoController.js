import multer from 'multer';
import multerConfig from '../config/multercConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  async store(request, response) {
    return upload(request, response, (error) => {
      if (error) {
        response.status(400).json({ error: error.code });
      }
      response.json(request.file);
    });
  }
}

export default new PhotoController();

import multer from 'multer';
import Photo from '../models/Photo';
import multerConfig from '../config/multercConfig';

const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.json(400).json({ error: error.code });
      }
      try {
        const { originalname, filename } = request.file;
        const { aluno_id } = request.body;
        const photo = await Photo.create({ originalname, filename, aluno_id });
        return response.json(photo);
      } catch (e) {
        return response.status(400).json({ mesage: 'Não existe o aluno com essa id' });
      }
    });
  }
}

export default new PhotoController();

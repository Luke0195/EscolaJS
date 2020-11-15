class PhotoController {
  store(request, response) {
    response.json(request.file);
  }
}

export default new PhotoController();

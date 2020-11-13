class HomeController {
  index(request, response) {
    return response.json({ message: 'Bem Vindo ao projeto Escola' });
  }
}

export default new HomeController();

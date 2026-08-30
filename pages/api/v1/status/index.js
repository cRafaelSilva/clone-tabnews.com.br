function status(request, response) {
  response.status(200).json({
    chave: "São ótimos",
  });
}

export default status;

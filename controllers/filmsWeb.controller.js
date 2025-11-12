const API_KEY = process.env.KEY;

// GET Renderiza el formulario inicial
const renderHome = (req, res) => {
  res.render("home");
};

// GET Procesa el formulario y redirige a /film/:title
const searchFilm = (req, res) => {
  const { title } = req.body;
  if (!title) return res.redirect("/");
  res.redirect(`/film/${encodeURIComponent(title)}`);
};

// POST Hace fetch a la API y muestra los datos
const getFilm = async (req, res) => {
  const { title } = req.params;

  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`);
    const filmData = await response.json();

    if (filmData.Response === "False") {
      return res.status(404).send("Película no encontrada");
    }

    res.render("film", { film: filmData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los datos de la película");
  }
};

module.exports = {
  renderHome,
  searchFilm,
  getFilm,
};

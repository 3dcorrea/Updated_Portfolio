require("dotenv").config();

var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static("public"));

// Handlebars


// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// If running a test, set syncOptions.force to true
// clearing the `testdb`

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});
module.exports = app;
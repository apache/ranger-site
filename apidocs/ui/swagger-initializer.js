window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  var url = window.location.search.match(/url=([^&]+)/);
  var baseUrl = document.location.href;
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else if (document.location.href.substring(0, 5) === "file:") {
    url = baseUrl.substring(0, (baseUrl.lastIndexOf("/") == -1) ? baseUrl.length : baseUrl.lastIndexOf("/")) + "/swagger.json";
  } else {
    //this removes the anchor at the end, if there is one
    baseUrl = baseUrl.substring(0, (baseUrl.indexOf("#") == -1) ? baseUrl.length : baseUrl.indexOf("#"));
    //this removes the query after the file name, if there is one
    baseUrl = baseUrl.substring(0, (baseUrl.indexOf("?") == -1) ? baseUrl.length : baseUrl.indexOf("?"));
    //this removes everything after the last slash in the path
    baseUrl = baseUrl.substring(0, (baseUrl.lastIndexOf("/") == -1) ? baseUrl.length : baseUrl.lastIndexOf("/"));

    url = baseUrl + "/swagger.json";
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: url,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};

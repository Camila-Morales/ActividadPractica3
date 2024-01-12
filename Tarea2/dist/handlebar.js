window.onload = function () {
    var template = document.getElementById("template").innerHTML;
  
    var compiled_template = Handlebars.compile(template);
  
    var rendered = compiled_template({ name: "Camila Morales :D", year: "2024" });
  
    document.getElementById("target").innerHTML = rendered;
  };
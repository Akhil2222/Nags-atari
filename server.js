fetch("a.jpl").then(response => response.text()).then(data => compile(data))
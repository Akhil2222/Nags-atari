fetch("atari.jpl").then(response => response.text()).then(data => {compile(data);console.log(data)})
function createNav() {
  let table = ["Home", "Login", "Sign-up"];
  for (let i = 0; i < table.length; i++) {
    document.querySelector(".nav-list").innerHTML +=
      `<li><a href='https://www.${table[i]}.com' title ='barre_de_navigation'>` +
      table[i] +
      "</a></li>";
  }
}

createNav();

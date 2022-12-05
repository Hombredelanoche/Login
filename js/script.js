function createNav() {
  let table = ["Home", "Loggin", "Sing-up"];
  for (let i = 0; i < table.length; i++) {
    return (document.querySelector(".nav-list").innerHTML =
      `<li><a href='${table[i]}'>` + table[i] + "</a></li>");
  }
}

createNav();
console.log(createNav());

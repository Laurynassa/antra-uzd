"use strict";
//duomenu persipumpavimas
import kazkas from "./data.js";
// console.log(kazkas);
//1.1 patikrinimas ar yra šaliu duomenis
const infoIsLS = localStorage.getItem("ŠaliųD");
// console.log(infoIsLS);
//1.1 sukuriamas masyvas "ŠaliųD"
const saliuduom = infoIsLS === null ? [] : JSON.parse(infoIsLS);
// console.log(saliuduom);
//1.1
kazkas.forEach((country, index) => {
  const isCountryInLS = saliuduom.some(
    (savedCountry) => savedCountry.name === country.name.common
  );

  if (!isCountryInLS) {
    const addCountry = {
      name: country.name.common,
      capital:
        country.capital && country.capital.length > 0
          ? country.capital[0]
          : "Data not found",
    };

    saliuduom.push(addCountry);
    console.log(`${index + 1} data: `);
    console.log(`country name: ${addCountry.name}`);
    console.log(`capital: ${addCountry.capital}`);
    console.log("-----------------------------");
  }
});

localStorage.setItem("saliud", JSON.stringify(saliuduom));

// kai nebeloadina:
// localStorage.clear();

// const infoIsLS = localStorage.getItem("salys");

// const salys = infoIsLS === null ? [] : JSON.parse(infoIsLS);

// kazkas.forEach((country, index) => {
//   const isCountryInLS = salys.some(
//     (savedCountry) => savedCountry.name === country.name.common
//   );

//   if (!isCountryInLS) {
//     const addCountry = {
//       name: country.name.common,
//       capital:
//         country.capital && country.capital.length > 0
//           ? country.capital[0]
//           : "Data not found",
//     };

//     salys.push(addCountry);
//     console.log(`${index + 1} data: `);
//     console.log(`country name: ${addCountry.name}`);
//     console.log(`capital: ${addCountry.capital}`);
//     console.log("-----------------------------");
//   }
// });

// localStorage.setItem("salys", JSON.stringify(salys));

// kai nebeloadina:
// localStorage.clear();

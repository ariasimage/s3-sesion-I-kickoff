const duraciones = [95, 120, 45, 180, 62, 150, 88, 210, 73, 140];
console.log("Duraciones de películas en minutos:", duraciones);
console.log("Elementos totales en el array duraciones:", duraciones.length);
console.log("Primer elemento:", duraciones[0]);

for (let i = 0; i < duraciones.length; i++) {
  console.log(`Duración de la película ${i + 1}: ${duraciones[i]}`);
  console.log(duraciones[i] + 1);
}

const duracionPelicula = 119; // minutos

if (duracionPelicula < 90) {
  console.log("Película corta");
} else if (duracionPelicula <= 120) {
  console.log("Película estándar");
} else {
  console.log("Película larga");
}

// Fizzbuzz;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

let cortas = 0;
let normales = 0;
let largas = 0;

for (let i = 0; i < duraciones.length; i++) {
  if (duraciones[i] < 90) {
    cortas++;
    console.log(`${duraciones[i]} es una peli corta`);
  } else if (duraciones[i] <= 120) {
    normales++;
    console.log(`${duraciones[i]} es una peli normal`);
  } else {
    largas++;
    console.log(`${duraciones[i]} es una peli larga`);
  }
}

console.log(`Cortas: ${cortas} - Normales: ${normales} - Largas: ${largas}`);

const pelicula = {
  titulo: "Origen",
  fecha: 2010,
  rating: 8.8,
  disponible: true,
};

console.log(pelicula);
console.log(pelicula.titulo);
console.log(pelicula["fecha"]);

pelicula.rating = 9.0;

pelicula.director = "Christopher Nolan";
console.log(pelicula);

const peliculas = [
  {
    titulo: "Origen",
    fecha: 2010,
    genero: "Ciencia Ficción",
    rating: 8.8,
    disponible: true,
  },
  {
    titulo: "Parásitos",
    fecha: 2019,
    genero: "Drama",
    rating: 8.6,
    disponible: true,
  },
  {
    titulo: "El Faro",
    fecha: 2019,
    genero: "Terror",
    rating: 7.5,
    disponible: false,
  },
  {
    titulo: "Dune",
    fecha: 2021,
    genero: "Ciencia Ficción",
    rating: 8.0,
    disponible: true,
  },
  {
    titulo: "La Pianista",
    fecha: 2001,
    genero: "Drama",
    rating: 7.2,
    disponible: false,
  },
  {
    titulo: "Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
  },
];

for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];
  if (pelicula.disponible) {
    console.log(
      `[${pelicula.fecha}] ${pelicula.titulo} - Género: ${pelicula.genero} - Rating: ${pelicula.rating}`,
    );
  } else {
    console.log(`[${pelicula.fecha}]  ${pelicula.titulo} - NO DISPONIBLE`);
  }
}

for (let i = 0; i < peliculas.length; i++) {
  const pelicula = peliculas[i];

  if (pelicula.disponible && pelicula.rating >= 8.0) {
    console.log(`Recomendada: ${pelicula.titulo} (${pelicula.rating})`);
  }

  if (pelicula.genero === "Terror" || pelicula.genero === "Ciencia Ficción") {
    console.log(`Género TOP: ${pelicula.titulo} - ${pelicula.genero}`);
  }

  // funciona igual que pelicula.disponible === false
  if (!pelicula.disponible) {
    console.log(`Próximamente: ${pelicula.titulo}`);
  }
}

function sumarPrecios(precio1, precio2) {
  const resultado = precio1 + precio2;
  return resultado;
}

console.log(sumarPrecios(10, 24));

function restarPrecios(precio1, precio2) {
  const resultado = precio1 - precio2;
  return resultado;
}

console.log(restarPrecios(20, 10));

function formatearTitulo(titulo) {
  const tituloMayus = titulo.toUpperCase();
  const tituloFormateado = `*** ${tituloMayus} ***`;
  return tituloFormateado;
}

console.log(formatearTitulo("Reyes"));

for (let i = 0; i < peliculas.length; i++) {
  console.log(formatearTitulo(peliculas[i].titulo));
}

function obtenerPelisDisponibles(listaPelis) {
  const disponibles = [];

  for (let i = 0; i < listaPelis.length; i++) {
    if (listaPelis[i].disponible) {
      disponibles.push(listaPelis[i].titulo);
    }
  }
  return disponibles;
}

const peliculas2 = [
  {
    titulo: "Midsommar",
    fecha: 2019,
    genero: "Terror",
    rating: 7.1,
    disponible: true,
  },
  {
    titulo: "Interstellar",
    fecha: 2014,
    genero: "Ciencia Ficción",
    rating: 8.7,
    disponible: true,
  },
  {
    titulo: "Parasite",
    fecha: 2019,
    genero: "Thriller",
    rating: 8.5,
    disponible: false,
  },
  {
    titulo: "The Dark Knight",
    fecha: 2008,
    genero: "Acción",
    rating: 9.0,
    disponible: true,
  },
  {
    titulo: "Pulp Fiction",
    fecha: 1994,
    genero: "Crimen",
    rating: 8.9,
    disponible: true,
  },
  {
    titulo: "Spirited Away",
    fecha: 2001,
    genero: "Animación",
    rating: 8.6,
    disponible: false,
  },
  {
    titulo: "Whiplash",
    fecha: 2014,
    genero: "Drama",
    rating: 8.5,
    disponible: true,
  },
  {
    titulo: "Blade Runner 2049",
    fecha: 2017,
    genero: "Ciencia Ficción",
    rating: 8.0,
    disponible: false,
  },
  {
    titulo: "Hereditary",
    fecha: 2018,
    genero: "Terror",
    rating: 7.3,
    disponible: false,
  },
  {
    titulo: "La La Land",
    fecha: 2016,
    genero: "Musical",
    rating: 8.0,
    disponible: false,
  },
];

console.log(obtenerPelisDisponibles(peliculas));
console.log(obtenerPelisDisponibles(peliculas2));

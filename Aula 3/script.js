fetch("https://ghibliapi.vercel.app/films")
    .then(response => {
        if (!response.ok) {
            throw new error (`Falha ao carregar filmes ${response.statusText}`)
        }

        return response.json();
    })
    .then(films => {
        console.log("films", films)
        const filmList = document.getElementById("film-list");

        films.forEach(film => {
            const li = document.createElement("li");
            li.textContent = `${film.title} - Direct by ${film.director}`
            filmList.appendChild(li);
        })
    })
    .catch(error => {
        console.error("Request falhou", error)
    });
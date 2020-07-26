let listFilm = [
    {
      img: "https://i.redd.it/nh8ak50scze01.jpg",
      title: "BLACK PANTHER",
      imdb: "IMDb: 7.3/10",
      genre: ["action", "adventure"],
    },
    {
      img:
        "https://cdn.europosters.eu/image/750/posters/avengers-infinity-war-one-sheet-i58560.jpg",
      title: "Avengers Infinity War",
      imdb: "IMDb: 9.0/10",
      genre: ["action", "adventure"],
    },
    {
      img:
        "https://i.a4vn.com/2020/6/5/train-to-busan-2-tung-poster-am-anh-nguoi-xem-ve-cuoc-chien-chong-zombie-khoc-liet-2d8-4986914.jpg",
      title: "Peninsula",
      imdb: "IMDb: 8.2/10",
      genre: ["horror", "adventure"],
    },
    {
      img:
        "https://i.pinimg.com/736x/1c/55/c0/1c55c0a90f53f186ce97ecdebacf5c54.jpg",
      title: "Itaewon Class",
      imdb: "IMDb: 7.8/10",
      genre: ["comedy", "drama"],
    },
    {
      img:
        "https://lbhspawprint.com/wp-content/uploads/2019/10/p15465632_v_v8_ab-600x900.jpg",
      title: "Annabelle",
      imdb: "IMDb: 8.4/10",
      genre: ["thriller", "horror"],
    },
  ];
  
  let listLink = [{ linkFilm: "https://www.youtube.com/watch?v=xjDjIWPwcPU", linkTrailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU" },
                  { linkFilm: "https://www.youtube.com/watch?v=6ZfuNTqbHE8", linkTrailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8" },
                  { linkFilm: "https://www.youtube.com/watch?v=eI0RUX5-1jI", linkTrailer: "https://www.youtube.com/watch?v=eI0RUX5-1jI" },
                  { linkFilm: "https://www.youtube.com/watch?v=NeaHNQJ1kCo", linkTrailer: "https://www.youtube.com/watch?v=NeaHNQJ1kCo" },
                  { linkFilm: "https://www.youtube.com/watch?v=KisPhy7T__Q", linkTrailer: "https://www.youtube.com/watch?v=KisPhy7T__Q" },
  ];
  
  //  <div class="box-img">
  //         <img src="https://i.redd.it/nh8ak50scze01.jpg" />
  //       </div>
  //       <div class="content-today">
  //         <h3>BLACK PANTHER</h3>
  //         <p>IMDb: 7.3/10</p>
  //         <p>Genre: <span style="width: fit-content;">action</span> <span>fantasy</span></p>
  //       </div>
  function showFilm() {
    let random = Math.floor(Math.random() * listFilm.length + 1);
    let film = document.getElementById("box-content");
    let linkToFilm = document.getElementById("watch-movie");
    film.innerHTML = "";
    linkToFilm .innerHTML= "";
    // for (let i = random; i < listPhone.length; i++) {
  
    console.log(random);
    const element = listFilm[random - 1];
    const elementLink = listLink[random - 1];
  
  
    const image = element.img;
    const title = element.title;
    const point = element.imdb;
    const gen1 = element.genre[0];
    const gen2 = element.genre[1];
  
    const linkFilm = elementLink.linkFilm;
    const linkTrailer = elementLink.linkTrailer;
  
    // const link = element.dataLink;
    let htmlFilm = `<div class="box-img">
                                  <img src="${image}" />
                                  </div>
                                  <div class="content-today">
                                      <h3>${title}</h3>
                                      <p>${point}</p>
                                      <p style="margin-right:20px">Genre: <span style="width: fit-content; margin-bottom:10px">${gen1}</span> <span>${gen2}</span></p>
                                  </div> `;
  
    let htmlLink = `<div class="button-today">
    <li><a class="b1" href="${linkFilm}" target="_blank">Watch now</a></li>
    <li><a class="b1" href="${linkTrailer}" target="_blank">Trailer</a></li>
  </div>`
  
    film.innerHTML += htmlFilm;
    linkToFilm.innerHTML += htmlLink;
    //}
  }
  
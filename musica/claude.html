<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>🎵 Music Player</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <style>
    body {
      background-color: #f8f9fa;
      font-family: 'Segoe UI', sans-serif;
      transition: background-color 0.3s, color 0.3s;
      padding-bottom: 80px;
    }
    
    body.dark-mode {
      background-color: #121212;
      color: #ffffff;
    }
    
    .navbar {
      background: linear-gradient(to right, #6a11cb, #2575fc);
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .navbar-brand {
      font-weight: 600;
      color: white !important;
    }
    
    .nav-link {
      color: white !important;
      opacity: 0.85;
      transition: opacity 0.2s;
    }
    
    .nav-link:hover {
      opacity: 1;
    }
    
    .audio-card {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 3px 8px rgba(0,0,0,0.08);
      transition: transform 0.3s;
      border: none;
      margin-bottom: 15px;
    }
    
    .dark-mode .audio-card {
      background-color: #1e1e1e;
    }
    
    .audio-card:active {
      transform: scale(0.97);
    }
    
    .cover-img {
      height: 160px;
      object-fit: cover;
      width: 100%;
      transition: transform 0.3s;
    }
    
    .audio-card:hover .cover-img {
      transform: scale(1.05);
    }
    
    .card-body {
      padding: 12px;
    }
    
    .card-title {
      font-size: 0.9rem;
      margin-bottom: 5px;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
    .genre {
      display: inline-block;
      font-size: 0.75rem;
      background-color: #6a11cb;
      color: white;
      padding: 2px 8px;
      border-radius: 20px;
    }
    
    #searchInput {
      border-radius: 20px;
      padding-left: 35px;
      max-width: 400px;
      margin: 15px auto;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    .dark-mode #searchInput {
      background-color: #333;
      border-color: #444;
      color: white;
    }
    
    .search-container {
      position: relative;
      max-width: 400px;
      margin: 0 auto;
    }
    
    .search-icon {
      position: absolute;
      left: 12px;
      top: 10px;
      color: #777;
    }
    
    .footer-player {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(to right, #6a11cb, #2575fc);
      color: white;
      padding: 12px;
      display: flex;
      align-items: center;
      z-index: 999;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
      transform: translateY(0);
      transition: transform 0.3s;
    }
    
    .footer-player.hidden {
      transform: translateY(100%);
    }
    
    .player-img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 6px;
      margin-right: 12px;
    }
    
    .player-info {
      flex-grow: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 10px;
    }
    
    .player-title {
      font-size: 0.9rem;
      margin: 0;
    }
    
    .player-genre {
      font-size: 0.75rem;
      opacity: 0.8;
    }
    
    .player-controls {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    
    .player-btn {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background-color 0.2s;
    }
    
    .player-btn:hover {
      background-color: rgba(255,255,255,0.1);
    }
    
    .player-btn.play-pause {
      background-color: rgba(255,255,255,0.2);
      font-size: 1.3rem;
    }
    
    .player-progress {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      background-color: rgba(255,255,255,0.3);
      width: 100%;
    }
    
    .progress-bar {
      height: 100%;
      background-color: white;
      width: 0;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
    }
    
    .fade-in {
      animation: fadeIn 0.5s;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .dropdown-menu {
      border-radius: 10px;
      border: none;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    
    .dark-mode .dropdown-menu {
      background-color: #2d2d2d;
    }
    
    .dark-mode .dropdown-item {
      color: #fff;
    }
    
    .dark-mode .dropdown-item:hover {
      background-color: #3d3d3d;
    }
    
    .badge-count {
      background-color: #6a11cb;
      color: white;
      border-radius: 20px;
      font-size: 0.7rem;
      padding: 2px 8px;
    }
    
    .dropdown-item {
      padding: 8px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .dropdown-item:active .badge-count {
      background-color: white;
      color: #6a11cb;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <i class="fas fa-music me-2"></i>Mi Música
      </a>
      <div class="d-flex">
        <button class="theme-toggle me-3" id="themeToggle">
          <i class="fas fa-moon"></i>
        </button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              🎧 Musicas <span class="badge bg-light text-dark" id="totalCount"></span>
            </a>
            <ul class="dropdown-menu" id="genreMenu">
              <!-- Géneros se añadirán aquí dinámicamente -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-3">
    <div class="search-container">
      <i class="fas fa-search search-icon"></i>
      <input type="text" id="searchInput" class="form-control" placeholder="Buscar música...">
    </div>
    
    <div class="row row-cols-2 row-cols-md-3 g-3 mt-2" id="audioContainer">
      <!-- Las tarjetas de audio se añadirán aquí -->
    </div>
  </div>

  <div class="footer-player hidden" id="footerPlayer">
    <img src="" class="player-img" id="footerCover" alt="Portada">
    <div class="player-info">
      <p class="player-title" id="footerTitle">...</p>
      <small class="player-genre" id="footerGenre">...</small>
    </div>
    <div class="player-controls">
      <button class="player-btn" id="prevBtn">
        <i class="fas fa-step-backward"></i>
      </button>
      <button class="player-btn play-pause" id="playPauseBtn">
        <i class="fas fa-play"></i>
      </button>
      <button class="player-btn" id="nextBtn">
        <i class="fas fa-step-forward"></i>
      </button>
    </div>
    <div class="player-progress">
      <div class="progress-bar" id="progressBar"></div>
    </div>
    <!-- Audio oculto -->
    <audio id="mainPlayer" style="display:none;"></audio>
  </div>

  <script>
    // Datos de la música
    const musicCollection = [
      {
        id: 'music1',
        title: "Coolio - Gangsta's Paradise",
        genre: 'Hip Hop',
        src: 'assets/musicas/music1.mp3',
        cover: 'assets/music_portadas/music1.png'
      },
      {
        id: 'music2',
        title: 'Fronteamos Porque Podemos',
        genre: 'Reggaetón',
        src: 'assets/musicas/music2.mp3',
        cover: 'assets/music_portadas/music2.png'
      },
      {
        id: 'music3',
        title: 'Skillet - Awake and Alive',
        genre: 'Rock Cristiano',
        src: 'assets/musicas/music3.mp3',
        cover: 'assets/music_portadas/music3.png'
      },
      {
        id: 'music4',
        title: 'Haddaway - What Is Love',
        genre: 'Eurodance',
        src: 'assets/musicas/music4.mp3',
        cover: 'assets/music_portadas/music4.png'
      },
      {
        id: 'music5',
        title: 'The Black Eyed Peas - Pump It',
        genre: 'Pop',
        src: 'assets/musicas/music5.mp3',
        cover: 'assets/music_portadas/music5.png'
      },
      {
        id: 'music6',
        title: "The Black Eyed Peas - Let's Get It Started",
        genre: 'Pop',
        src: 'assets/musicas/music6.mp3',
        cover: 'assets/music_portadas/music6.png'
      },
      {
        id: 'music7',
        title: "Quicksilver Saves Everyone - Sweet Dreams",
        genre: 'Rock Alternativo',
        src: 'assets/musicas/music7.mp3',
        cover: 'assets/music_portadas/music7.png'
      },
      {
        id: 'music8',
        title: "Fall Out Boy - Immortals (Big Hero 6)",
        genre: 'Rock Alternativo',
        src: 'assets/musicas/music8.mp3',
        cover: 'assets/music_portadas/music8.png'
      },
      {
        id: 'music9',
        title: "Imagine Dragons x J.I.D - Enemy",
        genre: 'Hip Hop',
        src: 'assets/musicas/music9.mp3',
        cover: 'assets/music_portadas/music9.png'
      },
      {
        id: 'music10',
        title: "Michael Jackson - Billie Jean",
        genre: 'Pop',
        src: 'assets/musicas/music10.mp3',
        cover: 'assets/music_portadas/music10.png'
      },
      {
        id: 'music11',
        title: "Michael Jackson - They Don't Care About Us",
        genre: 'Pop',
        src: 'assets/musicas/music11.mp3',
        cover: 'assets/music_portadas/music11.png'
      },
      {
        id: 'music12',
        title: "Don Omar - Danza Kuduro ft. Lucenzo",
        genre: 'Urbano Latino',
        src: 'assets/musicas/music12.mp3',
        cover: 'assets/music_portadas/music12.png'
      },
      {
        id: 'music13',
        title: "Don Omar - Taboo",
        genre: 'Urbano Latino',
        src: 'assets/musicas/music13.mp3',
        cover: 'assets/music_portadas/music13.png'
      },
      {
        id: 'music14',
        title: "Jack Harlow - Industry Baby",
        genre: 'Pop',
        src: 'assets/musicas/music14.mp3',
        cover: 'assets/music_portadas/music14.png'
      },
            {
        id: 'music15',
        title: "Ricardo Montaner - La Gloria de Dios",
        genre: 'Religiosa',
        src: 'assets/musicas/music15.mp3',
        cover: 'assets/music_portadas/music15.png'
      },
      {
        id: 'music16',
        title: "SunStroke Project & Olia Tira - Run Away",
        genre: 'Pop',
        src: 'assets/musicas/music16.mp3',
        cover: 'assets/music_portadas/music16.png'
      },
      {
        id: 'music17',
        title: "Stromae - Alors on Danse",
        genre: 'Hip Hop',
        src: 'assets/musicas/music17.mp3',
        cover: 'assets/music_portadas/music17.png'
      },
      {
        id: 'music18',
        title: "Maroon 5 - This Love",
        genre: 'Pop rock',
        src: 'assets/musicas/music18.mp3',
        cover: 'assets/music_portadas/music18.png'
      },
      {
        id: 'music19',
        title: "Time to Say Goodbye (Con Te Partirò)",
        genre: 'Opera',
        src: 'assets/musicas/music19.mp3',
        cover: 'assets/music_portadas/music19.png'
      },
      {
        id: 'music20',
        title: "Bon Jovi - It's My Life",
        genre: 'Rock',
        src: 'assets/musicas/music20.mp3',
        cover: 'assets/music_portadas/music20.png'
      },
      {
        id: 'music21',
        title: "Pitbull - Celebrate",
        genre: 'Pop',
        src: 'assets/musicas/music21.mp3',
        cover: 'assets/music_portadas/music21.png'
      },
      {
        id: 'music22',
        title: "Axel - Todo Vuelve",
        genre: 'Pop',
        src: 'assets/musicas/music22.mp3',
        cover: 'assets/music_portadas/music22.png'
      },
      {
        id: 'music23',
        title: "Olly Murs - Troublemaker ft. Flo Rida",
        genre: 'Pop',
        src: 'assets/musicas/music23.mp3',
        cover: 'assets/music_portadas/music23.png'
      },
      {
        id: 'music24',
        title: "Eminem - Till I Collapse",
        genre: 'Rap',
        src: 'assets/musicas/music24.mp3',
        cover: 'assets/music_portadas/music24.png'
      },
      {
        id: 'music25',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music25.mp3',
        cover: 'assets/music_portadas/music25.png'
      },
      {
        id: 'music26',
        title: "Geoxor - Stardust",
        genre: 'Pop',
        src: 'assets/musicas/music26.mp3',
        cover: 'assets/music_portadas/music26.png'
      },
      {
        id: 'music27',
        title: "Katy Perry - Roar",
        genre: 'Pop',
        src: 'assets/musicas/music27.mp3',
        cover: 'assets/music_portadas/music27.png'
      },
      {
        id: 'music28',
        title: "imase - Night Dancer",
        genre: 'Pop',
        src: 'assets/musicas/music28.mp3',
        cover: 'assets/music_portadas/music28.png'
      },
      {
        id: 'music29',
        title: "Coldplay - Viva La Vida",
        genre: 'Pop',
        src: 'assets/musicas/music29.mp3',
        cover: 'assets/music_portadas/music29.png'
      },
      {
        id: 'music30',
        title: "Sunroof - Anime Mix ",
        genre: 'Pop',
        src: 'assets/musicas/music30.mp3',
        cover: 'assets/music_portadas/music30.png'
      },
      {
        id: 'music31',
        title: "Jack Harlow - Rumors",
        genre: 'Pop',
        src: 'assets/musicas/music31.mp3',
        cover: 'assets/music_portadas/music31.png'
      },
      {
        id: 'music32',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music32.mp3',
        cover: 'assets/music_portadas/music32.png'
      },
      {
        id: 'music33',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music33.mp3',
        cover: 'assets/music_portadas/music33.png'
      },
      {
        id: 'music34',
        title: "Geoxor - Stardust",
        genre: 'Pop',
        src: 'assets/musicas/music34.mp3',
        cover: 'assets/music_portadas/music34.png'
      },
      {
        id: 'music35',
        title: "Katy Perry - Roar",
        genre: 'Pop',
        src: 'assets/musicas/music35.mp3',
        cover: 'assets/music_portadas/music35.png'
      },
      {
        id: 'music36',
        title: "imase - Night Dancer",
        genre: 'Pop',
        src: 'assets/musicas/music36.mp3',
        cover: 'assets/music_portadas/music36.png'
      },
      {
        id: 'music37',
        title: "Coldplay - Viva La Vida",
        genre: 'Pop',
        src: 'assets/musicas/music37.mp3',
        cover: 'assets/music_portadas/music37.png'
      },
      {
        id: 'music38',
        title: "Sunroof - Anime Mix ",
        genre: 'Pop',
        src: 'assets/musicas/music38.mp3',
        cover: 'assets/music_portadas/music38.png'
      },
      {
        id: 'music39',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music39.mp3',
        cover: 'assets/music_portadas/music39.png'
      },
      {
        id: 'music40',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music40.mp3',
        cover: 'assets/music_portadas/music40.png'
      },
      {
        id: 'music41',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music41.mp3',
        cover: 'assets/music_portadas/music41.png'
      },
      {
        id: 'music42',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music42.mp3',
        cover: 'assets/music_portadas/music42.png'
      },
      {
        id: 'music43',
        title: "E.T. Kiss Me",
        genre: 'Pop',
        src: 'assets/musicas/music43.mp3',
        cover: 'assets/music_portadas/music43.png'
      }






    ];

    // Variables globales
    let currentSongIndex = 0;
    let isPlaying = false;

    // Cambiar tema
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      // Cambiar ícono
      const icon = themeToggle.querySelector('i');
      if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
      } else {
        icon.className = 'fas fa-moon';
      }
    });

    // Cargar géneros y contadores
    function loadGenres() {
      const genreMenu = document.getElementById('genreMenu');
      const totalCount = document.getElementById('totalCount');
      
      // Contador total
      totalCount.textContent = musicCollection.length;
      
      // Obtener conteo por género
      const genreCounts = {};
      musicCollection.forEach(song => {
        genreCounts[song.genre] = (genreCounts[song.genre] || 0) + 1;
      });
      
      // Añadir opción para mostrar todos
      const allItem = document.createElement('li');
      allItem.innerHTML = `
        <a class="dropdown-item" href="#" data-genre="todos">
          Todos los géneros
          <span class="badge-count">${musicCollection.length}</span>
        </a>
      `;
      genreMenu.appendChild(allItem);
      
      // Añadir cada género
      Object.keys(genreCounts).sort().forEach(genre => {
        const item = document.createElement('li');
        item.innerHTML = `
          <a class="dropdown-item" href="#" data-genre="${genre.toLowerCase()}">
            ${genre}
            <span class="badge-count">${genreCounts[genre]}</span>
          </a>
        `;
        genreMenu.appendChild(item);
      });
      
      // Añadir eventos de filtrado
      document.querySelectorAll('#genreMenu .dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
          e.preventDefault();
          const genre = this.getAttribute('data-genre');
          filterByGenre(genre);
        });
      });
    }

    // Filtrar por género
    function filterByGenre(genre) {
      document.querySelectorAll('.col').forEach(col => {
        const card = col.querySelector('.audio-card');
        const id = card.getAttribute('data-id');
        const song = musicCollection.find(item => item.id === id);
        
        if (genre === 'todos' || song.genre.toLowerCase() === genre) {
          col.style.display = 'block';
        } else {
          col.style.display = 'none';
        }
      });
    }

    // Crear tarjetas de audio
    function createAudioCards() {
      const container = document.getElementById('audioContainer');
      
      musicCollection.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col fade-in';
        col.style.animationDelay = `${index * 0.1}s`;
        
        const placeholder = 'https://via.placeholder.com/400x300?text=Sin+Portada';
        const coverSrc = item.cover || placeholder;
        
        col.innerHTML = `
          <div class="audio-card" data-id="${item.id}">
            <div class="cover-container">
              <img src="${coverSrc}" class="cover-img" alt="${item.title}">
            </div>
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <div class="text-center">
                <span class="genre">${item.genre}</span>
              </div>
            </div>
          </div>
        `;
        
        container.appendChild(col);
      });
      
      // Añadir eventos
      document.querySelectorAll('.audio-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          const songIndex = musicCollection.findIndex(item => item.id === id);
          if (songIndex !== -1) {
            currentSongIndex = songIndex;
            playCurrentSong();
          }
        });
      });
    }

    // Reproducir la canción actual
    function playCurrentSong() {
      const song = musicCollection[currentSongIndex];
      const player = document.getElementById('mainPlayer');
      const footerPlayer = document.getElementById('footerPlayer');
      const playPauseBtn = document.getElementById('playPauseBtn');
      
      // Actualizar información
      document.getElementById('footerTitle').textContent = song.title;
      document.getElementById('footerGenre').textContent = song.genre;
      document.getElementById('footerCover').src = song.cover || 'https://via.placeholder.com/400x300?text=Sin+Portada';
      
      // Cargar y reproducir
      player.src = song.src;
      player.load();
      player.play();
      
      // Mostrar reproductor y actualizar UI
      footerPlayer.classList.remove('hidden');
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      isPlaying = true;
    }

    // Pausar/Reanudar
    function togglePlayPause() {
      const player = document.getElementById('mainPlayer');
      const playPauseBtn = document.getElementById('playPauseBtn');
      
      if (isPlaying) {
        player.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      } else {
        player.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
      
      isPlaying = !isPlaying;
    }

    // Siguiente canción
    function playNextSong() {
      currentSongIndex = (currentSongIndex + 1) % musicCollection.length;
      playCurrentSong();
    }

    // Canción anterior
    function playPrevSong() {
      currentSongIndex = (currentSongIndex - 1 + musicCollection.length) % musicCollection.length;
      playCurrentSong();
    }

    // Actualizar barra de progreso
    function updateProgress() {
      const player = document.getElementById('mainPlayer');
      const progressBar = document.getElementById('progressBar');
      
      if (player.duration) {
        const percentage = (player.currentTime / player.duration) * 100;
        progressBar.style.width = `${percentage}%`;
      }
    }

    // Buscar canciones
    document.getElementById('searchInput').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      
      document.querySelectorAll('.col').forEach(col => {
        const card = col.querySelector('.audio-card');
        const id = card.getAttribute('data-id');
        const song = musicCollection.find(item => item.id === id);
        
        if (song.title.toLowerCase().includes(query) || song.genre.toLowerCase().includes(query)) {
          col.style.display = 'block';
        } else {
          col.style.display = 'none';
        }
      });
    });

    // Inicializar
    window.addEventListener('DOMContentLoaded', () => {
      // Cargar canciones y géneros
      createAudioCards();
      loadGenres();
      
      // Configurar controles del reproductor
      const playPauseBtn = document.getElementById('playPauseBtn');
      const nextBtn = document.getElementById('nextBtn');
      const prevBtn = document.getElementById('prevBtn');
      const player = document.getElementById('mainPlayer');
      
      playPauseBtn.addEventListener('click', togglePlayPause);
      nextBtn.addEventListener('click', playNextSong);
      prevBtn.addEventListener('click', playPrevSong);
      
      // Actualizar progreso
      player.addEventListener('timeupdate', updateProgress);
      
      // Reproducir siguiente cuando termine
      player.addEventListener('ended', playNextSong);
    });
  </script>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
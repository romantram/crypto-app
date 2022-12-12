<template>
  <nav class="navbar bg-white pt-4" aria-label="Navbar">

    <div class="my-2">
      <i class="bi bi-search search-icon"></i>
      <input type="search" class="form-control search-input" placeholder="Search">
    </div>

    <div class="my-2">
      <button class="navbar-toggler position-relative me-3 nav-icon" type="button">
        <i class="bi bi-bell"></i>
        <span class="position-absolute top-0 start-100 translate-middle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EA4D4D" class="bi bi-circle-fill" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="6"></circle>
          </svg>
        </span>
      </button>

      <button class="navbar-toggler nav-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#Navbar" aria-controls="Navbar">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="Navbar" aria-labelledby="Navbar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="Navbar">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Overview</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Buy/Sell</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Wallets</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Bundles</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Reporting</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Community</a></li>
          <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Link 1</a></li>
              <li><a class="dropdown-item" href="#">Link 2</a></li>
              <li><a class="dropdown-item" href="#">Link 3</a></li>
              <li><a class="dropdown-item" href="#">Link 4</a></li>
              <li><a class="dropdown-item" href="#">Link 5</a></li>
              <li><hr class="dropdown-divider"></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
</template>

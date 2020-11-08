<template>
  <div id="app" class="">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">

          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/portfolio">Portfolio</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/contact">Contact</router-link>

        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p> Checkout the source code on <a href="https://github.com/Falken1998/cp3" target="_blank" style="text-decoration: none; color: black; font-style: bold;">Github</a></p>
      </div>
    </footer>
  </div>
</template>

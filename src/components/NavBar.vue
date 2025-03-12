<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">CoSpace</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active">地圖</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/commit" active-class="active">提交</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// NavBar 組件
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #1976d2;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .navbar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1.5rem;

    .nav-item {
      .nav-link {
        color: white;
        text-decoration: none;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        transition: all 0.2s ease;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.2s ease;
        }

        &:hover, &.active {
          color: rgba(255, 255, 255, 0.9);
          
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    .navbar-container {
      height: 56px;
    }
    
    .navbar-brand {
      font-size: 1.25rem;
    }
    
    .navbar-nav {
      gap: 1rem;
    }
  }
}
</style> 
<template>
  <ul class="sidebar-menu">
    <li class="header">TOOLS</li>
    <router-link tag="li" class="pageLink" to="/">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Dashboard</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/excel">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Excel</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/DataDasarView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">DataDasarView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/konkin">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">konkin</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/publikasiView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">publikasiView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/abmasView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">abmasView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/dosenView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">dosenView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/penelitianView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">penelitianView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/JenisSatkerView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">JenisSatkerView</span>
      </a>
    </router-link>
	<router-link tag="li" class="pageLink" to="/AspekView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">AspekView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/MasterIndikatorView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">MasterIndikatorView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/PeriodeView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">PeriodeView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/MasterIndikatorFullView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">MasterIndikatorFullView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/Indikator_PeriodeView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_PeriodeView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/SatuanKerjaView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">SatuanKerjaView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/Capaian_UnitView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Capaian_UnitView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/Indikator_SatuanKerjaView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_SatuanKerjaView</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/Indikator_SatuanKerja_LogView">
      <a>
        <i class="fa fa-desktop"></i>
        <span class="page">Indikator_SatuanKerja_LogView</span>
      </a>
    </router-link>

    <li class="header">ME</li>
    <router-link tag="li" class="pageLink" to="/tasks">
      <a>
        <i class="fa fa-tasks"></i>
        <span class="page">Tasks</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/setting">
      <a>
        <i class="fa fa-cog"></i>
        <span class="page">Settings</span>
      </a>
    </router-link>
    <li class="treeview">
      <a href="#">
        <i class="fa fa-folder-o"></i>
        <span class="treeview-title">Files</span>
        <span class="pull-right-container pull-right">
          <i class="fa fa-angle-left fa-fw"></i>
        </span>
      </a>
      <ul class="treeview-menu">
        <li>
          <a href="#">
            <i class="fa fa-file-word-o"></i> Item 1
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-picture-o"></i> Item 2
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i> Item 3
          </a>
        </li>
      </ul>
    </li>

    <li class="header">LOGS</li>
    <router-link tag="li" class="pageLink" to="/access">
      <a>
        <i class="fa fa-book"></i>
        <span class="page">Access</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/server">
      <a>
        <i class="fa fa-hdd-o"></i>
        <span class="page">Server</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/repos">
      <a>
        <i class="fa fa-heart"></i>
        <span class="page">Repos</span>
        <small class="label pull-right bg-green">AJAX</small>
      </a>
    </router-link>

    <li class="header">PAGES</li>
    <router-link tag="li" class="pageLink" to="/login">
      <a>
        <i class="fa fa-circle-o text-yellow"></i>
        <span class="page"> Login</span>
      </a>
    </router-link>
    <router-link tag="li" class="pageLink" to="/404">
      <a>
        <i class="fa fa-circle-o text-red"></i>
        <span class="page"> 404</span>
      </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  name: 'SidebarMenu'
}
</script>
<style>
/* override default */
.sidebar-menu > li > a {
  padding: 12px 15px 12px 15px;
}

.sidebar-menu li.active > a > .fa-angle-left,
.sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
  animation-name: rotate;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
}

.treeview-title {
  z-index: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-90deg);
  }
}
</style>

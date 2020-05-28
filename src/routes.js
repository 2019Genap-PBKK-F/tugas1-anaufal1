import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/Dashboard.vue'
import ExcelView from './components/views/Excel.vue'

import TasksView from './components/views/Tasks.vue'
import SettingView from './components/views/Setting.vue'
import AccessView from './components/views/Access.vue'
import ServerView from './components/views/Server.vue'
import ReposView from './components/views/Repos.vue'

import AspekView from './components/views/AspekView.vue'
import DataDasarView from './components/views/DataDasarView.vue'

import JenisSatkerView from './components/views/JenisSatkerView.vue'
import MasterIndikatorView from './components/views/MasterIndikatorView.vue'
import PeriodeView from './components/views/PeriodeView.vue'
import IndikatorPeriodeView from './components/views/Indikator_PeriodeView.vue'
import SatuanKerjaView from './components/views/SatuanKerjaView.vue'
import CapaianUnitView from './components/views/Capaian_UnitView.vue'
import IndikatorSatuanKerjaView from './components/views/Indikator_SatuanKerjaView.vue'
import IndikatorSatuanKerjaLogView from './components/views/Indikator_SatuanKerja_LogView.vue'
import MasterIndikatorFullView from './components/views/MasterIndikatorFullView.vue'
import konkin from './components/views/konkin.vue'
import publikasiView from './components/views/publikasiView.vue'
import abmasView from './components/views/abmasView.vue'
import dosenView from './components/views/dosenView.vue'
import penelitianView from './components/views/penelitianView.vue'
// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {description: 'Overview of environment'}
      }, {
        path: 'excel',
        component: ExcelView,
        name: 'Excel',
        meta: {description: 'Excel in CoPilot'}
      }, {
        path: 'DataDasarView',
        component: DataDasarView,
        name: 'DataDasarView',
        meta: {description: 'DataDasarView in CoPilot'}
      }, {
        path: 'publikasiView',
        component: publikasiView,
        name: 'publikasiView',
        meta: {description: 'publikasiView in CoPilot'}
      }, {
        path: 'abmasView',
        component: abmasView,
        name: 'abmasView',
        meta: {description: 'abmasView in CoPilot'}
      }, {
        path: 'konkin',
        component: konkin,
        name: 'konkin',
        meta: {description: 'konkin in CoPilot'}
      }, {
        path: 'dosenView',
        component: dosenView,
        name: 'dosenView',
        meta: {description: 'dosenView in CoPilot'}
      }, {
        path: 'penelitianView',
        component: penelitianView,
        name: 'penelitianView',
        meta: {description: 'penelitianView in CoPilot'}
      }, {
        path: 'AspekView',
        component: AspekView,
        name: 'AspekView',
        meta: {description: 'AspekView in CoPilot'}
      }, {
        path: 'MasterIndikatorFullView',
        component: MasterIndikatorFullView,
        name: 'MasterIndikatorFullView',
        meta: {description: 'MasterIndikatorFullView in CoPilot'}
      }, {
        path: 'JenisSatkerView',
        component: JenisSatkerView,
        name: 'JenisSatkerView',
        meta: {description: 'JenisSatkerView in CoPilot'}
      }, {
        path: 'MasterIndikatorView',
        component: MasterIndikatorView,
        name: 'MasterIndikatorView',
        meta: {description: 'MasterIndikatorView in CoPilot'}
      }, {
        path: 'PeriodeView',
        component: PeriodeView,
        name: 'PeriodeView',
        meta: {description: 'PeriodeView in CoPilot'}
      }, {
        path: 'Indikator_PeriodeView',
        component: IndikatorPeriodeView,
        name: 'Indikator_PeriodeView',
        meta: {description: 'Indikator_PeriodeView in CoPilot'}
      }, {
        path: 'SatuanKerjaView',
        component: SatuanKerjaView,
        name: 'SatuanKerjaView',
        meta: {description: 'SatuanKerjaView in CoPilot'}
      }, {
        path: 'Capaian_UnitView',
        component: CapaianUnitView,
        name: 'Capaian_UnitView',
        meta: {description: 'Capaian_UnitView in CoPilot'}
      }, {
        path: 'Indikator_SatuanKerjaView',
        component: IndikatorSatuanKerjaView,
        name: 'Indikator_SatuanKerjaView',
        meta: {description: 'Indikator_SatuanKerjaView in CoPilot'}
      }, {
        path: 'Indikator_SatuanKerja_LogView',
        component: IndikatorSatuanKerjaLogView,
        name: 'Indikator_SatuanKerja_LogView',
        meta: {description: 'Indikator_SatuanKerja_LogView in CoPilot'}
      }, {
        path: 'tasks',
        component: TasksView,
        name: 'Tasks',
        meta: {description: 'Tasks page in the form of a timeline'}
      }, {
        path: 'setting',
        component: SettingView,
        name: 'Settings',
        meta: {description: 'User settings page'}
      }, {
        path: 'access',
        component: AccessView,
        name: 'Access',
        meta: {description: 'Example of using maps'}
      }, {
        path: 'server',
        component: ServerView,
        name: 'Servers',
        meta: {description: 'List of our servers', requiresAuth: true}
      }, {
        path: 'repos',
        component: ReposView,
        name: 'Repository',
        meta: {description: 'List of popular javascript repos'}
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes

import { createApp } from 'vue';
import router from "./router/index";
import './assets/css/style.css';
import App from './App.vue';
import Default from './layouts/default/Default.vue';

const app = createApp(App);

app.component('LayoutDefault', Default);
app.use(router);

app.mount('#app');

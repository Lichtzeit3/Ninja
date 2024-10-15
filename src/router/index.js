import { compile } from "vue";
import Home from "../views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

// path → component
const routes = [
	//   { path: '/', component: () => import('@/pages/HomeView.vue') },
	//   { path: '/about', component: () => import('@/pages/AboutView.vue') }
	{
		path: "/home",
		name: "Home",
		component: Home,
		meta: {
			layout: "default",
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/checkOut.vue"),
		meta: {
			layout: "default",
		},
	},
	{
		path: "/service",
		name: "service",
		component: () => import("../views/Service.vue"),
		meta: {
			layout: "default",
		},
	},
	{
		path: "/pricing",
		name: "pricing",
		component: () => import("../views/Pricing.vue"),
		meta: {
			layout: "default",
		},
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/Contact.vue"),
		meta: {
			layout: "default",
		},
	},
];

// 建立 router
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL), // vite 設定檔中的 base: /tid101/g1/
	routes: routes,
});
router.afterEach((to, from) => {
	console.log("scrolled to Top");
	let html_el = document.getElementsByTagName("html")[0];
	html_el.scrollTo({
		top: 0,
		behavior: "smooth",
	});
	// html_el.scrollTop = 0;
});

// 匯出 router
export default router;

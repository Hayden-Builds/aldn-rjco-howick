const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/about",
    exact: true,
    component: "About",
  },
  {
    path: "/services",
    exact: true,
    component: "Services",
  },
  {
    path: "/contact",
    exact: true,
    component: "Contact",
  },
];

export default routes;

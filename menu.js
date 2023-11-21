const services = document.querySelector("#services");
const nosotros = document.querySelector("#nosotros");
const app = document.querySelector("#app");
const planes = document.querySelector("#planes");
const contacto = document.querySelector("#contactanos");

/* Menu Servicios */
services.addEventListener("click", (s) => {
    s.preventDefault();

    const sectionS = document.querySelector(".services");
    sectionS.scrollIntoView({ behavior: "smooth" });
});

/* Menu nosotros */
nosotros.addEventListener("click", (n) => {
    n.preventDefault();

    const sectionN = document.querySelector(".nosotros");
    sectionN.scrollIntoView({ behavior: "smooth" });
});

/* Menu App */
app.addEventListener("click", (a) => {
    a.preventDefault();

    const sectionA = document.querySelector(".app");
    sectionA.scrollIntoView({ behavior: "smooth" });
});

/* Menu Planes */
planes.addEventListener("click", (pl) => {
    pl.preventDefault();

    const sectionPl = document.querySelector(".planes");
    sectionPl.scrollIntoView({ behavior: "smooth" });
});

/* Menu Contacto */
contactanos.addEventListener("click", (c) => {
    c.preventDefault();

    const sectionC = document.querySelector(".contactanos");
    sectionC.scrollIntoView({ behavior: "smooth" });
});

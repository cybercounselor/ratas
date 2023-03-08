/* empty css                             */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderSlot, f as renderHead, s as spreadAttributes } from '../astro.7e6f8618.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                            */import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import Hamburger from 'hamburger-react';
/* empty css                          */
function Button() {
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email !== "") {
      toast.dark("¡Felicidades, te has suscrito!");
      setSubscribe(true);
    } else {
      toast.error("Por favor, ingresa un correo electrónico válido");
    }
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col",
      children: [/* @__PURE__ */ jsx("input", {
        class: "text-black rounded-lg p-3 m-2 form-submit-on-enter",
        type: "email",
        placeholder: "Ingresa tu correo",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            handleSubscribe();
          }
        }
      }), /* @__PURE__ */ jsx("button", {
        class: "font-semibold bg-rose-500 m-2 rounded-lg p-3",
        onClick: handleSubscribe,
        children: subscribe ? "Ya estás suscrito" : "Suscribirse"
      }), /* @__PURE__ */ jsx(ToastContainer, {})]
    })
  });
}
__astro_tag_component__(Button, "@astrojs/react");

const $$Astro$e = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-zinc-900 py-10 gap-4 mt-4">
    
    <div class="container mx-auto flex flex-col justify-evenly md:flex-row text-center md:text-left gap-4 ">
        <div>
            ${renderComponent($$result, "Button", Button, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Bancita/Documents/Astrolanding/src/components/subscribebtn", "client:component-export": "default" })}
        </div>
        <div>
            
            <h4 class="font-bold text-xl">Mapa del sitio</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/places">Rat Friendly</a></p>
            <p><a href="/vets">Salud de las ratas</a></p>
            <p><a href="#">Foro</a></p>
            
        </div>
        <div>
            <h4 class="font-bold text-xl">Redes Sociales</h4>
            <p><a href="https://odysee.com/@Roerto:8">Odysee</a></p>
            <p><a href="https://instagram.com/ratfriendlyoficial">Instagram</a></p>
            <p><a href="https://t.me/ratfriendly">Telegram</a></p>
        </div>
        <div>
            <h4 class="font-bold text-xl">Sitios Amigos</h4>
            <p><a href="https://cybercounselor.dev">Cybercounselor</a></p>
            <p><a href="#">Disponible</a></p>
            <p><a href="#">Disponible</a></p>
        </div>
        
        
</div>
<p class="text-center m-3">©2023 Cybercounselor</p>
</footer>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/Footer.astro");

const $$Astro$d = createAstro();
const $$Scrollup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Scrollup;
  return renderTemplate`<!-- button -->${maybeRenderHead($$result)}<button x-data="topBtn" @click="scrolltoTop" id="topButton" class="fixed z-10 hidden p-3 bg-gray-100 rounded-full shadow-md bottom-10 right-10 animate-bounce">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" stroke="#f43f5e">
            </path>
        </svg>
    </button>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/Scrollup.astro");

const $$Astro$c = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Navbar;
  const items = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Rat Friendly",
      path: "/places"
    },
    {
      title: "Blog",
      path: "/index"
    },
    {
      title: "Salidas",
      path: "/vets"
    },
    {
      title: "Veterinarias",
      path: "/vets"
    },
    {
      title: "Quienes somos",
      path: "/#aboutus"
    },
    {
      title: "Contacto",
      path: "/contact"
    }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<div class=" bg-zinc-900 text-white  astro-5BLMO7YK">
  <div class=" header p-5 m-2 font-semibold  astro-5BLMO7YK">RAT FRIENDLY.ORG</div>
  
      <nav class="astro-5BLMO7YK">
        <input type="checkbox" id="check" class="astro-5BLMO7YK">
        <label for="check" class="bar-btn astro-5BLMO7YK">
          ${renderComponent($$result, "Hamburger", Hamburger, { "class": "astro-5BLMO7YK" })}

        </label>
        
        <ul class="nav-menu astro-5BLMO7YK">
          ${items.map((item, index) => renderTemplate`<li${addAttribute((index === 0 ? "active bg-rose-400" : "") + " astro-5BLMO7YK", "class")}>
              <a class="font-semibold uppercase text-base p-2 rounded-sm astro-5BLMO7YK"${addAttribute(item.path, "href")}>
                ${item.title}
              </a>
            </li>`)}
        </ul>
        
      </nav>
    </div>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/Navbar.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$b = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"><\/script>\n		<meta name="generator"', ">\n		<title>", "</title>\n	", "</head>\n	<body>\n		", '\n		<main class="mx-auto container md:pt-10">\n			', "\n			", "\n		</main>\n		", "\n	</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Scrollup", $$Scrollup, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Bancita/Documents/Astrolanding/src/layouts/Layout.astro");

const features = [
	{
		title: "LISTA DE LUGARES RAT FRIENDLY",
		description: "Donde ir de paseo con tus ratas.",
		image: "images/certificado.png",
		link: "/places"
	},
	{
		title: "SALIDAS",
		description: "Organizamos salidas con ratas, sumate con las tuyas.",
		image: "images/salidas.png",
		link: "https://t.me/ratfriendly"
	}
];

const $$Astro$a = createAstro();
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Features;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="text-center m-10 text-5xl font-bold pd-2 text-rose-400 astro-D4BM4RBP">PASEANDO CON RATAS</h1>

<div class="grid md:grid-cols-2 gap-5 p-4 astro-D4BM4RBP">
    ${features.map((feature) => renderTemplate`<div class="bg-zinc-700/100 rounded-xl astro-D4BM4RBP">
                <h2 class="text-2xl text-center font-bold my-4 astro-D4BM4RBP">${feature.title}</h2>    
                    <p class="my-4 text-center astro-D4BM4RBP">${feature.description}</p>
                    <a${addAttribute(feature.link, "href")} class="astro-D4BM4RBP"><img${addAttribute(feature.image, "src")} class="giro w-64  m-auto rounded-full max-h-96 astro-D4BM4RBP"></a>
            </div>`)}
</div>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/Features.astro");

const $$Astro$9 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead($$result)}<header class="bg-zinc-900 flex flex-col md:flex-row text/justify p-20 gap-3 rounded-xl">
    <div class="order-last md:order-1">
        <h1 class="text-5xl font-bold pd-2 text-rose-400">RAT FRIENDLY</h1>
        <p class=" my-4 text-2xl">El sitio para los humanos que tienen ratas</p>

       
    </div>
    <img src="images/roertito.jpg" alt="ratas" class="w-96 order-first md:order-2 min-h-fit rounded-full hover:">
</header>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/Hero.astro");

const $$Astro$8 = createAstro();
const $$More = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$More;
  return renderTemplate`${maybeRenderHead($$result)}<section class="flex flex-col bg-rose-300/100  md:flex-row md:p-15 py-10 gap-y-10 astro-ERMOILDN">
    <div class="flex-1 grid grid-cols-2 gap-5 astro-ERMOILDN">
             <a href="/vets" class="btn text-center mix-blend-overlay hover:mix-blend-normal astro-ERMOILDN">
            <img src="../images/cuidado.png" class="giro w-40 m-auto rounded-full astro-ERMOILDN">
            <p class="mt-4 font-bold astro-ERMOILDN">SALUD Y CUIDADO</p>
          </a>
          <a href="/vets" class="text-center mix-blend-overlay hover:mix-blend-normal astro-ERMOILDN"><img src="../images/veterianaria_de_ratas.jpg" class="giro w-40 m-auto rounded-full astro-ERMOILDN"> <p class="mt-4 font-bold astro-ERMOILDN">VETERINARIAS</p></a>
          <a href="/tienda" class="text-center mix-blend-overlay hover:mix-blend-normal astro-ERMOILDN">
            <img src="../images/productos.png" class="giro w-40 m-auto rounded-full astro-ERMOILDN">
            <p class="mt-4 font-bold astro-ERMOILDN">TIENDA</p>
          </a>
          <a href="/adopciones" class="text-center mix-blend-overlay hover:mix-blend-normal astro-ERMOILDN">
          <img src="../images/adopciones.png" class="giro w-40 m-auto rounded-full astro-ERMOILDN">
          <p class="mt-4 font-bold astro-ERMOILDN">ADOPCIONES</p>
          </a>
    </div>

    <div class="flex flex-1 flex-col gap-y-4 text-center self-center  astro-ERMOILDN">
      
        <h2 class="text-5xl font-bold  astro-ERMOILDN">TODO SOBRE RATAS</h2>
        <button class="bg-sky-500/75 m-4 px-3 py-4 hover:bg-gradient-to-b from-cyan-300 to-red-300 font-bold rounded-xl astro-ERMOILDN">
            +Artículos
            </button>
          
    </div>
    
</section>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/More.astro");

const projects = [
	{
		title: "Cerfificar mi negocio",
		description: "Envia un mensaje con los datos de tu negocio, y Roerto se presentará con sus amigos. Si todo es rico y nadie se asusta, tu negocio será incluído en nuestra lista. Dejarémos un sticker del certificado y compartiremos en nuestras redes toda la experiencia. Luego seguiremos compartiendo  cada vez que otra rata amigable visite tu negocio y nos etiquete. Si te gusta la idea, contactanos para coordinar una visita.",
		image: "images/certificado.png",
		button: "CERTIFICAR AHORA",
		btlink: "/contact"
	},
	{
		title: "Nombres para ratas",
		description: "No le pongas Ratatouille!",
		lista: [
			"\nRatbril,\n",
			"\nRatdonai,\n",
			"\nRoerta,\n",
			"\nRoerto,\n",
			"\nRatadria,\n",
			"\nRatiel,\n",
			"\nRatael,\n",
			"\nFlorrata,\n",
			"\nJosé Rata,\n",
			"\nRatalupe,\n",
			"\nIrata,\n",
			"\nJuan Rata,\n",
			"\nRatbella,\n",
			"\nLaurato,\n",
			"\nLe Rat,\n",
			"\nMarat,\n",
			"\nRocky Ratboa,\n",
			"\nRatalia,\n",
			"\nRatmelia,\n",
			"\nRatfael,\n",
			"\nRatmiro,\n",
			"\nRatul,\n",
			"\nRatquel,\n",
			"\nRóer,\n",
			"\nSeñor Rata,\n",
			"\nSeñora Rata,\n",
			"\nRatiana,\n",
			"\nRatuccino,\n",
			"\nRatiago,\n",
			"\nMoonrat,\n",
			"\nRat Nicholson,\n",
			"\nRatvlimir,\n",
			"\nRóert DeNiro,\n",
			"\nRatczinky,\n El Unarata,\n",
			"\nJulian Ratssange,\n",
			"\nAlan Ratts,\n",
			"\nRatvier,\n",
			"\nRatrix,\n",
			"\nRatsterdam,\n",
			"\nRatallica,\n",
			"\nRatburgo,\n",
			"\nRatzilla,\n",
			"\nRatsobia,\n",
			"\nRatana,\n",
			"\nRat Daniels,\n",
			"\nRat Max,\n",
			"\nRatmanifov,\n",
			"\nRathoben,\n",
			"\nRat Pitt,\n",
			"\nRatlantida,\n",
			"\nRatenas,\n",
			"\nRatanito,\n",
			"\nMc Rata,\n",
			"\nMad Rat,\n",
			"\nRatnark,\n",
			"\nRatanarock,\n",
			"\nRatferatu,\n",
			"\nRatcula,\n",
			"\nRat Lebowsky,\n",
			"\nRatosofía,\n",
			"\nRataia,\n",
			"\nRatucho,\n",
			"\nRatdolf\n",
			"\nRatricia,\n",
			"\nRatilda.\n"
		],
		image: "images/nombresParaRatas.jfif",
		button: "AGREGA EL TUYO"
	},
	{
		title: "Cybercounselor",
		description: "Este sitio fue desarrollado por Cybercounselor, su página está llena de ratas cyberpunks. Visítalo.",
		image: "images/rat.jfif",
		button: "\n+\nRATAS\n!!! ",
		btlink: "https://cybercounselor.dev"
	}
];

const $$Astro$7 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead($$result)}<h2 class="text-5xl font-bold my-5"></h2>

${projects.map((project) => renderTemplate`<div class="flex flex-col mb-2 text-center md:text-left md:flex-row">
            <div class="flex-1 p-2 ">
                <h2 class="font-bold text-2xl my-5 text-rose-400">
                    ${project.title}</h2>
                <p class="my-1">${project.description}</p>
                <p>${project.lista}</p>
                
            </div>
            
            <div class="flex-1 p-2">
                <img${addAttribute(project.image, "src")} class="w-72 m-auto rounded-full border-2 shadow-xl border-rose-300/100 max-h-72">
                 
            </div>
                <a${addAttribute(project.btlink, "href")} class="bg-sky-400/75 hover:bg-gradient-to-b from-cyan-300 to-red-300"> <button class="font-semibold w-24 min-w-full hover:decoration-4 "> ${project.button} </button></a>
        </div>`)}`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/Projects.astro");

const $$Astro$6 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead($$result)}<section id="aboutus" class="bg-zinc-900 p-20 rounded-xl my-4">
    <h2 class=" text-5xl font-bold my-5 text-rose-400"> Quienes somos</h2>
    <p class="text white-700">Somos una familia de humanos que tienen ratas como animales de compañía desde hace 12 años. Siempre en pares, o más, para que no se sientan solas. En el 2018 cerramos nuestra página de Facebook "Ratitas Punks" y nos mudamos a nuestro propio sitio. A lo largo de los años, fuimos conociendo a las ratas, sus conductas, su empatía, la personalidad de cada una, los gestos, etc. Nuestras ratas en particular, conviven con un señor gato con el que se llevan muy bien.</p>
</section>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/About.astro");

const $$Astro$5 = createAstro();
const $$Rata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Rata;
  return renderTemplate`${maybeRenderHead($$result)}<div class="wheel-and-rat astro-CPP4PN65" role="img" aria-label="rata caminando">
	
	<div class="rat astro-CPP4PN65">
		<div class="rat__body astro-CPP4PN65">
			<div class="rat__head astro-CPP4PN65">
				<div class="rat__ear astro-CPP4PN65"></div>
				<div class="rat__ojo astro-CPP4PN65"></div>
				<div class="rat__nariz astro-CPP4PN65"></div>
			</div>
			<div class="rat__limb rat__limb--fr astro-CPP4PN65"></div>
			<div class="rat__limb rat__limb--fl astro-CPP4PN65"></div>
			<div class="rat__limb rat__limb--br astro-CPP4PN65"></div>
			<div class="rat__limb rat__limb--bl astro-CPP4PN65"></div>
			<div class="rat__tail astro-CPP4PN65"></div>
		</div>
	</div>
	<div class="spoke astro-CPP4PN65"></div>
  <div class="rat returning astro-CPP4PN65"></div>

</div>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/landing/Rata.astro");

const $$Astro$4 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rat Friendly" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Rata", $$Rata, {})}${renderComponent($$result2, "More", $$More, {})}${renderComponent($$result2, "Features", $$Features, {})}${renderComponent($$result2, "About", $$About, {})}${renderComponent($$result2, "Projects", $$Projects, {})}` })}`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/pages/index.astro");

const $$file$3 = "C:/Users/Bancita/Documents/Astrolanding/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contactar a Roerto" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="grid grid-cols-1 sm:grid-cols-2 sm:w-full">
        <div class="w-full max-w-md sm:w-auto  m-4"><img class="object-cover rounded-xl" src="../images/correo.png" alt="certificado rat friendly"></div>
    <!-- fomulario de contacto -->
<form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-4">
        <label class="block uppercase tracking-wide text-rose-400 text-xs font-bold mb-2" for="grid-password">
          Nombre
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="text">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-4">
        <label class="block uppercase tracking-wide text-rose-400 text-xs font-bold mb-2" for="grid-password">
          E-mail
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-4">
        <label class="block uppercase tracking-wide text-rose-400 text-xs font-bold mb-2" for="grid-password">
          Mensaje
        </label>
        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button class="bg-sky-500/75 px-3 py-3 hover:bg-red-300 font-bold rounded-xl" type="button">
          ENVIAR
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>
</div>` })}`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/pages/contact.astro");

const $$file$2 = "C:/Users/Bancita/Documents/Astrolanding/src/pages/contact.astro";
const $$url$2 = "/contact";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const places = [
	{
		nombre: "The embers-Urquiza",
		horarios: "9:00-00:00",
		resena: "Tiene mesitas afuera con protectores plasticos que reducen el viento. Ya saben lo mucho que las ratas odian las corrientes de aire. Las meseras y meseros son muy buena onda, con nosotros y con las ratas.",
		direccion: "Mendoza 5200, CABA",
		google_maps: "https://goo.gl/maps/qTEeZZ4CZDaFbHoR9",
		fotos: [
			"../../images/location-pin.png",
			"https://via.placeholder.com/300x200"
		],
		sitio_web: "http://www.theembersrestaurant.com.ar/"
	},
	{
		nombre: "Liquiliqui",
		horarios: "Lunes a Sábado, 7am - 8pm",
		resena: "Un lugar tranquilo y acogedor para disfrutar de un buen café. Respetuosos con las ratas incluso aunque les dan un poquito de impresión.Cuando vamos sin ellas, preguntan amistosamente, son muy simpáticos.",
		direccion: "Tronador 602, CABA",
		google_maps: "https://goo.gl/maps/SWrALCXXB3MDdQKA8",
		fotos: [
			"../../images/location-pin.png",
			"https://via.placeholder.com/300x200"
		],
		sitio_web: "https://www.instagram.com/liquiliqui_ba/"
	},
	{
		nombre: "Calmo",
		horarios: "7am - 8pm",
		resena: "Uno de los pocos lugares donde todo el staff se acerca a saludar a las ratas. Un aplauso para recusos humanos!. El lugar es muy lindo, la decoración es muy Fancy rats. En la comida siempre valoramos las opciones veganas y celíacas, quisísimo.",
		direccion: "Av. de los Incas 3909, CABA",
		google_maps: "https://goo.gl/maps/w35V5TCkxQvhumc67",
		fotos: [
			"../../images/location-pin.png",
			"../../images/saunarat.jfif"
		],
		sitio_web: "https://ejemplo.com/cafe-del-centro"
	}
];

const $$Astro$2 = createAstro();
const $$Places = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Places;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Rat Friendly", "class": "astro-AKA2TEQX" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="bg-red-400  grid grid-cols-1  sm:grid-cols-2 m-0 astro-AKA2TEQX">
      <img class="h-64 w-auto object-cover rounded-full m-5  astro-AKA2TEQX" src="images/certificado.png" alt="certificado rat friendly">
  <div class="my-0 astro-AKA2TEQX">
      <p class="h-auto w-auto font-semibold p-5 astro-AKA2TEQX">La certificación Rat Friendly nació de nuestra experiencia de salir a pasear con nuestras ratas. Afortunadamente, la mayoría de los lugares son respetuosos, especialmente después de comprobar que nuestras ratas no son nada parecidas a las que se ven en la ficción. Las personas se sorprenden al descubrir que son cariñosas, tranquilas y hermosas.</p>
    
      <p class="h-auto w-auto font-semibold p-5 astro-AKA2TEQX">Sin embargo, todavía hay prejuicios y maltratos hacia las ratas de compañía, y  no sabemos dónde encontraremos este tipo de situaciones. Por lo tanto, inspirados en el ya conocido "Pet Friendly", y dado que esta categoría solo incluye a los perros, consideramos necesario crear una certificación Rat Friendly.</p>
    
      <p class="h-auto w-auto font-semibold p-5 astro-AKA2TEQX">Queremos incluir también a hambsters, cobayos y hurones, que aunque no son ratas, son igualmente bienvenidos. 
      </p>
      <button class="bg-sky-500/75 m-4 px-3 py-2 font-bold rounded-xl astro-AKA2TEQX">Certificar mi negocio</button>
    </div>
  </div><h1 class="font-bold ml-2 text-2xl text-left p-5 text-rose-400 astro-AKA2TEQX">LUGARES CERTIFICADOS RAT FRIENDLY</h1><div class=" grid grid-cols-1  sm:grid-cols-2 m-0 astro-AKA2TEQX"> <!--este div es todo el coso las 2 columnas -->
      

      <div class="astro-AKA2TEQX"> <!--Este div es la columna de los cafes -->
      <ul class="space-y-8 mt-10 p-4 astro-AKA2TEQX">
        ${places.map((place) => {
    return renderTemplate`<li${spreadAttributes({ key: place.nombre })} class="flex space-x-5 astro-AKA2TEQX">
              <div class="flex-shrink-0 astro-AKA2TEQX">
                  <img${addAttribute(place.fotos[0], "src")}${addAttribute("Foto de " + place.nombre, "alt")} class="h-16 w-16 object-cover rounded-full astro-AKA2TEQX">
                  </div>
                      <div class="flex-1 astro-AKA2TEQX">
                      <div class="font-bold text-xl astro-AKA2TEQX">${place.nombre}</div>
                      <div class="text-gray-500 mb-1 astro-AKA2TEQX">${place.horarios}</div>
                      <div class="text-gray-500 mb-1 astro-AKA2TEQX">${place.direccion} <a${addAttribute(place.google_maps, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 astro-AKA2TEQX">Google Maps</a></div>
                      <div class="text-gray-300 mb-4 astro-AKA2TEQX">${place.resena}
                      </div>
                  <div class="flex space-x-4 mb-4 astro-AKA2TEQX">
                      <img${addAttribute(place.fotos[1], "src")}${addAttribute("Foto de " + place.nombre, "alt")} class="h-48 w-48 object-cover rounded astro-AKA2TEQX">
                      </div> 
                      <div class="astro-AKA2TEQX">
                      <a${addAttribute(place.sitio_web, "href")} target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 astro-AKA2TEQX">sitio web</a>
                      </div>
                      </div>
                      </li>`;
  })}
</ul>
</div>
  <div class="grid grid-rows-3 grid-cols-1  astro-AKA2TEQX"> <!-- este div es la columna derecha-->
          <div class="astro-AKA2TEQX"><img class="h-screen w-full object-cover astro-AKA2TEQX" src="../images/heladeria.jpg" alt="rata comiendo helado"></div>
        
          <div class="astro-AKA2TEQX"><video class="h-screen w-full object-cover astro-AKA2TEQX" src="../images/rata_en_starbucks.mp4" muted autoplay></video></div>
  
          <div class="astro-AKA2TEQX"><img src="../images/helados.jpg" alt="" class="astro-AKA2TEQX"></div>
  </div>
</div><div class="bg-zinc-900 text-center rounded-lg p-3 m-3 astro-AKA2TEQX">
            <div class="astro-AKA2TEQX"> 
              <p class="astro-AKA2TEQX">Si deseas unirte a la certificación de lugares en tu ciudad o barrio, envía un mensaje a <a href="mailto:rat@ratfriendly.org" class="astro-AKA2TEQX">rat@ratfriendly.org</a></p>
            </div>
        </div>` })}`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/pages/places.astro");

const $$file$1 = "C:/Users/Bancita/Documents/Astrolanding/src/pages/places.astro";
const $$url$1 = "/places";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Places,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { href, title, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="link-card astro-DOHJNAO5">
	<a${addAttribute(href, "href")} class="astro-DOHJNAO5">
		<h2 class="astro-DOHJNAO5">
			${title}
			<span class="astro-DOHJNAO5">&rarr;</span>
		</h2>
		<p class="astro-DOHJNAO5">
			${body}
		</p>
	</a>
</li>`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/components/Card.astro");

const $$Astro = createAstro();
const $$Vets = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Vets;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "La salud de las ratas", "class": "astro-V6VAVLSQ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="mb-4 ml-3 font-bold astro-V6VAVLSQ">LA SALUD DE LAS RATAS</h1><div class="grid grid-cols-1 sm:grid-cols-2 sm:w-full relative astro-V6VAVLSQ">
    <div class="grid grid-cols-1 w-5/6 mr-5 ml-2 gap-3 astro-V6VAVLSQ">
      <h2 class="ml-3 astro-V6VAVLSQ">Veterinarias que atienden ratas en Buenos Aires</h2>
      ${renderComponent($$result2, "Card", $$Card, { "title": "Veterinaria Panda", "body": "fddgdgfdg", "href": "#", "class": "astro-V6VAVLSQ" })}
      ${renderComponent($$result2, "Card", $$Card, { "title": "Dra Celeste", "body": "fddgdgfdg", "href": "#", "class": "astro-V6VAVLSQ" })}
      ${renderComponent($$result2, "Card", $$Card, { "title": "DISPONIBLE", "body": "Para aparecer envie un correo", "href": "#", "class": "astro-V6VAVLSQ" })}
      ${renderComponent($$result2, "Card", $$Card, { "title": "DISPONIBLE", "body": "Para aparecer envie un correo", "href": "#", "class": "astro-V6VAVLSQ" })}
    </div>

    <div class="background-image my-4 ml-4 relative astro-V6VAVLSQ">
      <p class="py-4 bg-zinc-500/60 px-5 w-full text-center absolute bottom-0 astro-V6VAVLSQ">
        Unite para conocer a otras personas que tienen ratas<button class="bg-sky-500/75 px-5 py-2 hover:bg-gradient-to-b from-cyan-300 to-red-300 font-bold rounded-xl w-full astro-V6VAVLSQ">
          FORO
        </button>
      </p>
    </div>

    <div class="m-6 ml-2 p-4 rounded-xl border-4 astro-V6VAVLSQ">
      <h2 class="my-2 ml-3 font-bold astro-V6VAVLSQ">
        Que hacer hasta llegar a la veterinaria
      </h2>
      <ul class="list-disc list-inside astro-V6VAVLSQ">
        <li class="m-2 astro-V6VAVLSQ">
          Mantene a la rata en un lugar donde se sienta segura, una caja pequena
          con agujeritos para respirar estara bien. Pon un trapito si hace frio.
        </li>
        <li class="astro-V6VAVLSQ">
          No muevas mucho la caja ni hagas ruidos fuertes. Tienen buen oido y
          reflejos, se ponen nerviosas con facilidad.
        </li>
      </ul>

      
    </div>
  </div><section class="astro-V6VAVLSQ">
    <h2 class="font-bold ml-3 astro-V6VAVLSQ">ALIMENTACION</h2>
    <table class=" m-2 bg-rose-500/95 text-white rounded-md p-5  astro-V6VAVLSQ">
      <caption class="astro-V6VAVLSQ">Alimentación de las ratas</caption>
      <thead class="astro-V6VAVLSQ">
        <tr class="astro-V6VAVLSQ">
          <th class="astro-V6VAVLSQ"> <img src="#" alt="" class="astro-V6VAVLSQ"> X</th>
          <th class="astro-V6VAVLSQ">Alimentos</th>
        </tr>
      </thead>
      <tbody class="astro-V6VAVLSQ">
        <tr class="border-3 astro-V6VAVLSQ">
          <td class="font-bold astro-V6VAVLSQ">Alimentos adecuados</td>
          <td class="astro-V6VAVLSQ">Comida para ratas<br class="astro-V6VAVLSQ">Frutas: manzanas, plátanos, peras, melón, fresas, frambuesas, arándanos, kiwi, mango, piña, papaya, etc.<br class="astro-V6VAVLSQ">Verduras: brócoli, zanahorias, calabaza, calabacín, pepino, espinacas, acelgas, lechuga, tomate, pimiento, etc.<br class="astro-V6VAVLSQ">Proteína: pollo, pavo, pescado, carne de res, huevos, queso, yogur, etc.<br class="astro-V6VAVLSQ">Grasas saludables: semillas de lino, semillas de calabaza, nueces, almendras, avellanas, etc.</td>
        </tr>
        <tr class="m-4 astro-V6VAVLSQ">
          <td class="font-bold  astro-V6VAVLSQ">Solo un poco y espaciado en el tiempo</td>
          <td class="astro-V6VAVLSQ">Brócoli<br class="astro-V6VAVLSQ">Frutos secos: nueces, almendras, avellanas, etc.<br class="astro-V6VAVLSQ">Pan integral</td>
        </tr>
        <tr class="astro-V6VAVLSQ">
          <td class="font-bold text-red-500 astro-V6VAVLSQ">Prohibido</td>
          <td class="astro-V6VAVLSQ">Golosinas procesadas y chocolates<br class="astro-V6VAVLSQ">Comida chatarra<br class="astro-V6VAVLSQ">Cebolla y ajo<br class="astro-V6VAVLSQ">Alimentos picantes o salados</td>
        </tr>
      </tbody>
    </table>
    
  </section>` })}`;
}, "C:/Users/Bancita/Documents/Astrolanding/src/pages/vets.astro");

const $$file = "C:/Users/Bancita/Documents/Astrolanding/src/pages/vets.astro";
const $$url = "/vets";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Vets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };

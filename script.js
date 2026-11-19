// ===============================
// BARÇA WORLD - MAIN JAVASCRIPT
// ===============================

// INTRO AND ENTER BUTTON

const intro = document.getElementById("intro");
const mainSite = document.getElementById("main-site");
const enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", function () {

	intro.style.opacity = "0";
	intro.style.transition = "opacity 0.8s ease";

	setTimeout(() => {
		intro.style.display = "none";
		mainSite.hidden = false;

		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});

	}, 800);

});

// LANGUAGE SYSTEM

const languageButton = document.getElementById("language-btn");

let currentLanguage = "fa";

function changeLanguage() {

	currentLanguage = currentLanguage === "fa" ? "en" : "fa";

	document.documentElement.lang = currentLanguage;
	document.documentElement.dir =
		currentLanguage === "fa" ? "rtl" : "ltr";

	languageButton.textContent =
		currentLanguage === "fa" ? "EN" : "FA";

	document.body.classList.toggle(
		"english-mode",
		currentLanguage === "en"
	);

	// NAVIGATION TRANSLATION

	document.querySelectorAll("[data-fa]").forEach(item => {

		item.textContent = item.getAttribute(
			currentLanguage === "fa" ? "data-fa" : "data-en"
		);

	});

}

// LANGUAGE BUTTON EVENT

languageButton.addEventListener("click", changeLanguage);


// MAIN CONTENT TRANSLATION

const translations = {

	fa: {
		introTitle: "به دنیای بارسا خوش آمدید",
		introSubtitle: "یک عشق، یک تاریخ، یک هویت",
		heroTitle: "فراتر از یک باشگاه",
		heroText: "به دنیای یکی از بزرگ‌ترین باشگاه‌های تاریخ فوتبال خوش آمدید.",
		heroButton: "کشف دنیای بارسا ←",
		historyTitle: "تاریخی به قدمت یک عشق",
		historyText: "داستان باشگاهی که به نمادی جهانی تبدیل شد.",
		legendsTitle: "اسطوره‌های جاودانه",
		trophiesTitle: "افتخارات بارسلونا",
		clasicoText: "رقابتی فراتر از فوتبال.",
		galleryTitle: "گالری بارسلونا",
		galleryText: "لحظاتی که برای همیشه در قلب هواداران باقی می‌مانند."
	},

	en: {
		introTitle: "Welcome to the World of Barça",
		introSubtitle: "One Love, One History, One Identity",
		heroTitle: "More Than a Club",
		heroText: "Welcome to the world of one of football's greatest clubs.",
		heroButton: "Discover Barça ←",
		historyTitle: "A History Built on Love",
		historyText: "The story of a club that became a global symbol.",
		legendsTitle: "The Immortal Legends",
		trophiesTitle: "FC Barcelona Trophies",
		clasicoText: "A rivalry beyond football.",
		galleryTitle: "Barcelona Gallery",
		galleryText: "Moments forever remembered in the hearts of fans."
	}

};


// UPDATE WEBSITE TEXT

function updateWebsiteLanguage() {

	const t = translations[currentLanguage];

	document.querySelector("#intro h2").textContent =
		t.introTitle;

	document.querySelector("#intro .intro-content > p:last-of-type").textContent =
		t.introSubtitle;

	document.querySelector("#home h1").textContent =
		t.heroTitle;

	document.querySelector("#home > p:not(.section-tag)").textContent =
		t.heroText;

	document.querySelector("#home .hero-btn").textContent =
		t.heroButton;

	document.querySelector("#history h2").textContent =
		t.historyTitle;

	document.querySelector("#history > p:last-child").textContent =
		t.historyText;

	document.querySelector("#legends h2").textContent =
		t.legendsTitle;

	document.querySelector("#trophies h2").textContent =
		t.trophiesTitle;

	document.querySelector("#clasico > p:last-child").textContent =
		t.clasicoText;

	document.querySelector("#gallery h2").textContent =
		t.galleryTitle;

	document.querySelector("#gallery > p:last-child").textContent =
		t.galleryText;

}

// CONNECT LANGUAGE SYSTEM

languageButton.addEventListener("click", updateWebsiteLanguage);


// SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(

	(entries) => {

		entries.forEach(entry => {

			if (entry.isIntersecting) {

				entry.target.classList.add("visible");

			} else {

				entry.target.classList.remove("visible");

			}

		});

	},

	{
		threshold: 0.15
	}

);


// OBSERVE ALL REVEAL SECTIONS

document.querySelectorAll(".reveal").forEach(section => {

	revealObserver.observe(section);

});


// PAGE LOAD

window.addEventListener("load", () => {

	console.log("BARÇA WORLD successfully loaded!");

});


// COPYRIGHT CONSOLE MESSAGE

console.log(
	"%c BARÇA WORLD ",
	"background:#ed174c;color:white;font-size:22px;font-weight:bold;padding:10px;"
);

console.log(
	"Created by Radmehr © 2026"
);

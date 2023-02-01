new Vue({
	el: "#app",
	data: {
		message: "Bonjour les Bachelors",
		laManu: "La Manu, l'école des métiers du numérique",
		alternative: "Logo de l'école la Manu",
		btnMessage: "Voir les coordonnées",
		campusAM: {
			campus: "La Manu, campus Amiens",
			ville: "Amiens",
			adresse: "70 Rue des jacobins",
			telephone: "0000000000",
			email: "contact-amiens@lamanu.fr",
		},
		isShow: false,
		listCampus: ["Amiens", "Le Havre", "Compiègne", "Versailles"],
		listHobbies: ["HTML/CSS", "JS", "JQuery", "Vue.js", "UX/UI", "PAO"],
		firstname: "",
		lastname: "",
		email: "",
		civility: "",
		campus: "",
		hobbies: [],
		messageContact: "",
		rgpd: "",
	},
	methods: {
		toggleCoord: function () {
			this.isShow = !this.isShow;
		},
		sendForm: function () {
			console.log(
				this.firstname,
				" ",
				this.lastname,
				" ",
				this.email,
				" ",
				this.civility,
				" ",
				this.campus,
				" ",
				this.hobbies,
				" ",
				this.messageContact,
				" ",
				this.rgpd
			);
		},
	},
});

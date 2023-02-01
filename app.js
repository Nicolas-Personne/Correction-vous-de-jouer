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
	},
	methods: {
		toggleCoord: function () {
			this.isShow = !this.isShow;
		},
	},
});

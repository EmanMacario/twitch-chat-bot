var tmi = require('tmi.js');
var oauth = require('./oauth.js');

/* Set options */
var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "TotalWeebBot",
		password: oauth.password
	},
	channels: ["prayingemantis"]
};

/* Connect to the chat */
var client = new tmi.client(options);
client.connect();


/* Change color of username */
client.color("OrangeRed");

/* Managing Events */
client.on("chat", function(channel, user, message, self) {
	if (message === "!weeb") {
		client.action("prayingemantis", user[display-name] + ", you are a total weeb!" );
	}
});

client.on("chat", function(channel, user, message, self) {
	if (message === "!twitter") {
		client.action("prayingemantis", "https://twitter.com/prayingemantis");
	}
});

client.on("chat", function(channel, user, message, self) {
	if (message === "!facebook") {
		client.action("prayingemantis", "https://www.facebook.com/emmanuel.macario.75");
	}
});

client.on("connected", function(address, port) {
	client.action("prayingemantis", "Hey fellow weebs! VoHiYo PogChamp Kappa");
});


var tmi = require('tmi.js');

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
		password: "oauth:phloq81nrvb6deuo8q4if7b0y8ix8g"
	},
	channels: ["prayingemantis"]
};

/* Connect to the chat */
var client = new tmi.client(options);
client.connect();


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

client.on("connected", function(address, port) {
	client.action("prayingemantis", "Hey fellow weebs! VoHiYo PogChamp Kappa");
});


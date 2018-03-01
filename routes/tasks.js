exports.addRSVP = function(req, res) {
	var rsvpEmail = req.body.rsvpEmail;

	console.log(rsvpEmail);

	data.rsvpEmail.push(rsvpEmail);

	res.send(rsvpEmail);

}
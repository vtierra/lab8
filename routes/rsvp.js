var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(req, res){
  res.render('rsvp', data);
};

exports.addRSVP = function(req, res) {
	var rsvpEmail = req.body.rsvpEmail;

	console.log(rsvpEmail);

	data.rsvpEmail.push(rsvpEmail);

	res.send(rsvpEmail);

};
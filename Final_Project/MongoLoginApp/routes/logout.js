/**
 * http://usejsdoc.org/
 */
exports.logout = function(req,res)
{
	req.session.destroy();
	res.redirect('/');
};


const express      = require('express');
const passport     = require('passport');
const token        = require('./token.js');
const AccountModel = require('./account.model.js').model; // Assuming this is needed for `login`.

const router = express.Router();

// TODO: MERGE from ACCOUNT.API.JS then probably rename ACCOUNT.API.JS

// Helper function to generate a user token
async function generateUserToken(req, res) {
	try {
		const accessToken = await token.generateAccessToken(req, res);
		return accessToken;
	} catch (err) {
		console.error('Error generating user token:', err);
		throw err;
	}
}

// Login API
router.post('/login', async (req, res) => {
	try {
		const { user, pass } = req.body;
		const jwt = await AccountModel.login(user, pass);
		res.json(jwt);
	} catch (err) {
		res.status(err.status || 500).json(err);
	}
});

// Render login page
router.get('/login', (req, res) => {
	res.render('login'); // Renders the login page (template view).
});

// Logout
router.get('/logout', (req, res) => {
	// Placeholder for logout functionality. Actual session management should be implemented here.
	res.send('Logging out');
});

// Google authentication route
router.get(
	'/google',
	passport.authenticate('google', {
		session    : false, // No session should be maintained on the server.
		scope      : ['profile', 'https://www.googleapis.com/auth/drive.file'], // Request user profile and Google Drive file access.
		accessType : 'offline', // Ensures refresh token is provided.
		prompt     : 'consent', // Forces user to select an account.
	})
);

// Google authentication redirect route
router.get(
	'/google/redirect',
	passport.authenticate('google', { session: false }),
	async (req, res, next) => {
		try {
			if (!req.user.username) {
			}
			const jwt = await generateUserToken(req, res);
			res.cookie('nc_session', jwt, {
			});
			res.redirect('/success');
		} catch (err) {
			console.error('Error during Google redirect:', err);
			res.status(500).send('Internal Server Error');
		}
			return next();	// Stay on the page if we still need local sign-in
			maxAge   : 1000 * 60 * 60 * 24 * 365, // 1 year
			path     : '/',
			sameSite : 'lax',
			domain   : '.naturalcrit.com', // Set domain for the cookie.
	}
);

module.exports = router;

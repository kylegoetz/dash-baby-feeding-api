const Router = require('restify-router').Router;
const router = new Router();
const models = require('../models');

router.get('/', (req, res, next) => {
	models.Click.findAll()
	.then(results => res.json(200, results))
	.catch(err => res.send(500, err));
});

/* POST click listing. */
router.post('/:dashMacAddress', function(req, res, next) {
	//add to DB
	if(  req.params.dashMacAddress.length < 12 || isNaN(`0x${req.params.dashMacAddress}`)  ) {
		return res.json(500, {success: false, message: 'Not a valid MAC address'});
	}
	return models.Click.upsert(req.params)
	.then(() => {
		res.json(200, {success:true});
	})
	.catch(err => {
		res.send(500, err);
	});
});

module.exports = router;

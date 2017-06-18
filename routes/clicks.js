var express = require('express');
var router = express.Router();
const models = require('../models');

router.get('/', (req, res, next) => {
	models.Click.findAll()
	.then(results => res.status(200).json(results))
	.catch(err => res.status(500).send(err));
});

/* POST click listing. */
router.post('/:dashMacAddress', function(req, res, next) {
	//add to DB
	if(  req.params.dashMacAddress.length < 12 || isNaN(`0x${req.params.dashMacAddress}`)  ) {
		return res.status(500).json({success: false, message: 'Not a valid MAC address'});
	}
	return models.Click.upsert(req.params)
	.then(() => {
		res.status(200).json({success:true});
	})
	.catch(err => {
		res.status(500).send(err);
	});
});

module.exports = router;

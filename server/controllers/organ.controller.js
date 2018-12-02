const OrganModel = require('../models/organ.model');

exports.getOrganDetail = (req, res) => {
    OrganModel.findById(req.params.id, (err, org) => {
        res.send(org);
    });
};

exports.getAllOrgan = (req, res, next) => {
    OrganModel.find({}, (err, orgs) => {
        const maps = {};

        orgs.forEach(o => {
            maps[o._id] = o;
        });
        res.send(maps);
    });
};

exports.createOrgan = (req, res, next) => {
    const organ = new OrganModel(
        {
            donatorId: req.body.donatorId,
        }
    );
    organ.save((err) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        return res.send('Organ created successfully');
    });
};

exports.updateOrgan = (req, res, next) => {
    OrganModel.findByIdAndUpdate(res.params.id, { $set: req.body }, (err, prod) => {
        if (err) {
            return next(err);
        }
        return res.send('Organ updated');
    });
};

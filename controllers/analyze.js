const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const analyze = (req, res, next) => {
    try {
        res.status(200).json({ 
            name: req.file.originalname, 
            type: req.file.mimetype,
            size: req.file.size
        });
    } catch (err) {
        next(err);
    }
}

module.exports = analyze

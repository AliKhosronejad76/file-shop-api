const MiddleBanner = require("../models/middlebanner");

const getAllMiddleBanners = async (req, res) => {
    try {
        const allbanners = await MiddleBanner.find();
        res.status(200).json(allbanners);
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "error" });
    }

}

const createMiddleBanner = async (req, res) => {
    try {
        const newMiddleBanner = new MiddleBanner({
            image: req.body.image,
            imageAlt: req.body.imageAlt,
            situation: req.body.situation,
            link: req.body.link,
            date:new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit'}),
        });
        newMiddleBanner.save()
        .then((d)=>{
            res.status(200).json({msg:"بنر میانی با موفقیت ذخیره شد"});

        })
        .catch((e)=>{
            console.log(e);
            res.status(400).json({msg:"خطا در ذخیره اطلاعات"})
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "error" })
    }
}




module.exports.getAllMiddleBanners = getAllMiddleBanners;
module.exports.createMiddleBanner = createMiddleBanner;

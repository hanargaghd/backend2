const Banner = require("../models/banner");

const catchAsync = require("../utils/catchAsync");

exports.getBanner = catchAsync(async(req,res)=>{
    const banner = await Banner.findOne();
    res.status(200).json({
        success : true,
        data: banner,
    })
})


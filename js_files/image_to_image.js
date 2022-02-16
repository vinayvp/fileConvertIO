let Jimp = require('jimp');

// open a file called "lenna.png"
let path = "D://web_development//fileConvertIO//js_files//test_files//Picture1.png";
let resize_width = 100;
let resize_height = 256;
let quality = 60;
let greyscale = false;
let extension = ".jpg";
Jimp.read(path, (err, image) => {
    if (err) {
        if (err.errno == -4058) {
            console.log(`No such file ${path}`);
        } else {
            throw err;
        }
    };

    image.resize(resize_width,resize_height) // resize
    image.quality(quality); // set JPEG quality
    if (greyscale) {
        image.greyscale(greyscale) // set greyscale
    }
    image.write('test1'+extension); // save
    console.log("File Converion successfull");
});
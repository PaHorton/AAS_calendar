Dropzone.options.calDrop = { // camelized version of the `id`
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    accept: function(file, done) {
        console.log("woo")
        done();
    }
};
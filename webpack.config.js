
const path = require("path");

module.exports = {
    //1.its shows entry point here 
    //  not in the src folder means change the entry point
    entry: "./src/index.js",
    output: {
       path: path.resolve(".", "build"), //it's folder
       filename: "bundle.js"   // fileaname in the above folder

    },
    mode:"development" , //for rempving the warning
                       // development=>production we can write
     module: {
         rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"]
       },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      ],
      
            },                
}; 
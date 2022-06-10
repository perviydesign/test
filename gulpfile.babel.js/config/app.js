const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {

  isProd: isProd,
  isDev: isDev,
  
  webpack: {
    mode: isProd ? "production" : "development",
    devtool: false
  },

  imagemin: {
    verbose: true
  },

  sprite: {
    mode: {
      symbol: {
        dest: '.',
        sprite: "sprite.svg"
      }
    },
  },
  
  cheerio: {
    run: function($) {
      $("[fill]").removeAttr("fill")
      $("[stroke]").removeAttr("stroke")
      $("[style]").removeAttr("style")
    },
    parseOptions: { xmlMode: true }
  },

  fonter: {
    formats: [
      "ttf",
      "woff",
      "eot",
      "svg"
    ]
  }

}
/** Chunk was on 40184 **/
/** chunk id: 882354, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk195045 = require("./195045.js"),
  Chunk604878 = require("./604878.js");
let c = () => {
  let e = Chunk473749.useRef(null),
    t = (0, Chunk195045.Z)(),
    [n, c] = Chunk473749.useState(false),
    [u, d] = Chunk473749.useState([0, 0]),
    [p, f] = Chunk473749.useState(.5),
    [h, m] = Chunk473749.useState(0),
    [g, b] = Chunk473749.useState(false);
  return Chunk473749.useEffect(() => {
    let t = null,
      i = module.current;
    if (null != Chunk54381) {
      if (false === require) {
        let e = 1e4 * Math.random() + 5e3;
        t = window.setTimeout(() => {
          c(true), d([(0, Chunk392711.random)(128, 1792), (0, Chunk392711.random)(64, 360)]), f((0, Chunk392711.random)(.15, .5)), m((0, Chunk392711.random)(false, 15)), b(Math.random() > .5)
        }, module)
      }
      returntrue === require && Chunk54381.paused && (Chunk54381.currentTime = 0, Chunk54381.play()), () => {
        window.clearTimeout(exports)
      }
    }
  }, [require]), (0, Chunk54381.jsx)(Chunk70097.Z, {
    ref: module,
    className: Chunk604878.star,
    style: {
      transform: "translate(".concat(u[0], "px, ").concat(u[1], "px) scale(").concat(g ? false * p : p, ", ").concat(p, ") rotate(").concat(h, "deg)")
    },
    src: null == exports ? true : exports.misc["shooting-star"],
    loop: false,
    onEnded: () => {
      c(false)
    }
  })
}
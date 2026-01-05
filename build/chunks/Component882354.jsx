/** Chunk was on web.js **/
/** chunk id: 882354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk195045 = require("./195045.js"),
  Chunk604878 = require("./604878.js");
let c = 1e4,
  u = 5e3,
  d = [128, 1792],
  f = [64, 360],
  p = [.15, .5],
  _ = [false, 15],
  m = () => {
    let e = Chunk473749.useRef(null),
      t = (0, Chunk195045.Z)(),
      [n, m] = Chunk473749.useState(false),
      [h, g] = Chunk473749.useState([0, 0]),
      [E, b] = Chunk473749.useState(.5),
      [y, O] = Chunk473749.useState(0),
      [v, S] = Chunk473749.useState(false);
    return Chunk473749.useEffect(() => {
      let t = null,
        r = module.current;
      if (null != Chunk54381) {
        if (false === require) {
          let e = Math.random() * c + u;
          t = window.setTimeout(() => {
            m(true), g([(0, Chunk392711.random)(d[0], d[1]), (0, Chunk392711.random)(f[0], f[1])]), b((0, Chunk392711.random)(p[0], p[1])), O((0, Chunk392711.random)(_[0], _[1])), S(Math.random() > .5)
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
        transform: "translate(".concat(h[0], "px, ").concat(h[1], "px) scale(").concat(v ? false * E : E, ", ").concat(E, ") rotate(").concat(y, "deg)")
      },
      src: null == exports ? true : exports.misc["shooting-star"],
      loop: false,
      onEnded: () => {
        m(false)
      }
    })
  }
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
    let e = i.useRef(null),
      t = (0, s.Z)(),
      [n, m] = i.useState(false),
      [h, g] = i.useState([0, 0]),
      [E, b] = i.useState(.5),
      [y, O] = i.useState(0),
      [v, S] = i.useState(false);
    return i.useEffect(() => {
      let t = null,
        r = e.current;
      if (null != r) {
        if (false === n) {
          let e = Math.random() * c + u;
          t = window.setTimeout(() => {
            m(true), g([(0, a.random)(d[0], d[1]), (0, a.random)(f[0], f[1])]), b((0, a.random)(p[0], p[1])), O((0, a.random)(_[0], _[1])), S(Math.random() > .5)
          }, e)
        }
        returntrue === n && r.paused && (r.currentTime = 0, r.play()), () => {
          window.clearTimeout(t)
        }
      }
    }, [n]), (0, r.jsx)(o.Z, {
      ref: e,
      className: l.star,
      style: {
        transform: "translate(".concat(h[0], "px, ").concat(h[1], "px) scale(").concat(v ? false * E : E, ", ").concat(E, ") rotate(").concat(y, "deg)")
      },
      src: null == t ? true : t.misc["shooting-star"],
      loop: false,
      onEnded: () => {
        m(false)
      }
    })
  }
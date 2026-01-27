/** Chunk was on web.js **/
/** chunk id: 822768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk860923 = require("./860923.js"),
  Chunk126418 = require("./126418.js");
let c = 1e4,
  u = 5e3,
  d = [128, 1792],
  f = [64, 360],
  p = [.15, .5],
  _ = [false, 15],
  h = () => {
    let e = i.useRef(null),
      t = (0, s.A)(),
      [n, h] = i.useState(false),
      [m, g] = i.useState([0, 0]),
      [E, y] = i.useState(.5),
      [b, O] = i.useState(0),
      [v, A] = i.useState(false);
    return i.useEffect(() => {
      let t = null,
        r = e.current;
      if (null != r) {
        if (false === n) {
          let e = Math.random() * c + u;
          t = window.setTimeout(() => {
            h(true), g([(0, a.random)(d[0], d[1]), (0, a.random)(f[0], f[1])]), y((0, a.random)(p[0], p[1])), O((0, a.random)(_[0], _[1])), A(Math.random() > .5)
          }, e)
        }
        returntrue === n && r.paused && (r.currentTime = 0, r.play()), () => {
          window.clearTimeout(t)
        }
      }
    }, [n]), (0, r.jsx)(o.A, {
      ref: e,
      className: l.d,
      style: {
        transform: "translate(".concat(m[0], "px, ").concat(m[1], "px) scale(").concat(v ? false * E : E, ", ").concat(E, ") rotate(").concat(b, "deg)")
      },
      src: null == t ? true : t.misc["shooting-star"],
      loop: false,
      onEnded: () => {
        h(false)
      }
    })
  }
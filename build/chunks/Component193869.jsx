/** Chunk was on web.js **/
/** chunk id: 193869, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $r: () => m,
  EP: () => _,
  ZP: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk92951 = require("./92951.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk302221 = require("./302221.js"),
  Chunk324060 = require("./324060.js"),
  Chunk687581 = require("./687581.js"),
  Chunk609054 = require("./609054.js"),
  Chunk167262 = require("./167262.js");
let p = 500;
class _ extends EventTarget {}
let m = Chunk473749.createContext(new _);

function h(e) {
  var t;
  let {
    slide: n
  } = e, _ = i.useRef(null), h = i.useRef(null), g = i.useRef(0), E = i.useRef(Date.now()), b = i.useContext(m), y = i.useContext(c.Q), O = (0, o.dQu)(y.gradient[0]).hex(), v = (0, o.dQu)(y.gradient[1]).hex(), S = null != (t = (0, s.Z)(y)) ? t : y, I = (0, o.dQu)(S.gradient[0]).hex(), T = (0, o.dQu)(S.gradient[1]).hex();
  return i.useEffect(() => {
    let e = () => {
      let t = _.current,
        n = h.current,
        r = null == t ? true : t.getContext("2d");
      if (null != t && null != n && null != r) {
        if (n.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          t.width = window.innerWidth, t.height = window.innerHeight, (0, u.Z)(n, t, r), b.dispatchEvent(new CustomEvent("frame", {
            detail: {
              context: r,
              canvas: t
            }
          })), r.save();
          let e = r.createLinearGradient(0, 0, t.width, t.height),
            i = Math.min((Date.now() - E.current) / p, 1),
            a = i >= 1 ? O : (0, l.BM)(I, O, i),
            o = i >= 1 ? v : (0, l.BM)(T, v, i);
          e.addColorStop(0, a), e.addColorStop(1, o), r.fillStyle = e, r.globalCompositeOperation = "multiply", r.fillRect(0, 0, t.width, t.height), r.restore(), b.dispatchEvent(new CustomEvent("frameEnd", {
            detail: {
              context: r,
              canvas: t
            }
          }))
        }
        g.current = requestAnimationFrame(e)
      }
    };
    return e(), () => cancelAnimationFrame(g.current)
  }, [v, O, b, T, I]), i.useEffect(() => {
    E.current = Date.now()
  }, [n]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("canvas", {
      className: d.canvas,
      ref: _
    }), (0, r.jsx)(a.Z, {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      className: d.hidden,
      ref: h,
      "aria-hidden": true,
      children: (0, r.jsx)("source", {
        src: f.Z,
        type: "video/webm"
      })
    })]
  })
}
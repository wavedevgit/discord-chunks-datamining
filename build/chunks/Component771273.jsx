/** Chunk was on web.js **/
/** chunk id: 771273, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => m,
  B4: () => _,
  GD: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk299619 = require("./299619.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk998304 = require("./998304.js"),
  Chunk854987 = require("./854987.js"),
  Chunk109138 = require("./109138.js"),
  Chunk207289 = require("./207289.js"),
  Chunk934658 = require("./934658.js");
let p = 500;
class _ extends EventTarget {}
let h = Chunk64700.createContext(new _);

function m(e) {
  var t;
  let {
    slide: n
  } = e, _ = i.useRef(null), m = i.useRef(null), g = i.useRef(0), E = i.useRef(Date.now()), b = i.useContext(h), y = i.useContext(c.P), O = (0, s.rdh)(y.gradient[0]).hex(), A = (0, s.rdh)(y.gradient[1]).hex(), v = null != (t = (0, o.A)(y)) ? t : y, S = (0, s.rdh)(v.gradient[0]).hex(), I = (0, s.rdh)(v.gradient[1]).hex();
  return i.useEffect(() => {
    let e = () => {
      let t = _.current,
        n = m.current,
        r = null == t ? true : t.getContext("2d");
      if (null != t && null != n && null != r) {
        if (n.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          t.width = window.innerWidth, t.height = window.innerHeight, (0, u.A)(n, t, r), b.dispatchEvent(new CustomEvent("frame", {
            detail: {
              context: r,
              canvas: t
            }
          })), r.save();
          let e = r.createLinearGradient(0, 0, t.width, t.height),
            i = Math.min((Date.now() - E.current) / p, 1),
            a = i >= 1 ? O : (0, l.De)(S, O, i),
            s = i >= 1 ? A : (0, l.De)(I, A, i);
          e.addColorStop(0, a), e.addColorStop(1, s), r.fillStyle = e, r.globalCompositeOperation = "multiply", r.fillRect(0, 0, t.width, t.height), r.restore(), b.dispatchEvent(new CustomEvent("frameEnd", {
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
  }, [A, O, b, I, S]), i.useEffect(() => {
    E.current = Date.now()
  }, [n]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("canvas", {
      className: d.J,
      ref: _
    }), (0, r.jsx)(a.A, {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      className: d.R,
      ref: m,
      "aria-hidden": true,
      children: (0, r.jsx)("source", {
        src: f.A,
        type: "video/webm"
      })
    })]
  })
}
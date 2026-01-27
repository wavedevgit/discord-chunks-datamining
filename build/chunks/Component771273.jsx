/** Chunk was on 20941 **/
/** chunk id: 771273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => h,
  B4: () => f,
  GD: () => p
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
class f extends EventTarget {}
let p = Chunk64700.createContext(new f);

function h(e) {
  var t;
  let {
    slide: n
  } = e, f = l.useRef(null), h = l.useRef(null), b = l.useRef(0), g = l.useRef(Date.now()), x = l.useContext(p), y = l.useContext(c.P), v = (0, i.rdh)(y.gradient[0]).hex(), j = (0, i.rdh)(y.gradient[1]).hex(), C = null != (t = (0, s.A)(y)) ? t : y, _ = (0, i.rdh)(C.gradient[0]).hex(), A = (0, i.rdh)(C.gradient[1]).hex();
  return l.useEffect(() => {
    let e = () => {
      let t = f.current,
        n = h.current,
        r = null == t ? true : t.getContext("2d");
      if (null != t && null != n && null != r) {
        if (n.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          t.width = window.innerWidth, t.height = window.innerHeight, (0, u.A)(n, t, r), x.dispatchEvent(new CustomEvent("frame", {
            detail: {
              context: r,
              canvas: t
            }
          })), r.save();
          let e = r.createLinearGradient(0, 0, t.width, t.height),
            l = Math.min((Date.now() - g.current) / 500, 1),
            a = l >= 1 ? v : (0, o.De)(_, v, l),
            i = l >= 1 ? j : (0, o.De)(A, j, l);
          e.addColorStop(0, a), e.addColorStop(1, i), r.fillStyle = e, r.globalCompositeOperation = "multiply", r.fillRect(0, 0, t.width, t.height), r.restore(), x.dispatchEvent(new CustomEvent("frameEnd", {
            detail: {
              context: r,
              canvas: t
            }
          }))
        }
        b.current = requestAnimationFrame(e)
      }
    };
    return e(), () => cancelAnimationFrame(b.current)
  }, [j, v, x, A, _]), l.useEffect(() => {
    g.current = Date.now()
  }, [n]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("canvas", {
      className: d.J,
      ref: f
    }), (0, r.jsx)(a.A, {
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      className: d.R,
      ref: h,
      "aria-hidden": true,
      children: (0, r.jsx)("source", {
        src: m.A,
        type: "video/webm"
      })
    })]
  })
}
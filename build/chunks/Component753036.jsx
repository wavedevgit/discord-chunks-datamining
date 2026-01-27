/** Chunk was on 20941 **/
/** chunk id: 753036, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk846857 = require("./846857.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk796104 = require("./796104.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk751758 = require("./751758.js"),
  Chunk778007 = require("./778007.js"),
  Chunk308021 = require("./308021.js");

function p() {
  let e = (0, l.useContext)(c.P),
    t = (0, s.rdh)(e.primaryColor).hex(),
    n = (0, l.useRef)(null),
    {
      volume: p,
      isMuted: h
    } = (0, i.cf)([u.A], () => ({
      volume: u.A.volume,
      isMuted: u.A.isMuted
    })),
    [b, g] = (0, l.useState)(false),
    [x, y] = (0, l.useState)(false),
    v = (0, l.useRef)(false),
    j = h ? 0 : 100 * p,
    C = b || x;
  (0, l.useEffect)(() => {
    null != n.current && (n.current.volume = p)
  }, [p]);
  let _ = h ? s._RO : j > 90 ? s.HKD : s.S24;
  return (0, r.jsxs)("div", {
    onMouseEnter: () => g(true),
    onMouseLeave: () => g(false),
    className: d.kL,
    children: [(0, r.jsx)(s.DUT, {
      onClick: o.K8,
      className: m.b,
      style: {
        color: t,
        borderLeft: C ? 0 : true
      },
      children: (0, r.jsx)(_, {
        colorClass: f.d7,
        color: t
      })
    }), C ? (0, r.jsx)("div", {
      className: d.xJ,
      style: {
        borderColor: t
      },
      children: (0, r.jsx)(s.Apm, {
        initialValue: j,
        minValue: 0,
        maxValue: 100,
        asValueChanges: e => {
          (0, o.ls)(e / 100), y(true), clearTimeout(v.current), v.current = setTimeout(() => {
            y(false)
          }, 1e3)
        },
        grabberClassName: d.Ub,
        fillStyles: {
          backgroundColor: t,
          transition: "background-color 0.5s ease"
        }
      })
    }) : null, (0, r.jsx)("audio", {
      ref: n,
      autoPlay: true,
      loop: true,
      muted: h,
      children: (0, r.jsx)("source", {
        src: a.A
      })
    })]
  })
}
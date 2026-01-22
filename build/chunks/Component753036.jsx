/** Chunk was on web.js **/
/** chunk id: 753036, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
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
let _ = 1e3;

function h() {
  let e = (0, i.useContext)(c.P),
    t = (0, o.rdh)(e.primaryColor).hex(),
    n = (0, i.useRef)(null),
    {
      volume: h,
      isMuted: m
    } = (0, s.cf)([u.A], () => ({
      volume: u.A.volume,
      isMuted: u.A.isMuted
    })),
    [g, E] = (0, i.useState)(false),
    [b, y] = (0, i.useState)(false),
    O = (0, i.useRef)(false),
    A = m ? 0 : 100 * h,
    v = g || b,
    S = e => {
      (0, l.ls)(e / 100), y(true), clearTimeout(O.current), O.current = setTimeout(() => {
        y(false)
      }, _)
    };
  (0, i.useEffect)(() => {
    null != n.current && (n.current.volume = h)
  }, [h]);
  let I = m ? o._RO : A > 90 ? o.HKD : o.S24;
  return (0, r.jsxs)("div", {
    onMouseEnter: () => E(true),
    onMouseLeave: () => E(false),
    className: d.kL,
    children: [(0, r.jsx)(o.DUT, {
      onClick: l.K8,
      className: f.b,
      style: {
        color: t,
        borderLeft: v ? 0 : true
      },
      children: (0, r.jsx)(I, {
        colorClass: p.d7,
        color: t
      })
    }), v ? (0, r.jsx)("div", {
      className: d.xJ,
      style: {
        borderColor: t
      },
      children: (0, r.jsx)(o.Apm, {
        initialValue: A,
        minValue: 0,
        maxValue: 100,
        asValueChanges: S,
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
      muted: m,
      children: (0, r.jsx)("source", {
        src: a.A
      })
    })]
  })
}
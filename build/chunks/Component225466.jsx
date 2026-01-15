/** Chunk was on web.js **/
/** chunk id: 225466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk221233 = require("./221233.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk730307 = require("./730307.js"),
  Chunk756916 = require("./756916.js"),
  Chunk554445 = require("./554445.js");
let _ = 1e3;

function h() {
  let e = (0, i.useContext)(c.Q),
    t = (0, s.dQu)(e.primaryColor).hex(),
    n = (0, i.useRef)(null),
    {
      volume: h,
      isMuted: m
    } = (0, o.cj)([u.Z], () => ({
      volume: u.Z.volume,
      isMuted: u.Z.isMuted
    })),
    [g, E] = (0, i.useState)(false),
    [b, y] = (0, i.useState)(false),
    O = (0, i.useRef)(false),
    v = m ? 0 : 100 * h,
    S = g || b,
    I = e => {
      (0, l.jA)(e / 100), y(true), clearTimeout(O.current), O.current = setTimeout(() => {
        y(false)
      }, _)
    };
  (0, i.useEffect)(() => {
    null != n.current && (n.current.volume = h)
  }, [h]);
  let T = m ? s.OyP : v > 90 ? s.gj8 : s.X2j;
  return (0, r.jsxs)("div", {
    onMouseEnter: () => E(true),
    onMouseLeave: () => E(false),
    className: d.container,
    children: [(0, r.jsx)(s.P3F, {
      onClick: l.$t,
      className: f.closeButton,
      style: {
        color: t,
        borderLeft: S ? 0 : true
      },
      children: (0, r.jsx)(T, {
        colorClass: p.iconColor,
        color: t
      })
    }), S ? (0, r.jsx)("div", {
      className: d.sliderContainer,
      style: {
        borderColor: t
      },
      children: (0, r.jsx)(s.iRW, {
        initialValue: v,
        minValue: 0,
        maxValue: 100,
        asValueChanges: I,
        grabberClassName: d.grabber,
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
        src: a.Z
      })
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 225466, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk854062 = require("./854062.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk515970 = require("./515970.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk267374 = require("./267374.js"),
  Chunk691446 = require("./691446.js"),
  Chunk417788 = require("./417788.js");
let _ = 1e3;

function m() {
  let e = (0, Chunk473749.useContext)(Chunk324060.Q),
    t = (0, Chunk481060.dQu)(module.primaryColor).hex(),
    n = (0, Chunk473749.useRef)(null),
    {
      volume: m,
      isMuted: h
    } = (0, Chunk442837.cj)([Chunk5888.Z], () => ({
      volume: Chunk5888.Z.volume,
      isMuted: Chunk5888.Z.isMuted
    })),
    [g, E] = (0, Chunk473749.useState)(false),
    [b, y] = (0, Chunk473749.useState)(false),
    O = (0, Chunk473749.useRef)(false),
    v = h ? 0 : 100 * m,
    S = g || b,
    I = e => {
      (0, l.jA)(e / 100), y(true), clearTimeout(O.current), O.current = setTimeout(() => {
        y(false)
      }, _)
    };
  (0, Chunk473749.useEffect)(() => {
    null != require.current && (require.current.volume = m)
  }, [m]);
  let T = h ? Chunk481060.OyP : v > 90 ? Chunk481060.gj8 : Chunk481060.X2j;
  return (0, Chunk54381.jsxs)("div", {
    onMouseEnter: () => E(true),
    onMouseLeave: () => E(false),
    className: Chunk267374.container,
    children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: Chunk515970.$t,
      className: Chunk691446.closeButton,
      style: {
        color: exports,
        borderLeft: S ? 0 : true
      },
      children: (0, Chunk54381.jsx)(T, {
        colorClass: Chunk417788.iconColor,
        color: exports
      })
    }), S ? (0, Chunk54381.jsx)("div", {
      className: Chunk267374.sliderContainer,
      style: {
        borderColor: exports
      },
      children: (0, Chunk54381.jsx)(Chunk481060.iRW, {
        initialValue: v,
        minValue: 0,
        maxValue: 100,
        asValueChanges: I,
        grabberClassName: Chunk267374.grabber,
        fillStyles: {
          backgroundColor: exports,
          transition: "background-color 0.5s ease"
        }
      })
    }) : null, (0, Chunk54381.jsx)("audio", {
      ref: require,
      autoPlay: true,
      loop: true,
      muted: h,
      children: (0, Chunk54381.jsx)("source", {
        src: Chunk854062.Z
      })
    })]
  })
}
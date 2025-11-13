/** Chunk was on web.js **/
/** chunk id: 57260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk203463 = require("./203463.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk484201 = require("./484201.js");
let d = 100;

function f(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: a,
    isExpanded: f
  } = e, [_, p] = i.useState(false), [h, m] = i.useState(true), [g, E] = i.useState(false), b = null != f ? f : _, {
    ref: y,
    height: O = 0
  } = (0, c.ZP)(), {
    ref: v,
    height: I = 0
  } = (0, c.ZP)(), T = (0, l.q_F)({
    height: b ? O + I : I,
    config: s.config.stiff,
    onRest: () => E(true)
  }, h ? "animate-never" : "respect-motion-settings"), S = i.useCallback(() => {
    p(!_)
  }, [_, p]);
  return i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      m(false)
    }, d);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)("div", {
    className: o()(u.collapseable, {
      [u.toggled]: b
    }, n),
    children: (0, r.jsxs)(s.animated.div, {
      className: o()(u.contentExpandContainer, {
        [u.showOverflow]: b && g
      }),
      style: T,
      children: [(0, r.jsx)("div", {
        ref: v,
        className: o()(u.header, {
          [u.toggled]: b
        }),
        children: t({
          onClick: S
        })
      }), (0, r.jsx)(l.Rny, {
        enabled: !b,
        children: (0, r.jsx)("div", {
          ref: y,
          "aria-hidden": !b,
          children: a
        })
      })]
    })
  })
}
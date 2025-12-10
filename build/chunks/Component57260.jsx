/** Chunk was on web.js **/
/** chunk id: 57260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk148884 = require("./148884.js"),
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
  } = e, [p, _] = i.useState(false), [m, h] = i.useState(true), [g, E] = i.useState(false), b = null != f ? f : p, {
    ref: y,
    height: O = 0
  } = (0, c.ZP)(), {
    ref: v,
    height: S = 0
  } = (0, c.ZP)(), I = (0, l.q_F)({
    height: b ? O + S : S,
    config: s.config.stiff,
    onRest: () => E(true)
  }, m ? "animate-never" : "respect-motion-settings"), T = i.useCallback(() => {
    _(!p)
  }, [p, _]);
  return i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      h(false)
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
      style: I,
      children: [(0, r.jsx)("div", {
        ref: v,
        className: o()(u.header, {
          [u.toggled]: b
        }),
        children: t({
          onClick: T
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
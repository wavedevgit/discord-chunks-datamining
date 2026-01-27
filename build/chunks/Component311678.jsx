/** Chunk was on web.js **/
/** chunk id: 311678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk342860 = require("./342860.js");
let d = 100;

function f(e) {
  let {
    children: t,
    className: n,
    collapsibleContent: a,
    isExpanded: f
  } = e, [p, _] = i.useState(false), [h, m] = i.useState(true), [g, E] = i.useState(false), y = null != f ? f : p, {
    ref: b,
    height: O = 0
  } = (0, c.Ay)(), {
    ref: v,
    height: A = 0
  } = (0, c.Ay)(), I = (0, l.zhh)({
    height: y ? O + A : A,
    config: s.config.stiff,
    onRest: () => E(true)
  }, h ? "animate-never" : "respect-motion-settings"), S = i.useCallback(() => {
    _(!p)
  }, [p, _]);
  return i.useLayoutEffect(() => {
    let e = setTimeout(() => {
      m(false)
    }, d);
    return () => clearTimeout(e)
  }, []), (0, r.jsx)("div", {
    className: o()(u.uR, {
      [u.$M]: y
    }, n),
    children: (0, r.jsxs)(s.animated.div, {
      className: o()(u.N0, {
        [u.Mm]: y && g
      }),
      style: I,
      children: [(0, r.jsx)("div", {
        ref: v,
        className: o()(u.wx, {
          [u.$M]: y
        }),
        children: t({
          onClick: S
        })
      }), (0, r.jsx)(l.M1G, {
        enabled: !y,
        children: (0, r.jsx)("div", {
          ref: b,
          "aria-hidden": !y,
          children: a
        })
      })]
    })
  })
}
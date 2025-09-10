/** Chunk was on web.js **/
/** chunk id: 693900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => p,
  t: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk938288 = require("./938288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js");
let d = Chunk647438.createContext({
  springConfig: {},
  isExpanded: false
});

function f(e) {
  let t = i.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded
  }), [e.springConfig, e.isExpanded]);
  return (0, r.jsx)(d.Provider, {
    value: t,
    children: e.children
  })
}
let _ = null;

function p(e) {
  var t;
  let {
    children: n
  } = e, {
    springConfig: f,
    isExpanded: p
  } = i.useContext(d), h = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), {
    ref: m,
    height: g = _
  } = (0, l.ZP)(), E = null != (t = (0, c.Z)(g)) ? t : _, [{
    height: b
  }, y] = (0, s.q_F)(() => ({
    from: {
      height: 0
    },
    config: f
  }));
  return i.useLayoutEffect(() => {
    g !== _ && y({
      height: g,
      immediate: !p || h || E === _
    })
  }, [g, y, p, h, E]), (0, r.jsx)(a.animated.div, {
    style: {
      height: E === _ ? "auto" : b,
      overflow: "hidden"
    },
    children: (0, r.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: m,
      children: n
    })
  })
}
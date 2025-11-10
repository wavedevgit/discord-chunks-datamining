/** Chunk was on 50433 **/
/** chunk id: 693900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => m,
  t: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk509442 = require("./509442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js");
let u = Chunk647438.createContext({
  springConfig: {},
  isExpanded: false
});

function p(e) {
  let t = s.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded
  }), [e.springConfig, e.isExpanded]);
  return (0, r.jsx)(u.Provider, {
    value: t,
    children: e.children
  })
}

function m(e) {
  var t;
  let {
    children: n
  } = e, {
    springConfig: p,
    isExpanded: m
  } = s.useContext(u), g = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), {
    ref: f,
    height: h = null
  } = (0, l.ZP)(), x = null != (t = (0, c.Z)(h)) ? t : null, [{
    height: b
  }, _] = (0, i.q_F)(() => ({
    from: {
      height: 0
    },
    config: p
  }));
  return s.useLayoutEffect(() => {
    null !== h && _({
      height: h,
      immediate: !m || g || null === x
    })
  }, [h, _, m, g, x]), (0, r.jsx)(o.animated.div, {
    style: {
      height: null === x ? "auto" : b,
      overflow: "hidden"
    },
    children: (0, r.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: f,
      children: n
    })
  })
}
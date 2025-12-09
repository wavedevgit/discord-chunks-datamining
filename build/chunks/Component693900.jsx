/** Chunk was on 75393 **/
/** chunk id: 693900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => p,
  t: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk205120 = require("./205120.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js");
let u = Chunk473749.createContext({
  springConfig: {},
  isExpanded: false
});

function m(e) {
  let t = r.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded
  }), [e.springConfig, e.isExpanded]);
  return (0, a.jsx)(u.Provider, {
    value: t,
    children: e.children
  })
}

function p(e) {
  var t;
  let {
    children: n
  } = e, {
    springConfig: m,
    isExpanded: p
  } = r.useContext(u), h = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
    ref: x,
    height: f = null
  } = (0, o.ZP)(), g = null != (t = (0, c.Z)(f)) ? t : null, [{
    height: b
  }, v] = (0, s.q_F)(() => ({
    from: {
      height: 0
    },
    config: m
  }));
  return r.useLayoutEffect(() => {
    null !== f && v({
      height: f,
      immediate: !p || h || null === g
    })
  }, [f, v, p, h, g]), (0, a.jsx)(i.animated.div, {
    style: {
      height: null === g ? "auto" : b,
      overflow: "hidden"
    },
    children: (0, a.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: x,
      children: n
    })
  })
}
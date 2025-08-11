/** Chunk was on 37082 **/
/** chunk id: 693900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => m,
  t: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk717976 = require("./717976.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk110924 = require("./110924.js"),
  Chunk607070 = require("./607070.js");
let d = Chunk73800.createContext({
  springConfig: {},
  isExpanded: false
});

function p(e) {
  let t = s.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded
  }), [e.springConfig, e.isExpanded]);
  return (0, r.jsx)(d.Provider, {
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
  } = s.useContext(d), g = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    ref: f,
    height: x = null
  } = (0, l.ZP)(), h = null != (t = (0, c.Z)(x)) ? t : null, [{
    height: j
  }, _] = (0, i.q_F)(() => ({
    from: {
      height: 0
    },
    config: p
  }));
  return s.useLayoutEffect(() => {
    null !== x && _({
      height: x,
      immediate: !m || g || null === h
    })
  }, [x, _, m, g, h]), (0, r.jsx)(o.animated.div, {
    style: {
      height: null === h ? "auto" : j,
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
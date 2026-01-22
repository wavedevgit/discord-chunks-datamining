/** Chunk was on 22477 **/
/** chunk id: 783569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => m,
  T: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk475743 = require("./475743.js"),
  Chunk775602 = require("./775602.js");
let u = Chunk64700.createContext({
  springConfig: {},
  isExpanded: false
});

function m(e) {
  let t = l.useMemo(() => ({
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
  } = l.useContext(u), h = (0, r.bG)([d.A], () => d.A.useReducedMotion), {
    ref: f,
    height: x = null
  } = (0, o.Ay)(), b = null != (t = (0, c.A)(x)) ? t : null, [{
    height: g
  }, v] = (0, s.zhh)(() => ({
    from: {
      height: 0
    },
    config: m
  }));
  return l.useLayoutEffect(() => {
    null !== x && v({
      height: x,
      immediate: !p || h || null === b
    })
  }, [x, v, p, h, b]), (0, a.jsx)(i.animated.div, {
    style: {
      height: null === b ? "auto" : g,
      overflow: "hidden"
    },
    children: (0, a.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: f,
      children: n
    })
  })
}
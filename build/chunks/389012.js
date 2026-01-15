/** Chunk was on 22979 **/
/** chunk id: 389012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk324805 = require("./324805.js");

function o(e) {
  let {
    isQuestAccepted: t,
    isQuestCompleted: n,
    isQuestBarVisible: o
  } = e, c = (0, r.e7)([l.Z], () => l.Z.useReducedMotion), [d, u] = a.useState(false), [m, p] = a.useState(true), [h, f] = a.useState(true), x = a.useRef(o), b = a.useCallback(e => {
    n || (p(false), u(e))
  }, [n]), g = a.useCallback(() => {
    b(true)
  }, [b]), v = a.useCallback(() => {
    b(false)
  }, [b]), j = t ? s.XZ : s.R4, [{
    expansionSpring: y
  }, C] = (0, i.q_F)(() => ({
    from: {
      expansionSpring: 0
    },
    config: j,
    onRest: () => {
      p(true)
    },
    onStart: () => {
      p(false)
    }
  }));
  a.useEffect(() => {
    C({
      expansionSpring: +!!d,
      immediate: c
    })
  }, [d, C, c]);
  let {
    visibilitySpring: _
  } = (0, i.q_F)({
    from: {
      visibilitySpring: 0
    },
    to: {
      visibilitySpring: +!!o
    },
    config: {
      tension: 250,
      friction: 10,
      clamp: true
    },
    onRest: () => {
      f(true)
    },
    onStart: () => {
      f(false)
    }
  });
  return a.useLayoutEffect(() => {
    o !== x.current && f(false), x.current = o
  }, [o]), {
    isExpanded: d,
    setIsExpanded: b,
    expandQuestBar: g,
    collapseQuestBar: v,
    isExpansionAnimationComplete: m,
    isVisibilityAnimationAtRest: h,
    expansionSpring: y,
    visibilitySpring: _,
    springConfig: j
  }
}
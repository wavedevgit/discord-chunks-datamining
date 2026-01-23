/** Chunk was on 36054 **/
/** chunk id: 546350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk654487 = require("./654487.js");

function o(e) {
  let {
    isQuestAccepted: t,
    isQuestCompleted: n,
    isQuestBarVisible: o
  } = e, c = (0, l.bG)([i.A], () => i.A.useReducedMotion), [d, u] = a.useState(false), [m, p] = a.useState(true), [h, x] = a.useState(true), g = a.useRef(o), f = a.useCallback(e => {
    n || (p(false), u(e))
  }, [n]), b = a.useCallback(() => {
    f(true)
  }, [f]), v = a.useCallback(() => {
    f(false)
  }, [f]), j = t ? s.ZV : s.Ko, [{
    expansionSpring: _
  }, y] = (0, r.zhh)(() => ({
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
    y({
      expansionSpring: +!!d,
      immediate: c
    })
  }, [d, y, c]);
  let {
    visibilitySpring: A
  } = (0, r.zhh)({
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
      x(true)
    },
    onStart: () => {
      x(false)
    }
  });
  return a.useLayoutEffect(() => {
    o !== g.current && x(false), g.current = o
  }, [o]), {
    isExpanded: d,
    setIsExpanded: f,
    expandQuestBar: b,
    collapseQuestBar: v,
    isExpansionAnimationComplete: m,
    isVisibilityAnimationAtRest: h,
    expansionSpring: _,
    visibilitySpring: A,
    springConfig: j
  }
}
/** Chunk was on 22477 **/
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
  } = e, c = (0, l.bG)([r.A], () => r.A.useReducedMotion), [d, u] = a.useState(false), [m, p] = a.useState(true), [h, f] = a.useState(true), x = a.useRef(o), b = a.useCallback(e => {
    n || (p(false), u(e))
  }, [n]), g = a.useCallback(() => {
    b(true)
  }, [b]), v = a.useCallback(() => {
    b(false)
  }, [b]), j = t ? s.ZV : s.Ko, [{
    expansionSpring: y
  }, _] = (0, i.zhh)(() => ({
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
    _({
      expansionSpring: +!!d,
      immediate: c
    })
  }, [d, _, c]);
  let {
    visibilitySpring: A
  } = (0, i.zhh)({
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
    visibilitySpring: A,
    springConfig: j
  }
}
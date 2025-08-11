/** Chunk was on 34779 **/
/** chunk id: 279743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk663389 = require("./663389.js"),
  Chunk834166 = require("./834166.js");

function f(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, h = c.TVs.colors.TEXT_LINK, f = (0, c.dQu)(h).spring({
    opacity: 0
  }), g = (0, c.dQu)(h).spring({
    opacity: .1
  }), m = (0, c.dQu)(h).spring({
    opacity: 0
  }), b = (0, c.dQu)(h).spring({
    opacity: 1
  }), [O, _] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: f,
      borderColor: f
    }
  }), "animate-never"), y = {
    startColor: f,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: m,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: u
  }, C = i.useRef(y);
  return i.useEffect(() => {
    C.current = y
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: l
    } = C.current, {
      useReducedMotion: o
    } = d.Z, s = 200 * !o;
    _({
      reset: true,
      immediate: false,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), _({
      delay: l,
      immediate: o,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      }
    }), _({
      delay: l + 200 + 200,
      immediate: o,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: s,
        easing: a.Z.Easing.ease
      },
      onRest: t
    })
  }, [_]), (0, r.jsx)(s.animated.div, {
    style: O,
    className: o()(p.settingsItemHighlight, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, u.e7)([h.Z], () => h.Z.getScrollPosition() === n), [s, a] = i.useState(false);
  return (i.useEffect(() => {
    o && a(true)
  }, [o]), s) ? (0, r.jsx)(f, {
    animationDelay: l,
    onFlashEnd: () => a(false),
    children: t
  }) : t
}
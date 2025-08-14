/** Chunk was on 50737 **/
/** chunk id: 279743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk663389 = require("./663389.js"),
  Chunk334709 = require("./334709.js");

function h(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: u = 500
  } = e, p = c.TVs.colors.TEXT_LINK, h = (0, c.dQu)(p).spring({
    opacity: 0
  }), g = (0, c.dQu)(p).spring({
    opacity: .1
  }), m = (0, c.dQu)(p).spring({
    opacity: 0
  }), b = (0, c.dQu)(p).spring({
    opacity: 1
  }), [O, _] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: h,
      borderColor: h
    }
  }), "animate-never"), y = {
    startColor: h,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: m,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: u
  }, v = i.useRef(y);
  return i.useEffect(() => {
    v.current = y
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: l
    } = v.current, {
      useReducedMotion: o
    } = d.Z, a = 200 * !o;
    _({
      reset: true,
      immediate: false,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      }
    }), _({
      delay: l,
      immediate: o,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      }
    }), _({
      delay: l + 200 + 200,
      immediate: o,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: a,
        easing: s.Z.Easing.ease
      },
      onRest: t
    })
  }, [_]), (0, r.jsx)(a.animated.div, {
    style: O,
    className: o()(f.settingsItemHighlight, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, o = (0, u.e7)([p.Z], () => p.Z.getScrollPosition() === n), [a, s] = i.useState(false);
  return (i.useEffect(() => {
    o && s(true)
  }, [o]), a) ? (0, r.jsx)(h, {
    animationDelay: l,
    onFlashEnd: () => s(false),
    children: t
  }) : t
}
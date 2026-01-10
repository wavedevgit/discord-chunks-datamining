/** Chunk was on web.js **/
/** chunk id: 279743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk620389 = require("./620389.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk663389 = require("./663389.js"),
  Chunk7822 = require("./7822.js");
let _ = 200,
  m = 200;

function h(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: a,
    animationDelay: u = 500
  } = e, f = c.TVs.colors.TEXT_LINK, h = (0, c.dQu)(f).spring({
    opacity: 0
  }), g = (0, c.dQu)(f).spring({
    opacity: .1
  }), E = (0, c.dQu)(f).spring({
    opacity: 0
  }), b = (0, c.dQu)(f).spring({
    opacity: 1
  }), y = e => {
    e.finished && (null == a || a())
  }, [O, v] = (0, c.q_F)(() => ({
    from: {
      backgroundColor: h,
      borderColor: h
    }
  }), "animate-never"), S = {
    startColor: h,
    handleRest: y,
    endColor: E,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: u
  }, I = i.useRef(S);
  return i.useEffect(() => {
    I.current = S
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: a
    } = I.current, {
      useReducedMotion: o
    } = d.Z, s = o ? 0 : _, c = a + _ + m;
    v({
      reset: true,
      immediate: false,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: s,
        easing: l.Z.Easing.ease
      }
    }), v({
      delay: a,
      immediate: o,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: s,
        easing: l.Z.Easing.ease
      }
    }), v({
      delay: c,
      immediate: o,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: s,
        easing: l.Z.Easing.ease
      },
      onRest: t
    })
  }, [v]), (0, r.jsx)(s.animated.div, {
    style: O,
    className: o()(p.settingsItemHighlight, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: a
  } = e, o = (0, u.e7)([f.Z], () => f.Z.getScrollPosition() === n), [s, l] = i.useState(false);
  return (i.useEffect(() => {
    o && l(true)
  }, [o]), s) ? (0, r.jsx)(h, {
    animationDelay: a,
    onFlashEnd: () => l(false),
    children: t
  }) : t
}
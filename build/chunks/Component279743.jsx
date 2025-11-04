/** Chunk was on web.js **/
/** chunk id: 279743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk689628 = require("./689628.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk663389 = require("./663389.js"),
  Chunk334709 = require("./334709.js");
let p = 200,
  h = 200;

function m(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: a,
    animationDelay: u = 500
  } = e, f = c.TVs.colors.TEXT_LINK, m = (0, c.dQu)(f).spring({
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
      backgroundColor: m,
      borderColor: m
    }
  }), "animate-never"), I = {
    startColor: m,
    handleRest: y,
    endColor: E,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: u
  }, T = i.useRef(I);
  return i.useEffect(() => {
    T.current = I
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: a
    } = T.current, {
      useReducedMotion: o
    } = d.Z, s = o ? 0 : p, c = a + p + h;
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
    className: o()(_.settingsItemHighlight, n),
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
  }, [o]), s) ? (0, r.jsx)(m, {
    animationDelay: a,
    onFlashEnd: () => l(false),
    children: t
  }) : t
}
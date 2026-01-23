/** Chunk was on web.js **/
/** chunk id: 446541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk628965 = require("./628965.js"),
  Chunk480357 = require("./480357.js");
let _ = 200,
  h = 200;

function m(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: a,
    animationDelay: u = 500
  } = e, f = c.LU0.colors.TEXT_LINK, m = (0, c.rdh)(f).spring({
    opacity: 0
  }), g = (0, c.rdh)(f).spring({
    opacity: .1
  }), E = (0, c.rdh)(f).spring({
    opacity: 0
  }), y = (0, c.rdh)(f).spring({
    opacity: 1
  }), b = e => {
    e.finished && (null == a || a())
  }, [O, v] = (0, c.zhh)(() => ({
    from: {
      backgroundColor: m,
      borderColor: m
    }
  }), "animate-never"), A = {
    startColor: m,
    handleRest: b,
    endColor: E,
    targetBorderColor: y,
    targetColor: g,
    animationDelay: u
  }, I = i.useRef(A);
  return i.useEffect(() => {
    I.current = A
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: a
    } = I.current, {
      useReducedMotion: s
    } = d.A, o = s ? 0 : _, c = a + _ + h;
    v({
      reset: true,
      immediate: false,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: o,
        easing: l.A.Easing.ease
      }
    }), v({
      delay: a,
      immediate: s,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: o,
        easing: l.A.Easing.ease
      }
    }), v({
      delay: c,
      immediate: s,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: o,
        easing: l.A.Easing.ease
      },
      onRest: t
    })
  }, [v]), (0, r.jsx)(o.animated.div, {
    style: O,
    className: s()(p.h, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: a
  } = e, s = (0, u.bG)([f.A], () => f.A.getScrollPosition() === n), [o, l] = i.useState(false);
  return (i.useEffect(() => {
    s && l(true)
  }, [s]), o) ? (0, r.jsx)(m, {
    animationDelay: a,
    onFlashEnd: () => l(false),
    children: t
  }) : t
}
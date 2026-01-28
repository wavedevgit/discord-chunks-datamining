/** Chunk was on 5606 **/
/** chunk id: 446541, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk353709 = require("./353709.js"),
  Chunk615300 = require("./615300.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk628965 = require("./628965.js"),
  Chunk480357 = require("./480357.js");

function m(e) {
  let {
    children: t,
    className: n,
    onFlashEnd: l,
    animationDelay: d = 500
  } = e, p = c.LU0.colors.TEXT_LINK, m = (0, c.rdh)(p).spring({
    opacity: 0
  }), g = (0, c.rdh)(p).spring({
    opacity: .1
  }), f = (0, c.rdh)(p).spring({
    opacity: 0
  }), b = (0, c.rdh)(p).spring({
    opacity: 1
  }), [h, A] = (0, c.zhh)(() => ({
    from: {
      backgroundColor: m,
      borderColor: m
    }
  }), "animate-never"), E = {
    startColor: m,
    handleRest: e => {
      e.finished && (null == l || l())
    },
    endColor: f,
    targetBorderColor: b,
    targetColor: g,
    animationDelay: d
  }, x = i.useRef(E);
  return i.useEffect(() => {
    x.current = E
  }), i.useEffect(() => {
    let {
      startColor: e,
      handleRest: t,
      endColor: n,
      targetBorderColor: r,
      targetColor: i,
      animationDelay: l
    } = x.current, {
      useReducedMotion: s
    } = u.A, a = 200 * !s;
    A({
      reset: true,
      immediate: false,
      to: {
        backgroundColor: e,
        borderColor: e
      },
      config: {
        duration: a,
        easing: o.A.Easing.ease
      }
    }), A({
      delay: l,
      immediate: s,
      to: [{
        backgroundColor: i,
        borderColor: r
      }],
      config: {
        duration: a,
        easing: o.A.Easing.ease
      }
    }), A({
      delay: l + 200 + 200,
      immediate: s,
      to: [{
        backgroundColor: n,
        borderColor: n
      }],
      config: {
        duration: a,
        easing: o.A.Easing.ease
      },
      onRest: t
    })
  }, [A]), (0, r.jsx)(a.animated.div, {
    style: h,
    className: s()(_.h, n),
    children: t
  })
}

function g(e) {
  let {
    children: t,
    scrollPosition: n,
    animationDelay: l
  } = e, s = (0, d.bG)([p.A], () => p.A.getScrollPosition() === n), [a, o] = i.useState(false);
  return (i.useEffect(() => {
    s && o(true)
  }, [s]), a) ? (0, r.jsx)(m, {
    animationDelay: l,
    onFlashEnd: () => o(false),
    children: t
  }) : t
}
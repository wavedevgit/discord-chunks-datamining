/** Chunk was on web.js **/
/** chunk id: 744682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk488528 = require("./488528.js"),
  l = require.n(Chunk488528),
  Chunk158954 = require("./158954.js"),
  Chunk260612 = require("./260612.js"),
  Chunk384694 = require("./384694.js"),
  Chunk964486 = require("./964486.js"),
  Chunk354328 = require("./354328.js"),
  Chunk533832 = require("./533832.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  let {
    color: a,
    useLottieDefaultColors: s,
    src: h,
    size: g = "md",
    width: E,
    height: y,
    className: b,
    initialAnimation: O,
    initialFrame: v,
    markers: A,
    onBeforeDismount: I
  } = e, [S, T] = i.useState(null), C = i.useRef(null), N = i.useRef(null), w = i.useRef(null), R = "custom" === g ? {
    width: E,
    height: y
  } : (0, u.J)(g), P = !(0, p.A)("lottie_hover_multiple_loop"), D = i.useContext(c.CZY).reducedMotion.enabled, {
    enabled: L
  } = d.A.useExperiment({
    location: "LottieIcon web entry point"
  }), x = D || !L, M = i.useRef(O);
  return (0, f.l0)(() => {
    var e, t;
    null == I || I({
      finalFrame: null != (e = null == (t = w.current) ? true : t.currentFrame) ? e : null
    })
  }), i.useImperativeHandle(t, () => ({
    play: e => {
      if (null == w.current) return;
      let t = null == N.current;
      if (N.current = e, x) {
        let t = A[e];
        w.current.resetSegments(true), w.current.setSegment(t.start + t.duration, t.start + t.duration), w.current.stop()
      } else {
        w.current.setLoop(!P && e.includes("hover")), w.current.resetSegments(true);
        let n = t && null != v && v >= A[e].start && v <= A[e].start + A[e].duration ? v : A[e].start;
        w.current.playSegments([n, A[e].start + A[e].duration], true)
      }
    },
    stop: () => {
      if (null == w.current || x) return
    },
    stopIfPlaying: e => {
      null == w.current || x || N.current === e && (w.current.resetSegments(true), w.current.setSegment(A[e].start, A[e].start), w.current.stop())
    },
    getDuration: e => null == w.current ? null : w.current.getDuration(e),
    getCurrentFrame: () => null == w.current ? null : w.current.currentFrame
  }), [x, P, A, v]), i.useEffect(() => {
    null == S && h().then(e => T(e.default))
  }, [S, h]), i.useEffect(() => (Promise.resolve().then(n.t.bind(n, 883885, 23)).then(e => {
    var t, n;
    let r, {
        default: i
      } = e,
      a = 1 === Object.keys(A).length ? Object.values(A)[0].name : true,
      o = null != (t = null != (n = N.current) ? n : M.current) ? t : a;
    if (null != o && null != A[o]) {
      let e = A[o];
      r = [x ? e.start : null != v ? v : e.start, e.start + e.duration]
    }
    null != C.current && (w.current = i.loadAnimation({
      container: C.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: l()(S),
      initialSegment: r
    }))
  }), () => {
    var e;
    null == (e = w.current) || e.destroy()
  }), [S, A, v, x]), (0, r.jsx)("div", {
    style: m({
      "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? true : a.css,
      display: "flex"
    }, R),
    className: o()(_.f, s ? true : _.P, b),
    ref: C
  })
}
let E = Chunk64700.forwardRef(g)
/** Chunk was on web.js **/
/** chunk id: 709014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk906280 = require("./906280.js"),
  l = require.n(Chunk906280),
  Chunk793030 = require("./793030.js"),
  Chunk390507 = require("./390507.js"),
  Chunk679400 = require("./679400.js"),
  Chunk493773 = require("./493773.js"),
  Chunk580747 = require("./580747.js"),
  Chunk326913 = require("./326913.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  let {
    color: a,
    useLottieDefaultColors: s,
    src: m,
    size: g = "md",
    width: E,
    height: b,
    className: y,
    initialAnimation: O,
    initialFrame: v,
    markers: S,
    onBeforeDismount: I
  } = e, [T, C] = i.useState(null), A = i.useRef(null), N = i.useRef(null), P = i.useRef(null), R = "custom" === g ? {
    width: E,
    height: b
  } : (0, u.m)(g), w = !(0, p.Z)("lottie_hover_multiple_loop"), D = i.useContext(c.Sfi).reducedMotion.enabled, {
    enabled: x
  } = d.Z.useExperiment({
    location: "LottieIcon web entry point"
  }), L = D || !x, j = i.useRef(O);
  return (0, f.zq)(() => {
    var e, t;
    null == I || I({
      finalFrame: null != (t = null == (e = P.current) ? true : e.currentFrame) ? t : null
    })
  }), i.useImperativeHandle(t, () => ({
    play: e => {
      if (null == P.current) return;
      let t = null == N.current;
      if (N.current = e, L) {
        let t = S[e];
        P.current.resetSegments(true), P.current.setSegment(t.start + t.duration, t.start + t.duration), P.current.stop()
      } else {
        P.current.setLoop(!w && e.includes("hover")), P.current.resetSegments(true);
        let n = t && null != v && v >= S[e].start && v <= S[e].start + S[e].duration ? v : S[e].start;
        P.current.playSegments([n, S[e].start + S[e].duration], true)
      }
    },
    stop: () => {
      if (null == P.current || L) return
    },
    stopIfPlaying: e => {
      null == P.current || L || N.current === e && (P.current.resetSegments(true), P.current.setSegment(S[e].start, S[e].start), P.current.stop())
    },
    getDuration: e => null == P.current ? null : P.current.getDuration(e),
    getCurrentFrame: () => null == P.current ? null : P.current.currentFrame
  }), [L, w, S, v]), i.useEffect(() => {
    null == T && m().then(e => C(e.default))
  }, [T, m]), i.useEffect(() => (Promise.resolve().then(n.t.bind(n, 500923, 23)).then(e => {
    var t, n;
    let r, {
        default: i
      } = e,
      a = 1 === Object.keys(S).length ? Object.values(S)[0].name : true,
      o = null != (n = null != (t = N.current) ? t : j.current) ? n : a;
    if (null != o && null != S[o]) {
      let e = S[o];
      r = [L ? e.start : null != v ? v : e.start, e.start + e.duration]
    }
    null != A.current && (P.current = i.loadAnimation({
      container: A.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: l()(T),
      initialSegment: r
    }))
  }), () => {
    var e;
    null == (e = P.current) || e.destroy()
  }), [T, S, v, L]), (0, r.jsx)("div", {
    style: h({
      "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? true : a.css,
      display: "flex"
    }, R),
    className: o()(_.lottieIcon, s ? true : _.lottieIconColors, y),
    ref: A
  })
}
let E = Chunk473749.forwardRef(g)
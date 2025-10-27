/** Chunk was on web.js **/
/** chunk id: 709014, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk906280 = require("./906280.js"),
  l = require.n(Chunk906280),
  Chunk793030 = require("./793030.js"),
  Chunk390507 = require("./390507.js"),
  Chunk679400 = require("./679400.js"),
  Chunk493773 = require("./493773.js"),
  Chunk580747 = require("./580747.js"),
  Chunk369019 = require("./369019.js");

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
    height: b,
    className: y,
    initialAnimation: O,
    initialFrame: v,
    markers: I,
    onBeforeDismount: T
  } = e, [S, A] = i.useState(null), C = i.useRef(null), N = i.useRef(null), R = i.useRef(null), P = "custom" === g ? {
    width: E,
    height: b
  } : (0, u.m)(g), D = !(0, _.Z)("lottie_hover_multiple_loop"), w = i.useContext(c.Sfi).reducedMotion.enabled, {
    enabled: L
  } = d.Z.useExperiment({
    location: "LottieIcon web entry point"
  }), x = w || !L, M = i.useRef(O);
  return (0, f.zq)(() => {
    var e, t;
    null == T || T({
      finalFrame: null != (t = null == (e = R.current) ? true : e.currentFrame) ? t : null
    })
  }), i.useImperativeHandle(t, () => ({
    play: e => {
      if (null == R.current) return;
      let t = null == N.current;
      if (N.current = e, x) {
        let t = I[e];
        R.current.resetSegments(true), R.current.setSegment(t.start + t.duration, t.start + t.duration), R.current.stop()
      } else {
        R.current.setLoop(!D && e.includes("hover")), R.current.resetSegments(true);
        let n = t && null != v && v >= I[e].start && v <= I[e].start + I[e].duration ? v : I[e].start;
        R.current.playSegments([n, I[e].start + I[e].duration], true)
      }
    },
    stop: () => {
      if (null == R.current || x) return
    },
    stopIfPlaying: e => {
      null == R.current || x || N.current === e && (R.current.resetSegments(true), R.current.setSegment(I[e].start, I[e].start), R.current.stop())
    },
    getDuration: e => null == R.current ? null : R.current.getDuration(e),
    getCurrentFrame: () => null == R.current ? null : R.current.currentFrame
  }), [x, D, I, v]), i.useEffect(() => {
    null == S && h().then(e => A(e.default))
  }, [S, h]), i.useEffect(() => (Promise.resolve().then(n.t.bind(n, 500923, 23)).then(e => {
    var t, n;
    let r, {
        default: i
      } = e,
      a = 1 === Object.keys(I).length ? Object.values(I)[0].name : true,
      o = null != (n = null != (t = N.current) ? t : M.current) ? n : a;
    if (null != o && null != I[o]) {
      let e = I[o];
      r = [x ? e.start : null != v ? v : e.start, e.start + e.duration]
    }
    null != C.current && (R.current = i.loadAnimation({
      container: C.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: l()(S),
      initialSegment: r
    }))
  }), () => {
    var e;
    null == (e = R.current) || e.destroy()
  }), [S, I, v, x]), (0, r.jsx)("div", {
    style: m({
      "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? true : a.css,
      display: "flex"
    }, P),
    className: o()(p.lottieIcon, s ? true : p.lottieIconColors, y),
    ref: C
  })
}
let E = Chunk647438.forwardRef(g)
/** Chunk was on web.js **/
/** chunk id: 744682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    useLottieDefaultColors: o,
    src: h,
    size: g = "md",
    width: E,
    height: b,
    className: y,
    initialAnimation: O,
    initialFrame: A,
    markers: v,
    onBeforeDismount: S
  } = e, [I, T] = i.useState(null), C = i.useRef(null), N = i.useRef(null), R = i.useRef(null), w = "custom" === g ? {
    width: E,
    height: b
  } : (0, u.J)(g), P = !(0, p.A)("lottie_hover_multiple_loop"), D = i.useContext(c.CZY).reducedMotion.enabled, {
    enabled: x
  } = d.A.useExperiment({
    location: "LottieIcon web entry point"
  }), L = D || !x, j = i.useRef(O);
  return (0, f.l0)(() => {
    var e, t;
    null == S || S({
      finalFrame: null != (e = null == (t = R.current) ? true : t.currentFrame) ? e : null
    })
  }), i.useImperativeHandle(t, () => ({
    play: e => {
      if (null == R.current) return;
      let t = null == N.current;
      if (N.current = e, L) {
        let t = v[e];
        R.current.resetSegments(true), R.current.setSegment(t.start + t.duration, t.start + t.duration), R.current.stop()
      } else {
        R.current.setLoop(!P && e.includes("hover")), R.current.resetSegments(true);
        let n = t && null != A && A >= v[e].start && A <= v[e].start + v[e].duration ? A : v[e].start;
        R.current.playSegments([n, v[e].start + v[e].duration], true)
      }
    },
    stop: () => {
      if (null == R.current || L) return
    },
    stopIfPlaying: e => {
      null == R.current || L || N.current === e && (R.current.resetSegments(true), R.current.setSegment(v[e].start, v[e].start), R.current.stop())
    },
    getDuration: e => null == R.current ? null : R.current.getDuration(e),
    getCurrentFrame: () => null == R.current ? null : R.current.currentFrame
  }), [L, P, v, A]), i.useEffect(() => {
    null == I && h().then(e => T(e.default))
  }, [I, h]), i.useEffect(() => (Promise.resolve().then(n.t.bind(n, 883885, 23)).then(e => {
    var t, n;
    let r, {
        default: i
      } = e,
      a = 1 === Object.keys(v).length ? Object.values(v)[0].name : true,
      s = null != (t = null != (n = N.current) ? n : j.current) ? t : a;
    if (null != s && null != v[s]) {
      let e = v[s];
      r = [L ? e.start : null != A ? A : e.start, e.start + e.duration]
    }
    null != C.current && (R.current = i.loadAnimation({
      container: C.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: l()(I),
      initialSegment: r
    }))
  }), () => {
    var e;
    null == (e = R.current) || e.destroy()
  }), [I, v, A, L]), (0, r.jsx)("div", {
    style: m({
      "--__lottieIconColor": null != a && "string" == typeof a ? a : null == a ? true : a.css,
      display: "flex"
    }, w),
    className: s()(_.f, o ? true : _.P, y),
    ref: C
  })
}
let E = Chunk64700.forwardRef(g)
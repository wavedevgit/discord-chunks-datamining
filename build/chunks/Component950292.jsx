/** Chunk was on web.js **/
/** chunk id: 950292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk213305 = require("./213305.js"),
  Chunk775030 = require("./775030.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk134057 = require("./134057.jsx"),
  Chunk151108 = require("./151108.js"),
  Chunk460391 = require("./460391.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("img", {
    className: f.image,
    src: t,
    alt: "",
    draggable: false
  })
}

function E(e) {
  let {
    lottie: t,
    props: n
  } = e, {
    reducedMotion: a
  } = i.useContext(s.S);
  return (0, r.jsx)(l.F, p({
    className: f.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !a.enabled
  }, n))
}

function b(e) {
  let {
    rive: t,
    props: n
  } = e;
  return (0, r.jsx)(t, p({
    className: f.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n))
}

function y(e) {
  let {
    ref: t,
    src: n,
    fallbackImageSrc: a,
    loop: o,
    loopAt: l = 0,
    playbackRate: c
  } = e, {
    reducedMotion: u
  } = i.useContext(s.S), d = i.useRef(null);
  return (i.useImperativeHandle(t, () => d.current), i.useEffect(() => {
    let e = d.current;
    if (null != e) return null != c && (e.playbackRate = c), null != o && (e.loop = 0 === l && o), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === o && 0 !== l && (e.currentTime = l, e.play())
    }
  }, [o, l, c]), u.enabled && null != a) ? (0, r.jsx)(g, {
    type: "image",
    src: a
  }) : (0, r.jsx)("video", {
    className: f.video,
    ref: d,
    src: n,
    autoPlay: !u.enabled,
    muted: true,
    playsInline: true,
    controls: false,
    preload: "metadata"
  })
}

function O(e) {
  var {
    aspectRatio: t = "16/9"
  } = e, n = h(e, ["aspectRatio"]);
  let i = (0, c.ZF)();

  function a() {
    if ((0, d.Or)(n)) return (0, r.jsx)(g, p({}, n));
    if ((0, d.Am)(n)) return (0, r.jsx)(E, p({}, n));
    if ((0, d.ko)(n)) return (0, r.jsx)(b, p({}, n));
    if ((0, d.Wv)(n)) return (0, r.jsx)(y, p({}, n));
    if ((0, d.Mf)(n)) return null == i.dynamicGraphicComponents ? (console.warn("Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext"), null) : (0, u.a)({
      component: n.component,
      props: n.props,
      componentMap: i.dynamicGraphicComponents
    });
    return null
  }
  return null == n ? null : (0, r.jsx)("div", {
    className: o()(f.container, f["aspect-ratio-".concat(t)]),
    children: a()
  })
}
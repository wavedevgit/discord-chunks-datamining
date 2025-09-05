/** Chunk was on web.js **/
/** chunk id: 751334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk186325 = require("./186325.js"),
  Chunk226690 = require("./226690.jsx"),
  Chunk198168 = require("./198168.jsx"),
  Chunk587272 = require("./587272.js"),
  Chunk339029 = require("./339029.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("img", {
    className: d.image,
    src: t,
    alt: "",
    draggable: false
  })
}

function g(e) {
  let {
    lottie: t,
    props: n
  } = e, {
    reducedMotion: a
  } = i.useContext(s.S);
  return (0, r.jsx)(l.F, _({
    className: d.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !a.enabled
  }, n))
}

function E(e) {
  let {
    rive: t,
    props: n
  } = e;
  return (0, r.jsx)(t, _({
    className: d.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n))
}

function b(e) {
  let {
    ref: t,
    src: n,
    fallbackImageSrc: a,
    loop: o,
    loopAt: l = 0,
    playbackRate: c
  } = e, {
    reducedMotion: u
  } = i.useContext(s.S), f = i.useRef(null);
  return (i.useImperativeHandle(t, () => f.current), i.useEffect(() => {
    let e = f.current;
    if (null != e) return null != c && (e.playbackRate = c), null != o && (e.loop = 0 === l && o), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === o && 0 !== l && (e.currentTime = l, e.play())
    }
  }, [o, l, c]), u.enabled && null != a) ? (0, r.jsx)(m, {
    type: "image",
    src: a
  }) : (0, r.jsx)("video", {
    className: d.video,
    ref: f,
    src: n,
    autoPlay: !u.enabled,
    muted: true,
    playsInline: true,
    controls: false,
    preload: "metadata"
  })
}

function y(e) {
  var {
    aspectRatio: t = "16/9"
  } = e, n = p(e, ["aspectRatio"]);

  function i() {
    if ((0, u.Or)(n)) return (0, r.jsx)(m, _({}, n));
    if ((0, u.Am)(n)) return (0, r.jsx)(g, _({}, n));
    if ((0, u.ko)(n)) return (0, r.jsx)(E, _({}, n));
    if ((0, u.Wv)(n)) return (0, r.jsx)(b, _({}, n));
    if ((0, u.Mf)(n)) return (0, r.jsx)(c.gM, {
      data: n
    });
    return null
  }
  return null == n ? null : (0, r.jsx)("div", {
    className: o()(d.container, d["aspect-ratio-".concat(t)]),
    children: i()
  })
}
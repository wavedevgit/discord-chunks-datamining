/** Chunk was on web.js **/
/** chunk id: 751334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk198168 = require("./198168.jsx"),
  Chunk587272 = require("./587272.js"),
  Chunk966883 = require("./966883.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function h(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("img", {
    className: u.image,
    src: t,
    alt: "",
    draggable: false
  })
}

function m(e) {
  let {
    lottie: t,
    props: n
  } = e, {
    reducedMotion: a
  } = i.useContext(s.Sfi);
  return (0, r.jsx)(s.Fmz, f({
    className: u.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !a.enabled
  }, n))
}

function g(e) {
  let {
    rive: t,
    props: n
  } = e;
  return (0, r.jsx)(t, f({
    className: u.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n))
}

function E(e) {
  let {
    ref: t,
    src: n,
    fallbackImageSrc: a,
    loop: o,
    loopAt: l = 0,
    playbackRate: c
  } = e, {
    reducedMotion: d
  } = i.useContext(s.Sfi), f = i.useRef(null);
  return (i.useImperativeHandle(t, () => f.current), i.useEffect(() => {
    let e = f.current;
    if (null != e) return null != c && (e.playbackRate = c), null != o && (e.loop = 0 === l && o), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === o && 0 !== l && (e.currentTime = l, e.play())
    }
  }, [o, l, c]), d.enabled && null != a) ? (0, r.jsx)(h, {
    type: "image",
    src: a
  }) : (0, r.jsx)("video", {
    className: u.video,
    ref: f,
    src: n,
    autoPlay: !d.enabled,
    muted: true,
    playsInline: true,
    controls: false,
    preload: "metadata"
  })
}

function b(e) {
  var {
    aspectRatio: t = "16/9"
  } = e, n = _(e, ["aspectRatio"]);

  function i() {
    if ((0, c.Or)(n)) return (0, r.jsx)(h, f({}, n));
    if ((0, c.Am)(n)) return (0, r.jsx)(m, f({}, n));
    if ((0, c.ko)(n)) return (0, r.jsx)(g, f({}, n));
    if ((0, c.Wv)(n)) return (0, r.jsx)(E, f({}, n));
    if ((0, c.Mf)(n)) return (0, r.jsx)(l.gM, {
      data: n
    });
    return null
  }
  return null == n ? null : (0, r.jsx)("div", {
    className: o()(u.container, u["aspect-ratio-".concat(t)]),
    children: i()
  })
}
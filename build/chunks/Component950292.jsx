/** Chunk was on web.js **/
/** chunk id: 950292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk775030 = require("./775030.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk134057 = require("./134057.jsx"),
  Chunk151108 = require("./151108.js"),
  Chunk231338 = require("./231338.js"),
  Chunk687352 = require("./687352.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("img", {
    className: p.image,
    src: t,
    alt: "",
    draggable: false
  })
}

function v(e) {
  let {
    lottie: t,
    props: n
  } = e, {
    reducedMotion: a
  } = i.useContext(l.S);
  return (0, r.jsx)(c.F, m({
    className: p.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !a.enabled
  }, n))
}

function I(e) {
  let {
    rive: t,
    props: n
  } = e;
  return (0, r.jsx)(t, m({
    className: p.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n))
}

function T(e) {
  let {
    ref: t,
    src: n,
    fallbackImageSrc: a,
    loop: o,
    loopAt: s = 0,
    playbackRate: c,
    isWindowFocused: u
  } = e, {
    reducedMotion: d
  } = i.useContext(l.S), f = i.useRef(null);
  return (i.useImperativeHandle(t, () => f.current), i.useEffect(() => {
    let e = f.current;
    if (null != e) return null != c && (e.playbackRate = c), null != o && (e.loop = 0 === s && o), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === o && 0 !== s && (e.currentTime = s, e.play())
    }
  }, [o, s, c]), i.useEffect(() => {
    var e, t;
    null != f.current && (!d.enabled && u ? null == (e = f.current) || e.play().catch(_.dG) : null == (t = f.current) || t.pause())
  }, [u, d.enabled]), d.enabled && null != a) ? (0, r.jsx)(O, {
    type: "image",
    src: a
  }) : (0, r.jsx)("video", {
    className: p.video,
    ref: f,
    src: n,
    autoPlay: !d.enabled && u,
    muted: true,
    playsInline: true,
    controls: false,
    preload: "metadata"
  })
}

function S(e) {
  var t, n, {
      aspectRatio: i = "16/9"
    } = e,
    a = b(e, ["aspectRatio"]);
  let l = (0, u.ZF)(),
    c = (0, s.C)(),
    _ = null != (n = null == (t = l.isWindowFocused) ? true : t.call(l)) ? n : c;

  function h() {
    if ((0, f.Or)(a)) return (0, r.jsx)(O, m({}, a));
    if ((0, f.Am)(a)) return (0, r.jsx)(v, m({}, a));
    if ((0, f.ko)(a)) return (0, r.jsx)(I, m({}, a));
    if ((0, f.Wv)(a)) return (0, r.jsx)(T, E(m({}, a), {
      isWindowFocused: _
    }));
    if ((0, f.Mf)(a)) return null == l.dynamicGraphicComponents ? (console.warn("Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext"), null) : (0, d.a)({
      component: a.component,
      props: a.props,
      componentMap: l.dynamicGraphicComponents
    });
    return null
  }
  return null == a ? null : (0, r.jsx)("div", {
    className: o()(p.container, p["aspect-ratio-".concat(i)]),
    children: h()
  })
}
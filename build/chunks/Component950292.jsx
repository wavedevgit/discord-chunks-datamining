/** Chunk was on web.js **/
/** chunk id: 950292, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk150677 = require("./150677.js"),
  Chunk213305 = require("./213305.js"),
  Chunk775030 = require("./775030.jsx"),
  Chunk402453 = require("./402453.jsx"),
  Chunk134057 = require("./134057.jsx"),
  Chunk151108 = require("./151108.js"),
  Chunk231338 = require("./231338.js"),
  Chunk687352 = require("./687352.js");

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
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function O(e) {
  let {
    src: t
  } = e;
  return (0, r.jsx)("img", {
    className: _.image,
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
    reducedMotion: o
  } = i.useContext(l.S);
  return (0, r.jsx)(c.F, h({
    className: _.lottie,
    importData: t,
    autoplay: true,
    shouldAnimate: !o.enabled
  }, n))
}

function S(e) {
  let {
    rive: t,
    props: n
  } = e;
  return (0, r.jsx)(t, h({
    className: _.rive,
    withReducedMotion: "short-loop",
    autoplay: true,
    fit: "contain",
    alignment: "center"
  }, n))
}

function I(e) {
  let {
    ref: t,
    src: n,
    fallbackImageSrc: o,
    loop: a,
    loopAt: s = 0,
    playbackRate: c,
    isWindowFocused: u
  } = e, {
    reducedMotion: d
  } = i.useContext(l.S), f = i.useRef(null);
  return (i.useImperativeHandle(t, () => f.current), i.useEffect(() => {
    let e = f.current;
    if (null != e) return null != c && (e.playbackRate = c), null != a && (e.loop = 0 === s && a), e.addEventListener("ended", t), () => {
      e.removeEventListener("ended", t)
    };

    function t() {
      null != e && true === a && 0 !== s && (e.currentTime = s, e.play())
    }
  }, [a, s, c]), i.useEffect(() => {
    var e, t;
    null != f.current && (!d.enabled && u ? null == (e = f.current) || e.play().catch(p.dG) : null == (t = f.current) || t.pause())
  }, [u, d.enabled]), d.enabled && null != o) ? (0, r.jsx)(O, {
    type: "image",
    src: o
  }) : (0, r.jsx)("video", {
    className: _.video,
    ref: f,
    src: n,
    autoPlay: !d.enabled && u,
    muted: true,
    playsInline: true,
    controls: false,
    preload: "metadata"
  })
}

function T(e) {
  var t, n, {
      aspectRatio: i = "16/9"
    } = e,
    o = b(e, ["aspectRatio"]);
  let l = (0, u.ZF)(),
    c = (0, s.C)(),
    p = null != (n = null == (t = l.isWindowFocused) ? true : t.call(l)) ? n : c;

  function m() {
    if ((0, f.Or)(o)) return (0, r.jsx)(O, h({}, o));
    if ((0, f.Am)(o)) return (0, r.jsx)(v, h({}, o));
    if ((0, f.ko)(o)) return (0, r.jsx)(S, h({}, o));
    if ((0, f.Wv)(o)) return (0, r.jsx)(I, E(h({}, o), {
      isWindowFocused: p
    }));
    if ((0, f.Mf)(o)) return null == l.dynamicGraphicComponents ? (console.warn("Dynamic graphic used but no dynamicGraphicComponents provided in ManaContext"), null) : (0, d.a)({
      component: o.component,
      props: o.props,
      componentMap: l.dynamicGraphicComponents
    });
    return null
  }
  return null == o ? null : (0, r.jsx)("div", {
    className: a()(_.container, _["aspect-ratio-".concat(i)]),
    children: m()
  })
}
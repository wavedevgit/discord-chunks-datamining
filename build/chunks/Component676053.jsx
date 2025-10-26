/** Chunk was on web.js **/
/** chunk id: 676053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk803866 = require("./803866.jsx"),
  Chunk982519 = require("./982519.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37751 = require("./37751.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function I(e) {
  var {
    title: t,
    body: n,
    assetUrl: g,
    previewUrl: b = g,
    action: v,
    caretConfig: I = {
      position: "bottom",
      align: "center"
    },
    badge: T,
    textLink: S,
    onWatchVideo: A,
    onRequestClose: C,
    popoverRef: N
  } = e, R = O(e, ["title", "body", "assetUrl", "previewUrl", "action", "caretConfig", "badge", "textLink", "onWatchVideo", "onRequestClose", "popoverRef"]);
  let P = i.useRef(null),
    w = (0, a.j1L)(b),
    D = i.useCallback(() => ({
      type: "VIDEO",
      url: g,
      proxyUrl: g,
      alt: t,
      width: 1280,
      height: 720,
      className: m.media
    }), [g, t]),
    L = i.useCallback(() => {
      null !== P.current && P.current.pause(), null == C || C()
    }, [C]),
    x = i.useCallback(() => {
      null !== P.current && P.current.pause(), null == C || C()
    }, [C]),
    M = i.useCallback(() => {
      null !== P.current && P.current.pause();
      let e = D();
      (0, l.K)({
        items: [e],
        startingIndex: 0,
        location: "VideoPopover",
        shouldHideMediaOptions: true
      }), null == C || C(), null == A || A()
    }, [D, A, C]),
    k = w ? (0, r.jsx)(a.zsu, {
      type: "image",
      src: b
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Z, {
        ref: P,
        src: b,
        width: 232,
        height: 131,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        controls: false,
        preload: "metadata"
      }), (0, r.jsx)("div", {
        className: m.playButton,
        children: (0, r.jsx)(o.JM1, {
          playing: false,
          size: "sm",
          "aria-label": h.intl.string(p.default.YpT3kk),
          onClick: M
        })
      })]
    });
  return (0, r.jsx)(c.m, y(E({}, R), {
    onRequestClose: L,
    hasVideo: true,
    children: (0, r.jsxs)("div", {
      ref: N,
      children: [(0, r.jsx)(_.N, {
        onClick: x
      }), (0, r.jsx)(d.$, {
        caretConfig: I
      }), (0, r.jsx)("div", {
        className: m.assetContainer,
        children: k
      }), (0, r.jsx)(f.Y, {
        title: t,
        body: n,
        badge: T,
        textLink: S
      }), null != v ? (0, r.jsx)(u.k, {
        actions: [v]
      }) : null]
    })
  }))
}
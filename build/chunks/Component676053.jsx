/** Chunk was on web.js **/
/** chunk id: 676053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk780842 = require("./780842.jsx"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk454028 = require("./454028.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk237872 = require("./237872.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk37751 = require("./37751.js");

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
  var {
    title: t,
    body: n,
    assetUrl: h,
    action: g,
    caretConfig: y = {
      position: "bottom",
      align: "center"
    },
    badge: O,
    textLink: v,
    onWatchVideo: I,
    onRequestClose: T,
    popoverRef: S
  } = e, A = b(e, ["title", "body", "assetUrl", "action", "caretConfig", "badge", "textLink", "onWatchVideo", "onRequestClose", "popoverRef"]);
  let N = i.useRef(null),
    C = h.endsWith(".gif") || h.endsWith(".webp") || h.endsWith(".png"),
    R = i.useCallback(() => ({
      type: "VIDEO",
      url: h,
      proxyUrl: h,
      alt: t,
      width: 1280,
      height: 720,
      className: p.media
    }), [h, t]),
    P = i.useCallback(() => {
      null !== N.current && N.current.pause(), null == T || T()
    }, [T]),
    w = i.useCallback(() => {
      null !== N.current && N.current.pause(), null == T || T()
    }, [T]),
    D = i.useCallback(() => {
      null !== N.current && N.current.pause();
      let e = R();
      (0, s.K)({
        items: [e],
        startingIndex: 0,
        location: "VideoPopover",
        shouldHideMediaOptions: true
      }), null == T || T(), null == I || I()
    }, [R, I, T]),
    L = C ? (0, r.jsx)("img", {
      src: h,
      alt: "",
      draggable: false,
      className: p.inlineAsset
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Z, {
        ref: N,
        src: h,
        width: 240,
        height: 135,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        className: p.inlineAsset,
        controls: false,
        preload: "metadata"
      }), (0, r.jsx)("div", {
        className: p.playButton,
        children: (0, r.jsx)(o.J, {
          playing: false,
          size: "sm",
          "aria-label": "Play video: ".concat(t),
          onClick: D
        })
      })]
    });
  return (0, r.jsx)(l.m, E(m({}, A), {
    onRequestClose: P,
    hasVideo: true,
    children: (0, r.jsxs)("div", {
      ref: S,
      children: [(0, r.jsx)(f.u, {
        onClick: w,
        colorMix: true
      }), (0, r.jsx)(d.$, {
        caretConfig: y
      }), (0, r.jsx)(u.V, {
        asset: (0, r.jsx)("div", {
          className: p.assetContainer,
          children: L
        }),
        size: "video"
      }), (0, r.jsx)(_.Y, {
        title: t,
        body: n,
        badge: O,
        textLink: v,
        hasBottomMargin: null != g
      }), null != g ? (0, r.jsx)(c.k, {
        actions: [g]
      }) : null]
    })
  }))
}
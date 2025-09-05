/** Chunk was on web.js **/
/** chunk id: 676053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk780842 = require("./780842.jsx"),
  Chunk751334 = require("./751334.jsx"),
  Chunk587272 = require("./587272.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk803866 = require("./803866.jsx"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37751 = require("./37751.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function T(e) {
  var {
    title: t,
    body: n,
    assetUrl: E,
    previewUrl: y = E,
    action: I,
    caretConfig: T = {
      position: "bottom",
      align: "center"
    },
    badge: S,
    textLink: A,
    onWatchVideo: C,
    onRequestClose: N,
    popoverRef: R
  } = e, P = v(e, ["title", "body", "assetUrl", "previewUrl", "action", "caretConfig", "badge", "textLink", "onWatchVideo", "onRequestClose", "popoverRef"]);
  let w = i.useRef(null),
    D = (0, s.j1)(y),
    x = i.useCallback(() => ({
      type: "VIDEO",
      url: E,
      proxyUrl: E,
      alt: t,
      width: 1280,
      height: 720,
      className: g.media
    }), [E, t]),
    L = i.useCallback(() => {
      null !== w.current && w.current.pause(), null == N || N()
    }, [N]),
    j = i.useCallback(() => {
      null !== w.current && w.current.pause(), null == N || N()
    }, [N]),
    k = i.useCallback(() => {
      null !== w.current && w.current.pause();
      let e = x();
      (0, c.K)({
        items: [e],
        startingIndex: 0,
        location: "VideoPopover",
        shouldHideMediaOptions: true
      }), null == N || N(), null == C || C()
    }, [x, C, N]),
    M = D ? (0, r.jsx)(o.z, {
      type: "image",
      src: y
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Z, {
        ref: w,
        src: y,
        width: 232,
        height: 131,
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        controls: false,
        preload: "metadata"
      }), (0, r.jsx)("div", {
        className: g.playButton,
        children: (0, r.jsx)(a.J, {
          playing: false,
          size: "sm",
          "aria-label": m.intl.string(h.default.YpT3kp),
          onClick: k
        })
      })]
    });
  return (0, r.jsx)(u.m, O(b({}, P), {
    onRequestClose: L,
    hasVideo: true,
    children: (0, r.jsxs)("div", {
      ref: R,
      children: [(0, r.jsx)(p.N, {
        onClick: j
      }), (0, r.jsx)(f.$, {
        caretConfig: T
      }), (0, r.jsx)("div", {
        className: g.assetContainer,
        children: M
      }), (0, r.jsx)(_.Y, {
        title: t,
        body: n,
        badge: S,
        textLink: A,
        hasBottomMargin: null != I
      }), null != I ? (0, r.jsx)(d.k, {
        actions: [I]
      }) : null]
    })
  }))
}
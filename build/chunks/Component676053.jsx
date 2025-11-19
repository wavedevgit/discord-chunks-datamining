/** Chunk was on web.js **/
/** chunk id: 676053, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk150677 = require("./150677.js"),
  Chunk793030 = require("./793030.js"),
  Chunk159691 = require("./159691.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk312097 = require("./312097.jsx"),
  Chunk920155 = require("./920155.jsx"),
  Chunk744399 = require("./744399.jsx"),
  Chunk966902 = require("./966902.jsx"),
  Chunk562618 = require("./562618.jsx"),
  Chunk803866 = require("./803866.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk298200 = require("./298200.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk37751 = require("./37751.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e) {
  var t, n, b, {
      title: O,
      body: T,
      assetUrl: S,
      previewUrl: A = S,
      disableMediaViewer: C = false,
      action: N,
      caretConfig: R = {
        position: "bottom",
        align: "center"
      },
      badge: P,
      textLink: D,
      onWatchVideo: w,
      onRequestClose: L,
      popoverRef: x
    } = e,
    M = I(e, ["title", "body", "assetUrl", "previewUrl", "disableMediaViewer", "action", "caretConfig", "badge", "textLink", "onWatchVideo", "onRequestClose", "popoverRef"]);
  let {
    reducedMotion: j
  } = i.useContext(o.Sfi), k = (0, a.C)(), U = null != (b = null == (t = (n = (0, o.ZFG)()).isWindowFocused) ? true : t.call(n)) ? b : k, G = i.useRef(null), B = (0, o.j1L)(A), Z = i.useCallback(() => ({
    type: "VIDEO",
    url: S,
    proxyUrl: S,
    alt: O,
    width: 1280,
    height: 720,
    className: E.media
  }), [S, O]);
  i.useEffect(() => {
    var e, t;
    null != G.current && (!j.enabled && U ? null == (e = G.current) || e.play().catch(h.dG) : null == (t = G.current) || t.pause())
  }, [U, j.enabled]);
  let F = i.useCallback(() => {
      null !== G.current && G.current.pause(), null == L || L()
    }, [L]),
    V = i.useCallback(() => {
      null !== G.current && G.current.pause(), null == L || L()
    }, [L]),
    H = i.useCallback(() => {
      null !== G.current && G.current.pause();
      let e = Z();
      (0, c.K)({
        items: [e],
        startingIndex: 0,
        location: "VideoPopover",
        shouldHideMediaOptions: true
      }), null == L || L(), null == w || w()
    }, [Z, w, L]),
    Y = B ? (0, r.jsx)(o.zsu, {
      type: "image",
      src: A
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Z, {
        ref: G,
        src: A,
        width: 232,
        height: 131,
        autoPlay: !j.enabled && U,
        muted: true,
        loop: true,
        playsInline: true,
        controls: false,
        preload: "metadata"
      }), !C && (0, r.jsx)("div", {
        className: E.playButton,
        children: (0, r.jsx)(s.JM1, {
          playing: false,
          size: "sm",
          "aria-label": g.intl.string(m.default.YpT3kk),
          onClick: H
        })
      })]
    });
  return (0, r.jsx)(u.m, v(y({}, M), {
    onRequestClose: F,
    hasVideo: true,
    children: (0, r.jsxs)("div", {
      ref: x,
      children: [(0, r.jsx)(p.N, {
        onClick: V
      }), (0, r.jsx)(f.$, {
        caretConfig: R
      }), (0, r.jsx)("div", {
        className: E.assetContainer,
        children: Y
      }), (0, r.jsx)(_.Y, {
        title: O,
        body: T,
        badge: P,
        textLink: D
      }), null != N ? (0, r.jsx)(d.k, {
        actions: [N]
      }) : null]
    })
  }))
}
/** Chunk was on web.js **/
/** chunk id: 206248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk941861 = require("./941861.js"),
  Chunk158954 = require("./158954.js"),
  Chunk732955 = require("./732955.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk256905 = require("./256905.jsx"),
  Chunk964892 = require("./964892.jsx"),
  Chunk208756 = require("./208756.jsx"),
  Chunk135564 = require("./135564.jsx"),
  Chunk627330 = require("./627330.jsx"),
  Chunk478542 = require("./478542.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk763600 = require("./763600.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk161222 = require("./161222.js");

function y(e, t, n) {
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
      y(e, t, n[t])
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

function A(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = I(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function S(e) {
  var t, n, y;
  let {
    title: O,
    body: I,
    assetUrl: S,
    previewUrl: T = S,
    disableMediaViewer: C = false,
    action: N,
    caretConfig: w = {
      align: "center"
    },
    badge: R,
    textLink: P,
    onWatchVideo: D,
    onRequestClose: L,
    popoverRef: x,
    position: M
  } = e, j = A(e, ["title", "body", "assetUrl", "previewUrl", "disableMediaViewer", "action", "caretConfig", "badge", "textLink", "onWatchVideo", "onRequestClose", "popoverRef", "position"]), {
    reducedMotion: k
  } = i.useContext(o.CZY), U = (0, a.R)(), G = null != (t = null == (n = (y = (0, o.G98)()).isWindowFocused) ? true : n.call(y)) ? t : U, F = i.useRef(null), V = (0, o.RJq)(T), B = i.useCallback(() => ({
    type: "VIDEO",
    url: S,
    proxyUrl: S,
    alt: O,
    width: 1280,
    height: 720,
    className: E.$_
  }), [S, O]);
  i.useEffect(() => {
    var e, t;
    null != F.current && (!k.enabled && G ? null == (e = F.current) || e.play().catch(h.tE) : null == (t = F.current) || t.pause())
  }, [G, k.enabled]);
  let H = i.useCallback(() => {
      null !== F.current && F.current.pause(), null == L || L()
    }, [L]),
    Y = i.useCallback(() => {
      null !== F.current && F.current.pause(), null == L || L()
    }, [L]),
    W = i.useCallback(() => {
      null !== F.current && F.current.pause();
      let e = B();
      (0, c.R)({
        items: [e],
        startingIndex: 0,
        location: "VideoPopover",
        shouldHideMediaOptions: true
      }), null == L || L(), null == D || D()
    }, [B, D, L]),
    K = V ? (0, r.jsx)(o.vYh, {
      type: "image",
      src: T
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.A, {
        ref: F,
        src: T,
        width: 232,
        height: 131,
        autoPlay: !k.enabled && G,
        muted: true,
        loop: true,
        playsInline: true,
        controls: false,
        preload: "metadata"
      }), !C && (0, r.jsx)("div", {
        className: E.Rr,
        children: (0, r.jsx)(s.DMX, {
          playing: false,
          size: "sm",
          "aria-label": g.intl.string(m.default.YpT3kk),
          onClick: W
        })
      })]
    }),
    z = b({
      targetElementRef: j.targetElementRef,
      shouldShow: j.shouldShow,
      scrollBehavior: j.scrollBehavior,
      position: M,
      onRequestClose: H,
      hasVideo: true,
      caretConfig: w
    }, "edge" === j.alignmentStrategy ? {
      alignmentStrategy: "edge",
      align: j.align
    } : {
      alignmentStrategy: "trigger-center"
    });
  return (0, r.jsx)(u.x, v(b({}, z), {
    children: (0, r.jsxs)("div", {
      ref: x,
      children: [(0, r.jsx)(_.p, {
        onClick: Y
      }), (0, r.jsx)(f.F, {}), (0, r.jsx)("div", {
        className: E.s,
        children: K
      }), (0, r.jsx)(p.D, {
        title: O,
        body: I,
        badge: R,
        textLink: P
      }), null != N ? (0, r.jsx)(d.Z, {
        actions: [N]
      }) : null]
    })
  }))
}
/** Chunk was on web.js **/
/** chunk id: 922745, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S,
  r: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk312956 = require("./312956.js"),
  Chunk501967 = require("./501967.jsx"),
  Chunk19780 = require("./19780.js"),
  Chunk540028 = require("./540028.jsx"),
  Chunk507675 = require("./507675.jsx"),
  Chunk273716 = require("./273716.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk186880 = require("./186880.js");

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
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    title: t,
    onJumpToChannel: n,
    onHide: i,
    idle: o,
    preventIdleComponent: s
  } = e, c = (0, a.e7)([f.Z], () => f.Z.getChannelId()), d = null != c ? (0, r.jsx)(p.Z, {
    voiceChannelId: c,
    idle: o
  }) : null, {
    enabled: _
  } = u.Z.useExperiment({
    location: "PictureInPicturePlayer"
  });
  return (0, r.jsxs)(s, {
    className: g.headerIdleContainer,
    children: [(0, r.jsxs)(l.P3F, {
      className: g.headerTitle,
      onClick: n,
      children: [(0, r.jsx)(l.whL, {
        size: "custom",
        color: "currentColor",
        "aria-label": h.intl.string(h.t.mSfLs0),
        className: g.backButton,
        width: 20,
        height: 20
      }), (0, r.jsx)(l.Heading, {
        variant: "heading-md/normal",
        className: g.headerText,
        color: "always-white",
        children: t
      })]
    }), _ && null != i ? (0, r.jsx)(m.Z, {
      onClick: i,
      label: h.intl.string(h.t.BEuDEn)
    }) : null, d]
  })
}

function S(e) {
  var {
    children: t,
    idle: n,
    onJumpToChannel: i,
    onHide: a,
    backgroundKey: l,
    onActive: u,
    onForceIdle: f,
    renderBottomLeftControls: p,
    renderBottomRightControls: m,
    screenMessage: h,
    hideControls: E = false,
    className: O,
    innerClassName: S,
    videoControlsClassName: I
  } = e, T = y(e, ["children", "idle", "onJumpToChannel", "onHide", "backgroundKey", "onActive", "onForceIdle", "renderBottomLeftControls", "renderBottomRightControls", "screenMessage", "hideControls", "className", "innerClassName", "videoControlsClassName"]);
  return (0, r.jsxs)("div", {
    onMouseMove: u,
    onMouseDown: u,
    onMouseLeave: f,
    className: o()(g.pictureInPictureVideo, {
      [g.idle]: n
    }, O),
    onDoubleClick: i,
    children: [(0, r.jsx)(s.W, {
      children: (0, r.jsx)(d.B, {
        className: S,
        children: t
      }, l)
    }), null != h ? (0, r.jsx)(_.Z, b({
      size: "small"
    }, h)) : null, !E && (0, r.jsxs)("div", {
      className: o()(g.videoControls, I, "theme-dark"),
      children: [(0, r.jsx)("div", {
        className: g.topControls,
        children: (0, r.jsx)(v, b({
          idle: n,
          onJumpToChannel: i,
          onHide: a
        }, T))
      }), (0, r.jsxs)("div", {
        className: g.bottomControls,
        children: [(0, r.jsx)(c.Z, {
          grow: 0,
          shrink: 1,
          basis: "50%",
          align: c.Z.Align.CENTER,
          className: g.bottomLeftControls,
          children: null == p ? true : p()
        }), (0, r.jsx)(c.Z, {
          grow: 0,
          shrink: 1,
          justify: c.Z.Justify.END,
          basis: "50%",
          align: c.Z.Align.CENTER,
          children: null == m ? true : m()
        })]
      })]
    })]
  })
}
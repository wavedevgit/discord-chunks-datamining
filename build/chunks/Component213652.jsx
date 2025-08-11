/** Chunk was on web.js **/
/** chunk id: 213652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk441167 = require("./441167.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk358221 = require("./358221.js"),
  Chunk522651 = require("./522651.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk940221 = require("./940221.js");

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

function I(e) {
  let {
    channel: t
  } = e, {
    parentAnalyticsLocation: n
  } = (0, s.ZP)(), b = (0, o.e7)([p.Z], () => p.Z.getSelectedParticipant(t.id)), O = (null == b ? true : b.type) === m.fO.STREAM, I = (0, o.e7)([f.Z], () => O ? f.Z.getActiveStreamForStreamKey(b.id) : null), {
    ignoreSenderPreference: T
  } = u.Z.useExperiment({
    location: "ActionBarClipsButton"
  }, {
    autoTrackExposure: false
  }), {
    viewerClippingAllowed: S,
    isAtMaxSavingClipOperations: A
  } = (0, o.cj)([l.Z], () => ({
    viewerClippingAllowed: null != I && (l.Z.isViewerClippingAllowedForUser(I.ownerId) || T),
    isAtMaxSavingClipOperations: l.Z.getIsAtMaxSaveClipOperations()
  })), N = l.Z.getSettings().clipsEnabled, C = (null == I ? true : I.ownerId) === _.default.getId(), R = !N || !(C || S) || A || null == b, P = () => {
    R || ((0, h.v)(n, h.d.CLIP), C ? (0, c.C1)() : (0, c.C1)(b.id))
  }, w = () => null == I ? g.intl.string(g.t.eg5qtb) : C || S ? N ? A ? true : g.intl.string(g.t.U4URzM) : g.intl.string(g.t.wSS1yM) : g.intl.string(g.t.aRifJS), D = i.useCallback(e => (0, r.jsx)(a.xmR, v(y({}, e), {
    color: "currentColor"
  })), []);
  return (0, r.jsx)(d.Z, {
    className: E.actionBarButton,
    onClick: P,
    disabled: R,
    iconComponent: D,
    label: w(),
    grow: false
  })
}
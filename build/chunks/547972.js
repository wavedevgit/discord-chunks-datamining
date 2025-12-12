/** Chunk was on web.js **/
/** chunk id: 547972, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk332325 = require("./332325.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  switch (e) {
    case o.Z.MY_GAMES:
      return [r.n.REGISTERED_GAMES_PANEL, a.oAB.REGISTERED_GAMES];
    case o.Z.CLIPS:
      return [r.n.CLIPS_PANEL, a.oAB.CLIPS];
    case o.Z.OVERLAY:
      return [r.n.OVERLAY_PANEL, a.oAB.OVERLAY];
    case o.Z.ACTIVITY_PRIVACY:
      return [r.n.ACTIVITY_PRIVACY_PANEL, a.oAB.ACTIVITY_PRIVACY]
  }
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    [n, r] = c(e);
  (0, i.openUserSettings)(n, l({
    section: r
  }, t))
}
/** Chunk was on web.js **/
/** chunk id: 725177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk857266 = require("./857266.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
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
      o(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  switch (e) {
    case a.J.MY_GAMES:
      return [r.X.REGISTERED_GAMES_PANEL, s.nc_.REGISTERED_GAMES];
    case a.J.OVERLAY:
      return [r.X.OVERLAY_PANEL, s.nc_.OVERLAY];
    case a.J.ACTIVITY_PRIVACY:
      return [r.X.ACTIVITY_PRIVACY_PANEL, s.nc_.ACTIVITY_PRIVACY]
  }
}

function u(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    [n, r] = c(e);
  (0, i.openUserSettings)(n, l({
    section: r
  }, t))
}
/** Chunk was on web.js **/
/** chunk id: 545408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => u
}), require("./473749.js");
var Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk626135 = require("./626135.js"),
  Chunk50493 = require("./50493.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t, n) {
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.Z.MEMBER_SAFETY_PAGE,
    u = c({
      guild_id: e,
      target_user_id: t,
      subpanel_name: a.Y[n],
      location: l
    }, (0, i.hH)(e));
  return o.default.track(s.rMx.GUILD_MOD_VIEW_OPENED, u)
}
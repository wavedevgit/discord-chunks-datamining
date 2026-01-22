/** Chunk was on web.js **/
/** chunk id: 167866, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => u
}), require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486974 = require("./486974.js"),
  Chunk652215 = require("./652215.js");

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
  let l = arguments.length > 3 && true !== arguments[3] ? arguments[3] : r.A.MEMBER_SAFETY_PAGE,
    u = c({
      guild_id: e,
      target_user_id: t,
      subpanel_name: s.n[n],
      location: l
    }, (0, i.H$)(e));
  return a.default.track(o.HAw.GUILD_MOD_VIEW_OPENED, u)
}
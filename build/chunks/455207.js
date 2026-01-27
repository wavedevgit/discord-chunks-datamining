/** Chunk was on web.js **/
/** chunk id: 455207, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  MZ: () => d,
  NB: () => f,
  sx: () => p
});
var Chunk58149 = require("./58149.js"),
  Chunk943667 = require("./943667.js"),
  Chunk954571 = require("./954571.js"),
  Chunk124759 = require("./124759.js"),
  Chunk652215 = require("./652215.js"),
  Chunk375577 = require("./375577.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  return (0, i.A)(e) && e.messageReference.guild_id === o.Vi || null != e.author && e.author.id === o.hs
}

function f() {
  return l
}
let p = e => {
  a.default.track(s.HAw.USER_FLOW_TRANSITION, u({
    flow_type: o.bK,
    from_step: e.fromStep,
    to_step: e.toStep
  }, (0, r.H$)(e.guildId)))
}
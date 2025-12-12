/** Chunk was on web.js **/
/** chunk id: 715903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EY: () => u,
  Ow: () => l,
  no: () => c,
  ux: () => d
}), require("./388685.js"), require("./539854.js"), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk271383 = require("./271383.js"),
  Chunk372897 = require("./372897.js");
let s = [Chunk372897.q.AUTOMOD_QUARANTINED_BIO, Chunk372897.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, Chunk372897.q.AUTOMOD_QUARANTINED_SERVER_TAG];

function l(e) {
  return null == e ? new Set : new Set(s.reduce((t, n) => ((0, r.yE)(null != e ? e : 0, n) && t.push(n), t), []))
}

function c(e) {
  return null == e ? new Set : l(e.flags)
}

function u(e) {
  return null != e && null != e.flags && s.some(t => {
    var n;
    return (0, r.yE)(null != (n = e.flags) ? n : 0, t)
  })
}

function d(e) {
  return (0, i.e7)([o.ZP], () => null != e && u(o.ZP.getSelfMember(e)), [e])
}
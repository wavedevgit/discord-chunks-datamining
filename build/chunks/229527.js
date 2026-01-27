/** Chunk was on web.js **/
/** chunk id: 229527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TR: () => u,
  ix: () => d,
  wR: () => l,
  wj: () => c
}), require("./896048.js"), require("./321073.js"), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk696451 = require("./696451.js"),
  Chunk340837 = require("./340837.js");
let s = [Chunk340837.D.AUTOMOD_QUARANTINED_BIO, Chunk340837.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME, Chunk340837.D.AUTOMOD_QUARANTINED_SERVER_TAG];

function l(e) {
  return null == e ? new Set : new Set(s.reduce((t, n) => ((0, r.Lt)(null != e ? e : 0, n) && t.push(n), t), []))
}

function c(e) {
  return null == e ? new Set : l(e.flags)
}

function u(e) {
  return null != e && null != e.flags && s.some(t => {
    var n;
    return (0, r.Lt)(null != (n = e.flags) ? n : 0, t)
  })
}

function d(e) {
  return (0, i.bG)([a.Ay], () => null != e && u(a.Ay.getSelfMember(e)), [e])
}
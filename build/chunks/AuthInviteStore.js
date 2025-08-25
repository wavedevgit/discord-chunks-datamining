/** Chunk was on web.js **/
/** chunk id: 943881, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk411198 = require("./411198.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {};

function c(e) {
  let {
    invite: t
  } = e, n = t.guild;
  if (null == n) returnfalse;
  l[n.id] = (0, a.Qs)(n)
}
class u extends(r = Chunk442837.ZP.Store) {
  getGuild(e) {
    return l[e]
  }
}
s(u, "displayName", "AuthInviteStore");
let d = new u(Chunk570140.Z, {
  AUTH_INVITE_UPDATE: c
})
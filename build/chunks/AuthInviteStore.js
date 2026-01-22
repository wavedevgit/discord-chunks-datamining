/** Chunk was on web.js **/
/** chunk id: 403727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk860689 = require("./860689.js");

function o(e, t, n) {
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
  l[n.id] = (0, s.DY)(n)
}
class u extends(r = Chunk311907.Ay.Store) {
  getGuild(e) {
    return l[e]
  }
}
o(u, "displayName", "AuthInviteStore");
let d = new u(Chunk73153.h, {
  AUTH_INVITE_UPDATE: c
})
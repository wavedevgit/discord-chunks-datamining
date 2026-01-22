/** Chunk was on web.js **/
/** chunk id: 492494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Eg: () => i,
  JN: () => s,
  kT: () => a
});
var Chunk384684 = require("./384684.js");

function i(e, t) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == t) returnfalse;
  let n = r.A.getSubscriptionRoles(t);
  return e.roles.some(e => n.has(e))
}

function a(e) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == e.guildId) returnfalse;
  let t = r.A.getPurchasableSubscriptionRoles(e.guildId);
  return e.roles.some(e => t.has(e))
}

function s(e, t) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == e.guildId) returnfalse;
  if (a(e)) {
    let n = r.A.getUserSubscriptionRoles(e.guildId),
      i = e.roles.some(e => n.has(e)),
      a = t === e.guildId && r.A.getUserIsAdmin(e.guildId);
    if (!(i || a)) returntrue
  }
  returnfalse
}
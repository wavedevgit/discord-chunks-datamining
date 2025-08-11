/** Chunk was on web.js **/
/** chunk id: 889564, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fv: () => a,
  Kt: () => i,
  yH: () => o
});
var Chunk687476 = require("./687476.js");

function i(e, t) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == t) returnfalse;
  let n = r.Z.getSubscriptionRoles(t);
  return e.roles.some(e => n.has(e))
}

function o(e) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == e.guildId) returnfalse;
  let t = r.Z.getPurchasableSubscriptionRoles(e.guildId);
  return e.roles.some(e => t.has(e))
}

function a(e, t) {
  if ((null == e ? true : e.roles) == null || 0 === e.roles.length || null == e.guildId) returnfalse;
  if (o(e)) {
    let n = r.Z.getUserSubscriptionRoles(e.guildId),
      i = e.roles.some(e => n.has(e)),
      o = t === e.guildId && r.Z.getUserIsAdmin(e.guildId);
    if (!(i || o)) returntrue
  }
  returnfalse
}
/** Chunk was on web.js **/
/** chunk id: 380221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = new Map,
  o = new Set;

function s(e) {
  o.add(e.userId)
}

function l(e) {
  o.delete(e.userId), a.set(e.userId, e.identities)
}

function c(e) {
  o.delete(e.userId)
}

function u(e) {
  let t = a.get(e.user_id);
  if (null == t) returnfalse;
  a.set(e.user_id, t.filter(t => t.application_id !== e.application_id))
}
class d extends Chunk442837.ZP.Store {
  getUserIdentities(e) {
    var t;
    return null != (t = a.get(e)) ? t : null
  }
  isFetchingUser(e) {
    return o.has(e)
  }
}
let f = new d(Chunk570140.Z, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: s,
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: l,
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: c,
  USER_APPLICATION_IDENTITY_REMOVE: u
})
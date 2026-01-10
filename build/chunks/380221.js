/** Chunk was on web.js **/
/** chunk id: 380221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");
let a = new Map,
  o = new Set;

function s(e, t) {
  let n = new Map(t.map(e => [e.application_id, e]));
  a.set(e, {
    identities: t,
    byApplication: n
  })
}

function l(e) {
  o.add(e.userId)
}

function c(e) {
  o.delete(e.userId), s(e.userId, e.identities)
}

function u(e) {
  o.delete(e.userId)
}

function d(e) {
  let t = a.get(e.user_id);
  if (null == t) returnfalse;
  s(e.user_id, t.identities.filter(t => t.application_id !== e.application_id))
}
class f extends Chunk442837.ZP.Store {
  getUserIdentities(e) {
    var t, n;
    return null != (n = null == (t = a.get(e)) ? true : t.identities) ? n : null
  }
  getUserIdentityByApplication(e, t) {
    var n, r;
    return null != (r = null == (n = a.get(e)) ? true : n.byApplication.get(t)) ? r : null
  }
  isFetchingUser(e) {
    return o.has(e)
  }
}
let p = new f(Chunk570140.Z, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: l,
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: c,
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: u,
  USER_APPLICATION_IDENTITY_REMOVE: d
})
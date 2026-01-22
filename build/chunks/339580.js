/** Chunk was on web.js **/
/** chunk id: 339580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");
let a = new Map,
  s = new Set;

function o(e, t) {
  let n = new Map(t.map(e => [e.application_id, e]));
  a.set(e, {
    identities: t,
    byApplication: n
  })
}

function l(e) {
  s.add(e.userId)
}

function c(e) {
  s.delete(e.userId), o(e.userId, e.identities)
}

function u(e) {
  s.delete(e.userId)
}

function d(e) {
  let t = a.get(e.user_id);
  if (null == t) returnfalse;
  o(e.user_id, t.identities.filter(t => t.application_id !== e.application_id))
}
class f extends Chunk311907.Ay.Store {
  getUserIdentities(e) {
    var t, n;
    return null != (t = null == (n = a.get(e)) ? true : n.identities) ? t : null
  }
  getUserIdentityByApplication(e, t) {
    var n, r;
    return null != (n = null == (r = a.get(e)) ? true : r.byApplication.get(t)) ? n : null
  }
  isFetchingUser(e) {
    return s.has(e)
  }
}
let p = new f(Chunk73153.h, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: l,
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: c,
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: u,
  USER_APPLICATION_IDENTITY_REMOVE: d
})
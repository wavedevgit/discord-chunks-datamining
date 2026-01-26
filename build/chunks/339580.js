/** Chunk was on web.js **/
/** chunk id: 339580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  e: () => a
}), require("./896048.js");
var Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  a = function(e) {
    return e.NOT_FETCHED = "NOT_FETCHED", e.FETCHING = "FETCHING", e.FETCHED = "FETCHED", e
  }({});
let s = new Map,
  o = new Map;

function l(e, t) {
  let n = new Map(t.map(e => [e.application_id, e]));
  s.set(e, {
    identities: t,
    byApplication: n
  }), o.set(e, "FETCHED")
}

function c(e) {
  o.set(e.userId, "FETCHING")
}

function u(e) {
  o.set(e.userId, "FETCHED"), l(e.userId, e.identities)
}

function d(e) {
  o.set(e.userId, "FETCHED")
}

function f(e) {
  let t = s.get(e.user_id);
  if (null == t) returnfalse;
  l(e.user_id, t.identities.filter(t => t.application_id !== e.application_id))
}
class p extends Chunk311907.Ay.Store {
  getUserIdentities(e) {
    var t, n;
    return null != (t = null == (n = s.get(e)) ? true : n.identities) ? t : null
  }
  getUserIdentityByApplication(e, t) {
    var n, r;
    return null != (n = null == (r = s.get(e)) ? true : r.byApplication.get(t)) ? n : null
  }
  getFetchState(e) {
    var t;
    return null != (t = o.get(e)) ? t : "NOT_FETCHED"
  }
  isFetchingUser(e) {
    return "FETCHING" === this.getFetchState(e)
  }
}
let _ = new p(Chunk73153.h, {
  USER_APPLICATION_IDENTITY_FETCH_USER_START: c,
  USER_APPLICATION_IDENTITY_FETCH_USER_SUCCESS: u,
  USER_APPLICATION_IDENTITY_FETCH_USER_FAILURE: d,
  USER_APPLICATION_IDENTITY_REMOVE: f
})
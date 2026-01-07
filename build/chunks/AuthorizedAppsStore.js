/** Chunk was on web.js **/
/** chunk id: 881998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  FetchState: () => u,
  default: () => S
}), require("./388685.js"), require("./539854.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk757266 = require("./757266.js"),
  Chunk375954 = require("./375954.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function(e) {
  return e.NOT_FETCHED = "NOT_FETCHED", e.FETCHING = "FETCHING", e.FETCHED = "FETCHED", e
}({});
let d = new Map,
  f = [],
  p = [],
  _ = "NOT_FETCHED",
  m = new Map;

function h() {
  _ = "FETCHING", m.clear()
}

function g(e) {
  m.set(e.applicationId, "FETCHING")
}

function E(e) {
  m.set(e.applicationId, "FETCHED"), e.tokens.forEach(e => {
    f = f.filter(t => t.id !== e.id), d.set(e.application.id, e), f.push(e), null == e.application.parent_id && p.push(e)
  })
}

function b(e) {
  _ = "FETCHED", m.clear(), d = new Map(e.tokens.map(e => [e.application.id, e])), p = (f = e.tokens).filter(e => {
    let {
      application: t
    } = e;
    return null == t.parent_id
  })
}

function y(e) {
  let {
    id: t,
    application: n,
    scopes: r
  } = e, i = d.get(n.id);
  null != i && (f = f.filter(e => {
    let {
      application: t
    } = e;
    return t.id !== i.application.id
  }), p = p.filter(e => {
    let {
      application: t
    } = e;
    return t.id !== i.application.id
  }));
  let a = {
    id: t,
    application: n,
    scopes: r
  };
  d.set(a.application.id, a), f = [...f, a], null == a.application.parent_id && (p = [...p, a])
}

function O(e) {
  let {
    id: t,
    applicationId: n
  } = e, r = d.get(n);
  if (null == r || r.id !== t) returnfalse;
  d.delete(r.application.id), f = f.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  }), p = p.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  })
}
class v extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(o.Z, s.Z, l.Z)
  }
  getNewestTokenForApplication(e) {
    var t;
    return null == e ? null : null != (t = d.get(e)) ? t : null
  }
  getNewestTokens() {
    return f
  }
  getNewestTokensForNonChildrenApplications() {
    return p
  }
  getFetchState() {
    return _
  }
  getFetchStateForApplication(e) {
    var t;
    return "FETCHED" === _ ? _ : null != (t = m.get(e)) ? t : _
  }
}
c(v, "displayName", "AuthorizedAppsStore");
let S = new v(Chunk570140.Z, {
  USER_AUTHORIZED_APPS_REQUEST: h,
  USER_AUTHORIZED_APPS_REQUEST_BY_ID: g,
  USER_AUTHORIZED_APPS_UPDATE: b,
  USER_AUTHORIZED_APPS_UPDATE_BY_ID: E,
  OAUTH2_TOKEN_CREATE: y,
  OAUTH2_TOKEN_DELETE: O
})
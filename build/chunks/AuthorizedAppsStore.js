/** Chunk was on web.js **/
/** chunk id: 881998, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => u,
  Z: () => y
}), require("./388685.js");
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
  _ = [],
  p = "NOT_FETCHED";

function h() {
  p = "FETCHING"
}

function m(e) {
  p = "FETCHED", d = new Map(e.tokens.map(e => [e.application.id, e])), _ = (f = e.tokens).filter(e => {
    let {
      application: t
    } = e;
    return null == t.parent_id
  })
}

function g(e) {
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
  }), _ = _.filter(e => {
    let {
      application: t
    } = e;
    return t.id !== i.application.id
  }));
  let o = {
    id: t,
    application: n,
    scopes: r
  };
  d.set(o.application.id, o), f = [...f, o], null == o.application.parent_id && (_ = [..._, o])
}

function E(e) {
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
  }), _ = _.filter(e => {
    let {
      id: t
    } = e;
    return t !== r.id
  })
}
class b extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk757266.Z, Chunk375954.Z)
  }
  getNewestTokenForApplication(e) {
    var t;
    return null == e ? null : null != (t = d.get(e)) ? t : null
  }
  getNewestTokens() {
    return f
  }
  getNewestTokensForNonChildrenApplications() {
    return _
  }
  getFetchState() {
    return p
  }
}
c(b, "displayName", "AuthorizedAppsStore");
let y = new b(Chunk570140.Z, {
  USER_AUTHORIZED_APPS_REQUEST: h,
  USER_AUTHORIZED_APPS_UPDATE: m,
  OAUTH2_TOKEN_CREATE: g,
  OAUTH2_TOKEN_DELETE: E
})
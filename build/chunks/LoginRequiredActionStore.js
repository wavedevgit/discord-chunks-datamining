/** Chunk was on web.js **/
/** chunk id: 715314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {},
  l = null,
  c = null;

function u(e, t) {
  null == t ? e in o && delete o[e] : null != e && (o[e] = t)
}

function d(e) {
  let {
    required_actions: t,
    user_id: n
  } = e;
  u(l = n, t)
}

function f(e) {
  let {
    user: t
  } = e;
  c = t.id
}

function p(e) {
  let {
    userId: t
  } = e;
  u(t, null)
}

function _(e) {
  let {
    isSwitchingAccount: t
  } = e;
  t || null == c || u(c, null)
}

function h(e) {
  let {
    userId: t
  } = e;
  u(t, null)
}
class m extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (o = e)
  }
  requiredActions(e) {
    var t;
    return null != (t = o[e]) ? t : null
  }
  requiredActionsIncludes(e, t) {
    let n = this.requiredActions(e);
    return null != n && t.reduce((e, t) => e || n.includes(t), false)
  }
  wasLoginAttemptedInSession(e) {
    return l === e
  }
  getState() {
    return o
  }
}
s(m, "displayName", "LoginRequiredActionStore"), s(m, "persistKey", "LoginRequiredActionStore");
let g = new m(Chunk73153.h, {
  LOGIN_ATTEMPTED: d,
  CONNECTION_OPEN: f,
  CURRENT_USER_UPDATE: f,
  LOGOUT: _,
  PASSWORD_UPDATED: p,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: h
})
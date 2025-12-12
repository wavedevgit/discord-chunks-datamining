/** Chunk was on web.js **/
/** chunk id: 344532, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {},
  l = null,
  c = null;

function u(e, t) {
  null == t ? e in s && delete s[e] : null != e && (s[e] = t)
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

function m(e) {
  let {
    userId: t
  } = e;
  u(t, null)
}
class h extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (s = e)
  }
  requiredActions(e) {
    var t;
    return null != (t = s[e]) ? t : null
  }
  requiredActionsIncludes(e, t) {
    let n = this.requiredActions(e);
    return null != n && t.reduce((e, t) => e || n.includes(t), false)
  }
  wasLoginAttemptedInSession(e) {
    return l === e
  }
  getState() {
    return s
  }
}
o(h, "displayName", "LoginRequiredActionStore"), o(h, "persistKey", "LoginRequiredActionStore");
let g = new h(Chunk570140.Z, {
  LOGIN_ATTEMPTED: d,
  CONNECTION_OPEN: f,
  CURRENT_USER_UPDATE: f,
  LOGOUT: _,
  PASSWORD_UPDATED: p,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: m
})
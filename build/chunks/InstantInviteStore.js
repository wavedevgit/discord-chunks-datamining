/** Chunk was on web.js **/
/** chunk id: 958590, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => k
});
var i, Chunk177029 = require("./177029.js"),
  o = require.n(Chunk177029),
  Chunk818125 = require("./818125.js"),
  l = require.n(Chunk818125),
  Chunk725918 = require("./725918.js"),
  u = require.n(Chunk725918),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk671759 = require("./671759.js"),
  Chunk172799 = require("./172799.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {},
  g = {},
  E = {},
  y = {},
  b = false,
  O = false,
  v = false;

function A() {
  m = {}, g = {}, E = {}, y = {}, r = null, O = false, v = false, b = false
}

function I(e) {
  let {
    channel: t
  } = e;
  delete m[t.id], delete g[t.id], delete E[t.id]
}

function S(e) {
  let {
    channelId: t,
    invite: n
  } = e, r = p.A.createFromServer(n);
  r.targetType === _.yV.STREAM && null != r.targetUser ? (null == g[t] && (g[t] = {}), g[t][String(r.targetUser.id)] = r) : r.targetType === _.yV.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == E[t] && (E[t] = {}), E[t][r.targetApplication.id] = r) : m[t] = r
}

function T(e) {
  let {
    channelId: t
  } = e;
  m[t] = null
}

function C(e) {
  let {
    channelId: t
  } = e;
  m[t] = null
}

function N(e) {
  var t;
  y[e.invite.code] = p.A.createFromServer(e.invite), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, v = false
}

function w() {
  v = false
}

function R(e) {
  var t;
  null != e.invites && e.invites.forEach(e => {
    null != y[e.code] && delete y[e.code]
  }), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, O = false
}

function P() {
  O = true
}

function D() {
  v = true
}

function L() {
  b = true
}

function x(e) {
  var t;
  y = {}, e.invites.forEach(e => {
    y[e.code] = p.A.createFromServer(e)
  }), r = null != (t = o()(l()(u()(Object.values(y), "createdAt")))) ? t : null, b = false
}

function M(e) {
  delete m[e.channelId]
}
class j extends(i = Chunk311907.Ay.Store) {
  getInvite(e) {
    var t, n;
    let {
      targetType: r,
      targetUserId: i,
      targetApplicationId: a
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return r === _.yV.STREAM && null != i ? null == (t = g[e]) ? true : t[i] : r === _.yV.EMBEDDED_APPLICATION && null != a ? null == (n = E[e]) ? true : n[a] : m[e]
  }
  getFriendInvite() {
    return r
  }
  getFriendInvitesFetching() {
    return b
  }
  canRevokeFriendInvite() {
    return null != r && !O && !v
  }
}
h(j, "displayName", "InstantInviteStore");
let k = new j(Chunk73153.h, {
  CONNECTION_OPEN: A,
  CHANNEL_DELETE: I,
  FRIEND_INVITE_CREATE_SUCCESS: N,
  FRIEND_INVITE_CREATE_FAILURE: w,
  FRIEND_INVITE_REVOKE_SUCCESS: R,
  INSTANT_INVITE_CREATE_SUCCESS: S,
  INSTANT_INVITE_CREATE_FAILURE: T,
  INSTANT_INVITE_REVOKE_SUCCESS: C,
  FRIEND_INVITE_REVOKE_REQUEST: P,
  FRIEND_INVITE_CREATE_REQUEST: D,
  FRIEND_INVITES_FETCH_REQUEST: L,
  FRIEND_INVITES_FETCH_RESPONSE: x,
  INSTANT_INVITE_CLEAR: M
})
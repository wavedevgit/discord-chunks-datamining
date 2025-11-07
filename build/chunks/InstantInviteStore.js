/** Chunk was on web.js **/
/** chunk id: 341165, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => k
});
var i, Chunk569048 = require("./569048.js"),
  o = require.n(Chunk569048),
  Chunk167006 = require("./167006.js"),
  l = require.n(Chunk167006),
  Chunk989872 = require("./989872.js"),
  u = require.n(Chunk989872),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk758449 = require("./758449.js"),
  Chunk245335 = require("./245335.js");

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
  b = {},
  y = false,
  O = false,
  v = false;

function I() {
  m = {}, g = {}, E = {}, b = {}, r = null, O = false, v = false, y = false
}

function S(e) {
  let {
    channel: t
  } = e;
  delete m[t.id], delete g[t.id], delete E[t.id]
}

function T(e) {
  let {
    channelId: t,
    invite: n
  } = e, r = _.Z.createFromServer(n);
  r.targetType === p.Iq.STREAM && null != r.targetUser ? (null == g[t] && (g[t] = {}), g[t][String(r.targetUser.id)] = r) : r.targetType === p.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == E[t] && (E[t] = {}), E[t][r.targetApplication.id] = r) : m[t] = r
}

function A(e) {
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
  b[e.invite.code] = _.Z.createFromServer(e.invite), r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null, v = false
}

function R() {
  v = false
}

function P(e) {
  var t;
  null != e.invites && e.invites.forEach(e => {
    null != b[e.code] && delete b[e.code]
  }), r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null, O = false
}

function w() {
  O = true
}

function D() {
  v = true
}

function x() {
  y = true
}

function L(e) {
  var t;
  b = {}, e.invites.forEach(e => {
    b[e.code] = _.Z.createFromServer(e)
  }), r = null != (t = o()(l()(u()(Object.values(b), "createdAt")))) ? t : null, y = false
}

function M(e) {
  delete m[e.channelId]
}
class j extends(i = Chunk442837.ZP.Store) {
  getInvite(e) {
    var t, n;
    let {
      targetType: r,
      targetUserId: i,
      targetApplicationId: a
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return r === p.Iq.STREAM && null != i ? null == (t = g[e]) ? true : t[i] : r === p.Iq.EMBEDDED_APPLICATION && null != a ? null == (n = E[e]) ? true : n[a] : m[e]
  }
  getFriendInvite() {
    return r
  }
  getFriendInvitesFetching() {
    return y
  }
  canRevokeFriendInvite() {
    return null != r && !O && !v
  }
}
h(j, "displayName", "InstantInviteStore");
let k = new j(Chunk570140.Z, {
  CONNECTION_OPEN: I,
  CHANNEL_DELETE: S,
  FRIEND_INVITE_CREATE_SUCCESS: N,
  FRIEND_INVITE_CREATE_FAILURE: R,
  FRIEND_INVITE_REVOKE_SUCCESS: P,
  INSTANT_INVITE_CREATE_SUCCESS: T,
  INSTANT_INVITE_CREATE_FAILURE: A,
  INSTANT_INVITE_REVOKE_SUCCESS: C,
  FRIEND_INVITE_REVOKE_REQUEST: w,
  FRIEND_INVITE_CREATE_REQUEST: D,
  FRIEND_INVITES_FETCH_REQUEST: x,
  FRIEND_INVITES_FETCH_RESPONSE: L,
  INSTANT_INVITE_CLEAR: M
})
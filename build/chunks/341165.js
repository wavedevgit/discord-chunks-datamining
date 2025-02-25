/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  Z: () => k
});
var i, o = n(569048),
  a = n.n(o),
  s = n(167006),
  l = n.n(s),
  c = n(989872),
  u = n.n(c),
  d = n(442837),
  f = n(570140),
  _ = n(758449),
  p = n(245335);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = {},
  m = {},
  E = {},
  v = {},
  b = !1,
  y = !1,
  O = !1;

function S() {
  g = {}, m = {}, E = {}, v = {}, r = null, y = !1, O = !1, b = !1
}

function I(e) {
  let {
    channel: t
  } = e;
  delete g[t.id], delete m[t.id], delete E[t.id]
}

function T(e) {
  let {
    channelId: t,
    invite: n
  } = e, r = _.Z.createFromServer(n);
  r.targetType === p.Iq.STREAM && null != r.targetUser ? (null == m[t] && (m[t] = {}), m[t][String(r.targetUser.id)] = r) : r.targetType === p.Iq.EMBEDDED_APPLICATION && null != r.targetApplication ? (null == E[t] && (E[t] = {}), E[t][r.targetApplication.id] = r) : g[t] = r
}

function N(e) {
  let {
    channelId: t
  } = e;
  g[t] = null
}

function A(e) {
  let {
    channelId: t
  } = e;
  g[t] = null
}

function C(e) {
  var t;
  v[e.invite.code] = _.Z.createFromServer(e.invite), r = null !== (t = a()(l()(u()(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, O = !1
}

function R() {
  O = !1
}

function P(e) {
  var t;
  null != e.invites && e.invites.forEach(e => {
    null != v[e.code] && delete v[e.code]
  }), r = null !== (t = a()(l()(u()(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, y = !1
}

function D() {
  y = !0
}

function w() {
  O = !0
}

function L() {
  b = !0
}

function x(e) {
  var t;
  v = {}, e.invites.forEach(e => {
    v[e.code] = _.Z.createFromServer(e)
  }), r = null !== (t = a()(l()(u()(Object.values(v), "createdAt")))) && void 0 !== t ? t : null, b = !1
}

function M(e) {
  delete g[e.channelId]
}
class j extends(i = d.ZP.Store) {
  getInvite(e) {
    var t, n;
    let {
      targetType: r,
      targetUserId: i,
      targetApplicationId: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return r === p.Iq.STREAM && null != i ? null === (t = m[e]) || void 0 === t ? void 0 : t[i] : r === p.Iq.EMBEDDED_APPLICATION && null != o ? null === (n = E[e]) || void 0 === n ? void 0 : n[o] : g[e]
  }
  getFriendInvite() {
    return r
  }
  getFriendInvitesFetching() {
    return b
  }
  canRevokeFriendInvite() {
    return null != r && !y && !O
  }
}
h(j, "displayName", "InstantInviteStore");
let k = new j(f.Z, {
  CONNECTION_OPEN: S,
  CHANNEL_DELETE: I,
  FRIEND_INVITE_CREATE_SUCCESS: C,
  FRIEND_INVITE_CREATE_FAILURE: R,
  FRIEND_INVITE_REVOKE_SUCCESS: P,
  INSTANT_INVITE_CREATE_SUCCESS: T,
  INSTANT_INVITE_CREATE_FAILURE: N,
  INSTANT_INVITE_REVOKE_SUCCESS: A,
  FRIEND_INVITE_REVOKE_REQUEST: D,
  FRIEND_INVITE_CREATE_REQUEST: w,
  FRIEND_INVITES_FETCH_REQUEST: L,
  FRIEND_INVITES_FETCH_RESPONSE: x,
  INSTANT_INVITE_CLEAR: M
})
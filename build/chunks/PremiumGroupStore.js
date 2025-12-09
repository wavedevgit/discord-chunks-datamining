/** Chunk was on web.js **/
/** chunk id: 643281, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk78839 = require("./78839.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let l = {
  premiumGroupMembers: null,
  isFetchingMembers: false,
  premiumGroupMembership: null,
  isFetchingMembership: false,
  _hasFetchedMembership: false
};

function c() {
  l.isFetchingMembers = true
}

function u(e) {
  let {
    members: t
  } = e;
  l.premiumGroupMembers = t, l.isFetchingMembers = false
}

function d() {
  l.isFetchingMembers = false
}

function f() {
  l.isFetchingMembership = true
}

function p(e) {
  let {
    membership: t
  } = e;
  l.premiumGroupMembership = t, l.isFetchingMembership = false, l._hasFetchedMembership = true
}

function _() {
  l.isFetchingMembership = false, l._hasFetchedMembership = true
}

function m() {
  l.isFetchingMembership = false, l._hasFetchedMembership = true
}

function h() {
  l = {
    premiumGroupMembers: null,
    isFetchingMembers: false,
    premiumGroupMembership: null,
    isFetchingMembership: false,
    _hasFetchedMembership: false
  }
}
class g extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk78839.Z)
  }
  getMembers() {
    return l.premiumGroupMembers
  }
  isFetchingMembers() {
    return l.isFetchingMembers
  }
  hasFetchedMembers() {
    return null !== l.premiumGroupMembers
  }
  getMembership() {
    return l.premiumGroupMembership
  }
  isFetchingMembership() {
    return l.isFetchingMembership
  }
  hasFetchedMembership() {
    return l._hasFetchedMembership
  }
  getSubscriptionId() {
    var e, t, n;
    let r = null == (e = Chunk78839.Z.getPremiumGroupSubscription()) ? true : module.id;
    return null != r ? r : null != (n = null == (t = l.premiumGroupMembership) ? true : exports.subscriptionId) ? require : null
  }
}
s(g, "displayName", "PremiumGroupStore");
let E = new g(Chunk570140.Z, {
  PREMIUM_GROUP_MEMBERS_FETCH_START: c,
  PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: u,
  PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: d,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_START: f,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: p,
  PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: _,
  PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: m,
  LOGOUT: h
})
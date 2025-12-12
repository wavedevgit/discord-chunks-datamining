/** Chunk was on web.js **/
/** chunk id: 740900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R_: () => g,
  cm: () => v
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk498607 = require("./498607.js"),
  i = require.n(Chunk498607),
  Chunk759174 = require("./759174.js"),
  Chunk493892 = require("./493892.js"),
  Chunk594174 = require("./594174.js"),
  Chunk815790 = require("./815790.js"),
  Chunk588215 = require("./588215.js"),
  Chunk44715 = require("./44715.js"),
  Chunk331551 = require("./331551.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = Date.now();
var g = function(e) {
  return e.NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", e.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", e.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS", e
}({});

function E(e) {
  let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
  return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
}

function b(e) {
  return e.sort
}

function y() {
  return new Chunk759174.h(E, b)
}

function O(e) {
  return null != e && new Date(e).getTime() >= h - c.rL
}
class v {
  reset() {
    this._membersMap.clear(), this._membersMap = y(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  enhanceNewMember(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      i = (0, l.Dw)(e.joinedAt),
      {
        hasUnusualDmActivity: o,
        hasUnusualAccountActivity: a,
        sourceInviteCode: u,
        joinSourceType: f,
        inviterId: _,
        integrationType: h,
        joinSourceApplicationId: g,
        joinSourceChannelId: E
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      b = s.default.getUser(e.userId);
    return p(m(p({
      hasUnusualDmActivity: o,
      hasUnusualAccountActivity: a,
      sourceInviteCode: u,
      joinSourceType: f,
      inviterId: _,
      integrationType: h,
      joinSourceApplicationId: g,
      joinSourceChannelId: E
    }, e), {
      isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
      isIncludedInSearchResults: false,
      user: b,
      sort: (0, d.b)(e, null != (n = t.selectedSort) ? n : c.d$.ORDER_BY_UNSPECIFIED),
      joinedAtTimestamp: i
    }), r)
  }
  _computeMemberSupplementals(e, t) {
    var n;
    let {
      sourceInviteCode: r,
      joinSourceType: i,
      inviterId: o,
      integrationType: s,
      joinSourceApplicationId: l,
      joinSourceChannelId: c
    } = null != (n = (0, u.W2)(this.guildId)[e]) ? n : {};
    return {
      sourceInviteCode: null != r ? r : null,
      joinSourceType: null != i ? i : null,
      inviterId: null != o ? o : null,
      integrationType: null != s ? s : null,
      joinSourceApplicationId: null != l ? l : null,
      joinSourceChannelId: null != c ? c : null,
      hasUnusualDmActivity: O(t),
      hasUnusualAccountActivity: (0, a.He)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var n;
    if (null == t) return this._membersMap.set(e.userId, e);
    let r = p({}, e),
      o = p({}, t),
      a = false,
      {
        sourceInviteCode: s,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: c,
        joinSourceType: u,
        inviterId: d,
        integrationType: f,
        joinSourceApplicationId: _,
        joinSourceChannelId: m
      } = this._computeMemberSupplementals(r.userId, null != (n = o.unusualDMActivityUntil) ? n : r.unusualDMActivityUntil);
    for (let e in r.sourceInviteCode !== s && (o.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (o.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== c && (o.hasUnusualAccountActivity = c), r.joinSourceType !== u && (o.joinSourceType = u), r.joinSourceApplicationId !== _ && (o.joinSourceApplicationId = _), r.joinSourceChannelId !== m && (o.joinSourceChannelId = m), r.inviterId !== d && (o.inviterId = d), r.integrationType !== f && (o.integrationType = f), o) {
      let t = e,
        n = o[t],
        s = r[t];
      i()(n, s) || (r[t] = n, a = true)
    }
    return this._membersMap.set(r.userId, r) || a
  }
  removeMember(e) {
    return this._membersMap.delete(e)
  }
  getMemberByUserId(e) {
    return this._membersMap.get(e)
  }
  values(e) {
    return this._membersMap.values(e, true)
  }
  count(e) {
    return this._membersMap.size(e)
  }
  get version() {
    return this._membersMap.version
  }
  constructor(e) {
    f(this, "guildId", true), f(this, "_membersMap", true), f(this, "newMemberTimestamp", Date.now()), this.guildId = e, this._membersMap = y()
  }
}
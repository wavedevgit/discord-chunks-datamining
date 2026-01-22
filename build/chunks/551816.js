/** Chunk was on web.js **/
/** chunk id: 551816, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Tu: () => g,
  z8: () => A
}), require("./321073.js"), require("./638769.js"), require("./896048.js");
var Chunk33851 = require("./33851.js"),
  i = require.n(Chunk33851),
  Chunk713402 = require("./713402.js"),
  Chunk694318 = require("./694318.js"),
  Chunk287809 = require("./287809.js"),
  Chunk157347 = require("./157347.js"),
  Chunk70738 = require("./70738.js"),
  Chunk166233 = require("./166233.js"),
  Chunk230959 = require("./230959.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = Date.now();
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
  return new a.J(E, b)
}

function O(e) {
  return null != e && new Date(e).getTime() >= m - c.tX
}
class A {
  reset() {
    this._membersMap.clear(), this._membersMap = y(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  enhanceNewMember(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      i = (0, l.vn)(e.joinedAt),
      {
        hasUnusualDmActivity: a,
        hasUnusualAccountActivity: s,
        sourceInviteCode: u,
        joinSourceType: f,
        inviterId: _,
        integrationType: m,
        joinSourceApplicationId: g,
        joinSourceChannelId: E
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      b = o.default.getUser(e.userId);
    return p(h(p({
      hasUnusualDmActivity: a,
      hasUnusualAccountActivity: s,
      sourceInviteCode: u,
      joinSourceType: f,
      inviterId: _,
      integrationType: m,
      joinSourceApplicationId: g,
      joinSourceChannelId: E
    }, e), {
      isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
      isIncludedInSearchResults: false,
      user: b,
      sort: (0, d.R)(e, null != (n = t.selectedSort) ? n : c.mF.ORDER_BY_UNSPECIFIED),
      joinedAtTimestamp: i
    }), r)
  }
  _computeMemberSupplementals(e, t) {
    var n;
    let {
      sourceInviteCode: r,
      joinSourceType: i,
      inviterId: a,
      integrationType: o,
      joinSourceApplicationId: l,
      joinSourceChannelId: c
    } = null != (n = (0, u.Oe)(this.guildId)[e]) ? n : {};
    return {
      sourceInviteCode: null != r ? r : null,
      joinSourceType: null != i ? i : null,
      inviterId: null != a ? a : null,
      integrationType: null != o ? o : null,
      joinSourceApplicationId: null != l ? l : null,
      joinSourceChannelId: null != c ? c : null,
      hasUnusualDmActivity: O(t),
      hasUnusualAccountActivity: (0, s.cx)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var n;
    if (null == t) return this._membersMap.set(e.userId, e);
    let r = p({}, e),
      a = p({}, t),
      s = false,
      {
        sourceInviteCode: o,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: c,
        joinSourceType: u,
        inviterId: d,
        integrationType: f,
        joinSourceApplicationId: _,
        joinSourceChannelId: h
      } = this._computeMemberSupplementals(r.userId, null != (n = a.unusualDMActivityUntil) ? n : r.unusualDMActivityUntil);
    for (let e in r.sourceInviteCode !== o && (a.sourceInviteCode = o), r.hasUnusualDmActivity !== l && (a.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== c && (a.hasUnusualAccountActivity = c), r.joinSourceType !== u && (a.joinSourceType = u), r.joinSourceApplicationId !== _ && (a.joinSourceApplicationId = _), r.joinSourceChannelId !== h && (a.joinSourceChannelId = h), r.inviterId !== d && (a.inviterId = d), r.integrationType !== f && (a.integrationType = f), a) {
      let t = e,
        n = a[t],
        o = r[t];
      i()(n, o) || (r[t] = n, s = true)
    }
    return this._membersMap.set(r.userId, r) || s
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
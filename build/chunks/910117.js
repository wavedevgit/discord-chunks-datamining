/** Chunk was on web.js **/
/** chunk id: 910117, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => d,
  q: () => m
}), require("./896048.js"), require("./733351.js");
var Chunk33851 = require("./33851.js"),
  i = require.n(Chunk33851),
  Chunk229527 = require("./229527.js"),
  Chunk316031 = require("./316031.js"),
  Chunk661191 = require("./661191.js"),
  Chunk859126 = require("./859126.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d() {
  return {
    query: "",
    requireUnusualDmActivity: false,
    requireCommunicationDisabled: false,
    requireUnusualAccountActivity: false,
    requireUsernameQuarantined: false,
    selectedRoleIds: new Set,
    selectedJoinDateOption: {
      optionId: 0,
      afterDate: null,
      beforeDate: null
    },
    selectedAccountAgeOption: {
      optionId: 0,
      afterDate: null,
      beforeDate: null
    },
    selectedJoinSourceType: true,
    selectedSourceInviteCode: true,
    selectedSort: true
  }
}
let f = Object.freeze(d());

function p(e, t) {
  return null != e && !!e.toLowerCase().includes(t.toLowerCase())
}

function _(e, t) {
  if ("" === t.trim()) returnfalse;
  let [n, r] = (0, l.H)(t);
  for (let t of r)
    if (e.userId === t) returntrue;
  for (let t of n)
    if (p(e.nick, t)) returntrue;
  if (null == e.user) returnfalse;
  let {
    globalName: i,
    username: a
  } = e.user;
  for (let e of n)
    if (p(a, e)) returntrue;
  for (let e of n)
    if (p(i, e)) returntrue;
  returnfalse
}

function h(e, t) {
  return 0 !== t.size && Array.from(t).every(t => e.roles.includes(t))
}
class m {
  get requiresUsernameMatch() {
    return this._searchState.query.trim().length > 0
  }
  reset() {
    this._searchState = d(), this.hasDefaultQuery = true
  }
  updateSearchState(e) {
    return this._searchState = u({}, this._searchState, e), this.hasDefaultQuery = i()(this._searchState, f), true
  }
  resetSearchState() {
    return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = true, true)
  }
  getSearchState() {
    return this._searchState
  }
  isMemberIncludedInSearchResults(e) {
    let {
      query: t,
      requireUnusualDmActivity: n,
      requireCommunicationDisabled: r,
      requireUnusualAccountActivity: i,
      requireUsernameQuarantined: l,
      selectedRoleIds: c,
      selectedJoinDateOption: u,
      selectedAccountAgeOption: d,
      selectedSourceInviteCode: f,
      selectedJoinSourceType: p
    } = this._searchState;
    return !(t.length > 0 && !_(e, t) || c.size > 0 && !h(e, c) || null != u.afterDate && e.joinedAtTimestamp < u.afterDate || null != u.beforeDate && e.joinedAtTimestamp > u.beforeDate || null != d.afterDate && o.default.extractTimestamp(e.userId) < d.afterDate || null != d.beforeDate && o.default.extractTimestamp(e.userId) > d.beforeDate) && (null == f || e.sourceInviteCode === f) && (null == p || e.joinSourceType === p) && (!n && !r && !i && !l || !!(n && e.hasUnusualDmActivity || r && (0, s.Z)(e) || i && e.hasUnusualAccountActivity || l && (0, a.TR)(e)))
  }
  constructor(e) {
    c(this, "guildId", true), c(this, "_searchState", true), c(this, "hasDefaultQuery", true), this.guildId = e, this._searchState = d(), this.hasDefaultQuery = true
  }
}
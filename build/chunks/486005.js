/** Chunk was on web.js **/
/** chunk id: 486005, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => g
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk157347 = require("./157347.js"),
  Chunk551816 = require("./551816.js"),
  Chunk233693 = require("./233693.js"),
  Chunk910117 = require("./910117.js"),
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
let m = 3 * Chunk927813.A.Millis.SECOND;
class g {
  getSearchIndex() {
    return null == this._search || this._search.hasDefaultQuery ? l.Tu.CURRENT_GUILD_MEMBER : l.Tu.INCLUDED_IN_SEARCH_RESULTS
  }
  initialize() {
    if (this._initialized) {
      this.lastCursorTimestamp = Date.now();
      return
    }
    this._initialized = true, this._search = new u.q(this.guildId), this._members = new l.z8(this.guildId), this._pagination = new c.qi(this.guildId, this._members.values(this.getSearchIndex()))
  }
  get isInitialized() {
    return this._initialized
  }
  reset() {
    var e, t, n;
    let r = arguments.length > 0 && true !== arguments[0] && arguments[0];
    this._initialized && (null == (e = this._members) || e.reset(), null == (t = this._pagination) || t.reset(), null == (n = this._search) || n.reset(), r && this.initialize())
  }
  get searchChunkSize() {
    return null != this._pagination && this._initialized ? (0, c.n4)(this._pagination.getPaginationState()) : 0
  }
  getMember(e) {
    var t;
    return null != this._members && this._initialized && null != (t = this._members.getMemberByUserId(e)) ? t : null
  }
  getMembersByIndex(e) {
    return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [
      [], 0
    ]
  }
  countMembersByIndex(e) {
    return null != this._members && this._initialized ? this._members.count(e) : 0
  }
  _checkUpdatesForPaginationUpdate(e, t) {
    return null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults || null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp
  }
  _getIsIncludedInSearch(e, t) {
    if (null == this._search || this._search.hasDefaultQuery) return [false, false];
    let n = p({}, e, t),
      r = this._search.isMemberIncludedInSearchResults(n),
      i = r !== e.isIncludedInSearchResults;
    return [r, i]
  }
  updatePaginationChunks() {
    if (null == this._pagination || null == this._members || !this._initialized) returnfalse;
    let e = this._members.values(this.getSearchIndex());
    return this._pagination.updateSortedMembers(e)
  }
  removeMember(e) {
    if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) returnfalse;
    let t = this._members.removeMember(e);
    return t ? this.updatePaginationChunks() : t
  }
  _rawUpdateMember(e, t) {
    if (null == this._members) return [false, false];
    let n = false,
      r = this._members.getMemberByUserId(e);
    if (null == r) {
      n = true;
      let a = i.Ay.getTrueMember(this.guildId, e);
      if (null == a) return [false, false];
      r = this._members.enhanceNewMember(a, this.getSearchState(), t)
    }
    if (null == t.isIncludedInSearchResults) {
      let [e, i] = this._getIsIncludedInSearch(r, t);
      i && (n = true, t.isIncludedInSearchResults = e)
    } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (n = true);
    let a = this._members.updateMember(r, t);
    return n || (n = this._checkUpdatesForPaginationUpdate(r, t)), [n, a]
  }
  isMemberInIndex(e) {
    return null != this._members && !!this._initialized && this._members._membersMap.has(e)
  }
  isMemberIncludedInSearchResults(e) {
    if (null == this._members || null == this._search || null == this._pagination || !this._initialized) returnfalse;
    if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
    let t = this._members.getMemberByUserId(e);
    if (null == t) {
      let n = i.Ay.getTrueMember(this.guildId, e);
      if (null == n) returnfalse;
      t = this._members.enhanceNewMember(n, this.getSearchState())
    } else if (t.isIncludedInSearchResults) returntrue;
    return this._search.isMemberIncludedInSearchResults(t)
  }
  updateMember(e, t) {
    if (null == this._members || !this._initialized) returnfalse;
    let [n, r] = this._rawUpdateMember(e, t);
    return n ? this.updatePaginationChunks() : r
  }
  updateClientMembers(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    if (null == this._members || !this._initialized) returnfalse;
    let r = false,
      i = false;
    for (let a of e) {
      if (null == a.joinedAt) continue;
      let e = a;
      if (t && (e = h(p({}, e), {
          isIncludedInSearchResults: true
        })), n) {
        let t = (0, s.vn)(a.joinedAt);
        e = h(p({}, e), {
          isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
          refreshTimestamp: this.lastRefreshTimestamp
        })
      }
      let [o, l] = this._rawUpdateMember(a.userId, e);
      r = o || r, i = l || i
    }
    return r ? this.updatePaginationChunks() : i
  }
  updateServerMembers(e) {
    if (null == this._members || !this._initialized) returnfalse;
    let t = false,
      n = false;
    for (let r of e) {
      let e = i.Ay.getTrueMember(this.guildId, r.user.id);
      if (null == e) continue;
      let [a, o] = this._rawUpdateMember(r.user.id, e);
      t = a || t, n = o || n
    }
    return t ? this.updatePaginationChunks() : n
  }
  updateMembersByMemberIds(e) {
    if (null == this._members || !this._initialized) returnfalse;
    let t = e.reduce((e, t) => {
      let n = i.Ay.getTrueMember(this.guildId, t);
      return null != n && e.push(n), e
    }, []);
    return this.updateClientMembers(t)
  }
  updateMembersSort(e) {
    return new Promise(t => {
      [...(0, r.cloneDeep)(this.getMembersByIndex(l.Tu.CURRENT_GUILD_MEMBER)[0]), ...(0, r.cloneDeep)(this.getMembersByIndex(l.Tu.NEW_GUILD_MEMBER)[0])].forEach(t => {
        var n, r, i;
        let a = (0, d.R)(t, e),
          o = null != (n = null == (r = this._search) ? true : r.isMemberIncludedInSearchResults(t)) && n;
        null == (i = this._members) || i.updateMember(t, {
          sort: a,
          isIncludedInSearchResults: o
        })
      }), t()
    })
  }
  sortMembersBySelectedSort(e) {
    null != this._search && null != this._members && this._initialized && null != e && (this.updatePaginationState({
      sort: e
    }, true), this.updateMembersSort(e).then(() => {
      this.updatePaginationChunks()
    }))
  }
  updateSearchedMembersByMemberIds(e) {
    if (null == this._search || null == this._members || !this._initialized) returnfalse;
    let t = e.reduce((e, t) => {
      let n = i.Ay.getTrueMember(this.guildId, t);
      return null != n && e.push(n), e
    }, []);
    return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp)
  }
  rebuildAllMembers() {
    if (null == this._members || !this._initialized) returnfalse;
    let e = i.Ay.getMembers(this.guildId);
    return this.updateClientMembers(e)
  }
  _scheduleRefresh(e) {
    this.lastRefreshTimestamp = e, this.lastCursorTimestamp = Date.now(), null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer), this._lastRefreshTimer = setTimeout(() => {
      this._lastRefreshTimer = null, this.lastRefreshTimestamp = 0
    }, m)
  }
  refreshNewMembersAndSearchResults() {
    if (null == this._search || null == this._members || !this._initialized) returnfalse;
    let e = Number(Date.now());
    this._scheduleRefresh(e);
    let t = (0, r.cloneDeep)(this._members.values(l.Tu.NEW_GUILD_MEMBER)),
      n = false;
    for (let r of t) n = this._members.updateMember(r, {
      isCurrentGuildMemberByTimestamp: true,
      refreshTimestamp: e,
      user: a.default.getUser(r.userId)
    }) || n;
    this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = false);
    let [i, o] = this.updatePaginationState({
      currentPage: 1
    }, false);
    return o && (n = false), n && this.updatePaginationChunks(), true
  }
  getNewMemberTimestamp() {
    return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0
  }
  updateSearchState(e) {
    if (null == this._members || null == this._search || !this._initialized) returnfalse;
    let t = !!this._search.hasDefaultQuery;
    null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
    let n = this._search.updateSearchState(e);
    if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
    let i = (0, r.cloneDeep)(this._members.values(l.Tu.CURRENT_GUILD_MEMBER)),
      a = t !== this._search.hasDefaultQuery;
    for (let e of i) {
      if (!e.isCurrentGuildMemberByTimestamp) continue;
      let t = this._search.isMemberIncludedInSearchResults(e);
      t !== e.isIncludedInSearchResults && (a = true, n = true, this._members.updateMember(e, {
        isIncludedInSearchResults: t
      }))
    }
    return a ? (this.updatePaginationChunks(), this.updatePaginationState({
      currentPage: 1
    }), true) : n
  }
  getSearchState() {
    return null != this._search && this._initialized ? this._search.getSearchState() : (0, u.l)()
  }
  hasDefaultSearchState() {
    return null == this._search || !this._initialized || this._search.hasDefaultQuery
  }
  resetSearchState() {
    return null != this._search && !!this._initialized && !!this._search.resetSearchState() && this.updatePaginationChunks()
  }
  getTotalResultsCount() {
    return null != this._search && null != this._pagination && this._initialized ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount : 0
  }
  updatePaginationState(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [false, false]
  }
  clearPaginationState() {
    var e;
    null == (e = this._pagination) || e.reset()
  }
  getPaginationState() {
    return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, c.vg)()
  }
  getPaginatedMembers() {
    return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0]
  }
  updatePaginationToken(e) {
    return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e)
  }
  getElasticSearchPagination() {
    return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null
  }
  removeRoleFromSearchState(e) {
    let t = new Set(this.getSearchState().selectedRoleIds);
    return t.delete(e), this.updateSearchState({
      selectedRoleIds: t
    })
  }
  constructor(e) {
    f(this, "guildId", true), f(this, "lastRefreshTimestamp", 0), f(this, "lastCursorTimestamp", Date.now()), f(this, "_initialized", true), f(this, "_pagination", true), f(this, "_search", true), f(this, "_members", true), f(this, "_lastRefreshTimer", null), f(this, "_defaultSearchTotalResultsCount", true), this.guildId = e, this._initialized = false, this._members = null, this._pagination = null, this._search = null
  }
}
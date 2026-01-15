/** Chunk was on web.js **/
/** chunk id: 823596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IF: () => p,
  LU: () => c,
  Rt: () => h,
  hW: () => u,
  t3: () => _
}), require("./539854.js"), require("./388685.js");
var Chunk271383 = require("./271383.js"),
  Chunk588215 = require("./588215.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = [12, 25, 50, 100],
  u = 7,
  d = 5,
  f = 250;

function p() {
  return {
    pageSize: c[0],
    currentPage: 1,
    continuationToken: null,
    sort: i.d$.ORDER_BY_UNSPECIFIED,
    elasticSearchCursor: null
  }
}

function _(e) {
  return Math.max(e.pageSize * d, f)
}
class h {
  reset() {
    this._paginationState = p(), this._sortedMemberIds = [], this._cachedPaginationChunks = {}, this._version += 1
  }
  isMemberOnCurrentPage(e) {
    var t;
    return (null != (t = this._cachedPaginationChunks[this._paginationState.currentPage]) ? t : []).includes(e)
  }
  isMemberInAnyChunk(e) {
    return this._sortedMemberIds.includes(e)
  }
  _initPaginationFromRawMembers(e) {
    let t = [],
      n = e.reduce((e, n, r) => (e = this._reduceMemberIdsToPaginationChunks(e, n.userId, r), t.push(n.userId), e), {});
    return [t, n]
  }
  _buildPaginationFromMemberIds(e) {
    return e.reduce(this._reduceMemberIdsToPaginationChunks, {})
  }
  _rebuildPaginationChunksFromStoredMembers() {
    return this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds), this._version += 1, true
  }
  getPaginationState() {
    return this._paginationState
  }
  updatePaginationToken(e) {
    return e !== this._paginationState.continuationToken && (this._paginationState = l(o({}, this._paginationState), {
      continuationToken: e
    }), true)
  }
  _calculateNewPageFromPageSizeChange(e, t) {
    let {
      currentPage: n,
      pageSize: r
    } = this._paginationState;
    return e * r <= this._sortedMemberIds.length ? Math.max(Math.ceil(r / e * (null != t ? t : n)), 1) : 1
  }
  updatePaginationState(e) {
    let t = false;
    if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
      var n;
      t = true, e.currentPage = this._calculateNewPageFromPageSizeChange(null != (n = e.pageSize) ? n : this._paginationState.pageSize, e.currentPage)
    }
    return this._paginationState = o({}, this._paginationState, e), t && this._rebuildPaginationChunksFromStoredMembers(), [true, t]
  }
  updateSortedMembers(e) {
    let [t, n] = this._initPaginationFromRawMembers(e);
    return this._sortedMemberIds = t, this._cachedPaginationChunks = n, this._version += 1, true
  }
  updateSortedMembersByUserIds(e) {
    return this._sortedMemberIds = e, this._rebuildPaginationChunksFromStoredMembers(), true
  }
  _findMember(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : false,
      n = e;
    n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
    let i = this._sortedMemberIds[e],
      a = r.ZP.getMember(this.guildId, i);
    for (; null == a && !((e += t) < 0) && !(e >= this._sortedMemberIds.length);) i = this._sortedMemberIds[e], (null == (a = r.ZP.getMember(this.guildId, i)) ? true : a.joinedAt) == null && (a = null);
    return a
  }
  getElasticSearchPagination() {
    return this.getPaginationState().elasticSearchCursor
  }
  get paginatedMembers() {
    return this._cachedPaginationChunks
  }
  get version() {
    return this._version
  }
  constructor(e, t) {
    a(this, "guildId", true), a(this, "_sortedMemberIds", true), a(this, "_paginationState", true), a(this, "_version", true), a(this, "_cachedPaginationChunks", true), a(this, "_reduceMemberIdsToPaginationChunks", (e, t, n) => {
      let r = Math.floor(n / this._paginationState.pageSize) + 1;
      return null == e[r] && (e[r] = []), e[r].push(t), e
    }), this.guildId = e, this._paginationState = p(), this._version = 0;
    let [n, r] = this._initPaginationFromRawMembers(t);
    this._sortedMemberIds = n, this._cachedPaginationChunks = r, this._version += 1
  }
}
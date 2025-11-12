/** Chunk was on web.js **/
/** chunk id: 997383, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./781311.js"), require("./457542.js"), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./642613.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk159299 = require("./159299.js"),
  Chunk675478 = require("./675478.js"),
  Chunk709302 = require("./709302.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk483360 = require("./483360.js"),
  Chunk892880 = require("./892880.js"),
  Chunk591759 = require("./591759.js"),
  Chunk279779 = require("./279779.js"),
  Chunk620490 = require("./620490.js"),
  Chunk727785 = require("./727785.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = 100,
  v = Object.freeze({}),
  I = 300;

function T(e, t) {
  return t.frecencyBoosters ? (0, _.Cq)(e) : {}
}
class S {
  createSearchContext() {
    null == this.userSearchContext && (this.userSearchContext = Chunk279779.Z.getUserSearchContext(this.parseUserResults, this._limit))
  }
  setLimit(e) {
    let {
      userSearchContext: t
    } = this;
    this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit)
  }
  setRefetchForSingleCategoryLimit(e) {
    this._refetchForSingleCategoryLimit = e
  }
  setResultTypes(e) {
    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(E.h8.USER) ? this._userResults : [], this._groupDMResults = this._include(E.h8.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(E.h8.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(E.h8.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(E.h8.GUILD) ? this._guildResults : [], this._applicationResults = this._include(E.h8.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(E.h8.LINK) ? this._linkResults : [], this._inAppNavigations = this._include(E.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []
  }
  _include(e) {
    return null == this.resultTypes || this.resultTypes.has(e)
  }
  _isAsyncSearch() {
    var e, t;
    return this._include(Chunk727785.h8.USER) && (null == (t = this.options) || null == (e = exports.userFilters) ? true : module.thread) != null
  }
  setOptions(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    t ? this.options = y({}, this.options, e) : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
  }
  _willRefetchIfSingleCategoryResults() {
    return !this._refetched && !(this._refetchForSingleCategoryLimit <= 5) && null == this.options.voiceChannelGuildFilter && null == this.options.userFilters && 1 === [this._userResults, this._groupDMResults, this._textChannelResults, this._voiceChannelResults, this._guildResults, this._applicationResults, this._linkResults, this._inAppNavigations].filter(e => e.length > 0).length
  }
  refetchIfSingleCategoryResults() {
    if (!this._willRefetchIfSingleCategoryResults()) return;
    this._refetched = true;
    let e = this.query;
    this._userResults.length > 0 ? this.queryUsers(module, null, this._refetchForSingleCategoryLimit) : this._groupDMResults.length > 0 ? this._groupDMResults = this.queryGroupDMs(module, this._refetchForSingleCategoryLimit) : this._textChannelResults.length > 0 ? this._textChannelResults = this.queryTextChannels(module, this._refetchForSingleCategoryLimit) : this._voiceChannelResults.length > 0 ? this._voiceChannelResults = this.queryVoiceChannels(module, this._refetchForSingleCategoryLimit) : this._guildResults.length > 0 ? this._guildResults = this.queryGuilds(module, this._refetchForSingleCategoryLimit) : this._applicationResults.length > 0 ? this._applicationResults = this.queryApplications(module, this._refetchForSingleCategoryLimit) : this._linkResults.length > 0 ? this._linkResults = this.queryLink(module, this._refetchForSingleCategoryLimit) : this._inAppNavigations.length > 0 && (this._inAppNavigations = this.queryInAppNavigations(module, this._refetchForSingleCategoryLimit))
  }
  search(e, t) {
    if (this.query = e, this._refetched = false, "" === e.trim()) {
      this.clear(), this.updateAllResults();
      return
    }(this.options.frecencyBoosters ? l.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
      this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._inAppNavigations = this.queryInAppNavigations(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, I)) : this._include(E.h8.USER) || this.updateAllResults()
    })
  }
  clear() {
    let {
      userSearchContext: e
    } = this;
    null != module && module.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._inAppNavigations = []
  }
  clean() {
    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
  }
  pause() {
    var e, t;
    null == (t = this.userSearchContext) || null == (e = exports.unsubscribe) || module.call(exports)
  }
  resume() {
    var e, t;
    null == (t = this.userSearchContext) || null == (e = exports.subscribe) || module.call(exports)
  }
  destroy() {
    let {
      userSearchContext: e
    } = this;
    null != module && (module.destroy(), this.userSearchContext = null)
  }
  queryTextChannels(e, t) {
    if (!this._include(E.h8.TEXT_CHANNEL)) return [];
    let n = T(E.h8.TEXT_CHANNEL, this.options),
      {
        allowSnowflake: r,
        blacklist: i
      } = this.options,
      a = null != i ? e => !i.has("channel:".concat(e.id)) : true;
    return _.ZP.queryChannels({
      query: e,
      guildId: null,
      limit: t,
      fuzzy: true,
      allowSnowflake: r,
      filter: a,
      boosters: n
    })
  }
  queryVoiceChannels(e, t) {
    if (!this._include(E.h8.VOICE_CHANNEL)) return [];
    let {
      allowSnowflake: n,
      voiceChannelGuildFilter: r
    } = this.options, i = T(E.h8.VOICE_CHANNEL, this.options);
    return _.ZP.queryChannels({
      query: e,
      guildId: r,
      limit: t,
      fuzzy: true,
      type: u.Zb,
      allowSnowflake: n,
      boosters: i
    })
  }
  queryGuilds(e, t) {
    if (!this._include(E.h8.GUILD)) return [];
    let n = T(E.h8.GUILD, this.options),
      {
        allowSnowflake: r,
        blacklist: i
      } = this.options,
      a = null != i ? e => !i.has("guild:".concat(e.id)) : true;
    return _.ZP.queryGuilds({
      query: e,
      limit: t,
      fuzzy: true,
      filter: a,
      boosters: n,
      allowSnowflake: r
    })
  }
  queryUsers(e, t, n) {
    let {
      userSearchContext: r
    } = this;
    if (null == r || !this._include(E.h8.USER)) return;
    let {
      allowSnowflake: i,
      userFilters: a
    } = this.options, o = T(E.h8.USER, this.options);
    if ((null == a ? true : a.thread) != null) {
      let t = s.Z.getMemberListSections(a.thread),
        r = [];
      for (let e in t) {
        let n = t[e];
        for (let e of n.userIds) {
          var l, c, u;
          (null == a || !a.friends || d.Z.isFriend(e)) && (null != (u = null == (l = this._userBlacklist) ? true : l.includes(e)) && u || r.push({
            userId: e,
            nick: null == (c = n.usersById[e]) ? true : c.displayName
          }))
        }
      }
      this._userResults = _.ZP.queryUsers({
        query: e,
        users: r,
        limit: n,
        boosters: o,
        allowSnowflake: i
      });
      return
    }
    true !== t && p.Z.requestMembers(t, e, 100), r.setLimit(n), r.setQuery({
      query: e,
      filters: a,
      blacklist: this._userBlacklist,
      boosters: o
    })
  }
  queryGroupDMs(e, t) {
    if (!this._include(E.h8.GROUP_DM)) return [];
    let {
      blacklist: n
    } = this.options, r = T(E.h8.GROUP_DM, this.options), i = null != n ? e => !n.has("channel:".concat(e.id)) : true;
    return _.ZP.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: true,
      filter: i,
      boosters: r
    })
  }
  queryApplications(e, t) {
    return this._include(E.h8.APPLICATION) ? _.ZP.queryApplications({
      query: e,
      limit: t,
      fuzzy: true
    }) : []
  }
  queryLink(e, t) {
    let n;
    if (!this._include(E.h8.LINK)) return [];
    let r = o().sanitizeUrl(e);
    try {
      n = new URL(r)
    } catch (e) {
      return []
    }
    let {
      pathname: i,
      hostname: a = "",
      host: s
    } = n, l = h.Z.isDiscordHostname(a) || window.location.host === s;
    return null !== i && l && h.Z.isAppRoute(i) ? [{
      type: E.h8.LINK,
      record: c.Z.fromPath(i),
      score: 1
    }] : []
  }
  queryInAppNavigations(e, t) {
    return this._include(E.h8.IN_APP_NAVIGATION) ? _.ZP.queryInAppNavigations({
      query: e,
      limit: t,
      fuzzy: true
    }) : []
  }
  constructor(e, t, n = O, r = v, a = 0) {
    b(this, "query", ""), b(this, "options", v), b(this, "results", []), b(this, "_userResults", []), b(this, "_groupDMResults", []), b(this, "_textChannelResults", []), b(this, "_voiceChannelResults", []), b(this, "_guildResults", []), b(this, "_applicationResults", []), b(this, "_linkResults", []), b(this, "_inAppNavigations", []), b(this, "_asyncTimeout", true), b(this, "userSearchContext", true), b(this, "onResultsChange", true), b(this, "resultTypes", true), b(this, "_userBlacklist", null), b(this, "_limit", true), b(this, "_refetchForSingleCategoryLimit", true), b(this, "_refetched", false), b(this, "parseUserResults", e => {
      let {
        results: t
      } = e;
      if (!this._include(E.h8.USER)) return;
      for (let {
          id: e,
          score: n,
          comparator: r
        }
        of(this._userResults = [], t)) {
        let t = f.default.getUser(e);
        null != t && this._userResults.push({
          type: E.h8.USER,
          record: t,
          score: (0, _.mB)(n),
          comparator: null != r ? r : true
        })
      }
      let n = this._willRefetchIfSingleCategoryResults();
      !n && this._userResults.length > this._limit && (this._userResults.length = this._limit), n && this.refetchIfSingleCategoryResults(), this.updateAllResults()
    }), b(this, "updateAllResults", () => {
      clearTimeout(this._asyncTimeout), this.results = i()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(g.Z).value(), this.onResultsChange(this.results, this.query)
    }), this.onResultsChange = e, this.setOptions(r, true), this._limit = n, this._refetchForSingleCategoryLimit = a, this.createSearchContext(), this.setResultTypes(t)
  }
}
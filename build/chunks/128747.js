/** Chunk was on web.js **/
/** chunk id: 128747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./733351.js"), require("./492834.js"), require("./321073.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./638769.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk280230 = require("./280230.js"),
  s = require.n(Chunk280230),
  Chunk219065 = require("./219065.js"),
  Chunk594061 = require("./594061.js"),
  Chunk750808 = require("./750808.js"),
  Chunk808728 = require("./808728.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248465 = require("./248465.js"),
  Chunk695184 = require("./695184.js"),
  Chunk998218 = require("./998218.js"),
  Chunk450827 = require("./450827.js"),
  Chunk989133 = require("./989133.js"),
  Chunk926140 = require("./926140.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let O = 100,
  v = Object.freeze({}),
  A = 300;

function I(e, t) {
  return t.frecencyBoosters ? (0, p.X3)(e) : {}
}
class S {
  createSearchContext() {
    null == this.userSearchContext && (this.userSearchContext = m.A.getUserSearchContext(this.parseUserResults, this._limit))
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
    this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(E.rD.USER) ? this._userResults : [], this._groupDMResults = this._include(E.rD.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(E.rD.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(E.rD.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(E.rD.GUILD) ? this._guildResults : [], this._applicationResults = this._include(E.rD.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(E.rD.LINK) ? this._linkResults : [], this._inAppNavigations = this._include(E.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []
  }
  _include(e) {
    return null == this.resultTypes || this.resultTypes.has(e)
  }
  _isAsyncSearch() {
    var e, t;
    return this._include(E.rD.USER) && (null == (t = this.options) || null == (e = t.userFilters) ? true : e.thread) != null
  }
  setOptions(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    t ? this.options = b({}, this.options, e) : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
  }
  _willRefetchIfSingleCategoryResults() {
    return !this._refetched && !(this._refetchForSingleCategoryLimit <= 5) && null == this.options.voiceChannelGuildFilter && null == this.options.userFilters && 1 === [this._userResults, this._groupDMResults, this._textChannelResults, this._voiceChannelResults, this._guildResults, this._applicationResults, this._linkResults, this._inAppNavigations].filter(e => e.length > 0).length
  }
  refetchIfSingleCategoryResults() {
    if (!this._willRefetchIfSingleCategoryResults()) return;
    this._refetched = true;
    let e = this.query;
    this._userResults.length > 0 ? this.queryUsers(e, null, this._refetchForSingleCategoryLimit) : this._groupDMResults.length > 0 ? this._groupDMResults = this.queryGroupDMs(e, this._refetchForSingleCategoryLimit) : this._textChannelResults.length > 0 ? this._textChannelResults = this.queryTextChannels(e, this._refetchForSingleCategoryLimit) : this._voiceChannelResults.length > 0 ? this._voiceChannelResults = this.queryVoiceChannels(e, this._refetchForSingleCategoryLimit) : this._guildResults.length > 0 ? this._guildResults = this.queryGuilds(e, this._refetchForSingleCategoryLimit) : this._applicationResults.length > 0 ? this._applicationResults = this.queryApplications(e, this._refetchForSingleCategoryLimit) : this._linkResults.length > 0 ? this._linkResults = this.queryLink(e, this._refetchForSingleCategoryLimit) : this._inAppNavigations.length > 0 && (this._inAppNavigations = this.queryInAppNavigations(e, this._refetchForSingleCategoryLimit))
  }
  search(e, t) {
    if (this.query = e, this._refetched = false, "" === e.trim()) {
      this.clear(), this.updateAllResults();
      return
    }(this.options.frecencyBoosters ? l.bW.loadIfNecessary() : Promise.resolve()).finally(() => {
      this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._inAppNavigations = this.queryInAppNavigations(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, A)) : this._include(E.rD.USER) || this.updateAllResults()
    })
  }
  clear() {
    let {
      userSearchContext: e
    } = this;
    null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._inAppNavigations = []
  }
  clean() {
    this.clear(), this.destroy(), this.query = "", this.updateAllResults()
  }
  pause() {
    var e, t;
    null == (t = this.userSearchContext) || null == (e = t.unsubscribe) || e.call(t)
  }
  resume() {
    var e, t;
    null == (t = this.userSearchContext) || null == (e = t.subscribe) || e.call(t)
  }
  destroy() {
    let {
      userSearchContext: e
    } = this;
    null != e && (e.destroy(), this.userSearchContext = null)
  }
  queryTextChannels(e, t) {
    if (!this._include(E.rD.TEXT_CHANNEL)) return [];
    let n = I(E.rD.TEXT_CHANNEL, this.options),
      {
        allowSnowflake: r,
        blacklist: i
      } = this.options,
      a = null != i ? e => !i.has("channel:".concat(e.id)) : true;
    return p.Ay.queryChannels({
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
    if (!this._include(E.rD.VOICE_CHANNEL)) return [];
    let {
      allowSnowflake: n,
      voiceChannelGuildFilter: r
    } = this.options, i = I(E.rD.VOICE_CHANNEL, this.options);
    return p.Ay.queryChannels({
      query: e,
      guildId: r,
      limit: t,
      fuzzy: true,
      type: u.vM,
      allowSnowflake: n,
      boosters: i
    })
  }
  queryGuilds(e, t) {
    if (!this._include(E.rD.GUILD)) return [];
    let n = I(E.rD.GUILD, this.options),
      {
        allowSnowflake: r,
        blacklist: i
      } = this.options,
      a = null != i ? e => !i.has("guild:".concat(e.id)) : true;
    return p.Ay.queryGuilds({
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
    if (null == r || !this._include(E.rD.USER)) return;
    let {
      allowSnowflake: i,
      userFilters: a
    } = this.options, s = I(E.rD.USER, this.options);
    if ((null == a ? true : a.thread) != null) {
      let t = o.A.getMemberListSections(a.thread),
        r = [];
      for (let e in t) {
        let n = t[e];
        for (let e of n.userIds) {
          var l, c, u;
          (null == a || !a.friends || d.A.isFriend(e)) && (null != (l = null == (c = this._userBlacklist) ? true : c.includes(e)) && l || r.push({
            userId: e,
            nick: null == (u = n.usersById[e]) ? true : u.displayName
          }))
        }
      }
      this._userResults = p.Ay.queryUsers({
        query: e,
        users: r,
        limit: n,
        boosters: s,
        allowSnowflake: i
      });
      return
    }
    true !== t && _.A.requestMembers(t, e, 100), r.setLimit(n), r.setQuery({
      query: e,
      filters: a,
      blacklist: this._userBlacklist,
      boosters: s
    })
  }
  queryGroupDMs(e, t) {
    if (!this._include(E.rD.GROUP_DM)) return [];
    let {
      blacklist: n
    } = this.options, r = I(E.rD.GROUP_DM, this.options), i = null != n ? e => !n.has("channel:".concat(e.id)) : true;
    return p.Ay.queryGroupDMs({
      query: e,
      limit: t,
      fuzzy: true,
      filter: i,
      boosters: r
    })
  }
  queryApplications(e, t) {
    return this._include(E.rD.APPLICATION) ? p.Ay.queryApplications({
      query: e,
      limit: t,
      fuzzy: true
    }) : []
  }
  queryLink(e, t) {
    let n;
    if (!this._include(E.rD.LINK)) return [];
    let r = s().sanitizeUrl(e);
    try {
      n = new URL(r)
    } catch (e) {
      return []
    }
    let {
      pathname: i,
      hostname: a = "",
      host: o
    } = n, l = h.A.isDiscordHostname(a) || window.location.host === o;
    return null !== i && l && h.A.isAppRoute(i) ? [{
      type: E.rD.LINK,
      record: c.A.fromPath(i),
      score: 1
    }] : []
  }
  queryInAppNavigations(e, t) {
    return this._include(E.rD.IN_APP_NAVIGATION) ? p.Ay.queryInAppNavigations({
      query: e,
      limit: t,
      fuzzy: true
    }) : []
  }
  constructor(e, t, n = O, r = v, a = 0) {
    y(this, "query", ""), y(this, "options", v), y(this, "results", []), y(this, "_userResults", []), y(this, "_groupDMResults", []), y(this, "_textChannelResults", []), y(this, "_voiceChannelResults", []), y(this, "_guildResults", []), y(this, "_applicationResults", []), y(this, "_linkResults", []), y(this, "_inAppNavigations", []), y(this, "_asyncTimeout", true), y(this, "userSearchContext", true), y(this, "onResultsChange", true), y(this, "resultTypes", true), y(this, "_userBlacklist", null), y(this, "_limit", true), y(this, "_refetchForSingleCategoryLimit", true), y(this, "_refetched", false), y(this, "parseUserResults", e => {
      let {
        results: t
      } = e;
      if (!this._include(E.rD.USER)) return;
      for (let {
          id: e,
          score: n,
          comparator: r
        }
        of(this._userResults = [], t)) {
        let t = f.default.getUser(e);
        null != t && this._userResults.push({
          type: E.rD.USER,
          record: t,
          score: (0, p.zy)(n),
          comparator: null != r ? r : true
        })
      }
      let n = this._willRefetchIfSingleCategoryResults();
      !n && this._userResults.length > this._limit && (this._userResults.length = this._limit), n && this.refetchIfSingleCategoryResults(), this.updateAllResults()
    }), y(this, "updateAllResults", () => {
      clearTimeout(this._asyncTimeout), this.results = i()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(g.A).value(), this.onResultsChange(this.results, this.query)
    }), this.onResultsChange = e, this.setOptions(r, true), this._limit = n, this._refetchForSingleCategoryLimit = a, this.createSearchContext(), this.setResultTypes(t)
  }
}
/** Chunk was on web.js **/
/** chunk id: 540126, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bz: () => eb,
  Cb: () => K,
  Fq: () => z,
  PB: () => Q,
  VR: () => eo,
  ZP: () => et,
  p2: () => X,
  wF: () => $,
  wZ: () => q,
  wd: () => J,
  zR: () => ey
}), require("./388685.js"), require("./415506.js"), require("./539854.js"), require("./361932.js"), require("./187205.js"), require("./290780.js"), require("./642613.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk317381 = require("./317381.js"),
  Chunk812206 = require("./812206.js"),
  Chunk12498 = require("./12498.js"),
  Chunk430198 = require("./430198.js"),
  Chunk931261 = require("./931261.js"),
  Chunk924301 = require("./924301.js"),
  Chunk160404 = require("./160404.js"),
  Chunk798423 = require("./798423.js"),
  Chunk18036 = require("./18036.js"),
  Chunk798379 = require("./798379.js"),
  Chunk398758 = require("./398758.js"),
  Chunk22082 = require("./22082.js"),
  Chunk893908 = require("./893908.js"),
  Chunk953252 = require("./953252.js"),
  Chunk601070 = require("./601070.js"),
  Chunk569471 = require("./569471.js"),
  Chunk131704 = require("./131704.js"),
  Chunk680089 = require("./680089.js"),
  Chunk592125 = require("./592125.js"),
  Chunk58468 = require("./58468.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk968358 = require("./968358.js"),
  Chunk203818 = require("./203818.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk231338 = require("./231338.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = "placeholder-channel-id",
  K = 2,
  z = 0,
  q = 1,
  X = 2,
  Q = 3,
  J = 4,
  $ = 5,
  ee = new Set([String(Chunk443063.z.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !o().isEqual(null == (n = this.guilds[e]) ? true : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !o().isEqual(null == (n = this.guilds[e]) ? true : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t) returnfalse;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      r = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in r.channels) {
      let t = r.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && o().some(w.Z.getVoiceStatesForChannel(t.id)) && R.ZP.getMentionCount(t.id) > 0) returntrue
    }
    returnfalse
  }
  getGuild(e, t, n) {
    return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n) || this._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e)) && (this.guilds[e] = new en(e, t, n)), this.guilds[e]
  }
  getGuildChannelRowsOnly(e) {
    return e in this.guilds || (this.guilds[e] = new en(e, [], [])), this.guilds[e]
  }
  clear() {
    this.guilds = {}
  }
  clearGuildId(e) {
    return null != e && e in this.guilds && (delete this.guilds[e], true)
  }
  updateRecentsCategory(e) {
    var t, n;
    return null != e && e in this.guilds && null != (n = null == (t = this.guilds[e]) ? true : t.updateRecentsCategory()) && n
  }
  nonPositionalChannelIdUpdate(e) {
    let t = S.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof I.Sf || null != (t = S.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
  }
  nonPositionalChannelUpdate(e) {
    if (null == e.guild_id) returnfalse;
    let t = this.guilds[e.guild_id];
    if (null == t) returnfalse;
    let n = false;
    return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n
  }
  updateSubtitles(e, t) {
    (null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach(e => e.updateSubtitles(t))
  }
  constructor() {
    F(this, "guilds", {})
  }
}
class en {
  get initializationData() {
    return {
      selectedChannel: Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId()),
      selectedVoiceChannelId: Chunk944486.Z.getVoiceChannelId(),
      activeJoinedRelevantThreads: Chunk601070.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: Chunk601070.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
    }
  }
  invalidate() {
    this.sections = null, this.rows = null, this.sortedNamedCategories = null, this.firstVoiceChannel = true, this.version++
  }
  getSortedNamedCategories() {
    return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories
  }
  getSortedCategories() {
    return [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory]
  }
  getSections() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), module) ? [...this.sections] : this.sections
  }
  getRows() {
    if (null == this.rows) {
      this.sortedNamedCategories = o().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (exports.position = ++module, exports.getShownChannelIds())) exports.channels[require].position = ++module
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case z:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case q:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case X:
        return this.favoritesCategory;
      case J:
        return this.noParentCategory;
      case this.recentsSectionNumber:
        return this.recentsCategory;
      case this.voiceChannelsSectionNumber:
        return this.voiceChannelsCategory;
      default:
        return this.getSortedNamedCategories()[e - $]
    }
  }
  getNamedCategoryFromSection(e) {
    return e -= $, i()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
  }
  getGuildActionSection() {
    return this.guildActionSection
  }
  getChannelNoticeSection() {
    return this.channelNoticeSection
  }
  getChannelFromSectionRow(e, t) {
    let n = this.getCategoryFromSection(e);
    if (null == n) return null;
    let r = n.channels[n.getShownChannelIds()[t]];
    return null == r ? null : {
      category: n,
      channel: r
    }
  }
  isPlaceholderRow(e, t) {
    return i()(e > q, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
  }
  getFirstVoiceChannel(e) {
    if (true === this.firstVoiceChannel) {
      if (this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel || (this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel)) return this.firstVoiceChannel;
      for (let t of this.getSortedNamedCategories())
        if (null != t.getFirstVoiceChannel(e)) {
          this.firstVoiceChannel = t.getFirstVoiceChannel(e);
          break
        }
    }
    return this.firstVoiceChannel
  }
  getSectionRowsFromChannel(e) {
    let t = eA(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: q
    }];
    let n = [],
      r = S.Z.getChannel(e);
    if (null == r || null == e) return n;
    let i = r.isThread();
    if (i && (r = S.Z.getChannel(r.parent_id)), null == r) return n;
    let a = this.favoritesCategory.getShownChannelIds().indexOf(r.id);
    a >= 0 && n.push({
      section: X,
      row: a
    });
    let s = this.recentsCategory.getShownChannelIds().indexOf(r.id);
    if (s >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: s
      }), r.type === G.d4z.GUILD_CATEGORY) return [{
      section: o().findIndex(this.getSortedNamedCategories(), e => e.id === (null == r ? true : r.id)) + $
    }];
    let l = this.getCategory(r),
      c = l instanceof ei ? J : this.getSortedNamedCategories().indexOf(l) + $,
      u = l.getShownChannelIds().indexOf(r.id);
    if (c >= 0 && u >= 0) {
      let t = i ? l.channels[r.id].threadIds.indexOf(e) : 0;
      n.push({
        section: c,
        row: u,
        threadOffset: t
      })
    }
    let d = this.voiceChannelsCategory.getShownChannelIds().indexOf(r.id);
    return d >= 0 && n.push({
      section: this.voiceChannelsSectionNumber,
      row: d
    }), n
  }
  getCategory(e) {
    return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory
  }
  updateRecentsCategory() {
    let e = this.recentsCategory.updateAllChannels(this.initializationData);
    return module && this.invalidate(), module
  }
  nonPositionalChannelUpdate(e) {
    let t = this.initializationData,
      n = this.getCategory(e).updateChannel(e, t);
    return this.favoritesCategory.updateChannel(e, t) && (n = true), this.recentsCategory.updateChannel(e, t) && (n = true), this.voiceChannelsCategory.updateChannel(e, t) && (n = true), n && this.invalidate(), n
  }
  getSlicedChannels(e, t) {
    i()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      r = e[e.length - 1],
      a = true,
      o = false,
      s = [],
      l = [];
    for (let e of this.getSortedCategories()) {
      let i = (null == t ? true : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let c = e.channels[t];
        a && (c.id === n.id ? a = false : i || s.push(c)), o && !i && l.push(c), a || o || c.id !== r.id || (o = true)
      }
    }
    return [s, e, l]
  }
  _initializeAllChannelsById() {
    if (null == this.allChannelsById)
      for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
        for (let t in module.channels) this.allChannelsById[exports] = module.channels[exports];
    return this.allChannelsById
  }
  getChannels(e) {
    let t = [],
      n = this._initializeAllChannelsById();
    for (let r of e) null != n[r] && t.push(n[r]);
    return t
  }
  getChannel(e) {
    var t;
    return null != (t = this._initializeAllChannelsById()[e]) ? t : null
  }
  updateSubtitles(e) {
    let t = [];
    if (null != e) {
      let n = S.Z.getChannel(e);
      if (null != n)
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
      else {
        let r = this.getCategory(n);
        null != r && null != r.channels[e] && (t = [r.channels[e]])
      }
    } else t = o()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
    let n = false;
    return t.forEach(e => {
      e.updateSubtitle() && (n = true)
    }), n && this.version++, n
  }
  forEachShownChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getShownChannelIds()) {
          let r = n.channels[t];
          for (let t of (e(r.record), r.threadIds)) {
            let n = S.Z.getChannel(t);
            null != n && e(n)
          }
        }
  }
  forEachChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getChannelRecords()) e(t)
  }
  constructor(e, t, n) {
    var r, a;
    F(this, "id", true), F(this, "hideMutedChannels", true), F(this, "favoritesSectionNumber", true), F(this, "recentsSectionNumber", true), F(this, "voiceChannelsSectionNumber", true), F(this, "mutedChannelIds", true), F(this, "optedInChannels", true), F(this, "optInEnabled", true), F(this, "hideResourceChannels", true), F(this, "favoriteChannelIds", true), F(this, "suggestedFavoriteChannelId", true), F(this, "collapsedCategoryIds", true), F(this, "moderatorReportChannelId", true), F(this, "moderatorReportChannelEnabled", true), F(this, "categories", true), F(this, "noParentCategory", true), F(this, "favoritesCategory", true), F(this, "recentsCategory", true), F(this, "voiceChannelsCategory", true), F(this, "guildActionSection", true), F(this, "channelNoticeSection", true), F(this, "sortedNamedCategories", true), F(this, "sections", true), F(this, "rows", true), F(this, "firstVoiceChannel", true), F(this, "allChannelsById", true), F(this, "version", true), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = true, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = D.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = D.ZP.getMutedChannels(this.id), this.optedInChannels = null != (r = D.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? r : D.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, g.r1)(this.id), this.hideResourceChannels = (0, d.s)(this.id), this.favoriteChannelIds = new Set(null != (a = D.ZP.getGuildFavorites(this.id)) ? a : []), this.suggestedFavoriteChannelId = h.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = T.Z.getCollapsedCategories();
    let s = S.Z.getMutableGuildChannelsForGuild(this.id),
      l = C.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != l ? (0, b.Z)(l) : null, this.moderatorReportChannelEnabled = null != l && (0, y.Z)(l);
    let c = {},
      u = [],
      f = {};
    for (let e in s) {
      let t = s[e];
      t.type === G.d4z.GUILD_CATEGORY && (c[t.id] = t, f[t.id] = [])
    }
    let _ = [],
      m = [],
      E = [],
      O = this.initializationData;
    for (let e in s) {
      let t = s[e];
      if (t.type !== G.d4z.GUILD_CATEGORY) {
        if (t.type === G.d4z.GUILD_DIRECTORY) {
          null == l || l.features.has(G.GuildFeatures.HUB) || E.push(t);
          continue
        }
        eT(this, t, O) ? _.push(t) : (t.type === G.d4z.GUILD_VOICE || t.type === G.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)), null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : u.push(t)
      }
    }
    for (let e in this.categories = {}, f) this.categories[e] = new ea(this, c[e], f[e], O);
    this.recentsSectionNumber = Q, this.favoritesSectionNumber = X, this.noParentCategory = new ei(this, u, O), this.favoritesCategory = new eo(this, O), this.recentsCategory = (0, p.Q)() ? new es(this, s, O) : new el(this, _, O), this.voiceChannelsCategory = new eu(this, m, c, O), this.guildActionSection = new ef(t, E.length > 0), this.channelNoticeSection = new ed(n), i()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + o().size(this.categories)
  }
}
class er {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), true)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === module.length && this.shouldShowEmptyCategory() ? [Y] : module
  }
  shouldShowEmptyCategory() {
    return o().some(this.channels, e => e.renderLevel >= 3)
  }
  getShownChannelIds() {
    return null == this.shownChannelIds && (this.shownChannelIds = o()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).map(e => e.id).value()), this.shownChannelIds
  }
  getShownChannelAndThreadIds() {
    let e = o()(this.channels).values().flatMap(e => e.threadIds).value();
    return this.getShownChannelIds().concat(module)
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length
  }
  getChannelRecords() {
    return o()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
  }
  getFirstVoiceChannel(e) {
    for (let t of this.getShownChannelIds())
      if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
      else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
    return null
  }
  constructor(e) {
    F(this, "guild", true), F(this, "isMuted", true), F(this, "isCollapsed", true), F(this, "position", true), F(this, "channels", true), F(this, "shownChannelIds", true), this.guild = e, this.isMuted = false, this.isCollapsed = false, this.position = false, this.channels = {}, this.shownChannelIds = null
  }
}
class ei extends er {
  constructor(e, t, n) {
    super(e), this.channels = o()(t).map(e => new ep(this, e, n)).keyBy(e => e.id).value()
  }
}
class ea extends er {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || Chunk496675.Z.can(Chunk231338.Pl.MANAGE_CHANNELS, this.record) && Chunk496675.Z.can(Chunk231338.Pl.VIEW_CHANNEL, this.record) && o().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, r) {
    for (let i of (super(e), F(this, "id", true), F(this, "record", true), this.record = t, this.id = t.id, this.isCollapsed = true === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[i.id] = new ep(this, i, r)
  }
}
class eo extends er {
  updateChannel(e, t) {
    let n = e.id in this.channels && D.ZP.isFavorite(e.guild_id, e.id),
      r = h.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== r || n || (t = W(V({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), true) : e.id in this.channels && e.id !== r && !n && (delete this.channels[e.id], this.invalidate(), true)
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t) {
    var n;
    if (super(e), !e.optInEnabled && !eO()) return;
    this.channels = o()(null != (n = D.ZP.getGuildFavorites(e.id)) ? n : []).map(e => S.Z.getChannel(e)).filter(x.lm).map(e => new eh(this, e, t)).keyBy(e => e.id).value();
    let r = h.Z.getSuggestedChannelId(e.id),
      i = S.Z.getChannel(r);
    null != i && null != r && (this.channels[r] = new eh(this, i, W(V({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class es extends er {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, false)
  }
  updateChannel(e, t) {
    if (!this.enabled) returnfalse;
    if ((0, I.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, I.vc)(e.type)) returnfalse;
    let n = super.updateChannel(e, t),
      r = this.channels[e.id];
    return null == r ? (r = new eg(this, e, t), this.channels[e.id] = r, this.invalidate(), true) : this.updateShownChannelIds(r) || n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? o()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : M.DISCORD_EPOCH))
      }).take(es.MAX_RECENT_CHANNELS).sortBy(e => {
        let [, t] = e;
        return -t
      }).map(e => {
        let [t] = e;
        return t
      }).value() : []
    }
    return this.shownChannelIds
  }
  updateShownChannelIds(e) {
    var t;
    let n = this.isCollapsed ? 4 : 3;
    if (null == this.shownChannelIds || e.renderLevel < n) returnfalse;
    if (e.lastMessageTimestamp > (null == (t = this.channels[this.shownChannelIds[0]]) ? true : t.lastMessageTimestamp)) {
      let t = this.shownChannelIds.indexOf(e.id);
      return t > false && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), true
    }
    returnfalse
  }
  constructor(e, t, n) {
    if (super(e), F(this, "enabled", false), this.isCollapsed = m.Z.isCollapsed(e.id), this.enabled = eO() && Object.keys(t).length >= es.MIN_READABLE_CHANNELS, this.enabled)
      for (let e of Object.values(t))(0, I.vc)(e.type) && !(0, I.Q5)(e.type) && (this.channels[e.id] = new eg(this, e, n))
  }
}
F(es, "MIN_READABLE_CHANNELS", 7), F(es, "MAX_RECENT_CHANNELS", 10), F(es, "MAX_TIMESTAMP_DELTA", 6048e5);
class el extends er {
  updateAllChannels(e) {
    let t = false;
    return M.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = true)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (eT(this.guild, e, t) && null == n) return this.channels[e.id] = new em(this, e, t), this.invalidate(), true
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = o()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = module.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...module.filter(e => 4 === e.renderLevel).value(), ...exports]);
      this.shownChannelIds = o()([...require]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || _.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = false, this.isMuted = false, this.channels = o()(t).map(e => new em(this, e, n)).keyBy(e => e.id).value()
  }
}

function ec(e, t) {
  if (e.record.type === G.d4z.GUILD_CATEGORY) return e.record.position;
  if (null != e.record.parent_id) {
    var n, r;
    return null != (r = null == (n = t[e.record.parent_id]) ? true : n.position) ? r : false
  }
  return false
}
class eu extends er {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = o()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (module.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = module.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === module.length && this.getHiddenChannelIds().length > 0 ? [Y] : module
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = o()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => ec(e, this.categoriesById), e => e.record.type === G.d4z.GUILD_CATEGORY ? false : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; require < exports.length; require++) {
        var e;
        let r = exports[require];
        require < exports.length - 1 && Chunk512722.record.type === Chunk981631.d4z.GUILD_CATEGORY && (null == (e = exports[require + 1]) ? true : module.record.type) === Chunk981631.d4z.GUILD_CATEGORY || (require !== exports.length - 1 || Chunk512722.record.type !== Chunk981631.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(Chunk512722.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, r) {
    if (super(e), F(this, "categoriesById", true), F(this, "hiddenChannelIds", true), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = j.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = false, this.categoriesById = n, this.channels = o()(t).map(e => new eE(this, e, r)).keyBy(e => e.id).value()
  }
}
class ed {
  isEmpty() {
    return 0 === this.rows.length
  }
  getRows() {
    return this.rows
  }
  getRow(e) {
    return this.rows[e]
  }
  constructor(e) {
    F(this, "rows", true), this.rows = e
  }
}
class ef {
  isEmpty() {
    return 0 === this.guildActionRows.length
  }
  getRows() {
    return this.guildActionRows
  }
  getRow(e) {
    return this.guildActionRows[e]
  }
  constructor(e, t) {
    F(this, "guildActionRows", true), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY))
  }
}
class e_ {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return Chunk58468.Z.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(Chunk306680.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(Chunk306680.ZP.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = false;
    null != e && e !== this.record && (this.record = e, n = true);
    let r = this.computeState(t);
    return r.renderLevel === this.renderLevel && o().isEqual(r.threadIds, this.threadIds) || (this.renderLevel = r.renderLevel, this.threadIds = r.threadIds, this.threadCount = o().size(r.threadIds), n = true), 4 === this.renderLevel && this.updateSubtitle() && (n = true), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !o().isEqual(this.subtitle, module) && (this.subtitle = module, true)
  }
  computeSubtitle() {
    return eb(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    F(this, "category", true), F(this, "record", true), F(this, "id", true), F(this, "position", true), F(this, "threadIds", true), F(this, "threadCount", true), F(this, "subtitle", true), F(this, "renderLevel", true), this.category = e, this.record = t, this.position = false, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: r,
      threadIds: i
    } = this.computeState(n);
    this.renderLevel = r, this.threadCount = o().size(i), this.threadIds = i, 4 === r && (this.subtitle = this.computeSubtitle())
  }
}
class ep extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i,
      activeJoinedUnreadThreads: a
    } = e;
    if (!N.Z.can(Z.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === r) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!u.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let s = this.record.parent_id,
      l = this.category.guild;
    if (ev(l, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let c = (null == n ? true : n.id) === this.id || r === this.id,
      d = null != n && n.isThread() && n.parent_id === this.id,
      f = null != (t = c || d || !this.category.isCollapsed && !this.isMuted ? i[this.id] : a[this.id]) ? t : {},
      _ = ey(this.record, f, n, r, l.hideMutedChannels);
    return this.id !== l.moderatorReportChannelId || l.moderatorReportChannelEnabled ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: c ? 4 : 1,
      threadIds: _
    } : !l.optInEnabled || l.optedInChannels.has(this.id) || null != s && l.optedInChannels.has(s) ? c || d || !o().isEmpty(_) || R.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: _
    } : l.hideMutedChannels && l.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: _
    } : this.category.isCollapsed && (l.mutedChannelIds.has(this.id) || null != s && l.mutedChannelIds.has(s) || this.record.isGuildVocal() || this.record.type === G.d4z.GUILD_STORE || (0, I.vc)(this.record.type) && !R.ZP.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: _
    } : {
      renderLevel: 4,
      threadIds: _
    } : {
      renderLevel: 2,
      threadIds: _
    } : {
      renderLevel: 2,
      threadIds: _
    }
  }
}
class eh extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i
    } = e;
    return N.Z.can(Z.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: ey(this.record, null != (t = i[this.id]) ? t : {}, n, r, false)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class em extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i
    } = e;
    return N.Z.can(Z.Pl.VIEW_CHANNEL, this.record) ? eT(this.category.guild, this.record, e) ? {
      renderLevel: eI(this, e) ? 4 : 3,
      threadIds: ey(this.record, null != (t = i[this.id]) ? t : {}, n, r, false)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eg extends ep {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let r = this.record.parent_id,
        i = this.category.guild;
      i.mutedChannelIds.has(this.id) || null != r && i.mutedChannelIds.has(r) ? t = 2 : 4 === t ? t = 3 : 2 === t && eT(this.category.guild, this.record, e) && (t = 3), 3 === t && eI(this, e) && (t = 4), n = o().sortBy(n, e => -R.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class eE extends ep {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !N.Z.can(Z.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ev(t, this.record) ? 1 : this.category.isCollapsed ? o().some(w.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = eb(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function eb(e, t, n) {
  switch (e.type) {
    case G.d4z.GUILD_VOICE: {
      let r = f.ZP.getActiveEventByChannel(e.id);
      if (null != r) return {
        type: "event",
        name: r.name
      };
      let i = L.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, k.a)(i)) return {
        type: "go-live"
      };
      let a = c.Z.getChannelStatus(e);
      if (null != a && a.length > 0) return {
        type: "voice",
        text: a
      };
      let o = s.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = l.Z.getApplication(e.applicationId)) ? true : t.name
      }).filter(x.lm);
      if (o.length > 0) return {
        type: "embedded-activities",
        name: o.join(", ")
      };
      return null
    }
    case G.d4z.GUILD_STAGE_VOICE: {
      let t = f.ZP.getActiveEventByChannel(e.id);
      if (null != t) return {
        type: "event",
        name: t.name
      };
      return null
    }
    default:
      return null
  }
}

function ey(e, t, n, r, i) {
  let a = null != n && (n.id === e.id || r === e.id),
    s = null != n && n.isThread() && n.parent_id === e.id;
  if (I.uC.has(e.type)) {
    let e = o().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return a ? e : s ? (n.id in t || e.unshift(n.id), e) : i ? e.filter(e => !v.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function eO() {
  returnfalse
}

function ev(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || eO())
}

function eI(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: r
  } = t;
  if (R.ZP.getMentionCount(e.id) > 0) returntrue;
  for (let t in r[e.id])
    if (R.ZP.getMentionCount(t) > 0) returntrue;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !eO();
  let i = E.Z.getNewChannelIds(e.category.guild.id);
  if (i.size > K);
  else if (i.has(e.id)) returntrue;
  returnfalse
}

function eT(e, t, n) {
  let {
    selectedChannel: r,
    activeJoinedRelevantThreads: i
  } = n;
  if (t.type === G.d4z.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(B.zZ.IS_GUILD_RESOURCE_CHANNEL)) returnfalse;
  if (t.isGuildVocal()) {
    let n = j.Z.isVoiceCategoryCollapsed(e.id);
    if (!n) returnfalse;
    let r = o().some(w.Z.getVoiceStatesForChannel(t.id));
    if (n && r) returnfalse
  }
  if (null != r && (r.id === t.id || r.isThread() && r.parent_id === t.id) || R.ZP.getMentionCount(t.id) > 0) returntrue;
  for (let e in i[t.id])
    if (R.ZP.getMentionCount(e) > 0 || R.ZP.hasUnread(e) || R.ZP.hasRecentlyVisitedAndRead(e)) returntrue;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) returnfalse;
  let a = E.Z.getNewChannelIds(e.id),
    s = Array.from(a).sort((e, t) => M.default.compare(t, e));
  return !!(a.has(t.id) && s.indexOf(t.id) < K || R.ZP.hasRecentlyVisitedAndRead(t.id))
}
let eS = new Set(Object.values(Chunk443063.z));

function eA(e) {
  if (null == e) return null;
  if (eS.has(e)) return e;
  let t = S.Z.getChannel(e);
  return (null == t ? true : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null
}
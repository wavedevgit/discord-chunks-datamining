/** Chunk was on web.js **/
/** chunk id: 32603, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => et,
  HP: () => X,
  PU: () => Z,
  TF: () => $,
  Xt: () => q,
  bK: () => J,
  go: () => ey,
  rR: () => z,
  wF: () => eb,
  xu: () => es,
  yO: () => Q
}), require("./896048.js"), require("./65821.js"), require("./321073.js"), require("./114821.js"), require("./339614.js"), require("./667532.js"), require("./638769.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk933958 = require("./933958.js"),
  Chunk587895 = require("./587895.js"),
  Chunk309698 = require("./309698.js"),
  Chunk717125 = require("./717125.js"),
  Chunk473529 = require("./473529.js"),
  Chunk698441 = require("./698441.js"),
  Chunk164956 = require("./164956.js"),
  Chunk99712 = require("./99712.js"),
  Chunk240935 = require("./240935.js"),
  Chunk50827 = require("./50827.js"),
  Chunk395504 = require("./395504.js"),
  Chunk454058 = require("./454058.js"),
  Chunk272720 = require("./272720.js"),
  Chunk56595 = require("./56595.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk945886 = require("./945886.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk669715 = require("./669715.js"),
  Chunk551851 = require("./551851.js"),
  Chunk281405 = require("./281405.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk818348 = require("./818348.js");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let K = "placeholder-channel-id",
  z = 2,
  q = 0,
  Z = 1,
  X = 2,
  Q = 3,
  J = 4,
  $ = 5,
  ee = new Set([String(Chunk281405.n.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !s().isEqual(null == (n = this.guilds[e]) ? true : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !s().isEqual(null == (n = this.guilds[e]) ? true : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t) returnfalse;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      r = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in r.channels) {
      let t = r.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && s().some(D.A.getVoiceStatesForChannel(t.id)) && w.Ay.getMentionCount(t.id) > 0) returntrue
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
    return null != e && e in this.guilds && null != (t = null == (n = this.guilds[e]) ? true : n.updateRecentsCategory()) && t
  }
  nonPositionalChannelIdUpdate(e) {
    let t = S.A.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof A.YB || null != (t = S.A.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    B(this, "guilds", {})
  }
}
class en {
  get initializationData() {
    return {
      selectedChannel: S.A.getChannel(R.A.getChannelId()),
      selectedVoiceChannelId: R.A.getVoiceChannelId(),
      activeJoinedRelevantThreads: O.A.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: O.A.getActiveJoinedUnreadThreadsForGuild(this.id)
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
    return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections
  }
  getRows() {
    if (null == this.rows) {
      this.sortedNamedCategories = s().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case q:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case Z:
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
    return i()(e > Z, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === K
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
    let t = eT(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: Z
    }];
    let n = [],
      r = S.A.getChannel(e);
    if (null == r || null == e) return n;
    let i = r.isThread();
    if (i && (r = S.A.getChannel(r.parent_id)), null == r) return n;
    let a = this.favoritesCategory.getShownChannelIds().indexOf(r.id);
    a >= 0 && n.push({
      section: X,
      row: a
    });
    let o = this.recentsCategory.getShownChannelIds().indexOf(r.id);
    if (o >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: o
      }), r.type === G.rbe.GUILD_CATEGORY) return [{
      section: s().findIndex(this.getSortedNamedCategories(), e => e.id === (null == r ? true : r.id)) + $
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
    return e && this.invalidate(), e
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
      s = false,
      o = [],
      l = [];
    for (let e of this.getSortedCategories()) {
      let i = (null == t ? true : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let c = e.channels[t];
        a && (c.id === n.id ? a = false : i || o.push(c)), s && !i && l.push(c), a || s || c.id !== r.id || (s = true)
      }
    }
    return [o, e, l]
  }
  _initializeAllChannelsById() {
    if (null == this.allChannelsById)
      for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
        for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
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
      let n = S.A.getChannel(e);
      if (null != n)
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
      else {
        let r = this.getCategory(n);
        null != r && null != r.channels[e] && (t = [r.channels[e]])
      }
    } else t = s()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
            let n = S.A.getChannel(t);
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
    B(this, "id", true), B(this, "hideMutedChannels", true), B(this, "favoritesSectionNumber", true), B(this, "recentsSectionNumber", true), B(this, "voiceChannelsSectionNumber", true), B(this, "mutedChannelIds", true), B(this, "optedInChannels", true), B(this, "optInEnabled", true), B(this, "hideResourceChannels", true), B(this, "favoriteChannelIds", true), B(this, "suggestedFavoriteChannelId", true), B(this, "collapsedCategoryIds", true), B(this, "moderatorReportChannelId", true), B(this, "moderatorReportChannelEnabled", true), B(this, "categories", true), B(this, "noParentCategory", true), B(this, "favoritesCategory", true), B(this, "recentsCategory", true), B(this, "voiceChannelsCategory", true), B(this, "guildActionSection", true), B(this, "channelNoticeSection", true), B(this, "sortedNamedCategories", true), B(this, "sections", true), B(this, "rows", true), B(this, "firstVoiceChannel", true), B(this, "allChannelsById", true), B(this, "version", true), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = true, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = P.Ay.isGuildCollapsed(this.id), this.mutedChannelIds = P.Ay.getMutedChannels(this.id), this.optedInChannels = null != (r = P.Ay.getOptedInChannelsWithPendingUpdates(this.id)) ? r : P.Ay.getOptedInChannels(this.id), this.optInEnabled = (0, g.WW)(this.id), this.hideResourceChannels = (0, d.K)(this.id), this.favoriteChannelIds = new Set(null != (a = P.Ay.getGuildFavorites(this.id)) ? a : []), this.suggestedFavoriteChannelId = h.A.getSuggestedChannelId(this.id), this.collapsedCategoryIds = I.A.getCollapsedCategories();
    const o = S.A.getMutableGuildChannelsForGuild(this.id),
      l = C.A.getGuild(this.id);
    this.moderatorReportChannelId = null != l ? (0, y.A)(l) : null, this.moderatorReportChannelEnabled = null != l && (0, b.A)(l);
    const c = {},
      u = [],
      f = {};
    for (const e in o) {
      const t = o[e];
      t.type === G.rbe.GUILD_CATEGORY && (c[t.id] = t, f[t.id] = [])
    }
    const p = [],
      m = [],
      E = [],
      O = this.initializationData;
    for (const e in o) {
      const t = o[e];
      if (t.type !== G.rbe.GUILD_CATEGORY) {
        if (t.type === G.rbe.GUILD_DIRECTORY) {
          null == l || l.features.has(G.GuildFeatures.HUB) || E.push(t);
          continue
        }
        eI(this, t, O) ? p.push(t) : (t.type === G.rbe.GUILD_VOICE || t.type === G.rbe.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && m.push(c[t.parent_id]), m.push(t)), null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : u.push(t)
      }
    }
    for (const e in this.categories = {}, f) this.categories[e] = new ea(this, c[e], f[e], O);
    this.recentsSectionNumber = Q, this.favoritesSectionNumber = X, this.noParentCategory = new ei(this, u, O), this.favoritesCategory = new es(this, O), this.recentsCategory = (0, _.i)() ? new eo(this, o, O) : new el(this, p, O), this.voiceChannelsCategory = new eu(this, m, c, O), this.guildActionSection = new ef(t, E.length > 0), this.channelNoticeSection = new ed(n), i()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + s().size(this.categories)
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
    return 0 === e.length && this.shouldShowEmptyCategory() ? [K] : e
  }
  shouldShowEmptyCategory() {
    return s().some(this.channels, e => e.renderLevel >= 3)
  }
  getShownChannelIds() {
    return null == this.shownChannelIds && (this.shownChannelIds = s()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).map(e => e.id).value()), this.shownChannelIds
  }
  getShownChannelAndThreadIds() {
    let e = s()(this.channels).values().flatMap(e => e.threadIds).value();
    return this.getShownChannelIds().concat(e)
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length
  }
  getChannelRecords() {
    return s()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
  }
  getFirstVoiceChannel(e) {
    for (let t of this.getShownChannelIds())
      if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
      else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
    return null
  }
  constructor(e) {
    B(this, "guild", true), B(this, "isMuted", true), B(this, "isCollapsed", true), B(this, "position", true), B(this, "channels", true), B(this, "shownChannelIds", true), this.guild = e, this.isMuted = false, this.isCollapsed = false, this.position = false, this.channels = {}, this.shownChannelIds = null
  }
}
class ei extends er {
  constructor(e, t, n) {
    super(e), this.channels = s()(t).map(e => new e_(this, e, n)).keyBy(e => e.id).value()
  }
}
class ea extends er {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || N.A.can(F.xB.MANAGE_CHANNELS, this.record) && N.A.can(F.xB.VIEW_CHANNEL, this.record) && s().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, r) {
    for (const i of (super(e), B(this, "id", true), B(this, "record", true), this.record = t, this.id = t.id, this.isCollapsed = true === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[i.id] = new e_(this, i, r)
  }
}
class es extends er {
  updateChannel(e, t) {
    let n = e.id in this.channels && P.Ay.isFavorite(e.guild_id, e.id),
      r = h.A.getSuggestedChannelId(e.guild_id);
    return (e.id !== r || n || (t = W(H({}, t), {
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
    this.channels = s()(null != (n = P.Ay.getGuildFavorites(e.id)) ? n : []).map(e => S.A.getChannel(e)).filter(L.Vq).map(e => new eh(this, e, t)).keyBy(e => e.id).value();
    const r = h.A.getSuggestedChannelId(e.id),
      i = S.A.getChannel(r);
    null != i && null != r && (this.channels[r] = new eh(this, i, W(H({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class eo extends er {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, false)
  }
  updateChannel(e, t) {
    if (!this.enabled) returnfalse;
    if ((0, A.fT)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, A.ig)(e.type)) returnfalse;
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
      this.shownChannelIds = this.enabled ? s()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : j.DISCORD_EPOCH))
      }).take(eo.MAX_RECENT_CHANNELS).sortBy(e => {
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
      return t > false && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > eo.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, eo.MAX_RECENT_CHANNELS)), true
    }
    returnfalse
  }
  constructor(e, t, n) {
    if (super(e), B(this, "enabled", false), this.isCollapsed = m.A.isCollapsed(e.id), this.enabled = eO() && Object.keys(t).length >= eo.MIN_READABLE_CHANNELS, this.enabled)
      for (const e of Object.values(t))(0, A.ig)(e.type) && !(0, A.fT)(e.type) && (this.channels[e.id] = new eg(this, e, n))
  }
}
B(eo, "MIN_READABLE_CHANNELS", 7), B(eo, "MAX_RECENT_CHANNELS", 10), B(eo, "MAX_TIMESTAMP_DELTA", 6048e5);
class el extends er {
  updateAllChannels(e) {
    let t = false;
    return j.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = true)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (eI(this.guild, e, t) && null == n) return this.channels[e.id] = new em(this, e, t), this.invalidate(), true
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = s()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = e.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...e.filter(e => 4 === e.renderLevel).value(), ...t]);
      this.shownChannelIds = s()([...n]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || p.A.isFullServerPreview(e.id)) return;
    this.isCollapsed = false, this.isMuted = false, this.channels = s()(t).map(e => new em(this, e, n)).keyBy(e => e.id).value()
  }
}

function ec(e, t) {
  if (e.record.type === G.rbe.GUILD_CATEGORY) return e.record.position;
  if (null != e.record.parent_id) {
    var n, r;
    return null != (n = null == (r = t[e.record.parent_id]) ? true : r.position) ? n : false
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
      let e = s()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = e.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [K] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = s()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => ec(e, this.categoriesById), e => e.record.type === G.rbe.GUILD_CATEGORY ? false : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let r = t[n];
        n < t.length - 1 && r.record.type === G.rbe.GUILD_CATEGORY && (null == (e = t[n + 1]) ? true : e.record.type) === G.rbe.GUILD_CATEGORY || (n !== t.length - 1 || r.record.type !== G.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(r.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, r) {
    if (super(e), B(this, "categoriesById", true), B(this, "hiddenChannelIds", true), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = k.A.isVoiceCategoryCollapsed(e.id), this.isMuted = false, this.categoriesById = n, this.channels = s()(t).map(e => new eE(this, e, r)).keyBy(e => e.id).value()
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
    B(this, "rows", true), this.rows = e
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
    B(this, "guildActionRows", true), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(U.n.GUILD_DIRECTORY))
  }
}
class ep {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return T.A.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(w.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(w.Ay.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = false;
    null != e && e !== this.record && (this.record = e, n = true);
    let r = this.computeState(t);
    return r.renderLevel === this.renderLevel && s().isEqual(r.threadIds, this.threadIds) || (this.renderLevel = r.renderLevel, this.threadIds = r.threadIds, this.threadCount = s().size(r.threadIds), n = true), 4 === this.renderLevel && this.updateSubtitle() && (n = true), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !s().isEqual(this.subtitle, e) && (this.subtitle = e, true)
  }
  computeSubtitle() {
    return ey(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    B(this, "category", true), B(this, "record", true), B(this, "id", true), B(this, "position", true), B(this, "threadIds", true), B(this, "threadCount", true), B(this, "subtitle", true), B(this, "renderLevel", true), this.category = e, this.record = t, this.position = false, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    const {
      renderLevel: r,
      threadIds: i
    } = this.computeState(n);
    this.renderLevel = r, this.threadCount = s().size(i), this.threadIds = i, 4 === r && (this.subtitle = this.computeSubtitle())
  }
}
class e_ extends ep {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i,
      activeJoinedUnreadThreads: a
    } = e;
    if (!N.A.can(F.xB.VIEW_CHANNEL, this.record)) {
      if (this.id === r) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!u.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let o = this.record.parent_id,
      l = this.category.guild;
    if (ev(l, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let c = (null == n ? true : n.id) === this.id || r === this.id,
      d = null != n && n.isThread() && n.parent_id === this.id,
      f = null != (t = c || d || !this.category.isCollapsed && !this.isMuted ? i[this.id] : a[this.id]) ? t : {},
      p = eb(this.record, f, n, r, l.hideMutedChannels);
    return this.id !== l.moderatorReportChannelId || l.moderatorReportChannelEnabled ? l.optInEnabled && l.hideResourceChannels && this.record.hasFlag(V.lx.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: c ? 4 : 1,
      threadIds: p
    } : !l.optInEnabled || l.optedInChannels.has(this.id) || null != o && l.optedInChannels.has(o) ? c || d || !s().isEmpty(p) || w.Ay.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: p
    } : l.hideMutedChannels && l.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: p
    } : this.category.isCollapsed && (l.mutedChannelIds.has(this.id) || null != o && l.mutedChannelIds.has(o) || this.record.isGuildVocal() || this.record.type === G.rbe.GUILD_STORE || (0, A.ig)(this.record.type) && !w.Ay.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: p
    } : {
      renderLevel: 4,
      threadIds: p
    } : {
      renderLevel: 2,
      threadIds: p
    } : {
      renderLevel: 2,
      threadIds: p
    }
  }
}
class eh extends ep {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i
    } = e;
    return N.A.can(F.xB.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eb(this.record, null != (t = i[this.id]) ? t : {}, n, r, false)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class em extends ep {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: r,
      activeJoinedRelevantThreads: i
    } = e;
    return N.A.can(F.xB.VIEW_CHANNEL, this.record) ? eI(this.category.guild, this.record, e) ? {
      renderLevel: eA(this, e) ? 4 : 3,
      threadIds: eb(this.record, null != (t = i[this.id]) ? t : {}, n, r, false)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eg extends e_ {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let r = this.record.parent_id,
        i = this.category.guild;
      i.mutedChannelIds.has(this.id) || null != r && i.mutedChannelIds.has(r) ? t = 2 : 4 === t ? t = 3 : 2 === t && eI(this.category.guild, this.record, e) && (t = 3), 3 === t && eA(this, e) && (t = 4), n = s().sortBy(n, e => -w.Ay.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class eE extends e_ {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !N.A.can(F.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ev(t, this.record) ? 1 : this.category.isCollapsed ? s().some(D.A.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = ey(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function ey(e, t, n) {
  switch (e.type) {
    case G.rbe.GUILD_VOICE: {
      let r = f.Ay.getActiveEventByChannel(e.id);
      if (null != r) return {
        type: "event",
        name: r.name
      };
      let i = x.Ay.getVoiceStatesForChannel(e);
      if (n && t && (0, M.t)(i)) return {
        type: "go-live"
      };
      let a = c.A.getChannelStatus(e);
      if (null != a && a.length > 0) return {
        type: "voice",
        text: a
      };
      let s = o.Ay.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = l.A.getApplication(e.applicationId)) ? true : t.name
      }).filter(L.Vq);
      if (s.length > 0) return {
        type: "embedded-activities",
        name: s.join(", ")
      };
      return null
    }
    case G.rbe.GUILD_STAGE_VOICE: {
      let t = f.Ay.getActiveEventByChannel(e.id);
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

function eb(e, t, n, r, i) {
  let a = null != n && (n.id === e.id || r === e.id),
    o = null != n && n.isThread() && n.parent_id === e.id;
  if (A.wE.has(e.type)) {
    let e = s().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return a ? e : o ? (n.id in t || e.unshift(n.id), e) : i ? e.filter(e => !v.A.isMuted(e) || w.Ay.getMentionCount(e) > 0) : e
  }
  return []
}

function eO() {
  returnfalse
}

function ev(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || eO())
}

function eA(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: r
  } = t;
  if (w.Ay.getMentionCount(e.id) > 0) returntrue;
  for (let t in r[e.id])
    if (w.Ay.getMentionCount(t) > 0) returntrue;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !eO();
  let i = E.A.getNewChannelIds(e.category.guild.id);
  if (i.size > z);
  else if (i.has(e.id)) returntrue;
  returnfalse
}

function eI(e, t, n) {
  let {
    selectedChannel: r,
    activeJoinedRelevantThreads: i
  } = n;
  if (t.type === G.rbe.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(V.lx.IS_GUILD_RESOURCE_CHANNEL)) returnfalse;
  if (t.isGuildVocal()) {
    let n = k.A.isVoiceCategoryCollapsed(e.id);
    if (!n) returnfalse;
    let r = s().some(D.A.getVoiceStatesForChannel(t.id));
    if (n && r) returnfalse
  }
  if (null != r && (r.id === t.id || r.isThread() && r.parent_id === t.id) || w.Ay.getMentionCount(t.id) > 0) returntrue;
  for (let e in i[t.id])
    if (w.Ay.getMentionCount(e) > 0 || w.Ay.hasUnread(e) || w.Ay.hasRecentlyVisitedAndRead(e)) returntrue;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) returnfalse;
  let a = E.A.getNewChannelIds(e.id),
    o = Array.from(a).sort((e, t) => j.default.compare(t, e));
  return !!(a.has(t.id) && o.indexOf(t.id) < z || w.Ay.hasRecentlyVisitedAndRead(t.id))
}
let eS = new Set(Object.values(Chunk281405.n));

function eT(e) {
  if (null == e) return null;
  if (eS.has(e)) return e;
  let t = S.A.getChannel(e);
  return (null == t ? true : t.isDirectory()) ? U.n.GUILD_DIRECTORY : null
}
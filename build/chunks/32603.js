/** Chunk was on 44411 **/
/** chunk id: 32603, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => ee,
  HP: () => X,
  PU: () => q,
  TF: () => Q,
  Xt: () => K,
  bK: () => $,
  go: () => ey,
  rR: () => z,
  wF: () => ev,
  xu: () => er,
  yO: () => J
}), require("./896048.js"), require("./65821.js"), require("./321073.js"), require("./114821.js"), require("./339614.js"), require("./667532.js"), require("./638769.js");
var Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
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

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Y = "placeholder-channel-id",
  z = 2,
  K = 0,
  q = 1,
  X = 2,
  J = 3,
  $ = 4,
  Q = 5,
  Z = new Set([String(Chunk281405.n.GUILD_DIRECTORY)]);
class ee {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? true : n.getGuildActionSection().getRows().filter(e => !Z.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? true : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t) returnfalse;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      i = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in i.channels) {
      let t = i.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && l().some(P.A.getVoiceStatesForChannel(t.id)) && N.Ay.getMentionCount(t.id) > 0) returntrue
    }
    returnfalse
  }
  getGuild(e, t, n) {
    return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n) || this._areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e)) && (this.guilds[e] = new et(e, t, n)), this.guilds[e]
  }
  getGuildChannelRowsOnly(e) {
    return e in this.guilds || (this.guilds[e] = new et(e, [], [])), this.guilds[e]
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
    let t = I.A.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof E.YB || null != (t = I.A.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    H(this, "guilds", {})
  }
}
class et {
  get initializationData() {
    return {
      selectedChannel: I.A.getChannel(R.A.getChannelId()),
      selectedVoiceChannelId: R.A.getVoiceChannelId(),
      activeJoinedRelevantThreads: S.A.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: S.A.getActiveJoinedUnreadThreadsForGuild(this.id)
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
      this.sortedNamedCategories = l().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case K:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case q:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case X:
        return this.favoritesCategory;
      case $:
        return this.noParentCategory;
      case this.recentsSectionNumber:
        return this.recentsCategory;
      case this.voiceChannelsSectionNumber:
        return this.voiceChannelsCategory;
      default:
        return this.getSortedNamedCategories()[e - Q]
    }
  }
  getNamedCategoryFromSection(e) {
    return e -= Q, s()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
    let i = n.channels[n.getShownChannelIds()[t]];
    return null == i ? null : {
      category: n,
      channel: i
    }
  }
  isPlaceholderRow(e, t) {
    return s()(e > q, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
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
    let t = function(e) {
      if (null == e) return null;
      if (eO.has(e)) return e;
      let t = I.A.getChannel(e);
      return (null == t ? true : t.isDirectory()) ? M.n.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: q
    }];
    let n = [],
      i = I.A.getChannel(e);
    if (null == i || null == e) return n;
    let s = i.isThread();
    if (s && (i = I.A.getChannel(i.parent_id)), null == i) return n;
    let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    r >= 0 && n.push({
      section: X,
      row: r
    });
    let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (o >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: o
      }), i.type === F.rbe.GUILD_CATEGORY) return [{
      section: l().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? true : i.id)) + Q
    }];
    let a = this.getCategory(i),
      d = a instanceof ei ? $ : this.getSortedNamedCategories().indexOf(a) + Q,
      u = a.getShownChannelIds().indexOf(i.id);
    if (d >= 0 && u >= 0) {
      let t = s ? a.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: d,
        row: u,
        threadOffset: t
      })
    }
    let c = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
    return c >= 0 && n.push({
      section: this.voiceChannelsSectionNumber,
      row: c
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
    s()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      r = true,
      l = false,
      o = [],
      a = [];
    for (let e of this.getSortedCategories()) {
      let s = (null == t ? true : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let d = e.channels[t];
        r && (d.id === n.id ? r = false : s || o.push(d)), l && !s && a.push(d), r || l || d.id !== i.id || (l = true)
      }
    }
    return [o, e, a]
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
    for (let i of e) null != n[i] && t.push(n[i]);
    return t
  }
  getChannel(e) {
    var t;
    return null != (t = this._initializeAllChannelsById()[e]) ? t : null
  }
  updateSubtitles(e) {
    let t = [];
    if (null != e) {
      let n = I.A.getChannel(e);
      if (null != n)
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
      else {
        let i = this.getCategory(n);
        null != i && null != i.channels[e] && (t = [i.channels[e]])
      }
    } else t = l()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
    let n = false;
    return t.forEach(e => {
      e.updateSubtitle() && (n = true)
    }), n && this.version++, n
  }
  forEachShownChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getShownChannelIds()) {
          let i = n.channels[t];
          for (let t of (e(i.record), i.threadIds)) {
            let n = I.A.getChannel(t);
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
    var i, r;
    H(this, "id", true), H(this, "hideMutedChannels", true), H(this, "favoritesSectionNumber", true), H(this, "recentsSectionNumber", true), H(this, "voiceChannelsSectionNumber", true), H(this, "mutedChannelIds", true), H(this, "optedInChannels", true), H(this, "optInEnabled", true), H(this, "hideResourceChannels", true), H(this, "favoriteChannelIds", true), H(this, "suggestedFavoriteChannelId", true), H(this, "collapsedCategoryIds", true), H(this, "moderatorReportChannelId", true), H(this, "moderatorReportChannelEnabled", true), H(this, "categories", true), H(this, "noParentCategory", true), H(this, "favoritesCategory", true), H(this, "recentsCategory", true), H(this, "voiceChannelsCategory", true), H(this, "guildActionSection", true), H(this, "channelNoticeSection", true), H(this, "sortedNamedCategories", true), H(this, "sections", true), H(this, "rows", true), H(this, "firstVoiceChannel", true), H(this, "allChannelsById", true), H(this, "version", true), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = true, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = x.Ay.isGuildCollapsed(this.id), this.mutedChannelIds = x.Ay.getMutedChannels(this.id), this.optedInChannels = null != (i = x.Ay.getOptedInChannelsWithPendingUpdates(this.id)) ? i : x.Ay.getOptedInChannels(this.id), this.optInEnabled = (0, y.WW)(this.id), this.hideResourceChannels = (0, c.K)(this.id), this.favoriteChannelIds = new Set(null != (r = x.Ay.getGuildFavorites(this.id)) ? r : []), this.suggestedFavoriteChannelId = f.A.getSuggestedChannelId(this.id), this.collapsedCategoryIds = A.A.getCollapsedCategories();
    const o = I.A.getMutableGuildChannelsForGuild(this.id),
      a = w.A.getGuild(this.id);
    this.moderatorReportChannelId = null != a ? (0, b.A)(a) : null, this.moderatorReportChannelEnabled = null != a && (0, m.A)(a);
    const d = {},
      u = [],
      h = {};
    for (const e in o) {
      const t = o[e];
      t.type === F.rbe.GUILD_CATEGORY && (d[t.id] = t, h[t.id] = [])
    }
    const p = [],
      C = [],
      v = [],
      S = this.initializationData;
    for (const e in o) {
      const t = o[e];
      if (t.type !== F.rbe.GUILD_CATEGORY) {
        if (t.type === F.rbe.GUILD_DIRECTORY) {
          null == a || a.features.has(F.GuildFeatures.HUB) || v.push(t);
          continue
        }
        eS(this, t, S) ? p.push(t) : (t.type === F.rbe.GUILD_VOICE || t.type === F.rbe.GUILD_STAGE_VOICE) && (null != t.parent_id && null != d[t.parent_id] && C.push(d[t.parent_id]), C.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : u.push(t)
      }
    }
    for (const e in this.categories = {}, h) this.categories[e] = new es(this, d[e], h[e], S);
    this.recentsSectionNumber = J, this.favoritesSectionNumber = X, this.noParentCategory = new ei(this, u, S), this.favoritesCategory = new er(this, S), this.recentsCategory = (0, g.i)() ? new el(this, o, S) : new eo(this, p, S), this.voiceChannelsCategory = new ea(this, C, d, S), this.guildActionSection = new eu(t, v.length > 0), this.channelNoticeSection = new ed(n), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = Q + l().size(this.categories)
  }
}
class en {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), true)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e
  }
  shouldShowEmptyCategory() {
    return l().some(this.channels, e => e.renderLevel >= 3)
  }
  getShownChannelIds() {
    return null == this.shownChannelIds && (this.shownChannelIds = l()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).map(e => e.id).value()), this.shownChannelIds
  }
  getShownChannelAndThreadIds() {
    let e = l()(this.channels).values().flatMap(e => e.threadIds).value();
    return this.getShownChannelIds().concat(e)
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length
  }
  getChannelRecords() {
    return l()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
  }
  getFirstVoiceChannel(e) {
    for (let t of this.getShownChannelIds())
      if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
      else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
    return null
  }
  constructor(e) {
    H(this, "guild", true), H(this, "isMuted", true), H(this, "isCollapsed", true), H(this, "position", true), H(this, "channels", true), H(this, "shownChannelIds", true), this.guild = e, this.isMuted = false, this.isCollapsed = false, this.position = false, this.channels = {}, this.shownChannelIds = null
  }
}
class ei extends en {
  constructor(e, t, n) {
    super(e), this.channels = l()(t).map(e => new eh(this, e, n)).keyBy(e => e.id).value()
  }
}
class es extends en {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || j.A.can(V.xB.MANAGE_CHANNELS, this.record) && j.A.can(V.xB.VIEW_CHANNEL, this.record) && l().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (const s of (super(e), H(this, "id", true), H(this, "record", true), this.record = t, this.id = t.id, this.isCollapsed = true === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eh(this, s, i)
  }
}
class er extends en {
  updateChannel(e, t) {
    let n = e.id in this.channels && x.Ay.isFavorite(e.guild_id, e.id),
      i = f.A.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = W(k({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), true) : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), true)
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t) {
    var n;
    if (super(e), !e.optInEnabled) return;
    this.channels = l()(null != (n = x.Ay.getGuildFavorites(e.id)) ? n : []).map(e => I.A.getChannel(e)).filter(L.Vq).map(e => new ep(this, e, t)).keyBy(e => e.id).value();
    const i = f.A.getSuggestedChannelId(e.id),
      s = I.A.getChannel(i);
    null != s && null != i && (this.channels[i] = new ep(this, s, W(k({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class el extends en {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, false)
  }
  updateChannel(e, t) {
    if (!this.enabled) returnfalse;
    if ((0, E.fT)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, E.ig)(e.type)) returnfalse;
    let n = super.updateChannel(e, t),
      i = this.channels[e.id];
    return null == i ? (i = new ef(this, e, t), this.channels[e.id] = i, this.invalidate(), true) : this.updateShownChannelIds(i) || n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? l()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < el.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : D.DISCORD_EPOCH))
      }).take(el.MAX_RECENT_CHANNELS).sortBy(e => {
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
      return t > false && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > el.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, el.MAX_RECENT_CHANNELS)), true
    }
    returnfalse
  }
  constructor(e, t, n) {
    if (super(e), H(this, "enabled", false), this.isCollapsed = C.A.isCollapsed(e.id), this.enabled = false, this.enabled)
      for (const e of Object.values(t))(0, E.ig)(e.type) && !(0, E.fT)(e.type) && (this.channels[e.id] = new ef(this, e, n))
  }
}
H(el, "MIN_READABLE_CHANNELS", 7), H(el, "MAX_RECENT_CHANNELS", 10), H(el, "MAX_TIMESTAMP_DELTA", 6048e5);
class eo extends en {
  updateAllChannels(e) {
    let t = false;
    return D.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = true)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (eS(this.guild, e, t) && null == n) return this.channels[e.id] = new eg(this, e, t), this.invalidate(), true
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = l()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = e.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...e.filter(e => 4 === e.renderLevel).value(), ...t]);
      this.shownChannelIds = l()([...n]).sortBy(e => {
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
    this.isCollapsed = false, this.isMuted = false, this.channels = l()(t).map(e => new eg(this, e, n)).keyBy(e => e.id).value()
  }
}
class ea extends en {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = l()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = e.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = l()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === F.rbe.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (n = null == (i = t[e.record.parent_id]) ? true : i.position) ? n : false
        }
        return false
      })(e, this.categoriesById), e => e.record.type === F.rbe.GUILD_CATEGORY ? false : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let i = t[n];
        n < t.length - 1 && i.record.type === F.rbe.GUILD_CATEGORY && (null == (e = t[n + 1]) ? true : e.record.type) === F.rbe.GUILD_CATEGORY || (n !== t.length - 1 || i.record.type !== F.rbe.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), H(this, "categoriesById", true), H(this, "hiddenChannelIds", true), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = G.A.isVoiceCategoryCollapsed(e.id), this.isMuted = false, this.categoriesById = n, this.channels = l()(t).map(e => new eC(this, e, i)).keyBy(e => e.id).value()
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
    H(this, "rows", true), this.rows = e
  }
}
class eu {
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
    H(this, "guildActionRows", true), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(M.n.GUILD_DIRECTORY))
  }
}
class ec {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return _.A.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(N.Ay.lastMessageTimestamp(this.id), ...this.threadIds.map(N.Ay.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = false;
    null != e && e !== this.record && (this.record = e, n = true);
    let i = this.computeState(t);
    return i.renderLevel === this.renderLevel && l().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = l().size(i.threadIds), n = true), 4 === this.renderLevel && this.updateSubtitle() && (n = true), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !l().isEqual(this.subtitle, e) && (this.subtitle = e, true)
  }
  computeSubtitle() {
    return ey(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    H(this, "category", true), H(this, "record", true), H(this, "id", true), H(this, "position", true), H(this, "threadIds", true), H(this, "threadCount", true), H(this, "subtitle", true), H(this, "renderLevel", true), this.category = e, this.record = t, this.position = false, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    const {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = l().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eh extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: r
    } = e;
    if (!j.A.can(V.xB.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!u.A.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let o = this.record.parent_id,
      a = this.category.guild;
    if (eb(a, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let d = (null == n ? true : n.id) === this.id || i === this.id,
      c = null != n && n.isThread() && n.parent_id === this.id,
      h = null != (t = d || c || !this.category.isCollapsed && !this.isMuted ? s[this.id] : r[this.id]) ? t : {},
      p = ev(this.record, h, n, i, a.hideMutedChannels);
    return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: d ? 4 : 1,
      threadIds: p
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != o && a.optedInChannels.has(o) ? d || c || !l().isEmpty(p) || N.Ay.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: p
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: p
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != o && a.mutedChannelIds.has(o) || this.record.isGuildVocal() || this.record.type === F.rbe.GUILD_STORE || (0, E.ig)(this.record.type) && !N.Ay.hasUnread(this.record.id)) ? {
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
class ep extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return j.A.can(V.xB.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eg extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return j.A.can(V.xB.VIEW_CHANNEL, this.record) ? eS(this.category.guild, this.record, e) ? {
      renderLevel: em(this, e) ? 4 : 3,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ef extends eh {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && em(this, e) && (t = 4), n = l().sortBy(n, e => -N.Ay.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class eC extends eh {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !j.A.can(V.xB.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eb(t, this.record) ? 1 : this.category.isCollapsed ? l().some(P.A.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
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
    case F.rbe.GUILD_VOICE: {
      let i = h.Ay.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let s = T.Ay.getVoiceStatesForChannel(e);
      if (n && t && (0, U.t)(s)) return {
        type: "go-live"
      };
      let r = d.A.getChannelStatus(e);
      if (null != r && r.length > 0) return {
        type: "voice",
        text: r
      };
      let l = o.Ay.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = a.A.getApplication(e.applicationId)) ? true : t.name
      }).filter(L.Vq);
      if (l.length > 0) return {
        type: "embedded-activities",
        name: l.join(", ")
      };
      return null
    }
    case F.rbe.GUILD_STAGE_VOICE: {
      let t = h.Ay.getActiveEventByChannel(e.id);
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

function ev(e, t, n, i, s) {
  let r = null != n && (n.id === e.id || i === e.id),
    o = null != n && n.isThread() && n.parent_id === e.id;
  if (E.wE.has(e.type)) {
    let e = l().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return r ? e : o ? (n.id in t || e.unshift(n.id), e) : s ? e.filter(e => !O.A.isMuted(e) || N.Ay.getMentionCount(e) > 0) : e
  }
  return []
}

function eb(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || false)
}

function em(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (N.Ay.getMentionCount(e.id) > 0) returntrue;
  for (let t in i[e.id])
    if (N.Ay.getMentionCount(t) > 0) returntrue;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) returntrue;
  let s = v.A.getNewChannelIds(e.category.guild.id);
  if (s.size > z);
  else if (s.has(e.id)) returntrue;
  returnfalse
}

function eS(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === F.rbe.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(B.lx.IS_GUILD_RESOURCE_CHANNEL)) returnfalse;
  if (t.isGuildVocal()) {
    let n = G.A.isVoiceCategoryCollapsed(e.id);
    if (!n) returnfalse;
    let i = l().some(P.A.getVoiceStatesForChannel(t.id));
    if (n && i) returnfalse
  }
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || N.Ay.getMentionCount(t.id) > 0) returntrue;
  for (let e in s[t.id])
    if (N.Ay.getMentionCount(e) > 0 || N.Ay.hasUnread(e) || N.Ay.hasRecentlyVisitedAndRead(e)) returntrue;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) returnfalse;
  let r = v.A.getNewChannelIds(e.id),
    o = Array.from(r).sort((e, t) => D.default.compare(t, e));
  return !!(r.has(t.id) && o.indexOf(t.id) < z || N.Ay.hasRecentlyVisitedAndRead(t.id))
}
let eO = new Set(Object.values(Chunk281405.n))
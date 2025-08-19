/** Chunk was on 4756 **/
/** chunk id: 540126, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Bz: () => eC,
  Cb: () => Y,
  Fq: () => q,
  PB: () => J,
  VR: () => el,
  ZP: () => et,
  p2: () => X,
  wF: () => $,
  wZ: () => K,
  wd: () => Q,
  zR: () => eb
}), require("./388685.js"), require("./415506.js"), require("./539854.js"), require("./361932.js"), require("./187205.js"), require("./290780.js"), require("./642613.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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
  Chunk295454 = require("./295454.js"),
  Chunk443063 = require("./443063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk231338 = require("./231338.js");

function V(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
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
let W = "placeholder-channel-id",
  Y = 2,
  q = 0,
  K = 1,
  X = 2,
  J = 3,
  Q = 4,
  $ = 5,
  ee = new Set([String(Chunk443063.z.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? true : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? true : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t || !(0, G.K)("recents_channels_active_now_check")) returnfalse;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      i = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in i.channels) {
      let t = i.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && l().some(A.Z.getVoiceStatesForChannel(t.id)) && N.ZP.getMentionCount(t.id) > 0) returntrue
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
    let t = I.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof E.Sf || null != (t = I.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    V(this, "guilds", {})
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
      this.sortedNamedCategories = l().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (exports.position = ++module, exports.getShownChannelIds())) exports.channels[require].position = ++module
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case q:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case K:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case X:
        return this.favoritesCategory;
      case Q:
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
    return e -= $, r()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
    return r()(e > K, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === W
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
      if (eE.has(e)) return e;
      let t = I.Z.getChannel(e);
      return (null == t ? true : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: K
    }];
    let n = [],
      i = I.Z.getChannel(e);
    if (null == i || null == e) return n;
    let r = i.isThread();
    if (r && (i = I.Z.getChannel(i.parent_id)), null == i) return n;
    let s = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    s >= 0 && n.push({
      section: X,
      row: s
    });
    let o = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (o >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: o
      }), i.type === B.d4z.GUILD_CATEGORY) return [{
      section: l().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? true : i.id)) + $
    }];
    let a = this.getCategory(i),
      u = a instanceof er ? Q : this.getSortedNamedCategories().indexOf(a) + $,
      c = a.getShownChannelIds().indexOf(i.id);
    if (u >= 0 && c >= 0) {
      let t = r ? a.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: u,
        row: c,
        threadOffset: t
      })
    }
    let d = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
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
    r()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      s = true,
      l = false,
      o = [],
      a = [];
    for (let e of this.getSortedCategories()) {
      let r = (null == t ? true : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let u = e.channels[t];
        s && (u.id === n.id ? s = false : r || o.push(u)), l && !r && a.push(u), s || l || u.id !== i.id || (l = true)
      }
    }
    return [o, e, a]
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
      let n = I.Z.getChannel(e);
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
            let n = I.Z.getChannel(t);
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
    var i, s;
    V(this, "id", true), V(this, "hideMutedChannels", true), V(this, "favoritesSectionNumber", true), V(this, "recentsSectionNumber", true), V(this, "voiceChannelsSectionNumber", true), V(this, "mutedChannelIds", true), V(this, "optedInChannels", true), V(this, "optInEnabled", true), V(this, "hideResourceChannels", true), V(this, "favoriteChannelIds", true), V(this, "suggestedFavoriteChannelId", true), V(this, "collapsedCategoryIds", true), V(this, "moderatorReportChannelId", true), V(this, "moderatorReportChannelEnabled", true), V(this, "categories", true), V(this, "noParentCategory", true), V(this, "favoritesCategory", true), V(this, "recentsCategory", true), V(this, "voiceChannelsCategory", true), V(this, "guildActionSection", true), V(this, "channelNoticeSection", true), V(this, "sortedNamedCategories", true), V(this, "sections", true), V(this, "rows", true), V(this, "firstVoiceChannel", true), V(this, "allChannelsById", true), V(this, "version", true), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = true, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = T.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = T.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = T.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : T.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, m.r1)(this.id), this.hideResourceChannels = (0, d.s)(this.id), this.favoriteChannelIds = new Set(null != (s = T.ZP.getGuildFavorites(this.id)) ? s : []), this.suggestedFavoriteChannelId = f.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = _.Z.getCollapsedCategories();
    let o = I.Z.getMutableGuildChannelsForGuild(this.id),
      a = j.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != a ? (0, b.Z)(a) : null, this.moderatorReportChannelEnabled = null != a && (0, y.Z)(a);
    let u = {},
      c = [],
      h = {};
    for (let e in o) {
      let t = o[e];
      t.type === B.d4z.GUILD_CATEGORY && (u[t.id] = t, h[t.id] = [])
    }
    let p = [],
      v = [],
      C = [],
      O = this.initializationData;
    for (let e in o) {
      let t = o[e];
      if (t.type !== B.d4z.GUILD_CATEGORY) {
        if (t.type === B.d4z.GUILD_DIRECTORY) {
          null == a || a.features.has(B.oNc.HUB) || C.push(t);
          continue
        }
        eS(this, t, O) ? p.push(t) : (t.type === B.d4z.GUILD_VOICE || t.type === B.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != u[t.parent_id] && v.push(u[t.parent_id]), v.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : c.push(t)
      }
    }
    for (let e in this.categories = {}, h) this.categories[e] = new es(this, u[e], h[e], O);
    this.recentsSectionNumber = J, this.favoritesSectionNumber = X, this.noParentCategory = new er(this, c, O), this.favoritesCategory = new el(this, O), this.recentsCategory = (0, g.Q)() ? new eo(this, o, O) : new ea(this, p, O), this.voiceChannelsCategory = new eu(this, v, u, O), this.guildActionSection = new ed(t, C.length > 0), this.channelNoticeSection = new ec(n), r()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + l().size(this.categories)
  }
}
class ei {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), true)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === module.length && this.shouldShowEmptyCategory() ? [W] : module
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
    return this.getShownChannelIds().concat(module)
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
    V(this, "guild", true), V(this, "isMuted", true), V(this, "isCollapsed", true), V(this, "position", true), V(this, "channels", true), V(this, "shownChannelIds", true), this.guild = e, this.isMuted = false, this.isCollapsed = false, this.position = false, this.channels = {}, this.shownChannelIds = null
  }
}
class er extends ei {
  constructor(e, t, n) {
    super(e), this.channels = l()(t).map(e => new ep(this, e, n)).keyBy(e => e.id).value()
  }
}
class es extends ei {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || Chunk496675.Z.can(Chunk231338.Pl.MANAGE_CHANNELS, this.record) && Chunk496675.Z.can(Chunk231338.Pl.VIEW_CHANNEL, this.record) && l().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let r of (super(e), V(this, "id", true), V(this, "record", true), this.record = t, this.id = t.id, this.isCollapsed = true === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[r.id] = new ep(this, r, i)
  }
}
class el extends ei {
  updateChannel(e, t) {
    let n = e.id in this.channels && T.ZP.isFavorite(e.guild_id, e.id),
      i = f.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = z(H({}, t), {
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
    this.channels = l()(null != (n = T.ZP.getGuildFavorites(e.id)) ? n : []).map(e => I.Z.getChannel(e)).filter(D.lm).map(e => new eg(this, e, t)).keyBy(e => e.id).value();
    let i = f.Z.getSuggestedChannelId(e.id),
      r = I.Z.getChannel(i);
    null != r && null != i && (this.channels[i] = new eg(this, r, z(H({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class eo extends ei {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, false)
  }
  updateChannel(e, t) {
    if (!this.enabled) returnfalse;
    if ((0, E.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, E.vc)(e.type)) returnfalse;
    let n = super.updateChannel(e, t),
      i = this.channels[e.id];
    return null == i ? (i = new ev(this, e, t), this.channels[e.id] = i, this.invalidate(), true) : this.updateShownChannelIds(i) || n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? l()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < eo.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : Z.DISCORD_EPOCH))
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
    if (super(e), V(this, "enabled", false), this.isCollapsed = v.Z.isCollapsed(e.id), this.enabled = false, this.enabled)
      for (let e of Object.values(t))(0, E.vc)(e.type) && !(0, E.Q5)(e.type) && (this.channels[e.id] = new ev(this, e, n))
  }
}
V(eo, "MIN_READABLE_CHANNELS", 7), V(eo, "MAX_RECENT_CHANNELS", 10), V(eo, "MAX_TIMESTAMP_DELTA", 6048e5);
class ea extends ei {
  updateAllChannels(e) {
    let t = false;
    return Z.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = true)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (eS(this.guild, e, t) && null == n) return this.channels[e.id] = new ef(this, e, t), this.invalidate(), true
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = l()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = module.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...module.filter(e => 4 === e.renderLevel).value(), ...exports]);
      this.shownChannelIds = l()([...require]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || p.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = false, this.isMuted = false, this.channels = l()(t).map(e => new ef(this, e, n)).keyBy(e => e.id).value()
  }
}
class eu extends ei {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = l()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (module.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = module.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === module.length && this.getHiddenChannelIds().length > 0 ? [W] : module
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = l()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === B.d4z.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (i = null == (n = t[e.record.parent_id]) ? true : n.position) ? i : false
        }
        return false
      })(e, this.categoriesById), e => e.record.type === B.d4z.GUILD_CATEGORY ? false : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; require < exports.length; require++) {
        var e;
        let i = exports[require];
        require < exports.length - 1 && Chunk512722.record.type === Chunk981631.d4z.GUILD_CATEGORY && (null == (e = exports[require + 1]) ? true : module.record.type) === Chunk981631.d4z.GUILD_CATEGORY || (require !== exports.length - 1 || Chunk512722.record.type !== Chunk981631.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(Chunk512722.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), V(this, "categoriesById", true), V(this, "hiddenChannelIds", true), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = M.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = false, this.categoriesById = n, this.channels = l()(t).map(e => new em(this, e, i)).keyBy(e => e.id).value()
  }
}
class ec {
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
    V(this, "rows", true), this.rows = e
  }
}
class ed {
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
    V(this, "guildActionRows", true), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY))
  }
}
class eh {
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
    let i = this.computeState(t);
    return i.renderLevel === this.renderLevel && l().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = l().size(i.threadIds), n = true), 4 === this.renderLevel && this.updateSubtitle() && (n = true), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !l().isEqual(this.subtitle, module) && (this.subtitle = module, true)
  }
  computeSubtitle() {
    return eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    V(this, "category", true), V(this, "record", true), V(this, "id", true), V(this, "position", true), V(this, "threadIds", true), V(this, "threadCount", true), V(this, "subtitle", true), V(this, "renderLevel", true), this.category = e, this.record = t, this.position = false, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: r
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = l().size(r), this.threadIds = r, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class ep extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r,
      activeJoinedUnreadThreads: s
    } = e;
    if (!P.Z.can(k.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!c.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let o = this.record.parent_id,
      a = this.category.guild;
    if (ey(a, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let u = (null == n ? true : n.id) === this.id || i === this.id,
      d = null != n && n.isThread() && n.parent_id === this.id,
      h = null != (t = u || d || !this.category.isCollapsed && !this.isMuted ? r[this.id] : s[this.id]) ? t : {},
      p = eb(this.record, h, n, i, a.hideMutedChannels);
    return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: u ? 4 : 1,
      threadIds: p
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != o && a.optedInChannels.has(o) ? u || d || !l().isEmpty(p) || N.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: p
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: p
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != o && a.mutedChannelIds.has(o) || this.record.isGuildVocal() || this.record.type === B.d4z.GUILD_STORE || (0, E.vc)(this.record.type) && !N.ZP.hasUnread(this.record.id)) ? {
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
class eg extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r
    } = e;
    return P.Z.can(k.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eb(this.record, null != (t = r[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ef extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r
    } = e;
    return P.Z.can(k.Pl.VIEW_CHANNEL, this.record) ? eS(this.category.guild, this.record, e) ? {
      renderLevel: eO(this, e) ? 4 : 3,
      threadIds: eb(this.record, null != (t = r[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ev extends ep {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        r = this.category.guild;
      r.mutedChannelIds.has(this.id) || null != i && r.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && eO(this, e) && (t = 4), n = l().sortBy(n, e => -N.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class em extends ep {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !P.Z.can(k.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ey(t, this.record) ? 1 : this.category.isCollapsed ? l().some(A.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function eC(e, t, n) {
  switch (e.type) {
    case B.d4z.GUILD_VOICE: {
      let i = h.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let r = L.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, R.a)(r)) return {
        type: "go-live"
      };
      let s = u.Z.getChannelStatus(e);
      if (null != s && s.length > 0) return {
        type: "voice",
        text: s
      };
      let l = o.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = a.Z.getApplication(e.applicationId)) ? true : t.name
      }).filter(D.lm);
      if (l.length > 0) return {
        type: "embedded-activities",
        name: l.join(", ")
      };
      return null
    }
    case B.d4z.GUILD_STAGE_VOICE: {
      let t = h.ZP.getActiveEventByChannel(e.id);
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

function eb(e, t, n, i, r) {
  let s = null != n && (n.id === e.id || i === e.id),
    o = null != n && n.isThread() && n.parent_id === e.id;
  if (E.uC.has(e.type)) {
    let e = l().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return s ? e : o ? (n.id in t || e.unshift(n.id), e) : r ? e.filter(e => !S.Z.isMuted(e) || N.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function ey(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || false)
}

function eO(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (N.ZP.getMentionCount(e.id) > 0) returntrue;
  for (let t in i[e.id])
    if (N.ZP.getMentionCount(t) > 0) returntrue;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) returntrue;
  let r = C.Z.getNewChannelIds(e.category.guild.id);
  if (r.size > Y);
  else if (r.has(e.id)) returntrue;
  returnfalse
}

function eS(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: r
  } = n;
  if (t.type === B.d4z.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL)) returnfalse;
  if (t.isGuildVocal()) {
    if (!(0, G.K)("should_show_in_recents")) returnfalse;
    let n = M.Z.isVoiceCategoryCollapsed(e.id);
    if (!n) returnfalse;
    let i = l().some(A.Z.getVoiceStatesForChannel(t.id));
    if (n && i) returnfalse
  }
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || N.ZP.getMentionCount(t.id) > 0) returntrue;
  for (let e in r[t.id])
    if (N.ZP.getMentionCount(e) > 0 || N.ZP.hasUnread(e) || N.ZP.hasRecentlyVisitedAndRead(e)) returntrue;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) returnfalse;
  let s = C.Z.getNewChannelIds(e.id),
    o = Array.from(s).sort((e, t) => Z.default.compare(t, e));
  return !!(s.has(t.id) && o.indexOf(t.id) < Y || N.ZP.hasRecentlyVisitedAndRead(t.id))
}
let eE = new Set(Object.values(Chunk443063.z))
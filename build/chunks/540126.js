/** Chunk was on 62117 **/
/** chunk id: 540126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bz: () => eI,
  Cb: () => W,
  Fq: () => K,
  PB: () => X,
  VR: () => er,
  ZP: () => et,
  p2: () => q,
  wF: () => $,
  wZ: () => J,
  wd: () => Q,
  zR: () => eS
}), require("./388685.js"), require("./415506.js"), require("./539854.js"), require("./361932.js"), require("./187205.js"), require("./290780.js"), require("./642613.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
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

function x(e, t, n) {
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
      x(e, t, n[t])
    })
  }
  return e
}

function k(e, t) {
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
  W = 2,
  K = 0,
  J = 1,
  q = 2,
  X = 3,
  Q = 4,
  $ = 5,
  ee = new Set([String(Chunk443063.z.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? true : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? true : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t || !(0, M.K)("recents_channels_active_now_check")) returnfalse;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      i = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in i.channels) {
      let t = i.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && r().some(P.Z.getVoiceStatesForChannel(t.id)) && R.ZP.getMentionCount(t.id) > 0) returntrue
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
    let t = b.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof _.Sf || null != (t = b.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    x(this, "guilds", {})
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
      this.sortedNamedCategories = r().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (exports.position = ++module, exports.getShownChannelIds())) exports.channels[require].position = ++module
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case K:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case J:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case q:
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
    return e -= $, s()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
    return s()(e > J, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
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
      if (e_.has(e)) return e;
      let t = b.Z.getChannel(e);
      return (null == t ? true : t.isDirectory()) ? B.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: J
    }];
    let n = [],
      i = b.Z.getChannel(e);
    if (null == i || null == e) return n;
    let s = i.isThread();
    if (s && (i = b.Z.getChannel(i.parent_id)), null == i) return n;
    let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    l >= 0 && n.push({
      section: q,
      row: l
    });
    let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (a >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: a
      }), i.type === F.d4z.GUILD_CATEGORY) return [{
      section: r().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? true : i.id)) + $
    }];
    let d = this.getCategory(i),
      o = d instanceof es ? Q : this.getSortedNamedCategories().indexOf(d) + $,
      h = d.getShownChannelIds().indexOf(i.id);
    if (o >= 0 && h >= 0) {
      let t = s ? d.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: o,
        row: h,
        threadOffset: t
      })
    }
    let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(i.id);
    return u >= 0 && n.push({
      section: this.voiceChannelsSectionNumber,
      row: u
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
    s()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      l = true,
      r = false,
      a = [],
      d = [];
    for (let e of this.getSortedCategories()) {
      let s = (null == t ? true : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let o = e.channels[t];
        l && (o.id === n.id ? l = false : s || a.push(o)), r && !s && d.push(o), l || r || o.id !== i.id || (r = true)
      }
    }
    return [a, e, d]
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
      let n = b.Z.getChannel(e);
      if (null != n)
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
      else {
        let i = this.getCategory(n);
        null != i && null != i.channels[e] && (t = [i.channels[e]])
      }
    } else t = r()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
            let n = b.Z.getChannel(t);
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
    var i, l;
    x(this, "id", true), x(this, "hideMutedChannels", true), x(this, "favoritesSectionNumber", true), x(this, "recentsSectionNumber", true), x(this, "voiceChannelsSectionNumber", true), x(this, "mutedChannelIds", true), x(this, "optedInChannels", true), x(this, "optInEnabled", true), x(this, "hideResourceChannels", true), x(this, "favoriteChannelIds", true), x(this, "suggestedFavoriteChannelId", true), x(this, "collapsedCategoryIds", true), x(this, "moderatorReportChannelId", true), x(this, "moderatorReportChannelEnabled", true), x(this, "categories", true), x(this, "noParentCategory", true), x(this, "favoritesCategory", true), x(this, "recentsCategory", true), x(this, "voiceChannelsCategory", true), x(this, "guildActionSection", true), x(this, "channelNoticeSection", true), x(this, "sortedNamedCategories", true), x(this, "sections", true), x(this, "rows", true), x(this, "firstVoiceChannel", true), x(this, "allChannelsById", true), x(this, "version", true), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = true, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = Z.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = Z.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = Z.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : Z.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, v.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (l = Z.ZP.getGuildFavorites(this.id)) ? l : []), this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = m.Z.getCollapsedCategories();
    let a = b.Z.getMutableGuildChannelsForGuild(this.id),
      d = O.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != d ? (0, S.Z)(d) : null, this.moderatorReportChannelEnabled = null != d && (0, y.Z)(d);
    let o = {},
      h = [],
      c = {};
    for (let e in a) {
      let t = a[e];
      t.type === F.d4z.GUILD_CATEGORY && (o[t.id] = t, c[t.id] = [])
    }
    let g = [],
      f = [],
      I = [],
      E = this.initializationData;
    for (let e in a) {
      let t = a[e];
      if (t.type !== F.d4z.GUILD_CATEGORY) {
        if (t.type === F.d4z.GUILD_DIRECTORY) {
          null == d || d.features.has(F.oNc.HUB) || I.push(t);
          continue
        }
        ew(this, t, E) ? g.push(t) : (t.type === F.d4z.GUILD_VOICE || t.type === F.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != o[t.parent_id] && f.push(o[t.parent_id]), f.push(t)), null != t.parent_id && t.parent_id in c ? c[t.parent_id].push(t) : h.push(t)
      }
    }
    for (let e in this.categories = {}, c) this.categories[e] = new el(this, o[e], c[e], E);
    this.recentsSectionNumber = X, this.favoritesSectionNumber = q, this.noParentCategory = new es(this, h, E), this.favoritesCategory = new er(this, E), this.recentsCategory = (0, C.Q)() ? new ea(this, a, E) : new ed(this, g, E), this.voiceChannelsCategory = new eo(this, f, o, E), this.guildActionSection = new eu(t, I.length > 0), this.channelNoticeSection = new eh(n), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + r().size(this.categories)
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
    return 0 === module.length && this.shouldShowEmptyCategory() ? [Y] : module
  }
  shouldShowEmptyCategory() {
    return r().some(this.channels, e => e.renderLevel >= 3)
  }
  getShownChannelIds() {
    return null == this.shownChannelIds && (this.shownChannelIds = r()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).map(e => e.id).value()), this.shownChannelIds
  }
  getShownChannelAndThreadIds() {
    let e = r()(this.channels).values().flatMap(e => e.threadIds).value();
    return this.getShownChannelIds().concat(module)
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length
  }
  getChannelRecords() {
    return r()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
  }
  getFirstVoiceChannel(e) {
    for (let t of this.getShownChannelIds())
      if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
      else if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t];
    return null
  }
  constructor(e) {
    x(this, "guild", true), x(this, "isMuted", true), x(this, "isCollapsed", true), x(this, "position", true), x(this, "channels", true), x(this, "shownChannelIds", true), this.guild = e, this.isMuted = false, this.isCollapsed = false, this.position = false, this.channels = {}, this.shownChannelIds = null
  }
}
class es extends ei {
  constructor(e, t, n) {
    super(e), this.channels = r()(t).map(e => new eg(this, e, n)).keyBy(e => e.id).value()
  }
}
class el extends ei {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || Chunk496675.Z.can(Chunk231338.Pl.MANAGE_CHANNELS, this.record) && Chunk496675.Z.can(Chunk231338.Pl.VIEW_CHANNEL, this.record) && r().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let s of (super(e), x(this, "id", true), x(this, "record", true), this.record = t, this.id = t.id, this.isCollapsed = true === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eg(this, s, i)
  }
}
class er extends ei {
  updateChannel(e, t) {
    let n = e.id in this.channels && Z.ZP.isFavorite(e.guild_id, e.id),
      i = p.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = k(H({}, t), {
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
    this.channels = r()(null != (n = Z.ZP.getGuildFavorites(e.id)) ? n : []).map(e => b.Z.getChannel(e)).filter(D.lm).map(e => new eC(this, e, t)).keyBy(e => e.id).value();
    let i = p.Z.getSuggestedChannelId(e.id),
      s = b.Z.getChannel(i);
    null != s && null != i && (this.channels[i] = new eC(this, s, k(H({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class ea extends ei {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, false)
  }
  updateChannel(e, t) {
    if (!this.enabled) returnfalse;
    if ((0, _.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, _.vc)(e.type)) returnfalse;
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
      this.shownChannelIds = this.enabled ? r()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < ea.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : G.DISCORD_EPOCH))
      }).take(ea.MAX_RECENT_CHANNELS).sortBy(e => {
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
      return t > false && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > ea.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, ea.MAX_RECENT_CHANNELS)), true
    }
    returnfalse
  }
  constructor(e, t, n) {
    if (super(e), x(this, "enabled", false), this.isCollapsed = f.Z.isCollapsed(e.id), this.enabled = false, this.enabled)
      for (let e of Object.values(t))(0, _.vc)(e.type) && !(0, _.Q5)(e.type) && (this.channels[e.id] = new ef(this, e, n))
  }
}
x(ea, "MIN_READABLE_CHANNELS", 7), x(ea, "MAX_RECENT_CHANNELS", 10), x(ea, "MAX_TIMESTAMP_DELTA", 6048e5);
class ed extends ei {
  updateAllChannels(e) {
    let t = false;
    return G.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = true)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (ew(this.guild, e, t) && null == n) return this.channels[e.id] = new ep(this, e, t), this.invalidate(), true
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = r()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = module.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...module.filter(e => 4 === e.renderLevel).value(), ...exports]);
      this.shownChannelIds = r()([...require]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || g.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = false, this.isMuted = false, this.channels = r()(t).map(e => new ep(this, e, n)).keyBy(e => e.id).value()
  }
}
class eo extends ei {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = r()(this.channels).filter(e => 3 === e.renderLevel).value();
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
      let t = r()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === F.d4z.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (i = null == (n = t[e.record.parent_id]) ? true : n.position) ? i : false
        }
        return false
      })(e, this.categoriesById), e => e.record.type === F.d4z.GUILD_CATEGORY ? false : e.record.position], ["asc", "asc"]).value();
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
    if (super(e), x(this, "categoriesById", true), x(this, "hiddenChannelIds", true), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = U.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = false, this.categoriesById = n, this.channels = r()(t).map(e => new ev(this, e, i)).keyBy(e => e.id).value()
  }
}
class eh {
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
    x(this, "rows", true), this.rows = e
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
    x(this, "guildActionRows", true), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(B.z.GUILD_DIRECTORY))
  }
}
class ec {
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
    return i.renderLevel === this.renderLevel && r().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = r().size(i.threadIds), n = true), 4 === this.renderLevel && this.updateSubtitle() && (n = true), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !r().isEqual(this.subtitle, module) && (this.subtitle = module, true)
  }
  computeSubtitle() {
    return eI(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    x(this, "category", true), x(this, "record", true), x(this, "id", true), x(this, "position", true), x(this, "threadIds", true), x(this, "threadCount", true), x(this, "subtitle", true), x(this, "renderLevel", true), this.category = e, this.record = t, this.position = false, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = r().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eg extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: l
    } = e;
    if (!A.Z.can(j.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!h.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let a = this.record.parent_id,
      d = this.category.guild;
    if (ey(d, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let o = (null == n ? true : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      c = null != (t = o || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) ? t : {},
      g = eS(this.record, c, n, i, d.hideMutedChannels);
    return this.id !== d.moderatorReportChannelId || d.moderatorReportChannelEnabled ? d.optInEnabled && d.hideResourceChannels && this.record.hasFlag(z.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: o ? 4 : 1,
      threadIds: g
    } : !d.optInEnabled || d.optedInChannels.has(this.id) || null != a && d.optedInChannels.has(a) ? o || u || !r().isEmpty(g) || R.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: g
    } : d.hideMutedChannels && d.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: g
    } : this.category.isCollapsed && (d.mutedChannelIds.has(this.id) || null != a && d.mutedChannelIds.has(a) || this.record.isGuildVocal() || this.record.type === F.d4z.GUILD_STORE || (0, _.vc)(this.record.type) && !R.ZP.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: g
    } : {
      renderLevel: 4,
      threadIds: g
    } : {
      renderLevel: 2,
      threadIds: g
    } : {
      renderLevel: 2,
      threadIds: g
    }
  }
}
class eC extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return A.Z.can(j.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eS(this.record, null != (t = s[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 1,
      threadIds: []
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
    return A.Z.can(j.Pl.VIEW_CHANNEL, this.record) ? ew(this.category.guild, this.record, e) ? {
      renderLevel: eE(this, e) ? 4 : 3,
      threadIds: eS(this.record, null != (t = s[this.id]) ? t : {}, n, i, false)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ef extends eg {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && ew(this.category.guild, this.record, e) && (t = 3), 3 === t && eE(this, e) && (t = 4), n = r().sortBy(n, e => -R.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class ev extends eg {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !A.Z.can(j.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ey(t, this.record) ? 1 : this.category.isCollapsed ? r().some(P.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = eI(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function eI(e, t, n) {
  switch (e.type) {
    case F.d4z.GUILD_VOICE: {
      let i = c.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let s = T.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, V.a)(s)) return {
        type: "go-live"
      };
      let l = o.Z.getChannelStatus(e);
      if (null != l && l.length > 0) return {
        type: "voice",
        text: l
      };
      let r = a.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = d.Z.getApplication(e.applicationId)) ? true : t.name
      }).filter(D.lm);
      if (r.length > 0) return {
        type: "embedded-activities",
        name: r.join(", ")
      };
      return null
    }
    case F.d4z.GUILD_STAGE_VOICE: {
      let t = c.ZP.getActiveEventByChannel(e.id);
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

function eS(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
    a = null != n && n.isThread() && n.parent_id === e.id;
  if (_.uC.has(e.type)) {
    let e = r().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return l ? e : a ? (n.id in t || e.unshift(n.id), e) : s ? e.filter(e => !w.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function ey(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || false)
}

function eE(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (R.ZP.getMentionCount(e.id) > 0) returntrue;
  for (let t in i[e.id])
    if (R.ZP.getMentionCount(t) > 0) returntrue;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) returntrue;
  let s = I.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > W);
  else if (s.has(e.id)) returntrue;
  returnfalse
}

function ew(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === F.d4z.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(z.zZ.IS_GUILD_RESOURCE_CHANNEL)) returnfalse;
  if (t.isGuildVocal()) {
    if (!(0, M.K)("should_show_in_recents")) returnfalse;
    let n = U.Z.isVoiceCategoryCollapsed(e.id);
    if (!n) returnfalse;
    let i = r().some(P.Z.getVoiceStatesForChannel(t.id));
    if (n && i) returnfalse
  }
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || R.ZP.getMentionCount(t.id) > 0) returntrue;
  for (let e in s[t.id])
    if (R.ZP.getMentionCount(e) > 0 || R.ZP.hasUnread(e) || R.ZP.hasRecentlyVisitedAndRead(e)) returntrue;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) returnfalse;
  let l = I.Z.getNewChannelIds(e.id),
    a = Array.from(l).sort((e, t) => G.default.compare(t, e));
  return !!(l.has(t.id) && a.indexOf(t.id) < W || R.ZP.hasRecentlyVisitedAndRead(t.id))
}
let e_ = new Set(Object.values(Chunk443063.z))
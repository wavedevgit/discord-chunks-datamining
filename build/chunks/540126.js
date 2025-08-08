/** Chunk was on 62117 **/
n.d(t, {
  Bz: () => ef,
  Cb: () => J,
  Fq: () => W,
  PB: () => Q,
  VR: () => er,
  ZP: () => et,
  p2: () => q,
  wF: () => $,
  wZ: () => X,
  wd: () => K,
  zR: () => ey
}), n(388685), n(415506), n(539854), n(361932), n(187205), n(290780), n(642613);
var i = n(512722),
  s = n.n(i),
  l = n(392711),
  r = n.n(l),
  h = n(317381),
  a = n(812206),
  d = n(12498),
  o = n(430198),
  u = n(931261),
  c = n(924301),
  C = n(160404),
  g = n(798423),
  p = n(18036),
  v = n(798379),
  I = n(398758),
  f = n(22082),
  y = n(893908),
  S = n(953252),
  w = n(601070),
  m = n(569471),
  E = n(131704),
  _ = n(680089),
  R = n(592125),
  b = n(58468),
  L = n(430824),
  N = n(496675),
  A = n(306680),
  O = n(944486),
  G = n(9156),
  P = n(979651),
  Z = n(938475),
  T = n(823379),
  D = n(709054),
  U = n(968358),
  V = n(203818),
  M = n(295454),
  B = n(443063),
  F = n(981631),
  z = n(176505),
  H = n(231338);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function j(e) {
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
  J = 2,
  W = 0,
  X = 1,
  q = 2,
  Q = 3,
  K = 4,
  $ = 5,
  ee = new Set([String(B.z.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t || !(0, M.K)("recents_channels_active_now_check")) return !1;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      i = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in i.channels) {
      let t = i.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && r().some(P.Z.getVoiceStatesForChannel(t.id)) && A.ZP.getMentionCount(t.id) > 0) return !0
    }
    return !1
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
    return null != e && e in this.guilds && (delete this.guilds[e], !0)
  }
  updateRecentsCategory(e) {
    var t, n;
    return null != e && e in this.guilds && null != (n = null == (t = this.guilds[e]) ? void 0 : t.updateRecentsCategory()) && n
  }
  nonPositionalChannelIdUpdate(e) {
    let t = R.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof E.Sf || null != (t = R.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
  }
  nonPositionalChannelUpdate(e) {
    if (null == e.guild_id) return !1;
    let t = this.guilds[e.guild_id];
    if (null == t) return !1;
    let n = !1;
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
      selectedChannel: R.Z.getChannel(O.Z.getChannelId()),
      selectedVoiceChannelId: O.Z.getVoiceChannelId(),
      activeJoinedRelevantThreads: w.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: w.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
    }
  }
  invalidate() {
    this.sections = null, this.rows = null, this.sortedNamedCategories = null, this.firstVoiceChannel = void 0, this.version++
  }
  getSortedNamedCategories() {
    return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories
  }
  getSortedCategories() {
    return [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory]
  }
  getSections() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections
  }
  getRows() {
    if (null == this.rows) {
      this.sortedNamedCategories = r().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case W:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case X:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case q:
        return this.favoritesCategory;
      case K:
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
    return s()(e > X, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
  }
  getFirstVoiceChannel(e) {
    if (void 0 === this.firstVoiceChannel) {
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
      let t = R.Z.getChannel(e);
      return (null == t ? void 0 : t.isDirectory()) ? B.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: X
    }];
    let n = [],
      i = R.Z.getChannel(e);
    if (null == i || null == e) return n;
    let s = i.isThread();
    if (s && (i = R.Z.getChannel(i.parent_id)), null == i) return n;
    let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    l >= 0 && n.push({
      section: q,
      row: l
    });
    let h = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (h >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: h
      }), i.type === F.d4z.GUILD_CATEGORY) return [{
      section: r().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? void 0 : i.id)) + $
    }];
    let a = this.getCategory(i),
      d = a instanceof es ? K : this.getSortedNamedCategories().indexOf(a) + $,
      o = a.getShownChannelIds().indexOf(i.id);
    if (d >= 0 && o >= 0) {
      let t = s ? a.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: d,
        row: o,
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
    return e && this.invalidate(), e
  }
  nonPositionalChannelUpdate(e) {
    let t = this.initializationData,
      n = this.getCategory(e).updateChannel(e, t);
    return this.favoritesCategory.updateChannel(e, t) && (n = !0), this.recentsCategory.updateChannel(e, t) && (n = !0), this.voiceChannelsCategory.updateChannel(e, t) && (n = !0), n && this.invalidate(), n
  }
  getSlicedChannels(e, t) {
    s()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      l = !0,
      r = !1,
      h = [],
      a = [];
    for (let e of this.getSortedCategories()) {
      let s = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let d = e.channels[t];
        l && (d.id === n.id ? l = !1 : s || h.push(d)), r && !s && a.push(d), l || r || d.id !== i.id || (r = !0)
      }
    }
    return [h, e, a]
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
      let n = R.Z.getChannel(e);
      if (null != n)
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
      else {
        let i = this.getCategory(n);
        null != i && null != i.channels[e] && (t = [i.channels[e]])
      }
    } else t = r()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
    let n = !1;
    return t.forEach(e => {
      e.updateSubtitle() && (n = !0)
    }), n && this.version++, n
  }
  forEachShownChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getShownChannelIds()) {
          let i = n.channels[t];
          for (let t of (e(i.record), i.threadIds)) {
            let n = R.Z.getChannel(t);
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
    x(this, "id", void 0), x(this, "hideMutedChannels", void 0), x(this, "favoritesSectionNumber", void 0), x(this, "recentsSectionNumber", void 0), x(this, "voiceChannelsSectionNumber", void 0), x(this, "mutedChannelIds", void 0), x(this, "optedInChannels", void 0), x(this, "optInEnabled", void 0), x(this, "hideResourceChannels", void 0), x(this, "favoriteChannelIds", void 0), x(this, "suggestedFavoriteChannelId", void 0), x(this, "collapsedCategoryIds", void 0), x(this, "moderatorReportChannelId", void 0), x(this, "moderatorReportChannelEnabled", void 0), x(this, "categories", void 0), x(this, "noParentCategory", void 0), x(this, "favoritesCategory", void 0), x(this, "recentsCategory", void 0), x(this, "voiceChannelsCategory", void 0), x(this, "guildActionSection", void 0), x(this, "channelNoticeSection", void 0), x(this, "sortedNamedCategories", void 0), x(this, "sections", void 0), x(this, "rows", void 0), x(this, "firstVoiceChannel", void 0), x(this, "allChannelsById", void 0), x(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = G.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = G.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = G.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : G.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, I.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (l = G.ZP.getGuildFavorites(this.id)) ? l : []), this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = _.Z.getCollapsedCategories();
    let h = R.Z.getMutableGuildChannelsForGuild(this.id),
      a = L.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != a ? (0, y.Z)(a) : null, this.moderatorReportChannelEnabled = null != a && (0, S.Z)(a);
    let d = {},
      o = [],
      c = {};
    for (let e in h) {
      let t = h[e];
      t.type === F.d4z.GUILD_CATEGORY && (d[t.id] = t, c[t.id] = [])
    }
    let C = [],
      v = [],
      f = [],
      w = this.initializationData;
    for (let e in h) {
      let t = h[e];
      if (t.type !== F.d4z.GUILD_CATEGORY) {
        if (t.type === F.d4z.GUILD_DIRECTORY) {
          null == a || a.features.has(F.oNc.HUB) || f.push(t);
          continue
        }
        em(this, t, w) ? C.push(t) : (t.type === F.d4z.GUILD_VOICE || t.type === F.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != d[t.parent_id] && v.push(d[t.parent_id]), v.push(t)), null != t.parent_id && t.parent_id in c ? c[t.parent_id].push(t) : o.push(t)
      }
    }
    for (let e in this.categories = {}, c) this.categories[e] = new el(this, d[e], c[e], w);
    this.recentsSectionNumber = Q, this.favoritesSectionNumber = q, this.noParentCategory = new es(this, o, w), this.favoritesCategory = new er(this, w), this.recentsCategory = (0, g.Q)() ? new eh(this, h, w) : new ea(this, C, w), this.voiceChannelsCategory = new ed(this, v, d, w), this.guildActionSection = new eu(t, f.length > 0), this.channelNoticeSection = new eo(n), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + r().size(this.categories)
  }
}
class ei {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e
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
    return this.getShownChannelIds().concat(e)
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
    x(this, "guild", void 0), x(this, "isMuted", void 0), x(this, "isCollapsed", void 0), x(this, "position", void 0), x(this, "channels", void 0), x(this, "shownChannelIds", void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
  }
}
class es extends ei {
  constructor(e, t, n) {
    super(e), this.channels = r()(t).map(e => new eC(this, e, n)).keyBy(e => e.id).value()
  }
}
class el extends ei {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || N.Z.can(H.Pl.MANAGE_CHANNELS, this.record) && N.Z.can(H.Pl.VIEW_CHANNEL, this.record) && r().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let s of (super(e), x(this, "id", void 0), x(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eC(this, s, i)
  }
}
class er extends ei {
  updateChannel(e, t) {
    let n = e.id in this.channels && G.ZP.isFavorite(e.guild_id, e.id),
      i = p.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = k(j({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), !0) : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0)
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t) {
    var n;
    if (super(e), !e.optInEnabled) return;
    this.channels = r()(null != (n = G.ZP.getGuildFavorites(e.id)) ? n : []).map(e => R.Z.getChannel(e)).filter(T.lm).map(e => new eg(this, e, t)).keyBy(e => e.id).value();
    let i = p.Z.getSuggestedChannelId(e.id),
      s = R.Z.getChannel(i);
    null != s && null != i && (this.channels[i] = new eg(this, s, k(j({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class eh extends ei {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
  }
  updateChannel(e, t) {
    if (!this.enabled) return !1;
    if ((0, E.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, E.vc)(e.type)) return !1;
    let n = super.updateChannel(e, t),
      i = this.channels[e.id];
    return null == i ? (i = new ev(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? r()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < eh.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : D.DISCORD_EPOCH))
      }).take(eh.MAX_RECENT_CHANNELS).sortBy(e => {
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
    if (null == this.shownChannelIds || e.renderLevel < n) return !1;
    if (e.lastMessageTimestamp > (null == (t = this.channels[this.shownChannelIds[0]]) ? void 0 : t.lastMessageTimestamp)) {
      let t = this.shownChannelIds.indexOf(e.id);
      return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > eh.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, eh.MAX_RECENT_CHANNELS)), !0
    }
    return !1
  }
  constructor(e, t, n) {
    if (super(e), x(this, "enabled", !1), this.isCollapsed = v.Z.isCollapsed(e.id), this.enabled = !1, this.enabled)
      for (let e of Object.values(t))(0, E.vc)(e.type) && !(0, E.Q5)(e.type) && (this.channels[e.id] = new ev(this, e, n))
  }
}
x(eh, "MIN_READABLE_CHANNELS", 7), x(eh, "MAX_RECENT_CHANNELS", 10), x(eh, "MAX_TIMESTAMP_DELTA", 6048e5);
class ea extends ei {
  updateAllChannels(e) {
    let t = !1;
    return D.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (em(this.guild, e, t) && null == n) return this.channels[e.id] = new ep(this, e, t), this.invalidate(), !0
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = r()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = e.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...e.filter(e => 4 === e.renderLevel).value(), ...t]);
      this.shownChannelIds = r()([...n]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || C.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = !1, this.isMuted = !1, this.channels = r()(t).map(e => new ep(this, e, n)).keyBy(e => e.id).value()
  }
}
class ed extends ei {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = r()(this.channels).filter(e => 3 === e.renderLevel).value();
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
      let t = r()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === F.d4z.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? i : -1
        }
        return -1
      })(e, this.categoriesById), e => e.record.type === F.d4z.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let i = t[n];
        n < t.length - 1 && i.record.type === F.d4z.GUILD_CATEGORY && (null == (e = t[n + 1]) ? void 0 : e.record.type) === F.d4z.GUILD_CATEGORY || (n !== t.length - 1 || i.record.type !== F.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), x(this, "categoriesById", void 0), x(this, "hiddenChannelIds", void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = V.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = r()(t).map(e => new eI(this, e, i)).keyBy(e => e.id).value()
  }
}
class eo {
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
    x(this, "rows", void 0), this.rows = e
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
    x(this, "guildActionRows", void 0), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(B.z.GUILD_DIRECTORY))
  }
}
class ec {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return b.Z.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(A.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(A.ZP.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = !1;
    null != e && e !== this.record && (this.record = e, n = !0);
    let i = this.computeState(t);
    return i.renderLevel === this.renderLevel && r().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = r().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !r().isEqual(this.subtitle, e) && (this.subtitle = e, !0)
  }
  computeSubtitle() {
    return ef(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    x(this, "category", void 0), x(this, "record", void 0), x(this, "id", void 0), x(this, "position", void 0), x(this, "threadIds", void 0), x(this, "threadCount", void 0), x(this, "subtitle", void 0), x(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = r().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eC extends ec {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: l
    } = e;
    if (!N.Z.can(H.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!o.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let h = this.record.parent_id,
      a = this.category.guild;
    if (eS(a, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      c = null != (t = d || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) ? t : {},
      C = ey(this.record, c, n, i, a.hideMutedChannels);
    return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(z.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: d ? 4 : 1,
      threadIds: C
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != h && a.optedInChannels.has(h) ? d || u || !r().isEmpty(C) || A.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: C
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: C
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != h && a.mutedChannelIds.has(h) || this.record.isGuildVocal() || this.record.type === F.d4z.GUILD_STORE || (0, E.vc)(this.record.type) && !A.ZP.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: C
    } : {
      renderLevel: 4,
      threadIds: C
    } : {
      renderLevel: 2,
      threadIds: C
    } : {
      renderLevel: 2,
      threadIds: C
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
    return N.Z.can(H.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: ey(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
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
    return N.Z.can(H.Pl.VIEW_CHANNEL, this.record) ? em(this.category.guild, this.record, e) ? {
      renderLevel: ew(this, e) ? 4 : 3,
      threadIds: ey(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ev extends eC {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && em(this.category.guild, this.record, e) && (t = 3), 3 === t && ew(this, e) && (t = 4), n = r().sortBy(n, e => -A.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class eI extends eC {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !N.Z.can(H.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eS(t, this.record) ? 1 : this.category.isCollapsed ? r().some(P.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = ef(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function ef(e, t, n) {
  switch (e.type) {
    case F.d4z.GUILD_VOICE: {
      let i = c.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let s = Z.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, U.a)(s)) return {
        type: "go-live"
      };
      let l = d.Z.getChannelStatus(e);
      if (null != l && l.length > 0) return {
        type: "voice",
        text: l
      };
      let r = h.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = a.Z.getApplication(e.applicationId)) ? void 0 : t.name
      }).filter(T.lm);
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

function ey(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
    h = null != n && n.isThread() && n.parent_id === e.id;
  if (E.uC.has(e.type)) {
    let e = r().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return l ? e : h ? (n.id in t || e.unshift(n.id), e) : s ? e.filter(e => !m.Z.isMuted(e) || A.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function eS(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function ew(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (A.ZP.getMentionCount(e.id) > 0) return !0;
  for (let t in i[e.id])
    if (A.ZP.getMentionCount(t) > 0) return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !0;
  let s = f.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > J);
  else if (s.has(e.id)) return !0;
  return !1
}

function em(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === F.d4z.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(z.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (t.isGuildVocal()) {
    if (!(0, M.K)("should_show_in_recents")) return !1;
    let n = V.Z.isVoiceCategoryCollapsed(e.id);
    if (!n) return !1;
    let i = r().some(P.Z.getVoiceStatesForChannel(t.id));
    if (n && i) return !1
  }
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || A.ZP.getMentionCount(t.id) > 0) return !0;
  for (let e in s[t.id])
    if (A.ZP.getMentionCount(e) > 0 || A.ZP.hasUnread(e) || A.ZP.hasRecentlyVisitedAndRead(e)) return !0;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) return !1;
  let l = f.Z.getNewChannelIds(e.id),
    h = Array.from(l).sort((e, t) => D.default.compare(t, e));
  return !!(l.has(t.id) && h.indexOf(t.id) < J || A.ZP.hasRecentlyVisitedAndRead(t.id))
}
let eE = new Set(Object.values(B.z))
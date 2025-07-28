/** Chunk was on 81064 **/
n.d(t, {
  Bz: () => eg,
  Cb: () => Y,
  Fq: () => K,
  PB: () => Q,
  VR: () => eo,
  ZP: () => et,
  p2: () => q,
  wF: () => $,
  wZ: () => X,
  wd: () => J,
  zR: () => eS
}), n(388685), n(415506), n(539854), n(361932), n(187205), n(290780), n(642613);
var i = n(512722),
  r = n.n(i),
  l = n(392711),
  o = n.n(l),
  s = n(317381),
  a = n(812206),
  c = n(12498),
  d = n(430198),
  u = n(931261),
  _ = n(924301),
  h = n(160404),
  E = n(798423),
  I = n(18036),
  p = n(798379),
  C = n(398758),
  g = n(22082),
  S = n(893908),
  O = n(953252),
  T = n(601070),
  f = n(569471),
  N = n(131704),
  m = n(680089),
  R = n(592125),
  A = n(58468),
  y = n(430824),
  b = n(496675),
  P = n(306680),
  D = n(944486),
  v = n(9156),
  U = n(979651),
  M = n(938475),
  L = n(823379),
  Z = n(709054),
  k = n(968358),
  j = n(203818),
  w = n(295454),
  x = n(443063),
  F = n(981631),
  V = n(176505),
  G = n(231338);

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      B(e, t, n[t])
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
let z = "placeholder-channel-id",
  Y = 2,
  K = 0,
  X = 1,
  q = 2,
  Q = 3,
  J = 4,
  $ = 5,
  ee = new Set([String(x.z.GUILD_DIRECTORY)]);
class et {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !o().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getGuildActionSection().getRows().filter(e => !ee.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !o().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t)
  }
  _areGuildVocalChannelsInRecentsInNeedOfAppearingInActiveNow(e) {
    let t = this.guilds[e];
    if (null == t || !(0, w.K)("recents_channels_active_now_check")) return !1;
    let n = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
      i = t.getCategoryFromSection(t.recentsSectionNumber);
    for (let e in i.channels) {
      let t = i.channels[e];
      if (2 === t.renderLevel && t.record.isGuildVocal() && null == n.channels[t.id] && o().some(U.Z.getVoiceStatesForChannel(t.id)) && P.ZP.getMentionCount(t.id) > 0) return !0
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
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof N.Sf || null != (t = R.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    B(this, "guilds", {})
  }
}
class en {
  get initializationData() {
    return {
      selectedChannel: R.Z.getChannel(D.Z.getChannelId()),
      selectedVoiceChannelId: D.Z.getVoiceChannelId(),
      activeJoinedRelevantThreads: T.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: T.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
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
      this.sortedNamedCategories = o().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
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
      case X:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case q:
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
    return r()(e > X, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === z
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
      if (eN.has(e)) return e;
      let t = R.Z.getChannel(e);
      return (null == t ? void 0 : t.isDirectory()) ? x.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: X
    }];
    let n = [],
      i = R.Z.getChannel(e);
    if (null == i || null == e) return n;
    let r = i.isThread();
    if (r && (i = R.Z.getChannel(i.parent_id)), null == i) return n;
    let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    l >= 0 && n.push({
      section: q,
      row: l
    });
    let s = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (s >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: s
      }), i.type === F.d4z.GUILD_CATEGORY) return [{
      section: o().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? void 0 : i.id)) + $
    }];
    let a = this.getCategory(i),
      c = a instanceof er ? J : this.getSortedNamedCategories().indexOf(a) + $,
      d = a.getShownChannelIds().indexOf(i.id);
    if (c >= 0 && d >= 0) {
      let t = r ? a.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: c,
        row: d,
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
    r()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      l = !0,
      o = !1,
      s = [],
      a = [];
    for (let e of this.getSortedCategories()) {
      let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let c = e.channels[t];
        l && (c.id === n.id ? l = !1 : r || s.push(c)), o && !r && a.push(c), l || o || c.id !== i.id || (o = !0)
      }
    }
    return [s, e, a]
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
    } else t = o()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
    B(this, "id", void 0), B(this, "hideMutedChannels", void 0), B(this, "favoritesSectionNumber", void 0), B(this, "recentsSectionNumber", void 0), B(this, "voiceChannelsSectionNumber", void 0), B(this, "mutedChannelIds", void 0), B(this, "optedInChannels", void 0), B(this, "optInEnabled", void 0), B(this, "hideResourceChannels", void 0), B(this, "favoriteChannelIds", void 0), B(this, "suggestedFavoriteChannelId", void 0), B(this, "collapsedCategoryIds", void 0), B(this, "moderatorReportChannelId", void 0), B(this, "moderatorReportChannelEnabled", void 0), B(this, "categories", void 0), B(this, "noParentCategory", void 0), B(this, "favoritesCategory", void 0), B(this, "recentsCategory", void 0), B(this, "voiceChannelsCategory", void 0), B(this, "guildActionSection", void 0), B(this, "channelNoticeSection", void 0), B(this, "sortedNamedCategories", void 0), B(this, "sections", void 0), B(this, "rows", void 0), B(this, "firstVoiceChannel", void 0), B(this, "allChannelsById", void 0), B(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = v.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = v.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = v.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : v.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, C.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (l = v.ZP.getGuildFavorites(this.id)) ? l : []), this.suggestedFavoriteChannelId = I.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = m.Z.getCollapsedCategories();
    let s = R.Z.getMutableGuildChannelsForGuild(this.id),
      a = y.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != a ? (0, S.Z)(a) : null, this.moderatorReportChannelEnabled = null != a && (0, O.Z)(a);
    let c = {},
      d = [],
      _ = {};
    for (let e in s) {
      let t = s[e];
      t.type === F.d4z.GUILD_CATEGORY && (c[t.id] = t, _[t.id] = [])
    }
    let h = [],
      p = [],
      g = [],
      T = this.initializationData;
    for (let e in s) {
      let t = s[e];
      if (t.type !== F.d4z.GUILD_CATEGORY) {
        if (t.type === F.d4z.GUILD_DIRECTORY) {
          null == a || a.features.has(F.oNc.HUB) || g.push(t);
          continue
        }
        ef(this, t, T) ? h.push(t) : (t.type === F.d4z.GUILD_VOICE || t.type === F.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && p.push(c[t.parent_id]), p.push(t)), null != t.parent_id && t.parent_id in _ ? _[t.parent_id].push(t) : d.push(t)
      }
    }
    for (let e in this.categories = {}, _) this.categories[e] = new el(this, c[e], _[e], T);
    this.recentsSectionNumber = Q, this.favoritesSectionNumber = q, this.noParentCategory = new er(this, d, T), this.favoritesCategory = new eo(this, T), this.recentsCategory = (0, E.Q)() ? new es(this, s, T) : new ea(this, h, T), this.voiceChannelsCategory = new ec(this, p, c, T), this.guildActionSection = new eu(t, g.length > 0), this.channelNoticeSection = new ed(n), r()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = $ + o().size(this.categories)
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
    return 0 === e.length && this.shouldShowEmptyCategory() ? [z] : e
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
    return this.getShownChannelIds().concat(e)
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
    B(this, "guild", void 0), B(this, "isMuted", void 0), B(this, "isCollapsed", void 0), B(this, "position", void 0), B(this, "channels", void 0), B(this, "shownChannelIds", void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
  }
}
class er extends ei {
  constructor(e, t, n) {
    super(e), this.channels = o()(t).map(e => new eh(this, e, n)).keyBy(e => e.id).value()
  }
}
class el extends ei {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || b.Z.can(G.Pl.MANAGE_CHANNELS, this.record) && b.Z.can(G.Pl.VIEW_CHANNEL, this.record) && o().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let r of (super(e), B(this, "id", void 0), B(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[r.id] = new eh(this, r, i)
  }
}
class eo extends ei {
  updateChannel(e, t) {
    let n = e.id in this.channels && v.ZP.isFavorite(e.guild_id, e.id),
      i = I.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = W(H({}, t), {
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
    this.channels = o()(null != (n = v.ZP.getGuildFavorites(e.id)) ? n : []).map(e => R.Z.getChannel(e)).filter(L.lm).map(e => new eE(this, e, t)).keyBy(e => e.id).value();
    let i = I.Z.getSuggestedChannelId(e.id),
      r = R.Z.getChannel(i);
    null != r && null != i && (this.channels[i] = new eE(this, r, W(H({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class es extends ei {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
  }
  updateChannel(e, t) {
    if (!this.enabled) return !1;
    if ((0, N.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, N.vc)(e.type)) return !1;
    let n = super.updateChannel(e, t),
      i = this.channels[e.id];
    return null == i ? (i = new ep(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
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
        return -(t - (4 === n ? 0 : Z.DISCORD_EPOCH))
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
    if (null == this.shownChannelIds || e.renderLevel < n) return !1;
    if (e.lastMessageTimestamp > (null == (t = this.channels[this.shownChannelIds[0]]) ? void 0 : t.lastMessageTimestamp)) {
      let t = this.shownChannelIds.indexOf(e.id);
      return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), !0
    }
    return !1
  }
  constructor(e, t, n) {
    if (super(e), B(this, "enabled", !1), this.isCollapsed = p.Z.isCollapsed(e.id), this.enabled = !1, this.enabled)
      for (let e of Object.values(t))(0, N.vc)(e.type) && !(0, N.Q5)(e.type) && (this.channels[e.id] = new ep(this, e, n))
  }
}
B(es, "MIN_READABLE_CHANNELS", 7), B(es, "MAX_RECENT_CHANNELS", 10), B(es, "MAX_TIMESTAMP_DELTA", 6048e5);
class ea extends ei {
  updateAllChannels(e) {
    let t = !1;
    return Z.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id];
      if (ef(this.guild, e, t) && null == n) return this.channels[e.id] = new eI(this, e, t), this.invalidate(), !0
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = o()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel),
        t = e.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = new Set([...e.filter(e => 4 === e.renderLevel).value(), ...t]);
      this.shownChannelIds = o()([...n]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || h.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = !1, this.isMuted = !1, this.channels = o()(t).map(e => new eI(this, e, n)).keyBy(e => e.id).value()
  }
}
class ec extends ei {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = o()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = e.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [z] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = o()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
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
    if (super(e), B(this, "categoriesById", void 0), B(this, "hiddenChannelIds", void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = j.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = o()(t).map(e => new eC(this, e, i)).keyBy(e => e.id).value()
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
    B(this, "rows", void 0), this.rows = e
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
    B(this, "guildActionRows", void 0), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(x.z.GUILD_DIRECTORY))
  }
}
class e_ {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return A.Z.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(P.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(P.ZP.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = !1;
    null != e && e !== this.record && (this.record = e, n = !0);
    let i = this.computeState(t);
    return i.renderLevel === this.renderLevel && o().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = o().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !o().isEqual(this.subtitle, e) && (this.subtitle = e, !0)
  }
  computeSubtitle() {
    return eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    B(this, "category", void 0), B(this, "record", void 0), B(this, "id", void 0), B(this, "position", void 0), B(this, "threadIds", void 0), B(this, "threadCount", void 0), B(this, "subtitle", void 0), B(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: r
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = o().size(r), this.threadIds = r, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eh extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r,
      activeJoinedUnreadThreads: l
    } = e;
    if (!b.Z.can(G.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: []
      };
      else if (!d.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: []
      }
    }
    let s = this.record.parent_id,
      a = this.category.guild;
    if (eO(a, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let c = (null == n ? void 0 : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      _ = null != (t = c || u || !this.category.isCollapsed && !this.isMuted ? r[this.id] : l[this.id]) ? t : {},
      h = eS(this.record, _, n, i, a.hideMutedChannels);
    return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: c ? 4 : 1,
      threadIds: h
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != s && a.optedInChannels.has(s) ? c || u || !o().isEmpty(h) || P.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: h
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: h
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != s && a.mutedChannelIds.has(s) || this.record.isGuildVocal() || this.record.type === F.d4z.GUILD_STORE || (0, N.vc)(this.record.type) && !P.ZP.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: h
    } : {
      renderLevel: 4,
      threadIds: h
    } : {
      renderLevel: 2,
      threadIds: h
    } : {
      renderLevel: 2,
      threadIds: h
    }
  }
}
class eE extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r
    } = e;
    return b.Z.can(G.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eS(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eI extends e_ {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: r
    } = e;
    return b.Z.can(G.Pl.VIEW_CHANNEL, this.record) ? ef(this.category.guild, this.record, e) ? {
      renderLevel: eT(this, e) ? 4 : 3,
      threadIds: eS(this.record, null != (t = r[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 2,
      threadIds: []
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ep extends eh {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        r = this.category.guild;
      r.mutedChannelIds.has(this.id) || null != i && r.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && ef(this.category.guild, this.record, e) && (t = 3), 3 === t && eT(this, e) && (t = 4), n = o().sortBy(n, e => -P.ZP.lastMessageTimestamp(e))
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
    return !b.Z.can(G.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eO(t, this.record) ? 1 : this.category.isCollapsed ? o().some(U.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = eg(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function eg(e, t, n) {
  switch (e.type) {
    case F.d4z.GUILD_VOICE: {
      let i = _.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let r = M.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, k.a)(r)) return {
        type: "go-live"
      };
      let l = c.Z.getChannelStatus(e);
      if (null != l && l.length > 0) return {
        type: "voice",
        text: l
      };
      let o = s.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = a.Z.getApplication(e.applicationId)) ? void 0 : t.name
      }).filter(L.lm);
      if (o.length > 0) return {
        type: "embedded-activities",
        name: o.join(", ")
      };
      return null
    }
    case F.d4z.GUILD_STAGE_VOICE: {
      let t = _.ZP.getActiveEventByChannel(e.id);
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

function eS(e, t, n, i, r) {
  let l = null != n && (n.id === e.id || i === e.id),
    s = null != n && n.isThread() && n.parent_id === e.id;
  if (N.uC.has(e.type)) {
    let e = o().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return l ? e : s ? (n.id in t || e.unshift(n.id), e) : r ? e.filter(e => !f.Z.isMuted(e) || P.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function eO(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function eT(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (P.ZP.getMentionCount(e.id) > 0) return !0;
  for (let t in i[e.id])
    if (P.ZP.getMentionCount(t) > 0) return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !0;
  let r = g.Z.getNewChannelIds(e.category.guild.id);
  if (r.size > Y);
  else if (r.has(e.id)) return !0;
  return !1
}

function ef(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: r
  } = n;
  if (t.type === F.d4z.GUILD_DIRECTORY || !e.optInEnabled || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (t.isGuildVocal()) {
    if (!(0, w.K)("should_show_in_recents")) return !1;
    let n = j.Z.isVoiceCategoryCollapsed(e.id);
    if (!n) return !1;
    let i = o().some(U.Z.getVoiceStatesForChannel(t.id));
    if (n && i) return !1
  }
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || P.ZP.getMentionCount(t.id) > 0) return !0;
  for (let e in r[t.id])
    if (P.ZP.getMentionCount(e) > 0 || P.ZP.hasUnread(e) || P.ZP.hasRecentlyVisitedAndRead(e)) return !0;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) return !1;
  let l = g.Z.getNewChannelIds(e.id),
    s = Array.from(l).sort((e, t) => Z.default.compare(t, e));
  return !!(l.has(t.id) && s.indexOf(t.id) < Y || P.ZP.hasRecentlyVisitedAndRead(t.id))
}
let eN = new Set(Object.values(x.z))
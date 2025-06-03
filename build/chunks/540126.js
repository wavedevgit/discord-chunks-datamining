/** Chunk was on 62117 **/
n.d(t, {
  Bz: () => ep,
  Cb: () => j,
  Fq: () => Y,
  PB: () => W,
  VR: () => ei,
  ZP: () => K,
  p2: () => J,
  wF: () => q,
  wZ: () => k,
  wd: () => X,
  zR: () => ev
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
  y = n(601070),
  S = n(569471),
  w = n(131704),
  m = n(680089),
  E = n(592125),
  _ = n(58468),
  R = n(430824),
  b = n(496675),
  L = n(306680),
  N = n(944486),
  A = n(9156),
  O = n(979651),
  P = n(938475),
  G = n(823379),
  Z = n(709054),
  T = n(968358),
  D = n(203818),
  U = n(443063),
  M = n(981631),
  V = n(176505),
  B = n(231338);

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
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
let x = "placeholder-channel-id",
  j = 2,
  Y = 0,
  k = 1,
  J = 2,
  W = 3,
  X = 4,
  q = 5,
  Q = new Set([String(U.z.GUILD_DIRECTORY)]);
class K {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getGuildActionSection().getRows().filter(e => !Q.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !r().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t)
  }
  getGuild(e, t, n) {
    return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n)) && (this.guilds[e] = new $(e, t, n)), this.guilds[e]
  }
  getGuildChannelRowsOnly(e) {
    return e in this.guilds || (this.guilds[e] = new $(e, [], [])), this.guilds[e]
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
    let t = E.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof w.Sf || null != (t = E.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    F(this, "guilds", {})
  }
}
class $ {
  get initializationData() {
    return {
      selectedChannel: E.Z.getChannel(N.Z.getChannelId()),
      selectedVoiceChannelId: N.Z.getVoiceChannelId(),
      activeJoinedRelevantThreads: y.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: y.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
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
      case Y:
        throw Error("Invalid section. Use getChannelNoticeSection instead");
      case k:
        throw Error("Invalid section. Use getGuildActionSection instead");
      case J:
        return this.favoritesCategory;
      case X:
        return this.noParentCategory;
      case this.recentsSectionNumber:
        return this.recentsCategory;
      case this.voiceChannelsSectionNumber:
        return this.voiceChannelsCategory;
      default:
        return this.getSortedNamedCategories()[e - q]
    }
  }
  getNamedCategoryFromSection(e) {
    return e -= q, s()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
    return s()(e > k, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === x
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
      if (eS.has(e)) return e;
      let t = E.Z.getChannel(e);
      return (null == t ? void 0 : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: k
    }];
    let n = [],
      i = E.Z.getChannel(e);
    if (null == i || null == e) return n;
    let s = i.isThread();
    if (s && (i = E.Z.getChannel(i.parent_id)), null == i) return n;
    let l = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    l >= 0 && n.push({
      section: J,
      row: l
    });
    let h = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (h >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: h
      }), i.type === M.d4z.GUILD_CATEGORY) return [{
      section: r().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? void 0 : i.id)) + q
    }];
    let a = this.getCategory(i),
      d = a instanceof et ? X : this.getSortedNamedCategories().indexOf(a) + q,
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
      let n = E.Z.getChannel(e);
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
            let n = E.Z.getChannel(t);
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
    var i, l, h, a;
    F(this, "id", void 0), F(this, "hideMutedChannels", void 0), F(this, "favoritesSectionNumber", void 0), F(this, "recentsSectionNumber", void 0), F(this, "voiceChannelsSectionNumber", void 0), F(this, "mutedChannelIds", void 0), F(this, "optedInChannels", void 0), F(this, "optInEnabled", void 0), F(this, "hideResourceChannels", void 0), F(this, "favoriteChannelIds", void 0), F(this, "suggestedFavoriteChannelId", void 0), F(this, "collapsedCategoryIds", void 0), F(this, "moderatorReportChannelId", void 0), F(this, "moderatorReportChannelEnabled", void 0), F(this, "categories", void 0), F(this, "noParentCategory", void 0), F(this, "favoritesCategory", void 0), F(this, "recentsCategory", void 0), F(this, "voiceChannelsCategory", void 0), F(this, "guildActionSection", void 0), F(this, "channelNoticeSection", void 0), F(this, "sortedNamedCategories", void 0), F(this, "sections", void 0), F(this, "rows", void 0), F(this, "firstVoiceChannel", void 0), F(this, "allChannelsById", void 0), F(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = A.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = A.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = A.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : A.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, I.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (l = A.ZP.getGuildFavorites(this.id)) ? l : []), this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = m.Z.getCollapsedCategories();
    let d = E.Z.getMutableGuildChannelsForGuild(this.id),
      o = R.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != (h = null == o ? void 0 : o.getModeratorReportChannelId()) ? h : null, this.moderatorReportChannelEnabled = null != (a = null == o ? void 0 : o.getModeratorReportingEnabled()) && a;
    let c = {},
      C = [],
      v = {};
    for (let e in d) {
      let t = d[e];
      t.type === M.d4z.GUILD_CATEGORY && (c[t.id] = t, v[t.id] = [])
    }
    let f = [],
      y = [],
      S = [],
      w = this.initializationData;
    for (let e in d) {
      let t = d[e];
      if (t.type !== M.d4z.GUILD_CATEGORY) {
        if (t.type === M.d4z.GUILD_DIRECTORY) {
          null == o || o.hasFeature(M.oNc.HUB) || S.push(t);
          continue
        }
        ey(this, t, w) ? f.push(t) : (t.type === M.d4z.GUILD_VOICE || t.type === M.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && y.push(c[t.parent_id]), y.push(t)), null != t.parent_id && t.parent_id in v ? v[t.parent_id].push(t) : C.push(t)
      }
    }
    for (let e in this.categories = {}, v) this.categories[e] = new en(this, c[e], v[e], w);
    this.recentsSectionNumber = W, this.favoritesSectionNumber = J, this.noParentCategory = new et(this, C, w), this.favoritesCategory = new ei(this, w), this.recentsCategory = (0, g.Q)() ? new es(this, d, w) : new el(this, f, w), this.voiceChannelsCategory = new er(this, y, c, w), this.guildActionSection = new ea(t, S.length > 0), this.channelNoticeSection = new eh(n), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = q + r().size(this.categories)
  }
}
class ee {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === e.length && this.shouldShowEmptyCategory() ? [x] : e
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
    F(this, "guild", void 0), F(this, "isMuted", void 0), F(this, "isCollapsed", void 0), F(this, "position", void 0), F(this, "channels", void 0), F(this, "shownChannelIds", void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
  }
}
class et extends ee {
  constructor(e, t, n) {
    super(e), this.channels = r()(t).map(e => new eo(this, e, n)).keyBy(e => e.id).value()
  }
}
class en extends ee {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || b.Z.can(B.Pl.MANAGE_CHANNELS, this.record) && b.Z.can(B.Pl.VIEW_CHANNEL, this.record) && r().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let s of (super(e), F(this, "id", void 0), F(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eo(this, s, i)
  }
}
class ei extends ee {
  updateChannel(e, t) {
    let n = e.id in this.channels && A.ZP.isFavorite(e.guild_id, e.id),
      i = p.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = H(z({}, t), {
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
    this.channels = r()(null != (n = A.ZP.getGuildFavorites(e.id)) ? n : []).map(e => E.Z.getChannel(e)).filter(G.lm).map(e => new eu(this, e, t)).keyBy(e => e.id).value();
    let i = p.Z.getSuggestedChannelId(e.id),
      s = E.Z.getChannel(i);
    null != s && null != i && (this.channels[i] = new eu(this, s, H(z({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class es extends ee {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
  }
  updateChannel(e, t) {
    if (!this.enabled) return !1;
    if ((0, w.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, w.vc)(e.type)) return !1;
    let n = super.updateChannel(e, t),
      i = this.channels[e.id];
    return null == i ? (i = new eC(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? r()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
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
    if (super(e), F(this, "enabled", !1), this.isCollapsed = v.Z.isCollapsed(e.id), this.enabled = !1, this.enabled)
      for (let e of Object.values(t))(0, w.vc)(e.type) && !(0, w.Q5)(e.type) && (this.channels[e.id] = new eC(this, e, n))
  }
}
F(es, "MIN_READABLE_CHANNELS", 7), F(es, "MAX_RECENT_CHANNELS", 10), F(es, "MAX_TIMESTAMP_DELTA", 6048e5);
class el extends ee {
  updateAllChannels(e) {
    let t = !1;
    return Z.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id],
        i = ey(this.guild, e, t);
      if (i && null == n) return this.channels[e.id] = new ec(this, e, t), this.invalidate(), !0;
      if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = r()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
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
    this.isCollapsed = !1, this.isMuted = !1, this.channels = r()(t).map(e => new ec(this, e, n)).keyBy(e => e.id).value()
  }
}
class er extends ee {
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
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [x] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = r()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === M.d4z.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? i : -1
        }
        return -1
      })(e, this.categoriesById), e => e.record.type === M.d4z.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let i = t[n];
        n < t.length - 1 && i.record.type === M.d4z.GUILD_CATEGORY && (null == (e = t[n + 1]) ? void 0 : e.record.type) === M.d4z.GUILD_CATEGORY || (n !== t.length - 1 || i.record.type !== M.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), F(this, "categoriesById", void 0), F(this, "hiddenChannelIds", void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = D.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = r()(t).map(e => new eg(this, e, i)).keyBy(e => e.id).value()
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
    F(this, "rows", void 0), this.rows = e
  }
}
class ea {
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
    F(this, "guildActionRows", void 0), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY))
  }
}
class ed {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return _.Z.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(L.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(L.ZP.lastMessageTimestamp))
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
    return ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    F(this, "category", void 0), F(this, "record", void 0), F(this, "id", void 0), F(this, "position", void 0), F(this, "threadIds", void 0), F(this, "threadCount", void 0), F(this, "subtitle", void 0), F(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = r().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eo extends ed {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: l
    } = e;
    if (!b.Z.can(B.Pl.VIEW_CHANNEL, this.record)) {
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
    if (eI(a, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      c = null != (t = d || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) ? t : {},
      C = ev(this.record, c, n, i, a.hideMutedChannels);
    return this.id !== a.moderatorReportChannelId || a.moderatorReportChannelEnabled ? a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: d ? 4 : 1,
      threadIds: C
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != h && a.optedInChannels.has(h) ? d || u || !r().isEmpty(C) || L.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: C
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: C
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != h && a.mutedChannelIds.has(h) || this.record.isGuildVocal() || this.record.type === M.d4z.GUILD_STORE || (0, w.vc)(this.record.type) && !L.ZP.hasUnread(this.record.id)) ? {
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
class eu extends ed {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return b.Z.can(B.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ec extends ed {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return b.Z.can(B.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: ef(this, e) ? 4 : 3,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eC extends eo {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && ey(this.category.guild, this.record, e) && (t = 3), 3 === t && ef(this, e) && (t = 4), n = r().sortBy(n, e => -L.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class eg extends eo {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !b.Z.can(B.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record) ? 1 : this.category.isCollapsed ? r().some(O.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function ep(e, t, n) {
  switch (e.type) {
    case M.d4z.GUILD_VOICE: {
      let i = c.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let s = P.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, T.a)(s)) return {
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
      }).filter(G.lm);
      if (r.length > 0) return {
        type: "embedded-activities",
        name: r.join(", ")
      };
      return null
    }
    case M.d4z.GUILD_STAGE_VOICE: {
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

function ev(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
    h = null != n && n.isThread() && n.parent_id === e.id;
  if (w.uC.has(e.type)) {
    let e = r().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return l ? e : h ? (n.id in t || e.unshift(n.id), e) : s ? e.filter(e => !S.Z.isMuted(e) || L.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function eI(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function ef(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (L.ZP.getMentionCount(e.id) > 0) return !0;
  for (let t in i[e.id])
    if (L.ZP.getMentionCount(t) > 0) return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !0;
  let s = f.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > j);
  else if (s.has(e.id)) return !0;
  return !1
}

function ey(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === M.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || L.ZP.getMentionCount(t.id) > 0) return !0;
  let l = f.Z.getNewChannelIds(e.id),
    r = Array.from(l).sort((e, t) => Z.default.compare(t, e));
  if (l.has(t.id) && r.indexOf(t.id) < j) return !0;
  for (let e in s[t.id])
    if (L.ZP.getMentionCount(e) > 0 || L.ZP.hasUnread(e) || L.ZP.hasRecentlyVisitedAndRead(e)) return !0;
  return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && !!L.ZP.hasRecentlyVisitedAndRead(t.id)
}
let eS = new Set(Object.values(U.z))
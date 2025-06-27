/** Chunk was on 45505 **/
n.d(t, {
  Bz: () => ef,
  Cb: () => H,
  Fq: () => W,
  PB: () => q,
  VR: () => es,
  ZP: () => $,
  p2: () => J,
  wF: () => Q,
  wZ: () => Y,
  wd: () => X,
  zR: () => eI
}), n(388685), n(415506), n(539854), n(361932), n(187205), n(290780), n(642613);
var i = n(512722),
  s = n.n(i),
  r = n(392711),
  l = n.n(r),
  a = n(317381),
  o = n(812206),
  d = n(12498),
  h = n(430198),
  u = n(931261),
  c = n(924301),
  g = n(160404),
  C = n(798423),
  p = n(18036),
  f = n(798379),
  I = n(398758),
  v = n(22082),
  y = n(601070),
  S = n(569471),
  m = n(131704),
  _ = n(680089),
  E = n(592125),
  b = n(58468),
  w = n(430824),
  O = n(496675),
  R = n(306680),
  L = n(944486),
  A = n(9156),
  N = n(979651),
  T = n(938475),
  P = n(823379),
  D = n(709054),
  Z = n(968358),
  G = n(203818),
  M = n(295454),
  U = n(443063),
  j = n(981631),
  F = n(176505),
  x = n(231338);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function B(e) {
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
let z = "placeholder-channel-id",
  H = 2,
  W = 0,
  Y = 1,
  J = 2,
  q = 3,
  X = 4,
  Q = 5,
  K = new Set([String(U.z.GUILD_DIRECTORY)]);
class $ {
  _areGuildActionRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getGuildActionSection().getRows().filter(e => !K.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var n;
    return !l().isEqual(null == (n = this.guilds[e]) ? void 0 : n.getChannelNoticeSection().getRows(), t)
  }
  getGuild(e, t, n) {
    return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, n)) && (this.guilds[e] = new ee(e, t, n)), this.guilds[e]
  }
  getGuildChannelRowsOnly(e) {
    return e in this.guilds || (this.guilds[e] = new ee(e, [], [])), this.guilds[e]
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
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof m.Sf || null != (t = E.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
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
    V(this, "guilds", {})
  }
}
class ee {
  get initializationData() {
    return {
      selectedChannel: E.Z.getChannel(L.Z.getChannelId()),
      selectedVoiceChannelId: L.Z.getVoiceChannelId(),
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
      this.sortedNamedCategories = l().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.channelNoticeSection, this.guildActionSection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
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
      case Y:
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
    return s()(e > Y, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === z
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
      if (em.has(e)) return e;
      let t = E.Z.getChannel(e);
      return (null == t ? void 0 : t.isDirectory()) ? U.z.GUILD_DIRECTORY : null
    }(e);
    if (null != t) return [{
      row: this.getGuildActionSection().getRows().indexOf(t),
      section: Y
    }];
    let n = [],
      i = E.Z.getChannel(e);
    if (null == i || null == e) return n;
    let s = i.isThread();
    if (s && (i = E.Z.getChannel(i.parent_id)), null == i) return n;
    let r = this.favoritesCategory.getShownChannelIds().indexOf(i.id);
    r >= 0 && n.push({
      section: J,
      row: r
    });
    let a = this.recentsCategory.getShownChannelIds().indexOf(i.id);
    if (a >= 0 && n.push({
        section: this.recentsSectionNumber,
        row: a
      }), i.type === j.d4z.GUILD_CATEGORY) return [{
      section: l().findIndex(this.getSortedNamedCategories(), e => e.id === (null == i ? void 0 : i.id)) + Q
    }];
    let o = this.getCategory(i),
      d = o instanceof en ? X : this.getSortedNamedCategories().indexOf(o) + Q,
      h = o.getShownChannelIds().indexOf(i.id);
    if (d >= 0 && h >= 0) {
      let t = s ? o.channels[i.id].threadIds.indexOf(e) : 0;
      n.push({
        section: d,
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
      r = !0,
      l = !1,
      a = [],
      o = [];
    for (let e of this.getSortedCategories()) {
      let s = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let d = e.channels[t];
        r && (d.id === n.id ? r = !1 : s || a.push(d)), l && !s && o.push(d), r || l || d.id !== i.id || (l = !0)
      }
    }
    return [a, e, o]
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
    } else t = l()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
    var i, r, a, o;
    V(this, "id", void 0), V(this, "hideMutedChannels", void 0), V(this, "favoritesSectionNumber", void 0), V(this, "recentsSectionNumber", void 0), V(this, "voiceChannelsSectionNumber", void 0), V(this, "mutedChannelIds", void 0), V(this, "optedInChannels", void 0), V(this, "optInEnabled", void 0), V(this, "hideResourceChannels", void 0), V(this, "favoriteChannelIds", void 0), V(this, "suggestedFavoriteChannelId", void 0), V(this, "collapsedCategoryIds", void 0), V(this, "moderatorReportChannelId", void 0), V(this, "moderatorReportChannelEnabled", void 0), V(this, "categories", void 0), V(this, "noParentCategory", void 0), V(this, "favoritesCategory", void 0), V(this, "recentsCategory", void 0), V(this, "voiceChannelsCategory", void 0), V(this, "guildActionSection", void 0), V(this, "channelNoticeSection", void 0), V(this, "sortedNamedCategories", void 0), V(this, "sections", void 0), V(this, "rows", void 0), V(this, "firstVoiceChannel", void 0), V(this, "allChannelsById", void 0), V(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = A.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = A.ZP.getMutedChannels(this.id), this.optedInChannels = null != (i = A.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? i : A.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, I.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (r = A.ZP.getGuildFavorites(this.id)) ? r : []), this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = _.Z.getCollapsedCategories();
    let d = E.Z.getMutableGuildChannelsForGuild(this.id),
      h = w.Z.getGuild(this.id);
    this.moderatorReportChannelId = null != (a = null == h ? void 0 : h.getModeratorReportChannelId()) ? a : null, this.moderatorReportChannelEnabled = null != (o = null == h ? void 0 : h.getModeratorReportingEnabled()) && o;
    let c = {},
      g = [],
      f = {};
    for (let e in d) {
      let t = d[e];
      t.type === j.d4z.GUILD_CATEGORY && (c[t.id] = t, f[t.id] = [])
    }
    let v = [],
      y = [],
      S = [],
      m = this.initializationData;
    for (let e in d) {
      let t = d[e];
      if (t.type !== j.d4z.GUILD_CATEGORY) {
        if (t.type === j.d4z.GUILD_DIRECTORY) {
          null == h || h.hasFeature(j.oNc.HUB) || S.push(t);
          continue
        }
        eS(this, t, m) ? v.push(t) : (t.type === j.d4z.GUILD_VOICE || t.type === j.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != c[t.parent_id] && y.push(c[t.parent_id]), y.push(t)), null != t.parent_id && t.parent_id in f ? f[t.parent_id].push(t) : g.push(t)
      }
    }
    for (let e in this.categories = {}, f) this.categories[e] = new ei(this, c[e], f[e], m);
    this.recentsSectionNumber = q, this.favoritesSectionNumber = J, this.noParentCategory = new en(this, g, m), this.favoritesCategory = new es(this, m), this.recentsCategory = (0, C.Q)() ? new er(this, d, m) : new el(this, v, m), this.voiceChannelsCategory = new ea(this, y, c, m), this.guildActionSection = new ed(t, S.length > 0), this.channelNoticeSection = new eo(n), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = Q + l().size(this.categories)
  }
}
class et {
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
    V(this, "guild", void 0), V(this, "isMuted", void 0), V(this, "isCollapsed", void 0), V(this, "position", void 0), V(this, "channels", void 0), V(this, "shownChannelIds", void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
  }
}
class en extends et {
  constructor(e, t, n) {
    super(e), this.channels = l()(t).map(e => new eu(this, e, n)).keyBy(e => e.id).value()
  }
}
class ei extends et {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || O.Z.can(x.Pl.MANAGE_CHANNELS, this.record) && O.Z.can(x.Pl.VIEW_CHANNEL, this.record) && l().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, n, i) {
    for (let s of (super(e), V(this, "id", void 0), V(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new eu(this, s, i)
  }
}
class es extends et {
  updateChannel(e, t) {
    let n = e.id in this.channels && A.ZP.isFavorite(e.guild_id, e.id),
      i = p.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== i || n || (t = k(B({}, t), {
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
    this.channels = l()(null != (n = A.ZP.getGuildFavorites(e.id)) ? n : []).map(e => E.Z.getChannel(e)).filter(P.lm).map(e => new ec(this, e, t)).keyBy(e => e.id).value();
    let i = p.Z.getSuggestedChannelId(e.id),
      s = E.Z.getChannel(i);
    null != s && null != i && (this.channels[i] = new ec(this, s, k(B({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })))
  }
}
class er extends et {
  shouldShowEmptyCategory() {
    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
  }
  updateAllChannels(e) {
    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
  }
  updateChannel(e, t) {
    if (!this.enabled) return !1;
    if ((0, m.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, m.vc)(e.type)) return !1;
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
      this.shownChannelIds = this.enabled ? l()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, n] = e;
        return 4 === n || t > 0 && Date.now() - t < er.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, n] = e;
        return -(t - (4 === n ? 0 : D.DISCORD_EPOCH))
      }).take(er.MAX_RECENT_CHANNELS).sortBy(e => {
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
      return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > er.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, er.MAX_RECENT_CHANNELS)), !0
    }
    return !1
  }
  constructor(e, t, n) {
    if (super(e), V(this, "enabled", !1), this.isCollapsed = f.Z.isCollapsed(e.id), this.enabled = !1, this.enabled)
      for (let e of Object.values(t))(0, m.vc)(e.type) && !(0, m.Q5)(e.type) && (this.channels[e.id] = new eC(this, e, n))
  }
}
V(er, "MIN_READABLE_CHANNELS", 7), V(er, "MAX_RECENT_CHANNELS", 10), V(er, "MAX_TIMESTAMP_DELTA", 6048e5);
class el extends et {
  updateAllChannels(e) {
    let t = !1;
    return D.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id],
        i = eS(this.guild, e, t);
      if (i && null == n) return this.channels[e.id] = new eg(this, e, t), this.invalidate(), !0;
      if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
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
    if (super(e), !e.optInEnabled || g.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = !1, this.isMuted = !1, this.channels = l()(t).map(e => new eg(this, e, n)).keyBy(e => e.id).value()
  }
}
class ea extends et {
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
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [z] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = l()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === j.d4z.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null != (i = null == (n = t[e.record.parent_id]) ? void 0 : n.position) ? i : -1
        }
        return -1
      })(e, this.categoriesById), e => e.record.type === j.d4z.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let i = t[n];
        n < t.length - 1 && i.record.type === j.d4z.GUILD_CATEGORY && (null == (e = t[n + 1]) ? void 0 : e.record.type) === j.d4z.GUILD_CATEGORY || (n !== t.length - 1 || i.record.type !== j.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), V(this, "categoriesById", void 0), V(this, "hiddenChannelIds", void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = G.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = l()(t).map(e => new ep(this, e, i)).keyBy(e => e.id).value()
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
    V(this, "rows", void 0), this.rows = e
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
    V(this, "guildActionRows", void 0), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(U.z.GUILD_DIRECTORY))
  }
}
class eh {
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
    return Math.max(R.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(R.ZP.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = !1;
    null != e && e !== this.record && (this.record = e, n = !0);
    let i = this.computeState(t);
    return i.renderLevel === this.renderLevel && l().isEqual(i.threadIds, this.threadIds) || (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = l().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !l().isEqual(this.subtitle, e) && (this.subtitle = e, !0)
  }
  computeSubtitle() {
    return ef(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    V(this, "category", void 0), V(this, "record", void 0), V(this, "id", void 0), V(this, "position", void 0), V(this, "threadIds", void 0), V(this, "threadCount", void 0), V(this, "subtitle", void 0), V(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = l().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class eu extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: r
    } = e;
    if (!O.Z.can(x.Pl.VIEW_CHANNEL, this.record)) {
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
      o = this.category.guild;
    if (ev(o, this.record)) return {
      renderLevel: 1,
      threadIds: []
    };
    let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      c = null != (t = d || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : r[this.id]) ? t : {},
      g = eI(this.record, c, n, i, o.hideMutedChannels);
    return this.id !== o.moderatorReportChannelId || o.moderatorReportChannelEnabled ? o.optInEnabled && o.hideResourceChannels && this.record.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: d ? 4 : 1,
      threadIds: g
    } : !o.optInEnabled || o.optedInChannels.has(this.id) || null != a && o.optedInChannels.has(a) ? d || u || !l().isEmpty(g) || R.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: g
    } : o.hideMutedChannels && o.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: g
    } : this.category.isCollapsed && (o.mutedChannelIds.has(this.id) || null != a && o.mutedChannelIds.has(a) || this.record.isGuildVocal() || this.record.type === j.d4z.GUILD_STORE || (0, m.vc)(this.record.type) && !R.ZP.hasUnread(this.record.id)) ? {
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
class ec extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return O.Z.can(x.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eI(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eg extends eh {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return O.Z.can(x.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: ey(this, e) ? 4 : 3,
      threadIds: eI(this.record, null != (t = s[this.id]) ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eC extends eu {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: n
    } = super.computeState(e);
    if (t > 1) {
      let i = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && ey(this, e) && (t = 4), n = l().sortBy(n, e => -R.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: n
    }
  }
}
class ep extends eu {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !O.Z.can(x.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ev(t, this.record) ? 1 : this.category.isCollapsed ? l().some(N.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
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
    case j.d4z.GUILD_VOICE: {
      let i = c.ZP.getActiveEventByChannel(e.id);
      if (null != i) return {
        type: "event",
        name: i.name
      };
      let s = T.ZP.getVoiceStatesForChannel(e);
      if (n && t && (0, Z.a)(s)) return {
        type: "go-live"
      };
      let r = d.Z.getChannelStatus(e);
      if (null != r && r.length > 0) return {
        type: "voice",
        text: r
      };
      let l = a.ZP.getEmbeddedActivitiesForChannel(e.id).map(e => {
        var t;
        return null == (t = o.Z.getApplication(e.applicationId)) ? void 0 : t.name
      }).filter(P.lm);
      if (l.length > 0) return {
        type: "embedded-activities",
        name: l.join(", ")
      };
      return null
    }
    case j.d4z.GUILD_STAGE_VOICE: {
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

function eI(e, t, n, i, s) {
  let r = null != n && (n.id === e.id || i === e.id),
    a = null != n && n.isThread() && n.parent_id === e.id;
  if (m.uC.has(e.type)) {
    let e = l().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return r ? e : a ? (n.id in t || e.unshift(n.id), e) : s ? e.filter(e => !S.Z.isMuted(e) || R.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function ev(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function ey(e, t) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: i
  } = t;
  if (R.ZP.getMentionCount(e.id) > 0) return !0;
  for (let t in i[e.id])
    if (R.ZP.getMentionCount(t) > 0) return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return !0;
  let s = v.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > H);
  else if (s.has(e.id)) return !0;
  return !1
}

function eS(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === j.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() && !(0, M.K)("should_show_in_recents") || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(F.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (null != i && (i.id === t.id || i.isThread() && i.parent_id === t.id) || R.ZP.getMentionCount(t.id) > 0) return !0;
  for (let e in s[t.id])
    if (R.ZP.getMentionCount(e) > 0 || R.ZP.hasUnread(e) || R.ZP.hasRecentlyVisitedAndRead(e)) return !0;
  if (e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) return !1;
  let r = v.Z.getNewChannelIds(e.id),
    l = Array.from(r).sort((e, t) => D.default.compare(t, e));
  return !!(r.has(t.id) && l.indexOf(t.id) < H || R.ZP.hasRecentlyVisitedAndRead(t.id))
}
let em = new Set(Object.values(U.z))
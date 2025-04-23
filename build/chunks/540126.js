/** Chunk was on 62117 **/
i.d(t, {
  Bz: () => ep,
  Cb: () => j,
  Fq: () => Y,
  PB: () => W,
  VR: () => en,
  ZP: () => K,
  p2: () => J,
  wF: () => q,
  wZ: () => k,
  wd: () => X,
  zR: () => ev
}), i(388685), i(415506), i(539854), i(361932), i(187205), i(290780), i(642613);
var n = i(512722),
  s = i.n(n),
  l = i(392711),
  r = i.n(l),
  h = i(317381),
  a = i(812206),
  d = i(12498),
  o = i(430198),
  u = i(931261),
  c = i(924301),
  g = i(160404),
  C = i(798423),
  p = i(18036),
  v = i(798379),
  I = i(398758),
  f = i(22082),
  y = i(601070),
  S = i(569471),
  w = i(131704),
  m = i(680089),
  E = i(592125),
  _ = i(58468),
  R = i(430824),
  b = i(496675),
  L = i(306680),
  N = i(944486),
  O = i(9156),
  A = i(979651),
  P = i(938475),
  G = i(823379),
  Z = i(709054),
  T = i(968358),
  D = i(203818),
  U = i(443063),
  M = i(981631),
  V = i(176505),
  B = i(231338);

function F(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}

function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable
    }))), n.forEach(function(t) {
      F(e, t, i[t])
    })
  }
  return e
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n)
    }
    return i
  })(Object(t)).forEach(function(i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i))
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
    var i;
    return !r().isEqual(null == (i = this.guilds[e]) ? void 0 : i.getGuildActionSection().getRows().filter(e => !Q.has(e)), t)
  }
  _areChannelNoticeRowsUpdated(e, t) {
    var i;
    return !r().isEqual(null == (i = this.guilds[e]) ? void 0 : i.getChannelNoticeSection().getRows(), t)
  }
  getGuild(e, t, i) {
    return (!(e in this.guilds) || this._areGuildActionRowsUpdated(e, t) || this._areChannelNoticeRowsUpdated(e, i)) && (this.guilds[e] = new $(e, t, i)), this.guilds[e]
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
    var t, i;
    return null != e && e in this.guilds && null != (i = null == (t = this.guilds[e]) ? void 0 : t.updateRecentsCategory()) && i
  }
  nonPositionalChannelIdUpdate(e) {
    let t = E.Z.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof w.Sf || null != (t = E.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t)
  }
  nonPositionalChannelUpdate(e) {
    if (null == e.guild_id) return !1;
    let t = this.guilds[e.guild_id];
    if (null == t) return !1;
    let i = !1;
    return e.isThread() && (i = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || i
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
        for (let i of (t.position = ++e, t.getShownChannelIds())) t.channels[i].position = ++e
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
    let i = this.getCategoryFromSection(e);
    if (null == i) return null;
    let n = i.channels[i.getShownChannelIds()[t]];
    return null == n ? null : {
      category: i,
      channel: n
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
    let i = [],
      n = E.Z.getChannel(e);
    if (null == n || null == e) return i;
    let s = n.isThread();
    if (s && (n = E.Z.getChannel(n.parent_id)), null == n) return i;
    let l = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
    l >= 0 && i.push({
      section: J,
      row: l
    });
    let h = this.recentsCategory.getShownChannelIds().indexOf(n.id);
    if (h >= 0 && i.push({
        section: this.recentsSectionNumber,
        row: h
      }), n.type === M.d4z.GUILD_CATEGORY) return [{
      section: r().findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id)) + q
    }];
    let a = this.getCategory(n),
      d = a instanceof et ? X : this.getSortedNamedCategories().indexOf(a) + q,
      o = a.getShownChannelIds().indexOf(n.id);
    if (d >= 0 && o >= 0) {
      let t = s ? a.channels[n.id].threadIds.indexOf(e) : 0;
      i.push({
        section: d,
        row: o,
        threadOffset: t
      })
    }
    let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
    return u >= 0 && i.push({
      section: this.voiceChannelsSectionNumber,
      row: u
    }), i
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
      i = this.getCategory(e).updateChannel(e, t);
    return this.favoritesCategory.updateChannel(e, t) && (i = !0), this.recentsCategory.updateChannel(e, t) && (i = !0), this.voiceChannelsCategory.updateChannel(e, t) && (i = !0), i && this.invalidate(), i
  }
  getSlicedChannels(e, t) {
    s()(e.length > 0, "must have at least one channel in the slice");
    let i = e[0],
      n = e[e.length - 1],
      l = !0,
      r = !1,
      h = [],
      a = [];
    for (let e of this.getSortedCategories()) {
      let s = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let d = e.channels[t];
        l && (d.id === i.id ? l = !1 : s || h.push(d)), r && !s && a.push(d), l || r || d.id !== n.id || (r = !0)
      }
    }
    return [h, e, a]
  }
  getChannels(e) {
    let t = [];
    if (null == this.allChannelsById)
      for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
        for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
    for (let i of e) null != this.allChannelsById[i] && t.push(this.allChannelsById[i]);
    return t
  }
  updateSubtitles(e) {
    let t = [];
    if (null != e) {
      let i = E.Z.getChannel(e);
      if (null != i)
        if (i.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[i.id]];
        else if (i.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[i.id]];
      else {
        let n = this.getCategory(i);
        null != n && null != n.channels[e] && (t = [n.channels[e]])
      }
    } else t = r()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
    let i = !1;
    return t.forEach(e => {
      e.updateSubtitle() && (i = !0)
    }), i && this.version++, i
  }
  forEachShownChannel(e, t) {
    for (let i of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || i !== this.recentsCategory)
        for (let t of i.getShownChannelIds()) {
          let n = i.channels[t];
          for (let t of (e(n.record), n.threadIds)) {
            let i = E.Z.getChannel(t);
            null != i && e(i)
          }
        }
  }
  forEachChannel(e, t) {
    for (let i of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || i !== this.recentsCategory)
        for (let t of i.getChannelRecords()) e(t)
  }
  constructor(e, t, i) {
    var n, l;
    F(this, "id", void 0), F(this, "hideMutedChannels", void 0), F(this, "favoritesSectionNumber", void 0), F(this, "recentsSectionNumber", void 0), F(this, "voiceChannelsSectionNumber", void 0), F(this, "mutedChannelIds", void 0), F(this, "optedInChannels", void 0), F(this, "optInEnabled", void 0), F(this, "hideResourceChannels", void 0), F(this, "favoriteChannelIds", void 0), F(this, "suggestedFavoriteChannelId", void 0), F(this, "collapsedCategoryIds", void 0), F(this, "categories", void 0), F(this, "noParentCategory", void 0), F(this, "favoritesCategory", void 0), F(this, "recentsCategory", void 0), F(this, "voiceChannelsCategory", void 0), F(this, "guildActionSection", void 0), F(this, "channelNoticeSection", void 0), F(this, "sortedNamedCategories", void 0), F(this, "sections", void 0), F(this, "rows", void 0), F(this, "firstVoiceChannel", void 0), F(this, "allChannelsById", void 0), F(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = O.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = O.ZP.getMutedChannels(this.id), this.optedInChannels = null != (n = O.ZP.getOptedInChannelsWithPendingUpdates(this.id)) ? n : O.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, I.r1)(this.id), this.hideResourceChannels = (0, u.s)(this.id), this.favoriteChannelIds = new Set(null != (l = O.ZP.getGuildFavorites(this.id)) ? l : []), this.suggestedFavoriteChannelId = p.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = m.Z.getCollapsedCategories();
    let h = E.Z.getMutableGuildChannelsForGuild(this.id),
      a = R.Z.getGuild(this.id),
      d = {},
      o = [],
      c = {};
    for (let e in h) {
      let t = h[e];
      t.type === M.d4z.GUILD_CATEGORY && (d[t.id] = t, c[t.id] = [])
    }
    let g = [],
      v = [],
      f = [],
      y = this.initializationData;
    for (let e in h) {
      let t = h[e];
      if (t.type !== M.d4z.GUILD_CATEGORY) {
        if (t.type === M.d4z.GUILD_DIRECTORY) {
          null == a || a.hasFeature(M.oNc.HUB) || f.push(t);
          continue
        }
        ey(this, t, y) ? g.push(t) : (t.type === M.d4z.GUILD_VOICE || t.type === M.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != d[t.parent_id] && v.push(d[t.parent_id]), v.push(t)), null != t.parent_id && t.parent_id in c ? c[t.parent_id].push(t) : o.push(t)
      }
    }
    for (let e in this.categories = {}, c) this.categories[e] = new ei(this, d[e], c[e], y);
    this.recentsSectionNumber = W, this.favoritesSectionNumber = J, this.noParentCategory = new et(this, o, y), this.favoritesCategory = new en(this, y), this.recentsCategory = (0, C.Q)() ? new es(this, h, y) : new el(this, g, y), this.voiceChannelsCategory = new er(this, v, d, y), this.guildActionSection = new ea(t, f.length > 0), this.channelNoticeSection = new eh(i), s()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = q + r().size(this.categories)
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
  constructor(e, t, i) {
    super(e), this.channels = r()(t).map(e => new eo(this, e, i)).keyBy(e => e.id).value()
  }
}
class ei extends ee {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || b.Z.can(B.Pl.MANAGE_CHANNELS, this.record) && b.Z.can(B.Pl.VIEW_CHANNEL, this.record) && r().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id)))
  }
  constructor(e, t, i, n) {
    for (let s of (super(e), F(this, "id", void 0), F(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, i)) this.channels[s.id] = new eo(this, s, n)
  }
}
class en extends ee {
  updateChannel(e, t) {
    let i = e.id in this.channels && O.ZP.isFavorite(e.guild_id, e.id),
      n = p.Z.getSuggestedChannelId(e.guild_id);
    return (e.id !== n || i || (t = H(z({}, t), {
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    })), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), !0) : e.id in this.channels && e.id !== n && !i && (delete this.channels[e.id], this.invalidate(), !0)
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t) {
    var i;
    if (super(e), !e.optInEnabled) return;
    this.channels = r()(null != (i = O.ZP.getGuildFavorites(e.id)) ? i : []).map(e => E.Z.getChannel(e)).filter(G.lm).map(e => new eu(this, e, t)).keyBy(e => e.id).value();
    let n = p.Z.getSuggestedChannelId(e.id),
      s = E.Z.getChannel(n);
    null != s && null != n && (this.channels[n] = new eu(this, s, H(z({}, t), {
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
    return Object.values(this.channels).reduce((t, i) => this.updateChannel(i.record, e) || t, !1)
  }
  updateChannel(e, t) {
    if (!this.enabled) return !1;
    if ((0, w.Q5)(e.type)) {
      let t = this.channels[e.parent_id];
      return null != t && this.updateShownChannelIds(t)
    }
    if (!(0, w.vc)(e.type)) return !1;
    let i = super.updateChannel(e, t),
      n = this.channels[e.id];
    return null == n ? (n = new eg(this, e, t), this.channels[e.id] = n, this.invalidate(), !0) : this.updateShownChannelIds(n) || i
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = this.isCollapsed ? 4 : 3;
      this.shownChannelIds = this.enabled ? r()(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
        let [, t, i] = e;
        return 4 === i || t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA
      }).sortBy(e => {
        let [, t, i] = e;
        return -(t - (4 === i ? 0 : Z.DISCORD_EPOCH))
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
    let i = this.isCollapsed ? 4 : 3;
    if (null == this.shownChannelIds || e.renderLevel < i) return !1;
    if (e.lastMessageTimestamp > (null == (t = this.channels[this.shownChannelIds[0]]) ? void 0 : t.lastMessageTimestamp)) {
      let t = this.shownChannelIds.indexOf(e.id);
      return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), !0
    }
    return !1
  }
  constructor(e, t, i) {
    if (super(e), F(this, "enabled", !1), this.isCollapsed = v.Z.isCollapsed(e.id), this.enabled = !1, this.enabled)
      for (let e of Object.values(t))(0, w.vc)(e.type) && !(0, w.Q5)(e.type) && (this.channels[e.id] = new eg(this, e, i))
  }
}
F(es, "MIN_READABLE_CHANNELS", 7), F(es, "MAX_RECENT_CHANNELS", 10), F(es, "MAX_TIMESTAMP_DELTA", 6048e5);
class el extends ee {
  updateAllChannels(e) {
    let t = !1;
    return Z.default.keys(this.channels).forEach(i => {
      this.updateChannel(this.channels[i].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let i = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let i = this.channels[e.id],
        n = ey(this.guild, e, t);
      if (n && null == i) return this.channels[e.id] = new ec(this, e, t), this.invalidate(), !0;
      if (!n && null != i) return delete this.channels[e.id], this.invalidate(), !0
    }
    return i
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
        i = new Set([...e.filter(e => 4 === e.renderLevel).value(), ...t]);
      this.shownChannelIds = r()([...i]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, i) {
    if (super(e), !e.optInEnabled || g.Z.isFullServerPreview(e.id)) return;
    this.isCollapsed = !1, this.isMuted = !1, this.channels = r()(t).map(e => new ec(this, e, i)).keyBy(e => e.id).value()
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
          var i, n;
          return null != (n = null == (i = t[e.record.parent_id]) ? void 0 : i.position) ? n : -1
        }
        return -1
      })(e, this.categoriesById), e => e.record.type === M.d4z.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let i = 0; i < t.length; i++) {
        var e;
        let n = t[i];
        i < t.length - 1 && n.record.type === M.d4z.GUILD_CATEGORY && (null == (e = t[i + 1]) ? void 0 : e.record.type) === M.d4z.GUILD_CATEGORY || (i !== t.length - 1 || n.record.type !== M.d4z.GUILD_CATEGORY) && this.shownChannelIds.push(n.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, i, n) {
    if (super(e), F(this, "categoriesById", void 0), F(this, "hiddenChannelIds", void 0), this.categoriesById = i, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = D.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = i, this.channels = r()(t).map(e => new eC(this, e, n)).keyBy(e => e.id).value()
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
    let i = !1;
    null != e && e !== this.record && (this.record = e, i = !0);
    let n = this.computeState(t);
    return n.renderLevel === this.renderLevel && r().isEqual(n.threadIds, this.threadIds) || (this.renderLevel = n.renderLevel, this.threadIds = n.threadIds, this.threadCount = r().size(n.threadIds), i = !0), 4 === this.renderLevel && this.updateSubtitle() && (i = !0), i
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !r().isEqual(this.subtitle, e) && (this.subtitle = e, !0)
  }
  computeSubtitle() {
    return ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, i) {
    F(this, "category", void 0), F(this, "record", void 0), F(this, "id", void 0), F(this, "position", void 0), F(this, "threadIds", void 0), F(this, "threadCount", void 0), F(this, "subtitle", void 0), F(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: n,
      threadIds: s
    } = this.computeState(i);
    this.renderLevel = n, this.threadCount = r().size(s), this.threadIds = s, 4 === n && (this.subtitle = this.computeSubtitle())
  }
}
class eo extends ed {
  computeState(e) {
    var t;
    let {
      selectedChannel: i,
      selectedVoiceChannelId: n,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: l
    } = e;
    if (!b.Z.can(B.Pl.VIEW_CHANNEL, this.record)) {
      if (this.id === n) return {
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
    let d = (null == i ? void 0 : i.id) === this.id || n === this.id,
      u = null != i && i.isThread() && i.parent_id === this.id,
      c = null != (t = d || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) ? t : {},
      g = ev(this.record, c, i, n, a.hideMutedChannels);
    return a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
      renderLevel: d ? 4 : 1,
      threadIds: g
    } : !a.optInEnabled || a.optedInChannels.has(this.id) || null != h && a.optedInChannels.has(h) ? d || u || !r().isEmpty(g) || L.ZP.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: g
    } : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: g
    } : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != h && a.mutedChannelIds.has(h) || this.record.isGuildVocal() || this.record.type === M.d4z.GUILD_STORE || (0, w.vc)(this.record.type) && !L.ZP.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: g
    } : {
      renderLevel: 4,
      threadIds: g
    } : {
      renderLevel: 2,
      threadIds: g
    }
  }
}
class eu extends ed {
  computeState(e) {
    var t;
    let {
      selectedChannel: i,
      selectedVoiceChannelId: n,
      activeJoinedRelevantThreads: s
    } = e;
    return b.Z.can(B.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, i, n, !1)
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
      selectedChannel: i,
      selectedVoiceChannelId: n,
      activeJoinedRelevantThreads: s
    } = e;
    return b.Z.can(B.Pl.VIEW_CHANNEL, this.record) ? {
      renderLevel: ef(this, e) ? 4 : 3,
      threadIds: ev(this.record, null != (t = s[this.id]) ? t : {}, i, n, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class eg extends eo {
  computeState(e) {
    let {
      renderLevel: t,
      threadIds: i
    } = super.computeState(e);
    if (t > 1) {
      let n = this.record.parent_id,
        s = this.category.guild;
      s.mutedChannelIds.has(this.id) || null != n && s.mutedChannelIds.has(n) ? t = 2 : 4 === t ? t = 3 : 2 === t && ey(this.category.guild, this.record, e) && (t = 3), 3 === t && ef(this, e) && (t = 4), i = r().sortBy(i, e => -L.ZP.lastMessageTimestamp(e))
    }
    return {
      renderLevel: t,
      threadIds: i
    }
  }
}
class eC extends eo {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !b.Z.can(B.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record) ? 1 : this.category.isCollapsed ? r().some(A.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      i = this.getRenderLevel(t.renderLevel);
    return 4 === i && (this.subtitle = ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: i
    }
  }
}

function ep(e, t, i) {
  switch (e.type) {
    case M.d4z.GUILD_VOICE: {
      let n = c.ZP.getActiveEventByChannel(e.id);
      if (null != n) return {
        type: "event",
        name: n.name
      };
      let s = P.ZP.getVoiceStatesForChannel(e);
      if (i && t && (0, T.a)(s)) return {
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

function ev(e, t, i, n, s) {
  let l = null != i && (i.id === e.id || n === e.id),
    h = null != i && i.isThread() && i.parent_id === e.id;
  if (w.uC.has(e.type)) {
    let e = r().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    return l ? e : h ? (i.id in t || e.unshift(i.id), e) : s ? e.filter(e => !S.Z.isMuted(e) || L.ZP.getMentionCount(e) > 0) : e
  }
  return []
}

function eI(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function ef(e, t) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: n
  } = t;
  if (L.ZP.getMentionCount(e.id) > 0) return !0;
  for (let t in n[e.id])
    if (L.ZP.getMentionCount(t) > 0) return !0;
  if (null != i && (i.id === e.id || i.isThread() && i.parent_id === e.id)) return !0;
  let s = f.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > j);
  else if (s.has(e.id)) return !0;
  return !1
}

function ey(e, t, i) {
  let {
    selectedChannel: n,
    activeJoinedRelevantThreads: s
  } = i;
  if (t.type === M.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(V.zZ.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (null != n && (n.id === t.id || n.isThread() && n.parent_id === t.id) || L.ZP.getMentionCount(t.id) > 0) return !0;
  let l = f.Z.getNewChannelIds(e.id),
    r = Array.from(l).sort((e, t) => Z.default.compare(t, e));
  if (l.has(t.id) && r.indexOf(t.id) < j) return !0;
  for (let e in s[t.id])
    if (L.ZP.getMentionCount(e) > 0 || L.ZP.hasUnread(e) || L.ZP.hasRecentlyVisitedAndRead(e)) return !0;
  return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && !!L.ZP.hasRecentlyVisitedAndRead(t.id)
}
let eS = new Set(Object.values(U.z))
/** Chunk was on 56650 **/
n.d(t, {
  o: () => m,
  t: () => y
}), n(47120), n(653041);
var l = n(192379),
  r = n(392711),
  i = n.n(r),
  a = n(524437),
  o = n(317381),
  s = n(853856),
  c = n(846787),
  u = n(924301),
  d = n(601070),
  E = n(569471),
  f = n(131704),
  C = n(680089),
  _ = n(592125),
  h = n(58468),
  p = n(77498),
  O = n(496675),
  g = n(306680),
  T = n(944486),
  I = n(9156),
  S = n(823379),
  N = n(540126),
  A = n(647086),
  v = n(231338);
let b = [o.ZP, s.Z, u.ZP, d.Z, E.Z, C.Z, _.Z, p.Z, O.Z, g.ZP, T.Z, I.ZP];

function m() {
  let [e, t] = l.useState(() => y());
  return l.useEffect(() => {
    let e = i().throttle(() => t(y()), 100);
    return b.forEach(t => t.addChangeListener(e)), () => b.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function y() {
  let e = s.Z.getFavoriteChannels(),
    t = I.ZP.isGuildCollapsed(A._),
    n = T.Z.getChannelId(),
    l = _.Z.getChannel(n),
    r = T.Z.getVoiceChannelId(),
    o = [],
    u = {};
  for (let t in e) {
    let n = e[t],
      l = _.Z.getChannel(n.id);
    if (null == l || n.type === a.Dd.CATEGORY) continue;
    let r = (0, c.r)(e, n, l);
    if (null == n.parentId || !(n.parentId in e)) {
      o.push(r);
      continue
    }
    n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(r)
  }

  function E(n, a) {
    let {
      isCollapsed: o,
      isMuted: s
    } = a;
    return i()(n).map(n => {
      var c;
      if (!n.isPrivate() && !O.Z.can(v.Pl.VIEW_CHANNEL, n)) return null;
      let u = null != l && (l.id === n.id || r === n.id),
        E = null != l && l.isThread() && l.parent_id === n.id,
        C = null !== (c = u || E || !o ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== c ? c : {},
        _ = (0, N.zR)(n, C, l, r, t),
        p = h.Z.isCollapsed(n.id),
        T = I.ZP.isChannelMuted(n.guild_id, n.id),
        S = {
          id: n.id,
          record: n,
          category: a,
          position: e[n.id].order,
          threadIds: _,
          threadCount: i().size(_),
          isCollapsed: p,
          isMuted: T,
          isFirstVoiceChannel: !1,
          subtitle: (0, N.Bz)(n, p, !1)
        };
      return u || E || !i().isEmpty(C) || g.ZP.getMentionCount(n.id) > 0 ? S : t && T || o && (T || s || (0, f.vd)(n.type) || (0, f.vc)(n.type) && !1 === g.ZP.hasUnread(n.id)) ? null : S
    }).filter(S.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let p = null,
    b = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => o,
      getShownChannelIds: () => o.map(e => e.id),
      getShownChannelAndThreadIds: () => o.map(e => e.id),
      isEmpty: () => 0 === o.length,
      get channelList() {
        return null == p && (p = E(o, this)), p
      }
    },
    m = i()(e).values().filter(e => e.type === a.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: l
      } = e, r = s.Z.getCategoryRecord(n), i = null !== (t = u[n]) && void 0 !== t ? t : [], a = I.ZP.isChannelMuted(A._, n), o = C.Z.isCollapsed(n), c = null;
      return {
        isMuted: a,
        isCollapsed: o,
        record: r,
        id: n,
        position: l,
        getChannelRecords: () => i,
        getShownChannelIds: () => i.map(e => e.id),
        getShownChannelAndThreadIds: () => i.map(e => e.id),
        isEmpty: () => 0 === i.length,
        get channelList() {
          return null == c && (c = E(i, this)), c
        }
      }
    }).value(),
    y = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    },
    P = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: A._,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let e = [];
      e[N.Fq] = 0, e[N.wZ] = 0, e[N.p2] = 0, e[N.PB] = 0, e[N.wd] = b.channelList.length;
      for (let t = 0; t < m.length; t++) e[N.wF + t] = Math.max(1, m[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === m[e - N.wF].channelList.length,
    getCategoryFromSection: e => e === N.wd ? b : m[e - N.wF],
    getNamedCategoryFromSection: e => m[e - N.wF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => y,
    getChannelNoticeSection: () => P,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [b, ...m];
      for (let n = 0; n < t.length; n++)
        for (let l = 0; l < t[n].channelList.length; l++)
          if (t[n].channelList[l].id === e) return [{
            section: n + N.wd,
            row: l
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [b, ...m])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = _.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [b, ...m])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
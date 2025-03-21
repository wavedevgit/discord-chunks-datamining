/** Chunk was on 97387 **/
n.d(t, {
  o: () => A,
  t: () => P
}), n(47120), n(653041);
var l = n(192379),
  r = n(392711),
  i = n.n(r),
  o = n(524437),
  a = n(317381),
  s = n(853856),
  c = n(846787),
  u = n(924301),
  d = n(601070),
  E = n(569471),
  f = n(131704),
  p = n(680089),
  h = n(592125),
  C = n(58468),
  _ = n(77498),
  O = n(496675),
  g = n(306680),
  S = n(944486),
  T = n(9156),
  I = n(823379),
  N = n(540126),
  b = n(647086),
  v = n(231338);
let m = [a.ZP, s.Z, u.ZP, d.Z, E.Z, p.Z, h.Z, _.Z, O.Z, g.ZP, S.Z, T.ZP];

function A() {
  let [e, t] = l.useState(() => P());
  return l.useEffect(() => {
    let e = i().throttle(() => t(P()), 100);
    return m.forEach(t => t.addChangeListener(e)), () => m.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function P() {
  let e = s.Z.getFavoriteChannels(),
    t = T.ZP.isGuildCollapsed(b._),
    n = S.Z.getChannelId(),
    l = h.Z.getChannel(n),
    r = S.Z.getVoiceChannelId(),
    a = [],
    u = {};
  for (let t in e) {
    let n = e[t],
      l = h.Z.getChannel(n.id);
    if (null == l || n.type === o.Dd.CATEGORY) continue;
    let r = (0, c.r)(e, n, l);
    if (null == n.parentId || !(n.parentId in e)) {
      a.push(r);
      continue
    }
    n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(r)
  }

  function E(n, o) {
    let {
      isCollapsed: a,
      isMuted: s
    } = o;
    return i()(n).map(n => {
      var c;
      if (!n.isPrivate() && !O.Z.can(v.Pl.VIEW_CHANNEL, n)) return null;
      let u = null != l && (l.id === n.id || r === n.id),
        E = null != l && l.isThread() && l.parent_id === n.id,
        p = null !== (c = u || E || !a ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== c ? c : {},
        h = (0, N.zR)(n, p, l, r, t),
        _ = C.Z.isCollapsed(n.id),
        S = T.ZP.isChannelMuted(n.guild_id, n.id),
        I = {
          id: n.id,
          record: n,
          category: o,
          position: e[n.id].order,
          threadIds: h,
          threadCount: i().size(h),
          isCollapsed: _,
          isMuted: S,
          isFirstVoiceChannel: !1,
          subtitle: (0, N.Bz)(n, _, !1)
        };
      return u || E || !i().isEmpty(p) || g.ZP.getMentionCount(n.id) > 0 ? I : t && S || a && (S || s || (0, f.vd)(n.type) || (0, f.vc)(n.type) && !1 === g.ZP.hasUnread(n.id)) ? null : I
    }).filter(I.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let _ = null,
    m = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => a,
      getShownChannelIds: () => a.map(e => e.id),
      getShownChannelAndThreadIds: () => a.map(e => e.id),
      isEmpty: () => 0 === a.length,
      get channelList() {
        return null == _ && (_ = E(a, this)), _
      }
    },
    A = i()(e).values().filter(e => e.type === o.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: l
      } = e, r = s.Z.getCategoryRecord(n), i = null !== (t = u[n]) && void 0 !== t ? t : [], o = T.ZP.isChannelMuted(b._, n), a = p.Z.isCollapsed(n), c = null;
      return {
        isMuted: o,
        isCollapsed: a,
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
    P = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    },
    y = {
      isEmpty: () => !0,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: b._,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let e = [];
      e[N.Fq] = 0, e[N.wZ] = 0, e[N.p2] = 0, e[N.PB] = 0, e[N.wd] = m.channelList.length;
      for (let t = 0; t < A.length; t++) e[N.wF + t] = Math.max(1, A[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === A[e - N.wF].channelList.length,
    getCategoryFromSection: e => e === N.wd ? m : A[e - N.wF],
    getNamedCategoryFromSection: e => A[e - N.wF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => P,
    getChannelNoticeSection: () => y,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [m, ...A];
      for (let n = 0; n < t.length; n++)
        for (let l = 0; l < t[n].channelList.length; l++)
          if (t[n].channelList[l].id === e) return [{
            section: n + N.wd,
            row: l
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [m, ...A])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = h.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [m, ...A])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
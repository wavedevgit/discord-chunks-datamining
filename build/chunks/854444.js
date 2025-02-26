/** Chunk was on 45847 **/
n.d(t, {
  o: () => m,
  t: () => P
}), n(47120), n(653041);
var r = n(192379),
  l = n(392711),
  i = n.n(l),
  o = n(524437),
  a = n(317381),
  s = n(853856),
  c = n(846787),
  u = n(924301),
  d = n(601070),
  E = n(569471),
  f = n(131704),
  h = n(680089),
  _ = n(592125),
  C = n(58468),
  p = n(77498),
  O = n(496675),
  g = n(306680),
  T = n(944486),
  I = n(9156),
  S = n(823379),
  N = n(540126),
  A = n(647086),
  b = n(231338);
let v = [a.ZP, s.Z, u.ZP, d.Z, E.Z, h.Z, _.Z, p.Z, O.Z, g.ZP, T.Z, I.ZP];

function m() {
  let [e, t] = r.useState(() => P());
  return r.useEffect(() => {
    let e = i().throttle(() => t(P()), 100);
    return v.forEach(t => t.addChangeListener(e)), () => v.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function P() {
  let e = s.Z.getFavoriteChannels(),
    t = I.ZP.isGuildCollapsed(A._),
    n = T.Z.getChannelId(),
    r = _.Z.getChannel(n),
    l = T.Z.getVoiceChannelId(),
    a = [],
    u = {};
  for (let t in e) {
    let n = e[t],
      r = _.Z.getChannel(n.id);
    if (null == r || n.type === o.Dd.CATEGORY) continue;
    let l = (0, c.r)(e, n, r);
    if (null == n.parentId || !(n.parentId in e)) {
      a.push(l);
      continue
    }
    n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(l)
  }

  function E(n, o) {
    let {
      isCollapsed: a,
      isMuted: s
    } = o;
    return i()(n).map(n => {
      var c;
      if (!n.isPrivate() && !O.Z.can(b.Pl.VIEW_CHANNEL, n)) return null;
      let u = null != r && (r.id === n.id || l === n.id),
        E = null != r && r.isThread() && r.parent_id === n.id,
        h = null !== (c = u || E || !a ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) && void 0 !== c ? c : {},
        _ = (0, N.zR)(n, h, r, l, t),
        p = C.Z.isCollapsed(n.id),
        T = I.ZP.isChannelMuted(n.guild_id, n.id),
        S = {
          id: n.id,
          record: n,
          category: o,
          position: e[n.id].order,
          threadIds: _,
          threadCount: i().size(_),
          isCollapsed: p,
          isMuted: T,
          isFirstVoiceChannel: !1,
          subtitle: (0, N.Bz)(n, p, !1)
        };
      return u || E || !i().isEmpty(h) || g.ZP.getMentionCount(n.id) > 0 ? S : t && T || a && (T || s || (0, f.vd)(n.type) || (0, f.vc)(n.type) && !1 === g.ZP.hasUnread(n.id)) ? null : S
    }).filter(S.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let p = null,
    v = {
      isMuted: !1,
      isCollapsed: !1,
      position: 0,
      getChannelRecords: () => a,
      getShownChannelIds: () => a.map(e => e.id),
      getShownChannelAndThreadIds: () => a.map(e => e.id),
      isEmpty: () => 0 === a.length,
      get channelList() {
        return null == p && (p = E(a, this)), p
      }
    },
    m = i()(e).values().filter(e => e.type === o.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: r
      } = e, l = s.Z.getCategoryRecord(n), i = null !== (t = u[n]) && void 0 !== t ? t : [], o = I.ZP.isChannelMuted(A._, n), a = h.Z.isCollapsed(n), c = null;
      return {
        isMuted: o,
        isCollapsed: a,
        record: l,
        id: n,
        position: r,
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
    id: A._,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: -999,
    getSections() {
      let e = [];
      e[N.Fq] = 0, e[N.wZ] = 0, e[N.p2] = 0, e[N.PB] = 0, e[N.wd] = v.channelList.length;
      for (let t = 0; t < m.length; t++) e[N.wF + t] = Math.max(1, m[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < N.wF) && 0 === t && 0 === m[e - N.wF].channelList.length,
    getCategoryFromSection: e => e === N.wd ? v : m[e - N.wF],
    getNamedCategoryFromSection: e => m[e - N.wF],
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
      let t = [v, ...m];
      for (let n = 0; n < t.length; n++)
        for (let r = 0; r < t[n].channelList.length; r++)
          if (t[n].channelList[r].id === e) return [{
            section: n + N.wd,
            row: r
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [v, ...m])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = _.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [v, ...m])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
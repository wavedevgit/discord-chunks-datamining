/** Chunk was on 20501 **/
/** chunk id: 854444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => I,
  t: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk524437 = require("./524437.js"),
  Chunk317381 = require("./317381.js"),
  Chunk853856 = require("./853856.js"),
  Chunk846787 = require("./846787.js"),
  Chunk924301 = require("./924301.js"),
  Chunk601070 = require("./601070.js"),
  Chunk569471 = require("./569471.js"),
  Chunk131704 = require("./131704.js"),
  Chunk680089 = require("./680089.js"),
  Chunk592125 = require("./592125.js"),
  Chunk58468 = require("./58468.js"),
  Chunk77498 = require("./77498.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk823379 = require("./823379.js"),
  Chunk540126 = require("./540126.js"),
  Chunk647086 = require("./647086.js"),
  Chunk231338 = require("./231338.js");
let T = 12633 == require.j ? [Chunk317381.ZP, Chunk853856.Z, Chunk924301.ZP, Chunk601070.Z, Chunk569471.Z, Chunk680089.Z, Chunk592125.Z, Chunk77498.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP] : null;

function I() {
  let [e, t] = Chunk73800.useState(() => N());
  return Chunk73800.useEffect(() => {
    let e = s().throttle(() => exports(N()), 100);
    return T.forEach(t => t.addChangeListener(e)), () => T.forEach(t => t.removeChangeListener(e))
  }, []), module
}

function N() {
  let e = Chunk853856.Z.getFavoriteChannels(),
    t = Chunk9156.ZP.isGuildCollapsed(Chunk647086._),
    n = Chunk944486.Z.getChannelId(),
    i = Chunk592125.Z.getChannel(require),
    r = Chunk944486.Z.getVoiceChannelId(),
    l = [],
    d = {};
  for (let t in module) {
    let n = module[exports],
      i = Chunk592125.Z.getChannel(require.id);
    if (null == Chunk73800 || require.type === Chunk524437.Dd.CATEGORY) continue;
    let r = (0, Chunk846787.r)(module, require, Chunk73800);
    if (null == require.parentId || !(require.parentId in module)) {
      Chunk317381.push(Chunk392711);
      continue
    }
    require.parentId in Chunk924301 || (Chunk924301[require.parentId] = []), Chunk924301[require.parentId].push(Chunk392711)
  }

  function m(n, a) {
    let {
      isCollapsed: l,
      isMuted: o
    } = a;
    return s()(n).map(n => {
      var c;
      if (!n.isPrivate() && !x.Z.can(S.Pl.VIEW_CHANNEL, n)) return null;
      let d = null != i && (i.id === n.id || r === n.id),
        m = null != i && i.isThread() && i.parent_id === n.id,
        g = null != (c = d || m || !l ? u.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
        h = (0, O.zR)(n, g, i, r, t),
        b = f.Z.isCollapsed(n.id),
        j = E.ZP.isChannelMuted(n.guild_id, n.id),
        C = {
          id: n.id,
          record: n,
          category: a,
          position: e[n.id].order,
          threadIds: h,
          threadCount: s().size(h),
          isCollapsed: b,
          isMuted: j,
          isFirstVoiceChannel: false,
          subtitle: (0, O.Bz)(n, b, false)
        };
      return d || m || !s().isEmpty(g) || _.ZP.getMentionCount(n.id) > 0 ? C : t && j || l && (j || o || (0, p.vd)(n.type) || (0, p.vc)(n.type) && false === _.ZP.hasUnread(n.id)) ? null : C
    }).filter(C.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let b = null,
    T = {
      isMuted: false,
      isCollapsed: false,
      position: 0,
      getChannelRecords: () => Chunk317381,
      getShownChannelIds: () => Chunk317381.map(e => e.id),
      getShownChannelAndThreadIds: () => Chunk317381.map(e => e.id),
      isEmpty: () => 0 === Chunk317381.length,
      get channelList() {
        return null == Chunk77498 && (b = Chunk569471(Chunk317381, this)), Chunk77498
      }
    },
    I = s()(module).values().filter(e => e.type === a.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: i
      } = e, r = o.Z.getCategoryRecord(n), s = null != (t = d[n]) ? t : [], a = E.ZP.isChannelMuted(v._, n), l = g.Z.isCollapsed(n), c = null;
      return {
        isMuted: a,
        isCollapsed: l,
        record: r,
        id: n,
        position: i,
        getChannelRecords: () => s,
        getShownChannelIds: () => s.map(e => e.id),
        getShownChannelAndThreadIds: () => s.map(e => e.id),
        isEmpty: () => 0 === s.length,
        get channelList() {
          return null == c && (c = m(s, this)), c
        }
      }
    }).value(),
    N = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    },
    y = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: Chunk647086._,
    hideMutedChannels: exports,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: false,
    getSections() {
      let e = [];
      module[Chunk540126.Fq] = 0, module[Chunk540126.wZ] = 0, module[Chunk540126.p2] = 0, module[Chunk540126.PB] = 0, module[Chunk540126.wd] = T.channelList.length;
      for (let t = 0; exports < I.length; exports++) module[Chunk540126.wF + exports] = Math.max(1, I[exports].channelList.length);
      return module
    },
    isPlaceholderRow: (e, t) => !(e < O.wF) && 0 === t && 0 === I[e - O.wF].channelList.length,
    getCategoryFromSection: e => e === O.wd ? T : I[e - O.wF],
    getNamedCategoryFromSection: e => I[e - O.wF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => N,
    getChannelNoticeSection: () => y,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [T, ...I];
      for (let n = 0; n < t.length; n++)
        for (let i = 0; i < t[n].channelList.length; i++)
          if (t[n].channelList[i].id === e) return [{
            section: n + O.wd,
            row: i
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [T, ...I])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = h.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [T, ...I])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
/** Chunk was on web.js **/
/** chunk id: 854444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => C,
  t: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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
let A = [Chunk317381.ZP, Chunk853856.Z, Chunk924301.ZP, Chunk601070.Z, Chunk569471.Z, Chunk680089.Z, Chunk592125.Z, Chunk77498.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP];

function C() {
  let [e, t] = Chunk647438.useState(() => N());
  return Chunk647438.useEffect(() => {
    let e = a().throttle(() => exports(N()), 100);
    return A.forEach(t => t.addChangeListener(e)), () => A.forEach(t => t.removeChangeListener(e))
  }, []), module
}

function N() {
  let e = Chunk853856.Z.getFavoriteChannels(),
    t = Chunk9156.ZP.isGuildCollapsed(Chunk647086._),
    n = Chunk944486.Z.getChannelId(),
    r = Chunk592125.Z.getChannel(require),
    i = Chunk944486.Z.getVoiceChannelId(),
    s = [],
    u = {};
  for (let t in module) {
    let n = module[exports],
      r = Chunk592125.Z.getChannel(require.id);
    if (null == Chunk647438 || require.type === Chunk524437.Dd.CATEGORY) continue;
    let i = (0, Chunk846787.r)(module, require, Chunk647438);
    if (null == require.parentId || !(require.parentId in module)) {
      Chunk317381.push(Chunk392711);
      continue
    }
    require.parentId in Chunk924301 || (Chunk924301[require.parentId] = []), Chunk924301[require.parentId].push(Chunk392711)
  }

  function f(n, o) {
    let {
      isCollapsed: s,
      isMuted: l
    } = o;
    return a()(n).map(n => {
      var c;
      if (!n.isPrivate() && !E.Z.can(T.Pl.VIEW_CHANNEL, n)) return null;
      let u = null != r && (r.id === n.id || i === n.id),
        f = null != r && r.isThread() && r.parent_id === n.id,
        p = null != (c = u || f || !s ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
        h = (0, I.zR)(n, p, r, i, t),
        g = m.Z.isCollapsed(n.id),
        y = O.ZP.isChannelMuted(n.guild_id, n.id),
        v = {
          id: n.id,
          record: n,
          category: o,
          position: e[n.id].order,
          threadIds: h,
          threadCount: a().size(h),
          isCollapsed: g,
          isMuted: y,
          isFirstVoiceChannel: false,
          subtitle: (0, I.Bz)(n, g, false)
        };
      return u || f || !a().isEmpty(p) || b.ZP.getMentionCount(n.id) > 0 ? v : t && y || s && (y || l || (0, _.vd)(n.type) || (0, _.vc)(n.type) && false === b.ZP.hasUnread(n.id)) ? null : v
    }).filter(v.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let g = null,
    A = {
      isMuted: false,
      isCollapsed: false,
      position: 0,
      getChannelRecords: () => Chunk317381,
      getShownChannelIds: () => Chunk317381.map(e => e.id),
      getShownChannelAndThreadIds: () => Chunk317381.map(e => e.id),
      isEmpty: () => 0 === Chunk317381.length,
      get channelList() {
        return null == Chunk77498 && (g = Chunk569471(Chunk317381, this)), Chunk77498
      }
    },
    C = a()(module).values().filter(e => e.type === o.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: r
      } = e, i = l.Z.getCategoryRecord(n), a = null != (t = u[n]) ? t : [], o = O.ZP.isChannelMuted(S._, n), s = p.Z.isCollapsed(n), c = null;
      return {
        isMuted: o,
        isCollapsed: s,
        record: i,
        id: n,
        position: r,
        getChannelRecords: () => a,
        getShownChannelIds: () => a.map(e => e.id),
        getShownChannelAndThreadIds: () => a.map(e => e.id),
        isEmpty: () => 0 === a.length,
        get channelList() {
          return null == c && (c = f(a, this)), c
        }
      }
    }).value(),
    N = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    },
    R = {
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
      module[Chunk540126.Fq] = 0, module[Chunk540126.wZ] = 0, module[Chunk540126.p2] = 0, module[Chunk540126.PB] = 0, module[Chunk540126.wd] = A.channelList.length;
      for (let t = 0; exports < C.length; exports++) module[Chunk540126.wF + exports] = Math.max(1, C[exports].channelList.length);
      return module
    },
    isPlaceholderRow: (e, t) => !(e < I.wF) && 0 === t && 0 === C[e - I.wF].channelList.length,
    getCategoryFromSection: e => e === I.wd ? A : C[e - I.wF],
    getNamedCategoryFromSection: e => C[e - I.wF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => N,
    getChannelNoticeSection: () => R,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [A, ...C];
      for (let n = 0; n < t.length; n++)
        for (let r = 0; r < t[n].channelList.length; r++)
          if (t[n].channelList[r].id === e) return [{
            section: n + I.wd,
            row: r
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [A, ...C])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = h.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [A, ...C])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
/** Chunk was on web.js **/
/** chunk id: 854444, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => A,
  t: () => N
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
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
let C = [Chunk317381.ZP, Chunk853856.Z, Chunk924301.ZP, Chunk601070.Z, Chunk569471.Z, Chunk680089.Z, Chunk592125.Z, Chunk77498.Z, Chunk496675.Z, Chunk306680.ZP, Chunk944486.Z, Chunk9156.ZP];

function A() {
  let [e, t] = r.useState(() => N());
  return r.useEffect(() => {
    let e = a().throttle(() => t(N()), 100);
    return C.forEach(t => t.addChangeListener(e)), () => C.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function N() {
  let e = l.Z.getFavoriteChannels(),
    t = O.ZP.isGuildCollapsed(I._),
    n = y.Z.getChannelId(),
    r = h.Z.getChannel(n),
    i = y.Z.getVoiceChannelId(),
    s = [],
    u = {};
  for (let t in e) {
    let n = e[t],
      r = h.Z.getChannel(n.id);
    if (null == r || n.type === o.Dd.CATEGORY) continue;
    let i = (0, c.r)(e, n, r);
    if (null == n.parentId || !(n.parentId in e)) {
      s.push(i);
      continue
    }
    n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(i)
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
        _ = null != (c = u || f || !s ? d.Z.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.Z.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
        h = (0, S.zR)(n, _, r, i, t),
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
          subtitle: (0, S.Bz)(n, g, false)
        };
      return u || f || !a().isEmpty(_) || b.ZP.getMentionCount(n.id) > 0 ? v : t && y || s && (y || l || (0, p.vd)(n.type) || (0, p.vc)(n.type) && false === b.ZP.hasUnread(n.id)) ? null : v
    }).filter(v.lm).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let g = null,
    C = {
      isMuted: false,
      isCollapsed: false,
      position: 0,
      getChannelRecords: () => s,
      getShownChannelIds: () => s.map(e => e.id),
      getShownChannelAndThreadIds: () => s.map(e => e.id),
      isEmpty: () => 0 === s.length,
      get channelList() {
        return null == g && (g = f(s, this)), g
      }
    },
    A = a()(e).values().filter(e => e.type === o.Dd.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: r
      } = e, i = l.Z.getCategoryRecord(n), a = null != (t = u[n]) ? t : [], o = O.ZP.isChannelMuted(I._, n), s = _.Z.isCollapsed(n), c = null;
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
    P = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: I._,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: false,
    getSections() {
      let e = [];
      e[S.Fq] = 0, e[S.wZ] = 0, e[S.p2] = 0, e[S.PB] = 0, e[S.wd] = C.channelList.length;
      for (let t = 0; t < A.length; t++) e[S.wF + t] = Math.max(1, A[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < S.wF) && 0 === t && 0 === A[e - S.wF].channelList.length,
    getCategoryFromSection: e => e === S.wd ? C : A[e - S.wF],
    getNamedCategoryFromSection: e => A[e - S.wF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => N,
    getChannelNoticeSection: () => P,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [C, ...A];
      for (let n = 0; n < t.length; n++)
        for (let r = 0; r < t[n].channelList.length; r++)
          if (t[n].channelList[r].id === e) return [{
            section: n + S.wd,
            row: r
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [C, ...A])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = h.Z.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [C, ...A])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
/** Chunk was on 60667 **/
/** chunk id: 994020, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => v,
  x: () => j
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk873298 = require("./873298.js"),
  Chunk933958 = require("./933958.js"),
  Chunk181079 = require("./181079.js"),
  Chunk424345 = require("./424345.js"),
  Chunk698441 = require("./698441.js"),
  Chunk863005 = require("./863005.js"),
  Chunk152007 = require("./152007.js"),
  Chunk95701 = require("./95701.js"),
  Chunk924985 = require("./924985.js"),
  Chunk734057 = require("./734057.js"),
  Chunk945886 = require("./945886.js"),
  Chunk760751 = require("./760751.js"),
  Chunk576705 = require("./576705.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk403362 = require("./403362.js"),
  Chunk32603 = require("./32603.js"),
  Chunk349828 = require("./349828.js"),
  Chunk818348 = require("./818348.js");
let S = 21552 == require.j ? [Chunk933958.Ay, Chunk181079.A, Chunk698441.Ay, Chunk863005.A, Chunk152007.A, Chunk924985.A, Chunk734057.A, Chunk760751.A, Chunk576705.A, Chunk222823.Ay, Chunk309010.A, Chunk543465.Ay] : null;

function j() {
  let [e, t] = r.useState(() => v());
  return r.useEffect(() => {
    let e = l().throttle(() => t(v()), 100);
    return S.forEach(t => t.addChangeListener(e)), () => S.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function v() {
  let e = o.A.getFavoriteChannels(),
    t = x.Ay.isGuildCollapsed(T.V),
    n = E.A.getChannelId(),
    r = g.A.getChannel(n),
    i = E.A.getVoiceChannelId(),
    a = [],
    d = {};
  for (let t in e) {
    let n = e[t],
      r = g.A.getChannel(n.id);
    if (null == r || n.type === s.Ip.CATEGORY) continue;
    let i = (0, c.K)(e, n, r);
    if (null == n.parentId || !(n.parentId in e)) {
      a.push(i);
      continue
    }
    n.parentId in d || (d[n.parentId] = []), d[n.parentId].push(i)
  }

  function _(n, s) {
    let {
      isCollapsed: a,
      isMuted: o
    } = s;
    return l()(n).map(n => {
      var c;
      if (!n.isPrivate() && !h.A.can(I.xB.VIEW_CHANNEL, n)) return null;
      let d = null != r && (r.id === n.id || i === n.id),
        _ = null != r && r.isThread() && r.parent_id === n.id,
        m = null != (c = d || _ || !a ? u.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : u.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
        g = (0, C.wF)(n, m, r, i, t),
        f = A.A.isCollapsed(n.id),
        E = x.Ay.isChannelMuted(n.guild_id, n.id),
        O = {
          id: n.id,
          record: n,
          category: s,
          position: e[n.id].order,
          threadIds: g,
          threadCount: l().size(g),
          isCollapsed: f,
          isMuted: E,
          isFirstVoiceChannel: false,
          subtitle: (0, C.go)(n, f, false)
        };
      return d || _ || !l().isEmpty(m) || b.Ay.getMentionCount(n.id) > 0 ? O : t && E || a && (E || o || (0, p.gV)(n.type) || (0, p.ig)(n.type) && false === b.Ay.hasUnread(n.id)) ? null : O
    }).filter(O.Vq).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let f = null,
    S = {
      isMuted: false,
      isCollapsed: false,
      position: 0,
      getChannelRecords: () => a,
      getShownChannelIds: () => a.map(e => e.id),
      getShownChannelAndThreadIds: () => a.map(e => e.id),
      isEmpty: () => 0 === a.length,
      get channelList() {
        return null == f && (f = _(a, this)), f
      }
    },
    j = l()(e).values().filter(e => e.type === s.Ip.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: r
      } = e, i = o.A.getCategoryRecord(n), l = null != (t = d[n]) ? t : [], s = x.Ay.isChannelMuted(T.V, n), a = m.A.isCollapsed(n), c = null;
      return {
        isMuted: s,
        isCollapsed: a,
        record: i,
        id: n,
        position: r,
        getChannelRecords: () => l,
        getShownChannelIds: () => l.map(e => e.id),
        getShownChannelAndThreadIds: () => l.map(e => e.id),
        isEmpty: () => 0 === l.length,
        get channelList() {
          return null == c && (c = _(l, this)), c
        }
      }
    }).value(),
    v = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    },
    N = {
      isEmpty: () => true,
      getRows: () => [],
      getRow: () => null
    };
  return {
    id: T.V,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: false,
    getSections() {
      let e = [];
      e[C.Xt] = 0, e[C.PU] = 0, e[C.HP] = 0, e[C.yO] = 0, e[C.bK] = S.channelList.length;
      for (let t = 0; t < j.length; t++) e[C.TF + t] = Math.max(1, j[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < C.TF) && 0 === t && 0 === j[e - C.TF].channelList.length,
    getCategoryFromSection: e => e === C.bK ? S : j[e - C.TF],
    getNamedCategoryFromSection: e => j[e - C.TF],
    getChannelFromSectionRow(e, t) {
      let n = this.getCategoryFromSection(e);
      return null == n || null == n.channelList[t] ? null : {
        category: n,
        channel: n.channelList[t]
      }
    },
    getGuildActionSection: () => v,
    getChannelNoticeSection: () => N,
    getFirstVoiceChannel: () => null,
    getSectionRowsFromChannel(e) {
      let t = [S, ...j];
      for (let n = 0; n < t.length; n++)
        for (let r = 0; r < t[n].channelList.length; r++)
          if (t[n].channelList[r].id === e) return [{
            section: n + C.bK,
            row: r
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [S, ...j])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = g.A.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [S, ...j])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
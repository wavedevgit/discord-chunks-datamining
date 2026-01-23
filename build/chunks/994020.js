/** Chunk was on web.js **/
/** chunk id: 994020, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => N,
  x: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
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
let T = [Chunk933958.Ay, Chunk181079.A, Chunk698441.Ay, Chunk863005.A, Chunk152007.A, Chunk924985.A, Chunk734057.A, Chunk760751.A, Chunk576705.A, Chunk222823.Ay, Chunk309010.A, Chunk543465.Ay];

function C() {
  let [e, t] = r.useState(() => N());
  return r.useEffect(() => {
    let e = a().throttle(() => t(N()), 100);
    return T.forEach(t => t.addChangeListener(e)), () => T.forEach(t => t.removeChangeListener(e))
  }, []), e
}

function N() {
  let e = l.A.getFavoriteChannels(),
    t = O.Ay.isGuildCollapsed(I.V),
    n = b.A.getChannelId(),
    r = h.A.getChannel(n),
    i = b.A.getVoiceChannelId(),
    o = [],
    u = {};
  for (let t in e) {
    let n = e[t],
      r = h.A.getChannel(n.id);
    if (null == r || n.type === s.Ip.CATEGORY) continue;
    let i = (0, c.K)(e, n, r);
    if (null == n.parentId || !(n.parentId in e)) {
      o.push(i);
      continue
    }
    n.parentId in u || (u[n.parentId] = []), u[n.parentId].push(i)
  }

  function f(n, s) {
    let {
      isCollapsed: o,
      isMuted: l
    } = s;
    return a()(n).map(n => {
      var c;
      if (!n.isPrivate() && !E.A.can(S.xB.VIEW_CHANNEL, n)) return null;
      let u = null != r && (r.id === n.id || i === n.id),
        f = null != r && r.isThread() && r.parent_id === n.id,
        _ = null != (c = u || f || !o ? d.A.getActiveJoinedRelevantThreadsForParent(n.guild_id, n.id) : d.A.getActiveJoinedUnreadThreadsForParent(n.guild_id, n.id)) ? c : {},
        h = (0, A.wF)(n, _, r, i, t),
        g = m.A.isCollapsed(n.id),
        b = O.Ay.isChannelMuted(n.guild_id, n.id),
        v = {
          id: n.id,
          record: n,
          category: s,
          position: e[n.id].order,
          threadIds: h,
          threadCount: a().size(h),
          isCollapsed: g,
          isMuted: b,
          isFirstVoiceChannel: false,
          subtitle: (0, A.go)(n, g, false)
        };
      return u || f || !a().isEmpty(_) || y.Ay.getMentionCount(n.id) > 0 ? v : t && b || o && (b || l || (0, p.gV)(n.type) || (0, p.ig)(n.type) && false === y.Ay.hasUnread(n.id)) ? null : v
    }).filter(v.Vq).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).value()
  }
  let g = null,
    T = {
      isMuted: false,
      isCollapsed: false,
      position: 0,
      getChannelRecords: () => o,
      getShownChannelIds: () => o.map(e => e.id),
      getShownChannelAndThreadIds: () => o.map(e => e.id),
      isEmpty: () => 0 === o.length,
      get channelList() {
        return null == g && (g = f(o, this)), g
      }
    },
    C = a()(e).values().filter(e => e.type === s.Ip.CATEGORY).sortBy(e => e.order).map(e => {
      var t;
      let {
        id: n,
        order: r
      } = e, i = l.A.getCategoryRecord(n), a = null != (t = u[n]) ? t : [], s = O.Ay.isChannelMuted(I.V, n), o = _.A.isCollapsed(n), c = null;
      return {
        isMuted: s,
        isCollapsed: o,
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
    id: I.V,
    hideMutedChannels: t,
    favoritesSectionNumber: 1,
    recentsSectionNumber: 2,
    voiceChannelsSectionNumber: false,
    getSections() {
      let e = [];
      e[A.Xt] = 0, e[A.PU] = 0, e[A.HP] = 0, e[A.yO] = 0, e[A.bK] = T.channelList.length;
      for (let t = 0; t < C.length; t++) e[A.TF + t] = Math.max(1, C[t].channelList.length);
      return e
    },
    isPlaceholderRow: (e, t) => !(e < A.TF) && 0 === t && 0 === C[e - A.TF].channelList.length,
    getCategoryFromSection: e => e === A.bK ? T : C[e - A.TF],
    getNamedCategoryFromSection: e => C[e - A.TF],
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
      let t = [T, ...C];
      for (let n = 0; n < t.length; n++)
        for (let r = 0; r < t[n].channelList.length; r++)
          if (t[n].channelList[r].id === e) return [{
            section: n + A.bK,
            row: r
          }];
      return []
    },
    forEachShownChannel(e) {
      for (let t of [T, ...C])
        for (let n of t.channelList)
          for (let t of (e(n.record), n.threadIds)) {
            let n = h.A.getChannel(t);
            null != n && e(n)
          }
    },
    forEachChannel(e) {
      for (let t of [T, ...C])
        for (let n of t.getChannelRecords()) e(n)
    },
    getSlicedChannels: e => [
      [], e, []
    ],
    getChannels: () => []
  }
}
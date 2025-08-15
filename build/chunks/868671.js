/** Chunk was on 73551 **/
/** chunk id: 868671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => v,
  T: () => x
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk439170 = require("./439170.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk451478 = require("./451478.js"),
  Chunk626135 = require("./626135.js"),
  Chunk162461 = require("./162461.js"),
  Chunk71585 = require("./71585.js"),
  Chunk34586 = require("./34586.js"),
  Chunk69259 = require("./69259.js"),
  Chunk590026 = require("./590026.js"),
  Chunk178762 = require("./178762.jsx"),
  Chunk206583 = require("./206583.js"),
  Chunk809017 = require("./809017.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let x = 0;

function v(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: x
    },
    channelId: v,
    guildId: j
  } = e, [O, E] = r.useState(false), {
    requestId: S,
    entries: P,
    impressionCappedEntryIds: I,
    hasLeaderboardEntry: Z
  } = (0, m.Z)(v), T = (0, i.e7)([p.Z], () => p.Z.hidden), N = (0, i.e7)([c.Z], () => c.Z.isFocused()), A = (0, i.e7)([o.Z], () => o.Z.getChannel(v)), w = (0, i.e7)([s.Z], () => s.Z.getGuild(j), [j]), R = (0, h.E)(w), M = null != R && R && (null == A ? true : A.isForumChannel()) === false, [k, D, L, U] = r.useMemo(() => {
    let e;
    if (null == P || 0 === P.length || null == S || !M) return [t, n, x];
    let r = O ? P.length : Z ? 4 : 3,
      i = P.slice(0, r);
    e = T ? [{
      type: a.so.HIDDEN_CONTENT_INVENTORY
    }] : i.map(e => ({
      type: a.so.CONTENT_INVENTORY,
      entry: e,
      requestId: S
    }));
    let l = {
      id: y.G,
      type: a.so.CONTENT_INVENTORY_GROUP,
      key: y.G,
      count: e.length,
      index: n.length,
      title: C.intl.string(C.t["6gwSFR"]),
      onToggleExpand: () => {
        E(e => {
          let t = !e;
          return u.default.track(_.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: v,
            guild_id: j,
            expanded: t
          }), t
        })
      },
      expanded: O,
      expandedCount: P.length,
      feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
    };
    return [
      [l, ...t],
      [...n, l, ...e], Math.random(), e
    ]
  }, [v, P, O, t, j, S, n, x, T, M, Z]), B = r.useRef(0), F = r.useRef(P), H = r.useRef(true), G = r.useRef({
    impressionCappedEntryIds: I
  }), V = r.useCallback(e => {
    var t;
    let n = Math.floor(e / g.YN),
      r = Math.min(null != (t = null == U ? true : U.length) ? t : 0, n);
    B.current = Math.max(B.current, r)
  }, [U]);
  return r.useEffect(() => {
    F.current = P
  }, [P]), r.useEffect(() => {
    G.current = {
      impressionCappedEntryIds: I
    }
  }, [I]), r.useEffect(() => (B.current = 0, H.current = Date.now(), () => {
    var e, t;
    if (null == S || null == H.current || Date.now() - H.current < 3e3) return;
    let n = null != (t = null == (e = F.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, B.current);
    !T && N && M && ((0, f.e)(_.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: S,
      first_shown_at: H.current,
      item_ids: r,
      surface_type: b.Kd.GUILD_MEMBER_LIST,
      channel_id: v,
      guild_id: j,
      all_item_ids: n,
      impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
    }), (0, d.wm)("useInjectContentInventoryFeed") && l.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [S, v, j, T, N, M]), {
    groups: k,
    rows: D,
    version: L,
    updateMaxRowSeen: V
  }
}
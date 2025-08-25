/** Chunk was on 5665 **/
/** chunk id: 868671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => v,
  T: () => x
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
    guildId: O
  } = e, [j, E] = r.useState(false), {
    requestId: S,
    entries: I,
    impressionCappedEntryIds: P
  } = (0, m.Z)(v), Z = (0, i.e7)([p.Z], () => p.Z.hidden), T = (0, i.e7)([c.Z], () => c.Z.isFocused()), N = (0, i.e7)([o.Z], () => o.Z.getChannel(v)), A = (0, i.e7)([s.Z], () => s.Z.getGuild(O), [O]), w = (0, h.E)(A), R = null != w && w && (null == N ? true : N.isForumChannel()) === false, [M, D, L, k] = r.useMemo(() => {
    let e;
    if (null == I || 0 === I.length || null == S || !R) return [t, n, x];
    let r = j ? I.length : 3,
      i = I.slice(0, r);
    e = Z ? [{
      type: a.so.HIDDEN_CONTENT_INVENTORY
    }] : i.map(e => ({
      type: a.so.CONTENT_INVENTORY,
      entry: e,
      requestId: S
    }));
    let l = {
      id: _.G,
      type: a.so.CONTENT_INVENTORY_GROUP,
      key: _.G,
      count: e.length,
      index: n.length,
      title: C.intl.string(C.t["6gwSFR"]),
      onToggleExpand: () => {
        E(e => {
          let t = !e;
          return u.default.track(y.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: v,
            guild_id: O,
            expanded: t
          }), t
        })
      },
      expanded: j,
      expandedCount: I.length,
      feedHeight: e.map(g.iZ).reduce((e, t) => e + t, 0)
    };
    return [
      [l, ...t],
      [...n, l, ...e], Math.random(), e
    ]
  }, [v, I, j, t, O, S, n, x, Z, R]), U = r.useRef(0), B = r.useRef(I), F = r.useRef(true), G = r.useRef({
    impressionCappedEntryIds: P
  }), H = r.useCallback(e => {
    var t;
    let n = Math.floor(e / g.YN),
      r = Math.min(null != (t = null == k ? true : k.length) ? t : 0, n);
    U.current = Math.max(U.current, r)
  }, [k]);
  return r.useEffect(() => {
    B.current = I
  }, [I]), r.useEffect(() => {
    G.current = {
      impressionCappedEntryIds: P
    }
  }, [P]), r.useEffect(() => (U.current = 0, F.current = Date.now(), () => {
    var e, t;
    if (null == S || null == F.current || Date.now() - F.current < 3e3) return;
    let n = null != (t = null == (e = B.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, U.current);
    !Z && T && R && ((0, f.e)(y.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: S,
      first_shown_at: F.current,
      item_ids: r,
      surface_type: b.Kd.GUILD_MEMBER_LIST,
      channel_id: v,
      guild_id: O,
      all_item_ids: n,
      impression_capped_item_ids: [...G.current.impressionCappedEntryIds]
    }), (0, d.wm)("useInjectContentInventoryFeed") && l.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [S, v, O, Z, T, R]), {
    groups: M,
    rows: D,
    version: L,
    updateMaxRowSeen: H
  }
}
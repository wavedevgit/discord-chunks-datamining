/** Chunk was on 62987 **/
/** chunk id: 868671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => x,
  T: () => v
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
let v = 0;

function x(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: v
    },
    channelId: x,
    guildId: O
  } = e, [j, E] = r.useState(false), {
    requestId: S,
    entries: I,
    impressionCappedEntryIds: P
  } = (0, m.Z)(x), Z = (0, i.e7)([p.Z], () => p.Z.hidden), T = (0, i.e7)([c.Z], () => c.Z.isFocused()), N = (0, i.e7)([o.Z], () => o.Z.getChannel(x)), A = (0, i.e7)([s.Z], () => s.Z.getGuild(O), [O]), w = (0, h.E)(A), R = null != w && w && (null == N ? true : N.isForumChannel()) === false, [M, D, L, k] = r.useMemo(() => {
    let e;
    if (null == I || 0 === I.length || null == S || !R) return [t, n, v];
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
            channel_id: x,
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
  }, [x, I, j, t, O, S, n, v, Z, R]), U = r.useRef(0), B = r.useRef(I), G = r.useRef(true), H = r.useRef({
    impressionCappedEntryIds: P
  }), F = r.useCallback(e => {
    var t;
    let n = Math.floor(e / g.YN),
      r = Math.min(null != (t = null == k ? true : k.length) ? t : 0, n);
    U.current = Math.max(U.current, r)
  }, [k]);
  return r.useEffect(() => {
    B.current = I
  }, [I]), r.useEffect(() => {
    H.current = {
      impressionCappedEntryIds: P
    }
  }, [P]), r.useEffect(() => (U.current = 0, G.current = Date.now(), () => {
    var e, t;
    if (null == S || null == G.current || Date.now() - G.current < 3e3) return;
    let n = null != (t = null == (e = B.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, U.current);
    !Z && T && R && ((0, f.e)(_.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: S,
      first_shown_at: G.current,
      item_ids: r,
      surface_type: b.Kd.GUILD_MEMBER_LIST,
      channel_id: x,
      guild_id: O,
      all_item_ids: n,
      impression_capped_item_ids: [...H.current.impressionCappedEntryIds]
    }), (0, d.wm)("useInjectContentInventoryFeed") && l.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [S, x, O, Z, T, R]), {
    groups: M,
    rows: D,
    version: L,
    updateMaxRowSeen: F
  }
}
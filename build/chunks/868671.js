/** Chunk was on 63962 **/
/** chunk id: 868671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => v,
  T: () => j
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
let j = 0;

function v(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: j
    },
    channelId: v,
    guildId: x
  } = e, [C, I] = r.useState(false), {
    requestId: E,
    entries: S,
    impressionCappedEntryIds: Z
  } = (0, g.Z)(v), P = (0, i.e7)([p.Z], () => p.Z.hidden), T = (0, i.e7)([c.Z], () => c.Z.isFocused()), N = (0, i.e7)([s.Z], () => s.Z.getChannel(v)), R = (0, i.e7)([o.Z], () => o.Z.getGuild(x), [x]), w = (0, h.E)(R), A = null != w && w && (null == N ? true : N.isForumChannel()) === false, [D, L, M, k] = r.useMemo(() => {
    let e;
    if (null == S || 0 === S.length || null == E || !A) return [t, n, j];
    let r = C ? S.length : 3,
      i = S.slice(0, r);
    e = P ? [{
      type: a.so.HIDDEN_CONTENT_INVENTORY
    }] : i.map(e => ({
      type: a.so.CONTENT_INVENTORY,
      entry: e,
      requestId: E
    }));
    let l = {
      id: y.G,
      type: a.so.CONTENT_INVENTORY_GROUP,
      key: y.G,
      count: e.length,
      index: n.length,
      title: O.intl.string(O.t["6gwSFR"]),
      onToggleExpand: () => {
        I(e => {
          let t = !e;
          return d.default.track(_.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: v,
            guild_id: x,
            expanded: t
          }), t
        })
      },
      expanded: C,
      expandedCount: S.length,
      feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0)
    };
    return [
      [l, ...t],
      [...n, l, ...e], Math.random(), e
    ]
  }, [v, S, C, t, x, E, n, j, P, A]), U = r.useRef(0), G = r.useRef(S), H = r.useRef(true), F = r.useRef({
    impressionCappedEntryIds: Z
  }), B = r.useCallback(e => {
    var t;
    let n = Math.floor(e / m.YN),
      r = Math.min(null != (t = null == k ? true : k.length) ? t : 0, n);
    U.current = Math.max(U.current, r)
  }, [k]);
  return r.useEffect(() => {
    G.current = S
  }, [S]), r.useEffect(() => {
    F.current = {
      impressionCappedEntryIds: Z
    }
  }, [Z]), r.useEffect(() => (U.current = 0, H.current = Date.now(), () => {
    var e, t;
    if (null == E || null == H.current || Date.now() - H.current < 3e3) return;
    let n = null != (t = null == (e = G.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, U.current);
    !P && T && A && ((0, f.e)(_.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: E,
      first_shown_at: H.current,
      item_ids: r,
      surface_type: b.Kd.GUILD_MEMBER_LIST,
      channel_id: v,
      guild_id: x,
      all_item_ids: n,
      impression_capped_item_ids: [...F.current.impressionCappedEntryIds]
    }), (0, u.wm)("useInjectContentInventoryFeed") && l.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [E, v, x, P, T, A]), {
    groups: D,
    rows: L,
    version: M,
    updateMaxRowSeen: B
  }
}
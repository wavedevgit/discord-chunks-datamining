/** Chunk was on 54273 **/
/** chunk id: 868671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => O,
  T: () => _
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
let _ = 0;

function O(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: _
    },
    channelId: O,
    guildId: v
  } = e, [C, E] = r.useState(false), {
    requestId: S,
    entries: I,
    impressionCappedEntryIds: Z,
    hasLeaderboardEntry: P
  } = (0, g.Z)(O), T = (0, i.e7)([h.Z], () => h.Z.hidden), N = (0, i.e7)([c.Z], () => c.Z.isFocused()), R = (0, i.e7)([s.Z], () => s.Z.getChannel(O)), w = (0, i.e7)([o.Z], () => o.Z.getGuild(v), [v]), A = (0, p.E)(w), D = null != A && A && (null == R ? true : R.isForumChannel()) === false, [k, L, M, U] = r.useMemo(() => {
    let e;
    if (null == I || 0 === I.length || null == S || !D) return [t, n, _];
    let r = C ? I.length : P ? 4 : 3,
      i = I.slice(0, r);
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
      title: j.intl.string(j.t["6gwSFR"]),
      onToggleExpand: () => {
        E(e => {
          let t = !e;
          return u.default.track(x.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: O,
            guild_id: v,
            expanded: t
          }), t
        })
      },
      expanded: C,
      expandedCount: I.length,
      feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0)
    };
    return [
      [l, ...t],
      [...n, l, ...e], Math.random(), e
    ]
  }, [O, I, C, t, v, S, n, _, T, D, P]), F = r.useRef(0), H = r.useRef(I), G = r.useRef(true), B = r.useRef({
    impressionCappedEntryIds: Z
  }), W = r.useCallback(e => {
    var t;
    let n = Math.floor(e / m.YN),
      r = Math.min(null != (t = null == U ? true : U.length) ? t : 0, n);
    F.current = Math.max(F.current, r)
  }, [U]);
  return r.useEffect(() => {
    H.current = I
  }, [I]), r.useEffect(() => {
    B.current = {
      impressionCappedEntryIds: Z
    }
  }, [Z]), r.useEffect(() => (F.current = 0, G.current = Date.now(), () => {
    var e, t;
    if (null == S || null == G.current || Date.now() - G.current < 3e3) return;
    let n = null != (t = null == (e = H.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, F.current);
    !T && N && D && ((0, f.e)(x.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: S,
      first_shown_at: G.current,
      item_ids: r,
      surface_type: b.Kd.GUILD_MEMBER_LIST,
      channel_id: O,
      guild_id: v,
      all_item_ids: n,
      impression_capped_item_ids: [...B.current.impressionCappedEntryIds]
    }), (0, d.wm)("useInjectContentInventoryFeed") && l.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [S, O, v, T, N, D]), {
    groups: k,
    rows: L,
    version: M,
    updateMaxRowSeen: W
  }
}
/** Chunk was on web.js **/
/** chunk id: 868671, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => I,
  T: () => v
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
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
let O = 3,
  v = 0,
  S = 3e3;

function I(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: v
    },
    channelId: I,
    guildId: T
  } = e, [C, A] = r.useState(false), {
    requestId: N,
    entries: P,
    impressionCappedEntryIds: w
  } = (0, h.Z)(I), R = (0, i.e7)([f.Z], () => f.Z.hidden), D = (0, i.e7)([c.Z], () => c.Z.isFocused()), x = (0, i.e7)([s.Z], () => s.Z.getChannel(I)), L = (0, i.e7)([l.Z], () => l.Z.getGuild(T), [T]), j = (0, p.E)(L), M = null != j && j && (null == x ? true : x.isForumChannel()) === false, [k, U, G, Z] = r.useMemo(() => {
    let e;
    if (null == P || 0 === P.length || null == N || !M) return [t, n, v];
    let r = O,
      i = C ? P.length : r,
      a = P.slice(0, i);
    e = R ? [{
      type: o.so.HIDDEN_CONTENT_INVENTORY
    }] : a.map(e => ({
      type: o.so.CONTENT_INVENTORY,
      entry: e,
      requestId: N
    }));
    let s = () => {
        A(e => {
          let t = !e;
          return u.default.track(b.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
            channel_id: I,
            guild_id: T,
            expanded: t
          }), t
        })
      },
      l = {
        id: E.G,
        type: o.so.CONTENT_INVENTORY_GROUP,
        key: E.G,
        count: e.length,
        index: n.length,
        title: y.intl.string(y.t["6gwSFY"]),
        onToggleExpand: s,
        expanded: C,
        expandedCount: P.length,
        feedHeight: e.map(m.iZ).reduce((e, t) => e + t, 0)
      };
    return [
      [l, ...t],
      [...n, l, ...e], Math.random(), e
    ]
  }, [I, P, C, t, T, N, n, v, R, M]), F = r.useRef(0), B = r.useRef(P), V = r.useRef(true), H = r.useRef({
    impressionCappedEntryIds: w
  }), Y = r.useCallback(e => {
    var t;
    let n = Math.floor(e / m.YN),
      r = Math.min(null != (t = null == Z ? true : Z.length) ? t : 0, n);
    F.current = Math.max(F.current, r)
  }, [Z]);
  return r.useEffect(() => {
    B.current = P
  }, [P]), r.useEffect(() => {
    H.current = {
      impressionCappedEntryIds: w
    }
  }, [w]), r.useEffect(() => (F.current = 0, V.current = Date.now(), () => {
    var e, t;
    if (null == N || null == V.current || Date.now() - V.current < S) return;
    let n = null != (t = null == (e = B.current) ? true : e.map(e => e.id)) ? t : [],
      r = n.slice(0, F.current);
    !R && D && M && ((0, _.e)(b.rMx.RANKING_ITEMS_SEEN_MUST_BE_SAMPLED, {
      request_id: N,
      first_shown_at: V.current,
      item_ids: r,
      surface_type: g.Kd.GUILD_MEMBER_LIST,
      channel_id: I,
      guild_id: T,
      all_item_ids: n,
      impression_capped_item_ids: [...H.current.impressionCappedEntryIds]
    }), (0, d.wm)("useInjectContentInventoryFeed") && a.Z.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: r
    }))
  }), [N, I, T, R, D, M]), {
    groups: k,
    rows: U,
    version: G,
    updateMaxRowSeen: Y
  }
}
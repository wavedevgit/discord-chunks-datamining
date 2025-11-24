/** Chunk was on 64271 **/
/** chunk id: 11799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y6: () => f
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk45114 = require("./45114.js"),
  Chunk733427 = require("./733427.js"),
  Chunk455199 = require("./455199.js"),
  Chunk833592 = require("./833592.js"),
  Chunk140155 = require("./140155.js"),
  Chunk774807 = require("./774807.js"),
  Chunk490897 = require("./490897.js");
let f = () => {
  let {
    initialized: e,
    loading: t,
    items: n,
    hasMore: f,
    loadMore: p
  } = (e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: f,
      withMentions: p = false,
      initialPageSize: h
    } = e, g = (0, i.e7)([u.Z], () => u.Z.shouldReload()), m = r.useRef(false), [b, _] = r.useState(false), {
      initialized: y,
      loading: O,
      items: v,
      hasMore: j,
      cursor: x,
      errored: C
    } = (0, i.cj)([c.Z], () => ({
      initialized: c.Z.initialized,
      loading: c.Z.loading,
      items: c.Z.items,
      hasMore: c.Z.hasMore,
      cursor: c.Z.cursor,
      errored: c.Z.errored
    })), {
      roleFilter: E,
      everyoneFilter: S
    } = (0, i.cj)([a.ZP], () => ({
      everyoneFilter: a.ZP.everyoneFilter,
      roleFilter: a.ZP.roleFilter
    }));
    r.useEffect(() => ((0, s.Vk)(true), () => (0, s.Vk)(false)), []), r.useEffect(() => {
      y && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, y]);
    let I = (0, o.Z)();
    r.useEffect(() => () => {
      f ? !I() && (C || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)()
    }, [n, v, f, I, C]), r.useEffect(() => {
      let e = g && t;
      (!y || e) && (0, s.jk)({
        limit: null != h ? h : p ? 8 : 20,
        with_mentions: p,
        roles_filter: E,
        everyone_filter: S
      })
    }, [y, g, t, p, E, S, h]);
    let P = r.useCallback(async e => {
      !m.current && y && j && null != x && (e || !C) && (m.current = true, _(true), await (0, s.jk)({
        after: x,
        with_mentions: p,
        roles_filter: E,
        everyone_filter: S,
        limit: p ? 8 : 20
      }, () => {
        m.current = false
      }), _(false))
    }, [y, j, x, C, p, E, S]);
    return {
      initialized: y,
      loading: O,
      items: v,
      hasMore: j,
      loadMore: P,
      loadingMore: b,
      setReadNotifItemToAcked: e => {
        e.acked || (e.acked = true)
      },
      errored: C
    }
  })({
    isFocused: true,
    isDesktop: true
  });
  return {
    initialized: module,
    loading: exports,
    items: require.filter(e => "notification-center-item" === e.kind),
    hasMore: f,
    loadMore: p
  }
}
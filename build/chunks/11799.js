/** Chunk was on 81985 **/
/** chunk id: 11799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y6: () => p
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
let p = () => {
  let {
    initialized: e,
    loading: t,
    items: n,
    hasMore: p,
    loadMore: f
  } = (e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: p,
      withMentions: f = false,
      initialPageSize: h
    } = e, g = (0, i.e7)([u.Z], () => u.Z.shouldReload()), m = r.useRef(false), [b, y] = r.useState(false), {
      initialized: v,
      loading: O,
      items: j,
      hasMore: x,
      cursor: C,
      errored: E
    } = (0, i.cj)([c.Z], () => ({
      initialized: c.Z.initialized,
      loading: c.Z.loading,
      items: c.Z.items,
      hasMore: c.Z.hasMore,
      cursor: c.Z.cursor,
      errored: c.Z.errored
    })), {
      roleFilter: S,
      everyoneFilter: _
    } = (0, i.cj)([o.ZP], () => ({
      everyoneFilter: o.ZP.everyoneFilter,
      roleFilter: o.ZP.roleFilter
    }));
    r.useEffect(() => ((0, s.Vk)(true), () => (0, s.Vk)(false)), []), r.useEffect(() => {
      v && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, v]);
    let I = (0, a.Z)();
    r.useEffect(() => () => {
      p ? !I() && (E || j.length > 100) && (0, s.jF)() : n && j.length > 100 && (0, s.jF)()
    }, [n, j, p, I, E]), r.useEffect(() => {
      let e = g && t;
      (!v || e) && (0, s.jk)({
        limit: null != h ? h : f ? 8 : 20,
        with_mentions: f,
        roles_filter: S,
        everyone_filter: _
      })
    }, [v, g, t, f, S, _, h]);
    let P = r.useCallback(async e => {
      !m.current && v && x && null != C && (e || !E) && (m.current = true, y(true), await (0, s.jk)({
        after: C,
        with_mentions: f,
        roles_filter: S,
        everyone_filter: _,
        limit: f ? 8 : 20
      }, () => {
        m.current = false
      }), y(false))
    }, [v, x, C, E, f, S, _]);
    return {
      initialized: v,
      loading: O,
      items: j,
      hasMore: x,
      loadMore: P,
      loadingMore: b,
      setReadNotifItemToAcked: e => {
        e.acked || (e.acked = true)
      },
      errored: E
    }
  })({
    isFocused: true,
    isDesktop: true
  });
  return {
    initialized: e,
    loading: t,
    items: n.filter(e => "notification-center-item" === e.kind),
    hasMore: p,
    loadMore: f
  }
}
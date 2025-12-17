/** Chunk was on 67000 **/
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
    loadMore: h
  } = (e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: f,
      withMentions: h = false,
      initialPageSize: p
    } = e, g = (0, i.e7)([u.Z], () => u.Z.shouldReload()), b = r.useRef(false), [m, y] = r.useState(false), {
      initialized: O,
      loading: v,
      items: j,
      hasMore: C,
      cursor: x,
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
      everyoneFilter: I
    } = (0, i.cj)([o.ZP], () => ({
      everyoneFilter: o.ZP.everyoneFilter,
      roleFilter: o.ZP.roleFilter
    }));
    r.useEffect(() => ((0, s.Vk)(true), () => (0, s.Vk)(false)), []), r.useEffect(() => {
      O && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, O]);
    let _ = (0, a.Z)();
    r.useEffect(() => () => {
      f ? !_() && (E || j.length > 100) && (0, s.jF)() : n && j.length > 100 && (0, s.jF)()
    }, [n, j, f, _, E]), r.useEffect(() => {
      let e = g && t;
      (!O || e) && (0, s.jk)({
        limit: null != p ? p : h ? 8 : 20,
        with_mentions: h,
        roles_filter: S,
        everyone_filter: I
      })
    }, [O, g, t, h, S, I, p]);
    let P = r.useCallback(async e => {
      !b.current && O && C && null != x && (e || !E) && (b.current = true, y(true), await (0, s.jk)({
        after: x,
        with_mentions: h,
        roles_filter: S,
        everyone_filter: I,
        limit: h ? 8 : 20
      }, () => {
        b.current = false
      }), y(false))
    }, [O, C, x, E, h, S, I]);
    return {
      initialized: O,
      loading: v,
      items: j,
      hasMore: C,
      loadMore: P,
      loadingMore: m,
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
    initialized: module,
    loading: exports,
    items: require.filter(e => "notification-center-item" === e.kind),
    hasMore: f,
    loadMore: h
  }
}
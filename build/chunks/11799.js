/** Chunk was on 56710 **/
/** chunk id: 11799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y6: () => p
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
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
    loadMore: h
  } = (e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: p,
      withMentions: h = false,
      initialPageSize: f
    } = e, g = (0, i.e7)([u.Z], () => u.Z.shouldReload()), m = r.useRef(false), [b, _] = r.useState(false), {
      initialized: O,
      loading: y,
      items: v,
      hasMore: j,
      cursor: C,
      errored: x
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
      O && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, O]);
    let I = (0, o.Z)();
    r.useEffect(() => () => {
      p ? !I() && (x || v.length > 100) && (0, s.jF)() : n && v.length > 100 && (0, s.jF)()
    }, [n, v, p, I, x]), r.useEffect(() => {
      let e = g && t;
      (!O || e) && (0, s.jk)({
        limit: null != f ? f : h ? 8 : 20,
        with_mentions: h,
        roles_filter: E,
        everyone_filter: S
      })
    }, [O, g, t, h, E, S, f]);
    let P = r.useCallback(async e => {
      !m.current && O && j && null != C && (e || !x) && (m.current = true, _(true), await (0, s.jk)({
        after: C,
        with_mentions: h,
        roles_filter: E,
        everyone_filter: S,
        limit: h ? 8 : 20
      }, () => {
        m.current = false
      }), _(false))
    }, [O, j, C, x, h, E, S]);
    return {
      initialized: O,
      loading: y,
      items: v,
      hasMore: j,
      loadMore: P,
      loadingMore: b,
      setReadNotifItemToAcked: e => {
        e.acked || (e.acked = true)
      },
      errored: x
    }
  })({
    isFocused: true,
    isDesktop: true
  });
  return {
    initialized: module,
    loading: exports,
    items: require.filter(e => "notification-center-item" === e.kind),
    hasMore: p,
    loadMore: h
  }
}
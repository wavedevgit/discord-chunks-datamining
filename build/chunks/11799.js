/** Chunk was on 34779 **/
/** chunk id: 11799, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y6: () => p
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk45114 = require("./45114.js"),
  Chunk733427 = require("./733427.js"),
  Chunk455199 = require("./455199.js"),
  Chunk833592 = require("./833592.js"),
  Chunk140155 = require("./140155.js"),
  Chunk774807 = require("./774807.js"),
  Chunk490897 = require("./490897.js");
let h = e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: h,
      withMentions: p = false,
      initialPageSize: f
    } = e, g = (0, i.e7)([u.Z], () => u.Z.shouldReload()), m = r.useRef(false), [b, O] = r.useState(false), {
      initialized: _,
      loading: y,
      items: C,
      hasMore: v,
      cursor: j,
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
      everyoneFilter: x
    } = (0, i.cj)([s.ZP], () => ({
      everyoneFilter: s.ZP.everyoneFilter,
      roleFilter: s.ZP.roleFilter
    }));
    r.useEffect(() => ((0, a.Vk)(true), () => (0, a.Vk)(false)), []), r.useEffect(() => {
      _ && t && (0, l.FT)(d.W.NOTIFICATION_CENTER)
    }, [t, _]);
    let I = (0, o.Z)();
    r.useEffect(() => () => {
      h ? !I() && (E || C.length > 100) && (0, a.jF)() : n && C.length > 100 && (0, a.jF)()
    }, [n, C, h, I, E]), r.useEffect(() => {
      let e = g && t;
      (!_ || e) && (0, a.jk)({
        limit: null != f ? f : p ? 8 : 20,
        with_mentions: p,
        roles_filter: S,
        everyone_filter: x
      })
    }, [_, g, t, p, S, x, f]);
    let P = r.useCallback(async e => {
      !m.current && _ && v && null != j && (e || !E) && (m.current = true, O(true), await (0, a.jk)({
        after: j,
        with_mentions: p,
        roles_filter: S,
        everyone_filter: x,
        limit: p ? 8 : 20
      }, () => {
        m.current = false
      }), O(false))
    }, [_, v, j, E, p, S, x]);
    return {
      initialized: _,
      loading: y,
      items: C,
      hasMore: v,
      loadMore: P,
      loadingMore: b,
      setReadNotifItemToAcked: e => {
        e.acked || (e.acked = true)
      },
      errored: E
    }
  },
  p = () => {
    let {
      initialized: e,
      loading: t,
      items: n,
      hasMore: r,
      loadMore: i
    } = h({
      isFocused: true,
      isDesktop: true
    });
    return {
      initialized: module,
      loading: exports,
      items: require.filter(e => "notification-center-item" === e.kind),
      hasMore: Chunk73800,
      loadMore: Chunk442837
    }
  }
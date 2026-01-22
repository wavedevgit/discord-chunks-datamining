/** Chunk was on 97492 **/
/** chunk id: 325326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LF: () => f
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk334738 = require("./334738.js"),
  Chunk964459 = require("./964459.js"),
  Chunk187508 = require("./187508.js"),
  Chunk245205 = require("./245205.js"),
  Chunk252431 = require("./252431.js"),
  Chunk810153 = require("./810153.js"),
  Chunk790782 = require("./790782.js");
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
    } = e, b = (0, l.bG)([u.A], () => u.A.shouldReload()), g = r.useRef(false), [m, A] = r.useState(false), {
      initialized: y,
      loading: O,
      items: j,
      hasMore: v,
      cursor: x,
      errored: E
    } = (0, l.cf)([c.A], () => ({
      initialized: c.A.initialized,
      loading: c.A.loading,
      items: c.A.items,
      hasMore: c.A.hasMore,
      cursor: c.A.cursor,
      errored: c.A.errored
    })), {
      roleFilter: _,
      everyoneFilter: C
    } = (0, l.cf)([s.Ay], () => ({
      everyoneFilter: s.Ay.everyoneFilter,
      roleFilter: s.Ay.roleFilter
    }));
    r.useEffect(() => ((0, o.BZ)(true), () => (0, o.BZ)(false)), []), r.useEffect(() => {
      y && t && (0, i.d_)(d.P.NOTIFICATION_CENTER)
    }, [t, y]);
    let S = (0, a.A)();
    r.useEffect(() => () => {
      f ? !S() && (E || j.length > 100) && (0, o.S3)() : n && j.length > 100 && (0, o.S3)()
    }, [n, j, f, S, E]), r.useEffect(() => {
      let e = b && t;
      (!y || e) && (0, o.ni)({
        limit: null != h ? h : p ? 8 : 20,
        with_mentions: p,
        roles_filter: _,
        everyone_filter: C
      })
    }, [y, b, t, p, _, C, h]);
    let I = r.useCallback(async e => {
      !g.current && y && v && null != x && (e || !E) && (g.current = true, A(true), await (0, o.ni)({
        after: x,
        with_mentions: p,
        roles_filter: _,
        everyone_filter: C,
        limit: p ? 8 : 20
      }, () => {
        g.current = false
      }), A(false))
    }, [y, v, x, E, p, _, C]);
    return {
      initialized: y,
      loading: O,
      items: j,
      hasMore: v,
      loadMore: I,
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
    initialized: e,
    loading: t,
    items: n.filter(e => "notification-center-item" === e.kind),
    hasMore: f,
    loadMore: p
  }
}
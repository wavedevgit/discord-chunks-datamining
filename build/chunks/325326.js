/** Chunk was on 77870 **/
/** chunk id: 325326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LF: () => p
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
    } = e, g = (0, l.bG)([u.A], () => u.A.shouldReload()), m = r.useRef(false), [b, A] = r.useState(false), {
      initialized: y,
      loading: _,
      items: O,
      hasMore: j,
      cursor: v,
      errored: x
    } = (0, l.cf)([c.A], () => ({
      initialized: c.A.initialized,
      loading: c.A.loading,
      items: c.A.items,
      hasMore: c.A.hasMore,
      cursor: c.A.cursor,
      errored: c.A.errored
    })), {
      roleFilter: E,
      everyoneFilter: C
    } = (0, l.cf)([a.Ay], () => ({
      everyoneFilter: a.Ay.everyoneFilter,
      roleFilter: a.Ay.roleFilter
    }));
    r.useEffect(() => ((0, o.BZ)(true), () => (0, o.BZ)(false)), []), r.useEffect(() => {
      y && t && (0, i.d_)(d.P.NOTIFICATION_CENTER)
    }, [t, y]);
    let S = (0, s.A)();
    r.useEffect(() => () => {
      p ? !S() && (x || O.length > 100) && (0, o.S3)() : n && O.length > 100 && (0, o.S3)()
    }, [n, O, p, S, x]), r.useEffect(() => {
      let e = g && t;
      (!y || e) && (0, o.ni)({
        limit: null != f ? f : h ? 8 : 20,
        with_mentions: h,
        roles_filter: E,
        everyone_filter: C
      })
    }, [y, g, t, h, E, C, f]);
    let I = r.useCallback(async e => {
      !m.current && y && j && null != v && (e || !x) && (m.current = true, A(true), await (0, o.ni)({
        after: v,
        with_mentions: h,
        roles_filter: E,
        everyone_filter: C,
        limit: h ? 8 : 20
      }, () => {
        m.current = false
      }), A(false))
    }, [y, j, v, x, h, E, C]);
    return {
      initialized: y,
      loading: _,
      items: O,
      hasMore: j,
      loadMore: I,
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
    initialized: e,
    loading: t,
    items: n.filter(e => "notification-center-item" === e.kind),
    hasMore: p,
    loadMore: h
  }
}
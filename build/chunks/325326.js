/** Chunk was on 17534 **/
/** chunk id: 325326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  LF: () => h
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
let h = () => {
  let {
    initialized: e,
    loading: t,
    items: n,
    hasMore: h,
    loadMore: p
  } = (e => {
    let {
      isFocused: t,
      navigatedAway: n,
      isDesktop: h,
      withMentions: p = false,
      initialPageSize: g
    } = e, f = (0, l.bG)([u.A], () => u.A.shouldReload()), m = r.useRef(false), [b, A] = r.useState(false), {
      initialized: y,
      loading: O,
      items: _,
      hasMore: j,
      cursor: x,
      errored: v
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
      h ? !S() && (v || _.length > 100) && (0, o.S3)() : n && _.length > 100 && (0, o.S3)()
    }, [n, _, h, S, v]), r.useEffect(() => {
      let e = f && t;
      (!y || e) && (0, o.ni)({
        limit: null != g ? g : p ? 8 : 20,
        with_mentions: p,
        roles_filter: E,
        everyone_filter: C
      })
    }, [y, f, t, p, E, C, g]);
    let I = r.useCallback(async e => {
      !m.current && y && j && null != x && (e || !v) && (m.current = true, A(true), await (0, o.ni)({
        after: x,
        with_mentions: p,
        roles_filter: E,
        everyone_filter: C,
        limit: p ? 8 : 20
      }, () => {
        m.current = false
      }), A(false))
    }, [y, j, x, v, p, E, C]);
    return {
      initialized: y,
      loading: O,
      items: _,
      hasMore: j,
      loadMore: I,
      loadingMore: b,
      setReadNotifItemToAcked: e => {
        e.acked || (e.acked = true)
      },
      errored: v
    }
  })({
    isFocused: true,
    isDesktop: true
  });
  return {
    initialized: e,
    loading: t,
    items: n.filter(e => "notification-center-item" === e.kind),
    hasMore: h,
    loadMore: p
  }
}
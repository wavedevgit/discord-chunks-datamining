/** Chunk was on 64935 **/
/** chunk id: 722888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => c,
  _: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk599941 = require("./599941.js"),
  Chunk544199 = require("./544199.js"),
  Chunk697627 = require("./697627.js");

function o(e, t) {
  let n = (0, i.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
    l = (0, i.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    l === s.e.NOT_FETCHED && (0, a.F)(e, t)
  }, [e, l, t]), {
    loading: l === s.e.FETCHING,
    priceTiers: n
  }
}

function c(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, l.XE)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let a = (0, l.Tq)(e);
  return {
    loaded: null != a && !n,
    subscriptionsSettings: a,
    loading: n,
    error: i
  }
}
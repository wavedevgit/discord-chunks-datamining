/** Chunk was on web.js **/
/** chunk id: 722888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => c,
  _: () => l
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk599941 = require("./599941.js"),
  Chunk544199 = require("./544199.js"),
  Chunk697627 = require("./697627.js");

function l(e, t) {
  let n = (0, i.bG)([o.A], () => o.A.getPriceTiersForGuildAndType(e, t)),
    a = (0, i.bG)([o.A], () => o.A.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    a === o.e.NOT_FETCHED && (0, s.F)(e, t)
  }, [e, a, t]), {
    loading: a === o.e.FETCHING,
    priceTiers: n
  }
}

function c(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, a.XE)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let s = (0, a.Tq)(e);
  return {
    loaded: null != s && !n,
    subscriptionsSettings: s,
    loading: n,
    error: i
  }
}
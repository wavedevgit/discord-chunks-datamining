/** Chunk was on web.js **/
/** chunk id: 76535, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c,
  R: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk584825 = require("./584825.js"),
  Chunk17079 = require("./17079.js"),
  Chunk281320 = require("./281320.js");

function l(e, t) {
  let n = (0, i.e7)([s.Z], () => s.Z.getPriceTiersForGuildAndType(e, t)),
    o = (0, i.e7)([s.Z], () => s.Z.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    o === s.M.NOT_FETCHED && (0, a.T)(e, t)
  }, [e, o, t]), {
    loading: o === s.M.FETCHING,
    priceTiers: n
  }
}

function c(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, o.JH)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let a = (0, o.YB)(e);
  return {
    loaded: null != a && !n,
    subscriptionsSettings: a,
    loading: n,
    error: i
  }
}
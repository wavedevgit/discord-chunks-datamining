/** Chunk was on 91173 **/
/** chunk id: 76535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => c,
  R: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk584825 = require("./584825.js"),
  Chunk17079 = require("./17079.js"),
  Chunk281320 = require("./281320.js");

function s(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.getPriceTiersForGuildAndType(e, t)),
    l = (0, i.e7)([o.Z], () => o.Z.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    l === o.M.NOT_FETCHED && (0, a.T)(e, t)
  }, [e, l, t]), {
    loading: l === o.M.FETCHING,
    priceTiers: n
  }
}

function c(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, l.JH)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let a = (0, l.YB)(e);
  return {
    loaded: null != a && !n,
    subscriptionsSettings: a,
    loading: n,
    error: i
  }
}
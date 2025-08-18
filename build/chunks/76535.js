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
  let n = (0, i.e7)([a.Z], () => a.Z.getPriceTiersForGuildAndType(e, t)),
    l = (0, i.e7)([a.Z], () => a.Z.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    l === a.M.NOT_FETCHED && (0, o.T)(e, t)
  }, [e, l, t]), {
    loading: l === a.M.FETCHING,
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
  let o = (0, l.YB)(e);
  return {
    loaded: null != o && !n,
    subscriptionsSettings: o,
    loading: n,
    error: i
  }
}
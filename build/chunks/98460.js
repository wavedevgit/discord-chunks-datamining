/** Chunk was on 6043 **/
/** chunk id: 98460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./290780.js");
var Chunk473749 = require("./473749.js"),
  Chunk433517 = require("./433517.js");

function l() {
  let e = (0, Chunk473749.useCallback)(e => {
    let t = new Set(i());
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    n.unshift(e), r.K.set("RecentDismissibleOverrides", n)
  }, []);
  return [i(), module]
}

function i() {
  var e;
  return null != (e = Chunk433517.K.get("RecentDismissibleOverrides")) ? module : []
}
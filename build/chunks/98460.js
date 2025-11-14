/** Chunk was on 91394 **/
/** chunk id: 98460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js");

function r() {
  let e = (0, Chunk647438.useCallback)(e => {
    let t = new Set(i());
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    n.unshift(e), l.K.set("RecentDismissibleOverrides", n)
  }, []);
  return [i(), module]
}

function i() {
  var e;
  return null != (e = Chunk433517.K.get("RecentDismissibleOverrides")) ? module : []
}
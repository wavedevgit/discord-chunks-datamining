/** Chunk was on 3020 **/
/** chunk id: 98460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./290780.js");
var Chunk647438 = require("./647438.js"),
  Chunk433517 = require("./433517.js");

function l() {
  let e = (0, Chunk647438.useCallback)(e => {
    let t = new Set(r());
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    n.unshift(e), i.K.set("RecentDismissibleOverrides", n)
  }, []);
  return [r(), module]
}

function r() {
  var e;
  return null != (e = Chunk433517.K.get("RecentDismissibleOverrides")) ? module : []
}
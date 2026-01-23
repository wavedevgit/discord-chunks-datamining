/** Chunk was on 22477 **/
/** chunk id: 739560, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js"), require("./667532.js");
var Chunk64700 = require("./64700.js"),
  Chunk506774 = require("./506774.js");

function r() {
  let e = (0, a.useCallback)(e => {
    let t = new Set(i());
    t.delete(e);
    let n = Array.from(t).slice(0, 4);
    n.unshift(e), l.w.set("RecentDismissibleOverrides", n)
  }, []);
  return [i(), e]
}

function i() {
  var e;
  return null != (e = l.w.get("RecentDismissibleOverrides")) ? e : []
}
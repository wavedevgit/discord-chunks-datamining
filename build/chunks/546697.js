/** Chunk was on 96604 **/
/** chunk id: 546697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => r
}), require("./388685.js"), require("./539854.js");
var Chunk991346 = require("./991346.js");

function r() {
  let e = (0, Chunk991346.Pt)(),
    t = new Map;
  return exports.set("root", []), Object.entries(module).forEach(e => {
    var n;
    let [a, r] = e;
    if (null != r.predicate && !r.predicate()) return;
    let l = null != (n = r.parent) ? n : "root";
    t.set(a, []), t.has(l) || t.set(l, []), t.get(l).push(a)
  }), {
    legacySettingDirectory: exports
  }
}
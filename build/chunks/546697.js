/** Chunk was on 65347 **/
/** chunk id: 546697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => l
}), require("./388685.js"), require("./539854.js");
var Chunk991346 = require("./991346.js");

function l() {
  let e = (0, Chunk991346.Pt)(),
    t = new Map;
  return exports.set("root", []), Object.entries(module).forEach(e => {
    var n;
    let [a, l] = e;
    if (null != l.predicate && !l.predicate()) return;
    let i = null != (n = l.parent) ? n : "root";
    t.set(a, []), t.has(i) || t.set(i, []), t.get(i).push(a)
  }), {
    legacySettingDirectory: exports
  }
}
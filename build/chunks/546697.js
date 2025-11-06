/** Chunk was on 28532 **/
/** chunk id: 546697, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk991346 = require("./991346.js");

function i() {
  let e = (0, Chunk991346.Pt)(),
    t = new Map;
  return exports.set("root", []), Object.entries(module).forEach(e => {
    var n;
    let [a, i] = e;
    if (null != i.predicate && !i.predicate()) return;
    let r = null != (n = i.parent) ? n : "root";
    t.set(a, []), t.has(r) || t.set(r, []), t.get(r).push(a)
  }), {
    legacySettingDirectory: exports
  }
}
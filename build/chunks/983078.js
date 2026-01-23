/** Chunk was on 65599 **/
/** chunk id: 983078, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => l
}), require("./896048.js"), require("./321073.js");
var Chunk360619 = require("./360619.js");

function l() {
  let e = (0, a.PH)(),
    t = new Map;
  return t.set("root", []), Object.entries(e).forEach(e => {
    var n;
    let [a, l] = e;
    if (null != l.predicate && !l.predicate()) return;
    let r = null != (n = l.parent) ? n : "root";
    t.set(a, []), t.has(r) || t.set(r, []), t.get(r).push(a)
  }), {
    legacySettingDirectory: t
  }
}
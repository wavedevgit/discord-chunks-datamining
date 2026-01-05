/** Chunk was on 27601 **/
/** chunk id: 869614, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
let n = new Set(["nvidia"]);

function l(e) {
  for (let t of Object.keys(e)) {
    let a = e[t];
    if (null != a && null == a.error && n.has(t)) returntrue
  }
  returnfalse
}
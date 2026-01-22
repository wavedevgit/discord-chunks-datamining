/** Chunk was on 45565 **/
/** chunk id: 857275, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
let l = new Set(["nvidia"]);

function r(e) {
  for (let t of Object.keys(e)) {
    let a = e[t];
    if (null != a && null == a.error && l.has(t)) returntrue
  }
  returnfalse
}
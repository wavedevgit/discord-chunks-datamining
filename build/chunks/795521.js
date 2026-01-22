/** Chunk was on 9330 **/
/** chunk id: 795521, original params: i,t,e (module,exports,require) **/
function s(i) {
  let t = 0,
    e = [];
  return async function() {
    if (2 !== t) {
      if (1 === t) return new Promise(i => {
        e.push(i)
      });
      for (t = 1, await i(), t = 2; e.length > 0;) {
        var s;
        null == (s = e.shift()) || s()
      }
    }
  }
}
require.d(exports, {
  u: () => s
}), require("./321073.js")
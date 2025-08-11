/** Chunk was on 21617 **/
/** chunk id: 170830, original params: i,t,e (module,exports,require) **/
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
  G: () => s
}), require("./539854.js")
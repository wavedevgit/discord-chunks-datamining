/** Chunk was on 31649 **/
/** chunk id: 337953, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk875425 = require("./875425.js");

function i(t) {
  if (t !== r.FO.TODAY) return l()("number" == typeof t, "Invalid custom status clear timeout"), t;
  {
    let t = new Date;
    return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime()
  }
}
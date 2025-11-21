/** Chunk was on 76215 **/
/** chunk id: 337953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk875425 = require("./875425.js");

function a(e) {
  if (e !== i.FO.TODAY) return l()("number" == typeof e, "Invalid custom status clear timeout"), e;
  {
    let e = new Date;
    return new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime() - e.getTime()
  }
}
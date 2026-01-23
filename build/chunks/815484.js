/** Chunk was on 41091 **/
/** chunk id: 815484, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk403918 = require("./403918.js");

function a(t) {
  if (t !== i.yt.TODAY) return r()("number" == typeof t, "Invalid custom status clear timeout"), t;
  {
    let t = new Date;
    return new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime() - t.getTime()
  }
}
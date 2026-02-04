/** Chunk was on 7685 **/
/** chunk id: 309632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk602582 = require("./602582.js"),
  Chunk946132 = require("./946132.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    a = e.id,
    [o, u] = (0, r.yK)([s.A], () => t ? [null, true] : [s.A.message(n, a), s.A.isLatest(n, a)]);
  return (0, l.useEffect)(() => {
    null == a || u || i.A.addWant(a)
  }, [a, u]), o
}
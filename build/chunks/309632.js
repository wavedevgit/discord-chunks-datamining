/** Chunk was on 83759 **/
/** chunk id: 309632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk602582 = require("./602582.js"),
  Chunk946132 = require("./946132.js");

function o(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    o = e.id,
    [s, u] = (0, l.yK)([a.A], () => t ? [null, true] : [a.A.message(n, o), a.A.isLatest(n, o)]);
  return (0, r.useEffect)(() => {
    null == o || u || i.A.addWant(o)
  }, [o, u]), s
}
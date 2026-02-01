/** Chunk was on 71447 **/
/** chunk id: 309632, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk602582 = require("./602582.js"),
  Chunk946132 = require("./946132.js");

function s(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = e.guild_id,
    s = e.id,
    [o, u] = (0, r.yK)([a.A], () => t ? [null, true] : [a.A.message(n, s), a.A.isLatest(n, s)]);
  return (0, i.useEffect)(() => {
    null == s || u || l.A.addWant(s)
  }, [s, u]), o
}
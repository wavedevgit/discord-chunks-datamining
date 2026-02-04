/** Chunk was on 7685 **/
/** chunk id: 336148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js");

function s(e) {
  return (0, l.bG)([r.A, i.default], () => {
    var t, n;
    if (null == e) returnfalse;
    let l = null != (t = null == (n = i.default.getCurrentUser()) ? true : n.id) ? t : null,
      s = r.A.getTypingUsers(e.id);
    for (let e in s)
      if (e !== l) returntrue;
    returnfalse
  }, [e])
}
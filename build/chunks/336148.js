/** Chunk was on 71447 **/
/** chunk id: 336148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => a
});
var Chunk311907 = require("./311907.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js");

function a(e) {
  return (0, i.bG)([r.A, l.default], () => {
    var t, n;
    if (null == e) returnfalse;
    let i = null != (t = null == (n = l.default.getCurrentUser()) ? true : n.id) ? t : null,
      a = r.A.getTypingUsers(e.id);
    for (let e in a)
      if (e !== i) returntrue;
    returnfalse
  }, [e])
}
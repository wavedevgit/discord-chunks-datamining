/** Chunk was on 7602 **/
/** chunk id: 810181, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  m: () => a
}), require("./321073.js");
var Chunk311907 = require("./311907.js"),
  Chunk994500 = require("./994500.js"),
  Chunk741961 = require("./741961.js"),
  Chunk287809 = require("./287809.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
  return (0, i.yK)([l.default, r.A, n.A], () => {
    var s;
    let i = null == (s = l.default.getCurrentUser()) ? true : s.id,
      a = r.A.getTypingUsers(e),
      o = [];
    for (let e in a) {
      if (o.length >= t) break;
      let s = l.default.getUser(e);
      null != s && s.id !== i && (n.A.isBlockedOrIgnored(s.id) || o.push(s.id))
    }
    return o
  }, [e, t])
}
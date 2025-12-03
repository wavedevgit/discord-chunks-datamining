/** Chunk was on 22173 **/
/** chunk id: 824578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => i
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js");

function i(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
  return (0, s.Wu)([r.default, a.Z, l.Z], () => {
    var n;
    let s = null == (n = r.default.getCurrentUser()) ? true : n.id,
      i = a.Z.getTypingUsers(e),
      o = [];
    for (let e in i) {
      if (o.length >= t) break;
      let n = r.default.getUser(e);
      null != n && n.id !== s && (l.Z.isBlockedOrIgnored(n.id) || o.push(n.id))
    }
    return o
  }, [e, t])
}
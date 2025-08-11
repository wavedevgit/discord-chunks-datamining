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
  return (0, r.Wu)([l.default, s.Z, a.Z], () => {
    var n;
    let r = null == (n = l.default.getCurrentUser()) ? true : n.id,
      i = s.Z.getTypingUsers(e),
      o = [];
    for (let e in i) {
      if (o.length >= t) break;
      let n = l.default.getUser(e);
      null != n && n.id !== r && (a.Z.isBlockedOrIgnored(n.id) || o.push(n.id))
    }
    return o
  }, [e, t])
}
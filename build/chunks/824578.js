/** Chunk was on 87646 **/
/** chunk id: 824578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => a
}), require("./539854.js");
var Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk111583 = require("./111583.js"),
  Chunk594174 = require("./594174.js");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
  return (0, i.Wu)([l.default, r.Z, s.Z], () => {
    var n;
    let i = null == (n = l.default.getCurrentUser()) ? true : n.id,
      a = r.Z.getTypingUsers(e),
      o = [];
    for (let e in a) {
      if (o.length >= t) break;
      let n = l.default.getUser(e);
      null != n && n.id !== i && (s.Z.isBlockedOrIgnored(n.id) || o.push(n.id))
    }
    return o
  }, [e, t])
}
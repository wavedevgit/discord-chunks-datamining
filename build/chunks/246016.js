/** Chunk was on 93979 **/
/** chunk id: 246016, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Y: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let s = [];

function a(e) {
  let {
    userId: n
  } = e, t = (0, o.e7)([r.Z, i.default], () => {
    var e;
    return r.Z.isFriend(n) || (null == (e = i.default.getUser(n)) ? true : e.isProvisional)
  }), a = (0, c.ML)(n);
  return l.useMemo(() => t ? s : a.map(e => {
    let {
      applicationId: n
    } = e;
    return n
  }), [a, t])
}
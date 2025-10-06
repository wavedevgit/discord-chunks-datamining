/** Chunk was on 68545 **/
/** chunk id: 246016, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Y: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let _ = [];

function l(e) {
  let {
    userId: n
  } = e, t = (0, c.e7)([a.Z, r.default], () => {
    var e;
    return a.Z.isFriend(n) || (null == (e = r.default.getUser(n)) ? true : e.isProvisional)
  }), l = (0, i.ML)(n);
  return o.useMemo(() => t ? _ : l.map(e => {
    let {
      applicationId: n
    } = e;
    return n
  }), [l, t])
}
/** Chunk was on 70928 **/
/** chunk id: 246016, original params: e,t,n (module,exports,require) **/
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
    userId: t
  } = e, n = (0, c.e7)([a.Z, r.default], () => {
    var e;
    return a.Z.isFriend(t) || (null == (e = r.default.getUser(t)) ? true : e.isProvisional)
  }), l = (0, i.ML)(t);
  return o.useMemo(() => n ? _ : l.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [l, n])
}
/** Chunk was on 63875 **/
/** chunk id: 246016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => d
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let c = [];

function d(e) {
  let {
    userId: t
  } = e, n = (0, r.e7)([o.Z, i.default], () => {
    var e;
    return o.Z.isFriend(t) || (null == (e = i.default.getUser(t)) ? true : e.isProvisional)
  }), d = (0, l.ML)(t);
  return a.useMemo(() => n ? c : d.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [d, n])
}
/** Chunk was on 62987 **/
/** chunk id: 246016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => c
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let s = [];

function c(e) {
  let {
    userId: t
  } = e, n = (0, i.e7)([l.Z, a.default], () => {
    var e;
    return l.Z.isFriend(t) || (null == (e = a.default.getUser(t)) ? true : e.isProvisional)
  }), c = (0, o.ML)(t);
  return r.useMemo(() => n ? s : c.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [c, n])
}
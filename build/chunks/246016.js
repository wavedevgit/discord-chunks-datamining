/** Chunk was on 1268 **/
/** chunk id: 246016, original params: e,t,r (module,exports,require) **/
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
  } = e, r = (0, i.e7)([a.Z, l.default], () => {
    var e;
    return a.Z.isFriend(t) || (null == (e = l.default.getUser(t)) ? true : e.isProvisional)
  }), c = (0, o.ML)(t);
  return n.useMemo(() => r ? s : c.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [c, r])
}
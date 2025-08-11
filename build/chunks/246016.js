/** Chunk was on 16459 **/
/** chunk id: 246016, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Y: () => c
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let o = [];

function c(e) {
  let {
    userId: t
  } = e, r = (0, i.e7)([a.Z, l.default], () => {
    var e;
    return a.Z.isFriend(t) || (null == (e = l.default.getUser(t)) ? true : e.isProvisional)
  }), c = (0, s.ML)(t);
  return n.useMemo(() => r ? o : c.map(e => {
    let {
      applicationId: t
    } = e;
    return t
  }), [c, r])
}
/** Chunk was on 93979 **/
/** chunk id: 246016, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Y: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk320582 = require("./320582.js");
let c = [];

function s(e) {
  let {
    userId: n
  } = e, t = (0, i.e7)([o.Z, r.default], () => {
    var e;
    return o.Z.isFriend(n) || (null == (e = r.default.getUser(n)) ? true : e.isProvisional)
  }), s = (0, a.ML)(n);
  return l.useMemo(() => t ? c : s.map(e => {
    let {
      applicationId: n
    } = e;
    return n
  }), [s, t])
}
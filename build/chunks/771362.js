/** Chunk was on 93979 **/
/** chunk id: 771362, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk621853 = require("./621853.js");
let s = [];

function a(e) {
  let n = (0, i.Xj)({
      forUserProfile: true
    }),
    t = (0, o.e7)([c.Z], () => c.Z.getUserProfile(e));
  return (0, l.useMemo)(() => (null == t ? true : t.connectedAccounts) == null ? s : t.connectedAccounts.filter(e => {
    let {
      type: t
    } = e, l = r.Z.get(t);
    return null != l && r.Z.isSupported(t) && n(l)
  }), [null == t ? true : t.connectedAccounts, n])
}
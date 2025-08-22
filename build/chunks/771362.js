/** Chunk was on 82008 **/
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
    t = (0, l.e7)([c.Z], () => c.Z.getUserProfile(e));
  return (0, r.useMemo)(() => (null == t ? true : t.connectedAccounts) == null ? s : t.connectedAccounts.filter(e => {
    let {
      type: t
    } = e, r = o.Z.get(t);
    return null != r && o.Z.isSupported(t) && n(r)
  }), [null == t ? true : t.connectedAccounts, n])
}
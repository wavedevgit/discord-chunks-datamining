/** Chunk was on 72164 **/
/** chunk id: 771362, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk621853 = require("./621853.js");
let a = [];

function s(e) {
  let n = (0, i.Xj)({
      forUserProfile: true
    }),
    t = (0, r.e7)([c.Z], () => c.Z.getUserProfile(e));
  return (0, o.useMemo)(() => (null == t ? true : t.connectedAccounts) == null ? a : t.connectedAccounts.filter(e => {
    let {
      type: t
    } = e, o = l.Z.get(t);
    return null != o && l.Z.isSupported(t) && n(o)
  }), [null == t ? true : t.connectedAccounts, n])
}
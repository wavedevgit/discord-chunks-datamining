/** Chunk was on 93979 **/
/** chunk id: 771362, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk726542 = require("./726542.js"),
  Chunk122021 = require("./122021.js"),
  Chunk621853 = require("./621853.js");
let c = [];

function s(e) {
  let n = (0, r.Xj)({
      forUserProfile: true
    }),
    t = (0, i.e7)([a.Z], () => a.Z.getUserProfile(e));
  return (0, l.useMemo)(() => (null == t ? true : t.connectedAccounts) == null ? c : t.connectedAccounts.filter(e => {
    let {
      type: t
    } = e, l = o.Z.get(t);
    return null != l && o.Z.isSupported(t) && n(l)
  }), [null == t ? true : t.connectedAccounts, n])
}
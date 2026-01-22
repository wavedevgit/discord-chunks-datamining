/** Chunk was on 14691 **/
/** chunk id: 298009, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => c,
  u: () => d
});
var Chunk64700 = require("./64700.js"),
  Chunk27023 = require("./27023.jsx"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx");
let a = ["/", "\\\\"];

function d(e) {
  let t = r.useMemo(() => a.some(t => (null != e ? e : "").includes(t)), [e]);
  return {
    isValid: !t,
    errors: {
      name: t ? i.intl.formatToPlainString(s.default.jYZD44, {
        forbiddenCharacters: a.join(", ")
      }) : true
    }
  }
}

function c() {
  let {
    regionId: e,
    gameServerInstance: t,
    name: l,
    planId: r
  } = (0, n.bv)(), s = "" !== l && "" !== e && true !== r;
  return null != t ? s && (t.name !== l || t.regionId !== e || t.planId !== r) : s
}
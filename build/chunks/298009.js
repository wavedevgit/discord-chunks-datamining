/** Chunk was on 14691 **/
/** chunk id: 298009, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o,
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
      name: t ? s.intl.formatToPlainString(i.default.jYZD44, {
        forbiddenCharacters: a.join(", ")
      }) : true
    }
  }
}

function o() {
  let {
    regionId: e,
    gameServerInstance: t,
    name: n,
    planId: r
  } = (0, l.bv)(), i = "" !== n && "" !== e && true !== r;
  return null != t ? i && (t.name !== n || t.regionId !== e || t.planId !== r) : i
}
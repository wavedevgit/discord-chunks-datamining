/** Chunk was on 26473 **/
/** chunk id: 281014, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  a: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk694967 = require("./694967.jsx"),
  Chunk306238 = require("./306238.js"),
  Chunk388032 = require("./388032.jsx");
let o = ["/", "\\\\"];

function s(e) {
  let n = r.useMemo(() => o.some(n => (null != e ? e : "").includes(n)), [e]);
  return {
    isValid: !n,
    errors: {
      name: n ? a.intl.formatToPlainString(l.default.jYZD44, {
        forbiddenCharacters: o.join(", ")
      }) : true
    }
  }
}

function d() {
  let {
    regionId: e,
    gameServerInstance: n,
    name: t,
    planId: r
  } = (0, Chunk694967.JL)(), l = "" !== require && "" !== module && true !== Chunk647438;
  return null != exports ? Chunk306238 && (exports.name !== require || exports.regionId !== module || exports.planId !== Chunk647438) : Chunk306238
}
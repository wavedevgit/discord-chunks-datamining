/** Chunk was on 3298 **/
/** chunk id: 281014, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => d,
  a: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk343312 = require("./343312.jsx"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx");
let o = ["/", "\\\\"];

function s(e) {
  let n = r.useMemo(() => o.some(n => (null != e ? e : "").includes(n)), [e]);
  return {
    isValid: !n,
    errors: {
      name: n ? l.intl.formatToPlainString(a.default.jYZD44, {
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
  } = (0, Chunk343312.JL)(), a = "" !== require && "" !== module && true !== Chunk473749;
  return null != exports ? Chunk914820 && (exports.name !== require || exports.regionId !== module || exports.planId !== Chunk473749) : Chunk914820
}
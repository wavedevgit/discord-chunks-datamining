/** Chunk was on 64982 **/
/** chunk id: 640358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => i
});
var Chunk330711 = require("./330711.js");
let i = (e, t) => {
  let n = Math.round(10 * e) / 10;
  if (e < 1e6) return new Intl.NumberFormat(t, {
    maximumFractionDigits: +(n % 1 != 0)
  }).format(e);
  let i = Math.round(e / 1e6 * 10) / 10,
    l = new Intl.NumberFormat(t, {
      maximumFractionDigits: +(i % 1 != 0)
    }).format(e / 1e6);
  return r.Z.Messages.NUMBER_ABBREVIATIONS_MILLION.format({
    num: l
  })
}
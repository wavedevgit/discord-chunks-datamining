/** Chunk was on web.js **/
/** chunk id: 429407, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js");
module.exports = (e, t, n, i, o) => {
  "string" == typeof n && (o = i, i = n, n = true);
  try {
    return new r(e instanceof r ? e.version : e, n).inc(t, i, o).version
  } catch (e) {
    return null
  }
}
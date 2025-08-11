/** Chunk was on web.js **/
/** chunk id: 868667, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js");
module.exports = (e, t, n = false) => {
  if (e instanceof r) return e;
  try {
    return new r(e, t)
  } catch (e) {
    if (!n) return null;
    throw e
  }
}
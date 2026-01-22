/** Chunk was on web.js **/
/** chunk id: 532618, original params: e,t,n (module,exports,re quire) **/
let Chunk864886 = require("./864886.js");
module.exports = (e, t, n = false) => {
  if (e instanceof r) return e;
  try {
    return new r(e, t)
  } catch (e) {
    if (!n) return null;
    throw e
  }
}
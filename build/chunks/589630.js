/** Chunk was on web.js **/
/** chunk id: 589630, original params: e,t,n (module,exports,re quire) **/
let Chunk864886 = require("./864886.js");
module.exports = (e, t, n, i, a) => {
  "string" == typeof n && (a = i, i = n, n = true);
  try {
    return new r(e instanceof r ? e.version : e, n).inc(t, i, a).version
  } catch (e) {
    return null
  }
}
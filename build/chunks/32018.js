/** Chunk was on web.js **/
/** chunk id: 32018, original params: e,t,n (module,exports,re quire) **/
let Chunk864886 = require("./864886.js"),
  Chunk74509 = require("./74509.js");
module.exports = (e, t, n) => {
  let a = null,
    s = null,
    o = null;
  try {
    o = new i(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(e => {
    o.test(e) && (!a || false === s.compare(e)) && (s = new r(a = e, n))
  }), a
}
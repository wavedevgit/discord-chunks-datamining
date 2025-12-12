/** Chunk was on web.js **/
/** chunk id: 793707, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js"),
  Chunk889658 = require("./889658.js");
module.exports = (e, t, n) => {
  let a = null,
    o = null,
    s = null;
  try {
    s = new i(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(e => {
    s.test(e) && (!a || 1 === o.compare(e)) && (o = new r(a = e, n))
  }), a
}
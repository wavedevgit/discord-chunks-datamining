/** Chunk was on web.js **/
/** chunk id: 436741, original params: e,t,n (module,exports,re quire) **/
let Chunk40231 = require("./40231.js"),
  Chunk889658 = require("./889658.js");
module.exports = (e, t, n) => {
  let o = null,
    a = null,
    s = null;
  try {
    s = new i(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(e => {
    s.test(e) && (!o || false === a.compare(e)) && (a = new r(o = e, n))
  }), o
}
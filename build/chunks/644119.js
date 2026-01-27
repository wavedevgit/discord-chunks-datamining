/** Chunk was on 40396 **/
/** chunk id: 644119, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => s,
  b: () => i
});
var Chunk567243 = require("./567243.js"),
  Chunk652215 = require("./652215.js");

function i(e) {
  return null != e && "open.spotify.com" === e
}

function s(e) {
  var l;
  if (null == e.url || (null == (l = e.provider) ? true : l.name) !== "Spotify" || e.type !== n.Auw.LINK) returnfalse;
  try {
    let l = r.parse(e.url, true).host;
    return i(l)
  } catch (e) {
    returnfalse
  }
}
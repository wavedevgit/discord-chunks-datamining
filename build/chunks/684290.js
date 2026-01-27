/** Chunk was on 40396 **/
/** chunk id: 684290, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  A: () => s,
  k: () => i
});
var Chunk567243 = require("./567243.js"),
  Chunk652215 = require("./652215.js");

function i(e) {
  return "music.apple.com" === e
}

function s(e) {
  var l;
  if (null == e.url || (null == (l = e.provider) ? true : l.name) !== "Apple Music" || e.type !== n.Auw.ARTICLE && e.type !== n.Auw.LINK) returnfalse;
  try {
    let l = r.parse(e.url, true).host;
    return i(l)
  } catch (e) {
    returnfalse
  }
}
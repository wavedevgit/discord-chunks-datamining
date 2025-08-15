/** Chunk was on 53937 **/
/** chunk id: 635477, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  L: () => i,
  Z: () => s
});
var Chunk729594 = require("./729594.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  return "music.apple.com" === e
}

function s(e) {
  var l;
  if (null == e.url || (null == (l = e.provider) ? true : l.name) !== "Apple Music" || e.type !== n.hBH.ARTICLE && e.type !== n.hBH.LINK) returnfalse;
  try {
    let l = r.parse(e.url, true).host;
    return i(l)
  } catch (e) {
    returnfalse
  }
}
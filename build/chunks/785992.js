/** Chunk was on 53937 **/
/** chunk id: 785992, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  E: () => i,
  Z: () => s
});
var Chunk729594 = require("./729594.js"),
  Chunk981631 = require("./981631.js");

function i(e) {
  return null != e && "open.spotify.com" === e
}

function s(e) {
  var l;
  if (null == e.url || (null == (l = e.provider) ? true : l.name) !== "Spotify" || e.type !== n.hBH.LINK) returnfalse;
  try {
    let l = r.parse(e.url, true).host;
    return i(l)
  } catch (e) {
    returnfalse
  }
}
/** Chunk was on 33957 **/
/** chunk id: 248019, original params: e,n,l (module,exports,require) **/
function t(e) {
  var n, l;
  if (null == e) return null;
  if ((null == (n = e.content) ? true : n.length) > 0) return e.content;
  if ((null == (l = e.embeds) ? true : l.length) > 0) {
    for (let n of e.embeds)
      if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription
  }
  return null
}
require.d(exports, {
  A: () => t
}), require("./896048.js")
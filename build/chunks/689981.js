/** Chunk was on 12009 **/
/** chunk id: 689981, original params: e,n,t (module,exports,require) **/
function a(e) {
  var n, t;
  if (null == e) return null;
  if ((null == (n = e.content) ? true : n.length) > 0) return e.content;
  if ((null == (t = e.embeds) ? true : t.length) > 0) {
    for (let n of e.embeds)
      if (null != n.rawDescription && n.rawDescription.length > 0) return n.rawDescription
  }
  return null
}
require.d(exports, {
  Z: () => a
}), require("./388685.js")
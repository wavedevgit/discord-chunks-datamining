/** Chunk was on 53494 **/
n.d(t, {
  Z: () => o
}), n(757143), n(301563);
var r = n(388032);
let i = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function o(e) {
  let t = r.NW.string(r.t.FeUKeH);
  return null != e && null != e.sourceName && e.sourceName.length > 0 && (t = e.sourceName), {
    sanitizedTitle: t.replace(i, ""),
    title: t
  }
}
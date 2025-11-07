/** Chunk was on 2262 **/
/** chunk id: 457574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => l
}), require("./35282.js");
var Chunk768581 = require("./768581.js"),
  Chunk598117 = require("./598117.js");
async function l(e) {
  let t = r.ZP.getEmojiURL({
      id: e.id,
      animated: e.animated,
      size: i.eT,
      forcePNG: true
    }),
    n = await fetch(t),
    l = await n.blob(),
    a = l.type;
  (null == a || "application/octet-stream" === a) && (a = t.includes(".gif") ? "image/gif" : t.includes(".webp") ? "image/webp" : e.animated ? "image/gif" : "image/png");
  let s = new File([l], "".concat(e.name, ".").concat(a.split("/")[1]), {
    type: a
  });
  return {
    data: await new Promise((e, t) => {
      let n = new FileReader;
      n.onloadend = () => e(n.result), n.onerror = t, n.readAsDataURL(l)
    }),
    file: s,
    image: null
  }
}
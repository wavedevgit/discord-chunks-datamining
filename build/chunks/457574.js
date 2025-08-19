/** Chunk was on 67079 **/
/** chunk id: 457574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => a
}), require("./35282.js");
var Chunk768581 = require("./768581.js"),
  Chunk598117 = require("./598117.js");
async function a(e) {
  let t = r.ZP.getEmojiURL({
      id: e.id,
      animated: e.animated,
      size: l.eT,
      forcePNG: true
    }),
    n = await fetch(t),
    a = await n.blob(),
    i = a.type;
  (null == i || "application/octet-stream" === i) && (i = t.includes(".gif") ? "image/gif" : t.includes(".webp") ? "image/webp" : e.animated ? "image/gif" : "image/png");
  let s = new File([a], "".concat(e.name, ".").concat(i.split("/")[1]), {
    type: i
  });
  return {
    data: await new Promise((e, t) => {
      let n = new FileReader;
      n.onloadend = () => e(n.result), n.onerror = t, n.readAsDataURL(a)
    }),
    file: s,
    image: null
  }
}
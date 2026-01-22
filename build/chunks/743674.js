/** Chunk was on 21738 **/
/** chunk id: 743674, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => s
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk998304 = require("./998304.js"),
  Chunk515718 = require("./515718.js");
async function a(e) {
  return (await new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "Anonymous", r.onerror = e => {
      n(e), null != r && (r.onerror = null, r.onload = null), r = null
    }, r.onload = () => {
      null != r ? (t((0, l.Sf)(r, 2, 10)), r.onerror = null, r.onload = null, r = null) : n("image is null")
    }, r.src = e
  })).map(e => {
    let [t, n, r] = e;
    return (0, i.Ob)(t, n, r)
  })
}

function s(e) {
  let [t, n] = r.useState(), i = r.useRef(false);
  return null == e || null != t || i.current || (i.current = true, a(e).then(e => {
    n(e[0])
  })), t
}
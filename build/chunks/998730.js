/** Chunk was on 1272 **/
/** chunk id: 998730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk302221 = require("./302221.js"),
  Chunk956664 = require("./956664.js");
async function a(e) {
  return (await new Promise((t, n) => {
    let r = new Image;
    r.crossOrigin = "Anonymous", r.onerror = e => {
      n(e), null != r && (r.onerror = null, r.onload = null), r = null
    }, r.onload = () => {
      null != r ? (t((0, l.XN)(r, 2, 10)), r.onerror = null, r.onload = null, r = null) : n("image is null")
    }, r.src = e
  })).map(e => {
    let [t, n, r] = e;
    return (0, i.vq)(t, n, r)
  })
}

function s(e) {
  let [t, n] = r.useState(), i = r.useRef(false);
  return null == e || null != t || i.current || (i.current = true, a(e).then(e => {
    n(e[0])
  })), t
}
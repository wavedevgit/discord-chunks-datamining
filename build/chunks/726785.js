/** Chunk was on 35929 **/
/** chunk id: 726785, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  _: () => c
}), require("./896048.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk64700 = require("./64700.js"),
  Chunk626584 = require("./626584.js"),
  Chunk346915 = require("./346915.js"),
  Chunk100846 = require("./100846.js");
let l = new Chunk626584.A("useAnimatedImageCheck");

function c(e) {
  let t = "image/gif" === e.type,
    r = "image/webp" === e.type,
    [n, c] = a.useState(false),
    [s, u] = a.useState(null),
    f = r && s !== e;
  a.useEffect(() => {
    let a = false;
    return t ? ((0, i.A)(), c(false), u(e)) : r ? (async () => {
      try {
        let t = await e.arrayBuffer(),
          r = new Uint8Array(t),
          n = await (0, o.Sf)(r);
        a || (c(n), n && (0, o.L_)(), u(e))
      } catch (t) {
        a || (l.error("Error checking WebP animation", t), c(false), u(e))
      }
    })() : (c(false), u(e)), () => {
      a = true
    }
  }, [e, t, r]);
  let A = n && s === e,
    h = t || A;
  return {
    isGIF: t,
    isWebP: r,
    isAnimatedWebPFile: A,
    isCheckingAnimation: f,
    isEditableAnimatedImage: h
  }
}
/** Chunk was on 30409 **/
/** chunk id: 981713, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  T: () => c
}), require("./388685.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk473749 = require("./473749.js"),
  Chunk710845 = require("./710845.js"),
  Chunk76674 = require("./76674.js"),
  Chunk586818 = require("./586818.js");
let l = new Chunk710845.Z("useAnimatedImageCheck");

function c(e) {
  let t = "image/gif" === e.type,
    r = "image/webp" === e.type,
    [n, c] = a.useState(false),
    [u, s] = a.useState(null),
    f = r && u !== e;
  a.useEffect(() => {
    let a = false;
    return t ? ((0, i.Z)(), c(false), s(e)) : r ? (async () => {
      try {
        let t = await e.arrayBuffer(),
          r = new Uint8Array(t),
          n = await (0, o.b0)(r);
        a || (c(n), n && (0, o.GS)(), s(e))
      } catch (t) {
        a || (l.error("Error checking WebP animation", t), c(false), s(e))
      }
    })() : (c(false), s(e)), () => {
      a = true
    }
  }, [e, t, r]);
  let h = n && u === e,
    A = t || h;
  return {
    isGIF: t,
    isWebP: r,
    isAnimatedWebPFile: h,
    isCheckingAnimation: f,
    isEditableAnimatedImage: A
  }
}
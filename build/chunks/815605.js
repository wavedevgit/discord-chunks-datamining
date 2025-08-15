/** Chunk was on 38626 **/
/** chunk id: 815605, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vz: () => c,
  Zn: () => d,
  aB: () => u
}), require("./49124.js"), require("./704826.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk134432 = require("./134432.js"),
  Chunk963838 = require("./963838.js"),
  Chunk302221 = require("./302221.js"),
  Chunk347904 = require("./347904.js");
let c = 7.5,
  u = (0, Chunk392711.memoize)((e, t, n, i) => new Promise(e => {
    let r = new Image;
    r.src = t, r.crossOrigin = "Anonymous", r.onload = () => {
      let t = 32 * (0, l.x_)(),
        o = JSON.stringify(n);
      if (null != i && (o = (0, s.s4)(o, (0, a.oo)(i))), r.width === t && r.height === t || 0 === r.width && 0 === r.height) e(JSON.parse(o));
      else {
        let t = 128 / r.width * r.height;
        e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, n, i) {
  let {
    emojiSize: l,
    key: a,
    messageId: s
  } = null != i ? i : {}, c = (0, o._r)(e, null != l ? 2 * l : true);
  return {
    channelId: n,
    messageId: s,
    emoji: e,
    animationId: (0, r.Z)(),
    url: c,
    key: a,
    color: t
  }
}
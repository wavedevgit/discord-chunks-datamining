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
    let l = new Image;
    l.src = t, l.crossOrigin = "Anonymous", l.onload = () => {
      let t = 32 * (0, r.x_)(),
        o = JSON.stringify(n);
      if (null != i && (o = (0, s.s4)(o, (0, a.oo)(i))), l.width === t && l.height === t || 0 === l.width && 0 === l.height) e(JSON.parse(o));
      else {
        let t = 128 / l.width * l.height;
        e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function d(e, t, n, i) {
  let {
    emojiSize: r,
    key: a,
    messageId: s
  } = null != i ? i : {}, c = (0, o._r)(e, null != r ? 2 * r : true);
  return {
    channelId: n,
    messageId: s,
    emoji: e,
    animationId: (0, l.Z)(),
    url: c,
    key: a,
    color: t
  }
}
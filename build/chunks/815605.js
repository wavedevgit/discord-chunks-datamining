/** Chunk was on web.js **/
/** chunk id: 815605, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vz: () => c,
  Zn: () => p,
  aB: () => f
}), require("./49124.js"), require("./704826.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  Chunk772848 = require("./772848.js"),
  Chunk134432 = require("./134432.js"),
  Chunk963838 = require("./963838.js"),
  Chunk302221 = require("./302221.js"),
  Chunk347904 = require("./347904.js");
let c = 7.5,
  u = 128,
  d = 32,
  f = (0, Chunk392711.memoize)((e, t, n, r) => new Promise(e => {
    let i = new Image;
    i.src = t, i.crossOrigin = "Anonymous", i.onload = () => {
      let t = d * (0, a.x_)(),
        o = JSON.stringify(n);
      if (null != r && (o = (0, l.s4)(o, (0, s.oo)(r))), i.width === t && i.height === t || 0 === i.width && 0 === i.height) e(JSON.parse(o));
      else {
        let t = u / i.width * i.height;
        e(JSON.parse(o = (o = o.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function p(e, t, n, r) {
  let {
    emojiSize: a,
    key: s,
    messageId: l
  } = null != r ? r : {}, c = null != a ? 2 * a : true, u = (0, o._r)(e, c);
  return {
    channelId: n,
    messageId: l,
    emoji: e,
    animationId: (0, i.Z)(),
    url: u,
    key: s,
    color: t
  }
}
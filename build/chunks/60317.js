/** Chunk was on 7034 **/
/** chunk id: 60317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  YY: () => u,
  eT: () => d,
  fz: () => c
}), require("./457529.js"), require("./747238.js"), require("./812715.js");
var Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk776231 = require("./776231.js"),
  Chunk667050 = require("./667050.js"),
  Chunk998304 = require("./998304.js"),
  Chunk297494 = require("./297494.js");
let u = 7.5,
  c = (0, Chunk735438.memoize)((e, t, n, i) => new Promise(e => {
    let l = new Image;
    l.src = t, l.crossOrigin = "Anonymous", l.onload = () => {
      let t = 32 * (0, r.mZ)(),
        o = JSON.stringify(n);
      if (null != i && (o = (0, s.vc)(o, (0, a.E2)(i))), l.width === t && l.height === t || 0 === l.width && 0 === l.height) e(JSON.parse(o));
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
  } = null != i ? i : {}, u = (0, o.Br)(e, null != r ? 2 * r : true);
  return {
    channelId: n,
    messageId: s,
    emoji: e,
    animationId: (0, l.A)(),
    url: u,
    key: a,
    color: t
  }
}
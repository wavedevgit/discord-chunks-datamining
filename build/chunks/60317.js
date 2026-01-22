/** Chunk was on web.js **/
/** chunk id: 60317, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YY: () => c,
  eT: () => p,
  fz: () => f
}), require("./457529.js"), require("./747238.js"), require("./812715.js");
var Chunk735438 = require("./735438.js"),
  Chunk835245 = require("./835245.js"),
  Chunk776231 = require("./776231.js"),
  Chunk667050 = require("./667050.js"),
  Chunk998304 = require("./998304.js"),
  Chunk297494 = require("./297494.js");
let c = 7.5,
  u = 128,
  d = 32,
  f = (0, Chunk735438.memoize)((e, t, n, r) => new Promise(e => {
    let i = new Image;
    i.src = t, i.crossOrigin = "Anonymous", i.onload = () => {
      let t = d * (0, a.mZ)(),
        s = JSON.stringify(n);
      if (null != r && (s = (0, l.vc)(s, (0, o.E2)(r))), i.width === t && i.height === t || 0 === i.width && 0 === i.height) e(JSON.parse(s));
      else {
        let t = u / i.width * i.height;
        e(JSON.parse(s = (s = s.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
      }
    }
  }));

function p(e, t, n, r) {
  let {
    emojiSize: a,
    key: o,
    messageId: l
  } = null != r ? r : {}, c = null != a ? 2 * a : true, u = (0, s.Br)(e, c);
  return {
    channelId: n,
    messageId: l,
    emoji: e,
    animationId: (0, i.A)(),
    url: u,
    key: o,
    color: t
  }
}
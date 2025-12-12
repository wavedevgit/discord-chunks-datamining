/** Chunk was on web.js **/
/** chunk id: 457574, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => l,
  Q: () => c
}), require("./35282.js");
var Chunk481060 = require("./481060.js"),
  Chunk768581 = require("./768581.js"),
  Chunk539266 = require("./539266.js"),
  Chunk598117 = require("./598117.js"),
  Chunk221503 = require("./221503.js");

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  if (!(0, Chunk539266.m)()) {
    var t;
    (0, Chunk481060.Mr3)(Chunk598117.Hj), null == (t = module.onClose) || exports.call(module);
    return
  }(0, Chunk221503.Q)({
    onConfirm: () => {
      var t;
      (0, Chunk481060.Mr3)(Chunk598117.Hj), null == (t = module.onClose) || exports.call(module)
    }
  })
}
async function c(e) {
  let t = i.ZP.getEmojiURL({
      id: e.id,
      animated: e.animated,
      size: a.eT,
      forcePNG: true
    }),
    n = await fetch(t),
    r = await n.blob(),
    o = r.type;
  (null == o || "application/octet-stream" === o) && (o = t.includes(".gif") ? "image/gif" : t.includes(".webp") ? "image/webp" : e.animated ? "image/gif" : "image/png");
  let s = new File([r], "".concat(e.name, ".").concat(o.split("/")[1]), {
    type: o
  });
  return {
    data: await new Promise((e, t) => {
      let n = new FileReader;
      n.onloadend = () => e(n.result), n.onerror = t, n.readAsDataURL(r)
    }),
    file: s,
    image: null
  }
}
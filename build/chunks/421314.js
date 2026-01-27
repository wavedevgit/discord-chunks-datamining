/** Chunk was on web.js **/
/** chunk id: 421314, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  p: () => l
}), require("./747238.js");
var Chunk397927 = require("./397927.js"),
  Chunk486020 = require("./486020.js"),
  Chunk339143 = require("./339143.js"),
  Chunk80569 = require("./80569.js"),
  Chunk608640 = require("./608640.js");

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  if (!(0, a.W)()) {
    var t;
    (0, r.OoC)(o.y), null == (t = e.onClose) || t.call(e);
    return
  }(0, s.J)({
    onConfirm: () => {
      var t;
      (0, r.OoC)(o.y), null == (t = e.onClose) || t.call(e)
    }
  })
}
async function c(e) {
  let t = i.Ay.getEmojiURL({
      id: e.id,
      animated: e.animated,
      size: 128,
      forcePNG: true
    }),
    n = await fetch(t),
    r = await n.blob(),
    a = r.type;
  (null == a || "application/octet-stream" === a) && (a = t.includes(".gif") ? "image/gif" : t.includes(".webp") ? "image/webp" : e.animated ? "image/gif" : "image/png");
  let o = new File([r], "".concat(e.name, ".").concat(a.split("/")[1]), {
    type: a
  });
  return {
    data: await new Promise((e, t) => {
      let n = new FileReader;
      n.onloadend = () => e(n.result), n.onerror = t, n.readAsDataURL(r)
    }),
    file: o,
    image: null
  }
}
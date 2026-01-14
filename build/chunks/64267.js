/** Chunk was on web.js **/
/** chunk id: 64267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk314080 = require("./314080.js"),
  Chunk358085 = require("./358085.js"),
  Chunk825940 = require("./825940.js");
let o = "deep_noise_suppression";

function s(e, t, n) {
  let {
    location: s
  } = n;
  if ((0, i.isIOS)() || (0, i.isMac)()) {
    if ("" !== (t = null != t ? t : "") && "standard" !== t) {
      let {
        disabledModes: e
      } = r.Z.getConfig({
        location: s
      });
      if (e.includes(t)) returnfalse
    }
    return e
  }
  if (!e || null == t || "" === t) return e;
  if ((0, i.isWindows)() && t === o) {
    let {
      preferSystemEffects: e
    } = (0, a.P)({
      location: "setNoiseCancellation"
    });
    if (e) returnfalse
  }
  return e
}
/** Chunk was on web.js **/
/** chunk id: 3527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk448461 = require("./448461.js"),
  Chunk723702 = require("./723702.js"),
  Chunk719439 = require("./719439.js");
let o = "deep_noise_suppression";

function s(e, t, n) {
  let {
    location: s
  } = n;
  if ((0, i.isIOS)() || (0, i.isMac)()) {
    if ("" !== (t = null != t ? t : "") && "standard" !== t) {
      let {
        disabledModes: e
      } = r.X.getConfig({
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
    } = (0, a.b)({
      location: "setNoiseCancellation"
    });
    if (e) returnfalse
  }
  return e
}
/** Chunk was on web.js **/
/** chunk id: 193633, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk822632 = require("./822632.js"),
  Chunk554684 = require("./554684.js"),
  Chunk765859 = require("./765859.js");
let a = 27,
  s = {
    read: l,
    SHOT_INFO_AUTO_ROTATE: 27
  };

function l(e, t, n, a, s) {
  let l = (0, i.N)(e, o.lh, t, t + n, a, s);
  return l.ShotInfo && (l = (0, r.wB)({}, l, c(l.ShotInfo.value)), delete l.ShotInfo), l
}

function c(e) {
  let t = {};
  return true !== e[a] && (t.AutoRotate = {
    value: e[a],
    description: u(e[a])
  }), t
}

function u(e) {
  return 0 === e ? "None" : 1 === e ? "Rotate 90 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 270 CW" : "Unknown"
}
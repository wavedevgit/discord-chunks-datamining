/** Chunk was on web.js **/
/** chunk id: 116811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk643479 = require("./643479.js"),
  Chunk801765 = require("./801765.js"),
  Chunk105423 = require("./105423.js");
let o = 27,
  s = {
    read: l,
    SHOT_INFO_AUTO_ROTATE: 27
  };

function l(e, t, n, o, s) {
  let l = (0, i.y)(e, a.lt, t, t + n, o, s);
  return l.ShotInfo && (l = (0, r.dP)({}, l, c(l.ShotInfo.value)), delete l.ShotInfo), l
}

function c(e) {
  let t = {};
  return true !== e[o] && (t.AutoRotate = {
    value: e[o],
    description: u(e[o])
  }), t
}

function u(e) {
  return 0 === e ? "None" : 1 === e ? "Rotate 90 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 270 CW" : "Unknown"
}
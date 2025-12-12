/** Chunk was on web.js **/
/** chunk id: 686728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk553890 = require("./553890.js"),
  Chunk822632 = require("./822632.js"),
  Chunk554684 = require("./554684.js"),
  Chunk765859 = require("./765859.js");
let s = 8,
  l = 10,
  c = {
    K3_III: 78420
  },
  u = {
    CAMERA_ORIENTATION: 1,
    ROLL_ANGLE: 3,
    PITCH_ANGLE: 5
  },
  d = {
    read: f,
    PENTAX_IFD_OFFSET: 10,
    MODEL_ID: c,
    LIK3III: u
  };

function f(e, t, n, c) {
  let u = r.Z.getByteOrder(e, t + n + s),
    d = t + n,
    f = (0, a.N)(e, o.eG, d, d + l, u, c, true);
  return p(f) && (f = (0, i.wB)({}, f, _(e, d + f.LevelInfo.__offset, u)), delete f.LevelInfo), f
}

function p(e) {
  return e.PentaxModelID && e.PentaxModelID.value === c.K3_III && e.LevelInfo
}

function _(e, t, n) {
  let i = {};
  if (t + 7 > e.byteLength) return i;
  let a = e.getInt8(t + u.CAMERA_ORIENTATION);
  i.CameraOrientation = {
    value: a,
    description: m(a)
  };
  let o = e.getInt16(t + u.ROLL_ANGLE, n === r.Z.LITTLE_ENDIAN);
  i.RollAngle = {
    value: o,
    description: h(o)
  };
  let s = e.getInt16(t + u.PITCH_ANGLE, n === r.Z.LITTLE_ENDIAN);
  return i.PitchAngle = {
    value: s,
    description: g(s)
  }, i
}

function m(e) {
  return 0 === e ? "Horizontal (normal)" : 1 === e ? "Rotate 270 CW" : 2 === e ? "Rotate 180" : 3 === e ? "Rotate 90 CW" : 4 === e ? "Upwards" : 5 === e ? "Downwards" : "Unknown"
}

function h(e) {
  return "" + false * e
}

function g(e) {
  return "" + false * e
}
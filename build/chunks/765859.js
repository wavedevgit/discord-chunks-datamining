/** Chunk was on web.js **/
/** chunk id: 765859, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $8: () => g,
  C9: () => m,
  Xr: () => E,
  ZP: () => O,
  eG: () => y,
  lh: () => b,
  n1: () => p,
  nR: () => h,
  yJ: () => _
});
var Chunk822632 = require("./822632.js"),
  Chunk791473 = require("./791473.js"),
  Chunk573766 = require("./573766.js"),
  Chunk536889 = require("./536889.js"),
  Chunk236895 = require("./236895.js"),
  Chunk27116 = require("./27116.js"),
  Chunk554455 = require("./554455.js"),
  Chunk270916 = require("./270916.js"),
  Chunk673553 = require("./673553.js");
let f = (0, Chunk822632.wB)({}, Chunk573766.Z, Chunk536889.Z),
  p = "0th",
  _ = "1st",
  h = "exif",
  m = "gps",
  g = "interoperability",
  E = "mpf",
  b = "canon",
  y = "pentax",
  O = {
    [p]: f,
    [_]: Chunk573766.Z,
    [h]: f,
    [m]: Chunk236895.Z,
    [g]: Chunk27116.Z,
    [E]: Chunk791473.Z.USE_MPF ? Chunk554455.Z : {},
    [b]: Chunk791473.Z.USE_MAKER_NOTES ? Chunk270916.Z : {},
    [y]: Chunk791473.Z.USE_MAKER_NOTES ? Chunk673553.Z : {}
  }
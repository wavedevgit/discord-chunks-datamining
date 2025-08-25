/** Chunk was on web.js **/
/** chunk id: 692764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $8: () => g,
  C9: () => m,
  Xr: () => E,
  ZP: () => O,
  eG: () => y,
  lh: () => b,
  n1: () => _,
  nR: () => h,
  yJ: () => p
});
var Chunk463424 = require("./463424.js"),
  Chunk441349 = require("./441349.js"),
  Chunk78124 = require("./78124.js"),
  Chunk608725 = require("./608725.js"),
  Chunk755749 = require("./755749.js"),
  Chunk239836 = require("./239836.js"),
  Chunk370800 = require("./370800.js"),
  Chunk634294 = require("./634294.js"),
  Chunk405220 = require("./405220.js");
let f = (0, Chunk463424.wB)({}, Chunk78124.Z, Chunk608725.Z),
  _ = "0th",
  p = "1st",
  h = "exif",
  m = "gps",
  g = "interoperability",
  E = "mpf",
  b = "canon",
  y = "pentax",
  O = {
    [_]: f,
    [p]: Chunk78124.Z,
    [h]: f,
    [m]: Chunk755749.Z,
    [g]: Chunk239836.Z,
    [E]: Chunk441349.Z.USE_MPF ? Chunk370800.Z : {},
    [b]: Chunk441349.Z.USE_MAKER_NOTES ? Chunk634294.Z : {},
    [y]: Chunk441349.Z.USE_MAKER_NOTES ? Chunk405220.Z : {}
  }
/** Chunk was on web.js **/
/** chunk id: 105423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  Ct: () => h,
  MJ: () => g,
  Qb: () => _,
  SI: () => y,
  dA: () => E,
  eU: () => m,
  eY: () => p,
  lt: () => b
});
var Chunk643479 = require("./643479.js"),
  Chunk761799 = require("./761799.js"),
  Chunk52510 = require("./52510.js"),
  Chunk999418 = require("./999418.js"),
  Chunk669670 = require("./669670.js"),
  Chunk915816 = require("./915816.js"),
  Chunk678467 = require("./678467.js"),
  Chunk4213 = require("./4213.js"),
  Chunk393384 = require("./393384.js");
let f = (0, Chunk643479.dP)({}, Chunk52510.A, Chunk999418.A),
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
    [_]: Chunk52510.A,
    [h]: f,
    [m]: Chunk669670.A,
    [g]: Chunk915816.A,
    [E]: Chunk761799.A.USE_MPF ? Chunk678467.A : {},
    [b]: Chunk761799.A.USE_MAKER_NOTES ? Chunk4213.A : {},
    [y]: Chunk761799.A.USE_MAKER_NOTES ? Chunk393384.A : {}
  }
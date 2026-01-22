/** Chunk was on web.js **/
/** chunk id: 772786, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => o,
  x: () => s
});
var Chunk417597 = require("./417597.js"),
  Chunk287809 = require("./287809.js"),
  Chunk951122 = require("./951122.js");
let s = () => l(i.default.getCurrentUser(), (0, a.kG)()),
  o = () => l((0, r.bG)([i.default], () => i.default.getCurrentUser()), (0, a.Jz)());

function l(e, t) {
  return !(null == e || e.hasUniqueUsername()) && !!e.hasVerifiedEmailOrPhone() && !!t
}
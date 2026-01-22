/** Chunk was on web.js **/
/** chunk id: 125584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => o
});
var Chunk683760 = require("./683760.js"),
  Chunk474090 = require("./474090.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");

function o(e) {
  if (null == e) return a.TbF;
  let t = r.A.getPremiumTypeOverride();
  return e.isStaff() && t === s.$I ? a.mu : null != e.premiumType && (0, i.ki)(e) ? s.f5[e.premiumType].fileSize : a.TbF
}
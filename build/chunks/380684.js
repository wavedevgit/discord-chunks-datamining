/** Chunk was on web.js **/
/** chunk id: 380684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => s
});
var Chunk502087 = require("./502087.js"),
  Chunk111361 = require("./111361.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");

function s(e) {
  if (null == e) return o.mBz;
  let t = r.Z.getPremiumTypeOverride();
  return e.isStaff() && t === a.F_ ? o.PRK : null != e.premiumType && (0, i.I5)(e) ? a.a1[e.premiumType].fileSize : o.mBz
}
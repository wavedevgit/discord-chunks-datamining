/** Chunk was on web.js **/
/** chunk id: 901461, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk275726 = require("./275726.js"),
  Chunk623879 = require("./623879.js");

function o(e) {
  return e.type === r.u.PREMIUM_REFERRAL ? i.ZP.getCurrentConfig({
    location: "isSystemMessage"
  }).cohort !== i.FZ.Control : !r.V.USER_MESSAGE.has(e.type)
}
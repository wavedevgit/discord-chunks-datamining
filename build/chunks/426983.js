/** Chunk was on web.js **/
/** chunk id: 426983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => a,
  _: () => i
});
var Chunk176128 = require("./176128.js"),
  i = function(e) {
    return e[e.PARTNERED = 0] = "PARTNERED", e[e.VERIFIED = 1] = "VERIFIED", e[e.VERIFIED_AND_PARTNERED = 2] = "VERIFIED_AND_PARTNERED", e[e.COMMUNITY = 3] = "COMMUNITY", e[e.DISCOVERABLE = 4] = "DISCOVERABLE", e[e.STAFF = 5] = "STAFF", e[e.NONE = 6] = "NONE", e
  }({});

function a(e) {
  return e.staff ? 5 : e.verified && e.partnered ? 2 : e.verified ? 1 : e.partnered ? 0 : e.community && e.visibility === r.qo.PUBLIC ? 4 : e.community ? 3 : 6
}
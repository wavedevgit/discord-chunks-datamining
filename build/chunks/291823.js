/** Chunk was on web.js **/
/** chunk id: 291823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => o
});
var Chunk686956 = require("./686956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248194 = require("./248194.js");

function o() {
  let e = a.default.getCurrentUser();
  (null == e ? true : e.isStaff()) && null != i.A.getGuild(s.U) && r.A.requestMembers(s.U, "", 0, false)
}
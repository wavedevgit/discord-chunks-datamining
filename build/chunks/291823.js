/** Chunk was on web.js **/
/** chunk id: 291823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => s
});
var Chunk686956 = require("./686956.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk248194 = require("./248194.js");

function s() {
  let e = a.default.getCurrentUser();
  (null == e ? true : e.isStaff()) && null != i.A.getGuild(o.U) && r.A.requestMembers(o.U, "", 0, false)
}
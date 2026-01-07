/** Chunk was on web.js **/
/** chunk id: 475941, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => s
});
var Chunk749210 = require("./749210.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk165139 = require("./165139.js");

function s() {
  let e = a.default.getCurrentUser();
  (null == e ? true : e.isStaff()) && null != i.Z.getGuild(o.D) && r.Z.requestMembers(o.D, "", 0, false)
}
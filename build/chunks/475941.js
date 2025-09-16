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
  let e = Chunk594174.default.getCurrentUser();
  (null == module ? true : module.isStaff()) && null != Chunk430824.Z.getGuild(Chunk165139.D) && Chunk749210.Z.requestMembers(Chunk165139.D, "", 0, false)
}
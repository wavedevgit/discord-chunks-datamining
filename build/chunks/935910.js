/** Chunk was on web.js **/
/** chunk id: 935910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk245315 = require("./245315.js"),
  Chunk368859 = require("./368859.js");

function a(e) {
  var t;
  return !((0, r.cp)(e) || (0, i.Z)(e) && (null == (t = e.messageReference) ? true : t.guild_id) != null) && (null == e.interaction || "SENDING" !== e.state)
}
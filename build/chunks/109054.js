/** Chunk was on web.js **/
/** chunk id: 109054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk455207 = require("./455207.js"),
  Chunk943667 = require("./943667.js");

function a(e) {
  var t;
  return !((0, r.MZ)(e) || (0, i.A)(e) && (null == (t = e.messageReference) ? true : t.guild_id) != null) && (null == e.interaction || "SENDING" !== e.state)
}
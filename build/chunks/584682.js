/** Chunk was on web.js **/
/** chunk id: 584682, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o,
  j: () => l
});
var Chunk311907 = require("./311907.js"),
  Chunk967198 = require("./967198.js"),
  Chunk181079 = require("./181079.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  let t = (0, r.bG)([i.A], () => i.A.getGuildId());
  return null != t ? t : e.getGuildId()
}

function l(e) {
  return i.A.getGuildId() !== s.YYv ? e.getGuildId() : a.A.isFavorite(e.id) || e.isThread() && a.A.isFavorite(e.parent_id) ? s.YYv : e.getGuildId()
}
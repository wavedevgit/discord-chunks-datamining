/** Chunk was on web.js **/
/** chunk id: 727429, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  e: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk914010 = require("./914010.js"),
  Chunk853856 = require("./853856.js"),
  Chunk981631 = require("./981631.js");

function s(e) {
  let t = (0, r.e7)([i.Z], () => i.Z.getGuildId());
  return null != t ? t : e.getGuildId()
}

function l(e) {
  return i.Z.getGuildId() !== o.I_8 ? e.getGuildId() : a.Z.isFavorite(e.id) || e.isThread() && a.Z.isFavorite(e.parent_id) ? o.I_8 : e.getGuildId()
}
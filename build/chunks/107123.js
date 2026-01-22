/** Chunk was on web.js **/
/** chunk id: 107123, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s,
  v: () => o
});
var Chunk95701 = require("./95701.js"),
  Chunk860689 = require("./860689.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    year: "numeric",
    month: "short"
  })
}

function o(e) {
  if (null == e.guild || (0, i.DY)(e.guild).features.has(a.GuildFeatures.HUB)) returnfalse;
  let t = (null == e ? true : e.channel) != null ? (0, r.OY)(e.channel) : null;
  return null == t || !t.isGuildVoiceOrThread()
}
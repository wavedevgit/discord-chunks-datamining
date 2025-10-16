/** Chunk was on web.js **/
/** chunk id: 997431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => o,
  l: () => s
});
var Chunk131704 = require("./131704.js"),
  Chunk411198 = require("./411198.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  if (null == e || "" === e) return null;
  let n = new Date(e);
  return !(n instanceof Date) || isNaN(n.getTime()) ? null : n.toLocaleDateString(t, {
    year: "numeric",
    month: "short"
  })
}

function s(e) {
  if (null == e.guild || (0, i.Qs)(e.guild).features.has(a.GuildFeatures.HUB)) returnfalse;
  let t = (null == e ? true : e.channel) != null ? (0, r.jD)(e.channel) : null;
  return null == t || !t.isGuildVocal()
}
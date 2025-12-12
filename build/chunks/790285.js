/** Chunk was on web.js **/
/** chunk id: 790285, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  TG: () => l,
  wB: () => s,
  yt: () => o
});
var Chunk149765 = require("./149765.js"),
  Chunk345162 = require("./345162.js"),
  Chunk981631 = require("./981631.js");

function o(e) {
  return (0, i.Fs)(e, a.Plq.VIEW_CHANNEL)
}

function s(e, t) {
  return null != t && (!!r.e$(t.deny, a.Plq.VIEW_CHANNEL) || e.isGuildVocal() && r.e$(t.deny, a.Plq.CONNECT))
}

function l(e, t) {
  return !(null == t || s(e, t)) && !!r.e$(t.allow, a.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || r.e$(t.allow, a.Plq.CONNECT))
}
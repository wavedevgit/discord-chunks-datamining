/** Chunk was on web.js **/
/** chunk id: 855918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AN: () => s,
  Uj: () => l,
  iR: () => o
});
var Chunk136722 = require("./136722.js"),
  Chunk34457 = require("./34457.js"),
  Chunk652215 = require("./652215.js");

function o(e) {
  return (0, i._m)(e, a.xBc.VIEW_CHANNEL)
}

function s(e, t) {
  return null != t && (!!r.zy(t.deny, a.xBc.VIEW_CHANNEL) || e.isGuildVocal() && r.zy(t.deny, a.xBc.CONNECT))
}

function l(e, t) {
  return !(null == t || s(e, t)) && !!r.zy(t.allow, a.xBc.VIEW_CHANNEL) && (!e.isGuildVocal() || r.zy(t.allow, a.xBc.CONNECT))
}
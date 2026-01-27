/** Chunk was on web.js **/
/** chunk id: 811024, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AX: () => c,
  Gp: () => d,
  pE: () => u,
  t8: () => p
});
var Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk818348 = require("./818348.js");

function l(e) {
  return [r.r.GUILD_TEXT, r.r.GUILD_VOICE, r.r.GROUP_DM, r.r.DM].includes(e)
}

function c(e) {
  if (null == e) returnfalse;
  let t = a.A.getChannel(e.parent_id);
  return (null == t || (null == t ? true : t.type) === r.r.GUILD_CATEGORY) && l(e.type)
}

function u(e) {
  return f(e, o.A)
}

function d(e) {
  return (0, i.bG)([a.A, o.A], () => f(a.A.getChannel(e), o.A))
}

function f(e, t) {
  return null != e && true !== e && !!c(e) && (null == e.guild_id || !!t.can(s.xB.USE_EMBEDDED_ACTIVITIES, e)) && true
}

function p() {
  returnfalse
}
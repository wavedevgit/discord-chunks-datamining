/** Chunk was on web.js **/
/** chunk id: 595519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NX: () => d,
  WS: () => u,
  l5: () => c,
  qB: () => p
});
var Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk231338 = require("./231338.js");

function l(e) {
  return [r.d.GUILD_TEXT, r.d.GUILD_VOICE, r.d.GROUP_DM, r.d.DM].includes(e)
}

function c(e) {
  if (null == e) returnfalse;
  let t = a.Z.getChannel(e.parent_id);
  return (null == t || (null == t ? true : t.type) === r.d.GUILD_CATEGORY) && l(e.type)
}

function u(e) {
  return f(e, o.Z)
}

function d(e) {
  return (0, i.e7)([a.Z, o.Z], () => f(a.Z.getChannel(e), o.Z))
}

function f(e, t) {
  return null != e && true !== e && !!c(e) && (null == e.guild_id || !!t.can(s.Pl.USE_EMBEDDED_ACTIVITIES, e)) && true
}

function p() {
  returnfalse
}
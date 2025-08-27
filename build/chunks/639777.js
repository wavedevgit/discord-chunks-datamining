/** Chunk was on web.js **/
/** chunk id: 639777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => s,
  Z: () => l
});
var Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk231338 = require("./231338.js");

function s(e, t) {
  return null == t || null == e.getGuildPermissions(t) ? null : e.can(o.Pl.ADMINISTRATOR, t)
}

function l(e) {
  return (0, r.e7)([a.Z, i.Z], () => s(a.Z, i.Z.getGuild(e)))
}
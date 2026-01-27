/** Chunk was on web.js **/
/** chunk id: 363487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  G: () => s
});
var Chunk311907 = require("./311907.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk818348 = require("./818348.js");

function s(e, t) {
  return null == t || null == e.getGuildPermissions(t) ? null : e.can(o.xB.ADMINISTRATOR, t)
}

function l(e) {
  return (0, r.bG)([a.A, i.A], () => s(a.A, i.A.getGuild(e)))
}
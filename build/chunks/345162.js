/** Chunk was on web.js **/
/** chunk id: 345162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fs: () => o,
  X4: () => i,
  _N: () => s,
  fI: () => a
});
var Chunk149765 = require("./149765.js");
let i = "GuildRole";

function a(e) {
  return e.id === e.guildId
}

function o(e, t) {
  return (0, r.e$)(e.permissions, t)
}

function s(e, t) {
  return (0, r.Db)(e.permissions, t)
}
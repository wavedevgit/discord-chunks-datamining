/** Chunk was on web.js **/
/** chunk id: 345162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fs: () => a,
  X4: () => i,
  _N: () => s,
  fI: () => o
});
var Chunk149765 = require("./149765.js");
let i = "GuildRole";

function o(e) {
  return e.id === e.guildId
}

function a(e, t) {
  return (0, r.e$)(e.permissions, t)
}

function s(e, t) {
  return (0, r.Db)(e.permissions, t)
}
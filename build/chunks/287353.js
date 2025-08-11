/** Chunk was on web.js **/
/** chunk id: 287353, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, Chunk127849 = require("./127849.js"),
  Chunk476078 = require("./476078.js"),
  s = Chunk127849.process,
  l = Chunk127849.Deno,
  c = s && s.versions || l && l.version,
  u = c && c.v8;
u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && Chunk476078 && (!(r = Chunk476078.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = Chunk476078.match(/Chrome\/(\d+)/)) && (i = +r[1]), module.exports = i
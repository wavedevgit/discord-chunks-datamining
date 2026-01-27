/** Chunk was on web.js **/
/** chunk id: 123166, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, Chunk860511 = require("./860511.js"),
  Chunk65978 = require("./65978.js"),
  s = Chunk860511.process,
  l = Chunk860511.Deno,
  c = s && s.versions || l && l.version,
  u = c && c.v8;
u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && Chunk65978 && (!(r = Chunk65978.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = Chunk65978.match(/Chrome\/(\d+)/)) && (i = +r[1]), module.exports = i
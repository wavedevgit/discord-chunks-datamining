/** Chunk was on 50448 **/
/** chunk id: 306983, original params: t,r,n (module,exports,require) **/
"use strict";
var e, o, Chunk424353 = require("./424353.js"),
  Chunk673574 = require("./673574.js"),
  s = Chunk424353.process,
  c = Chunk424353.Deno,
  f = s && s.versions || c && c.version,
  a = f && f.v8;
a && (o = (e = a.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !o && Chunk673574 && (!(e = Chunk673574.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = Chunk673574.match(/Chrome\/(\d+)/)) && (o = +e[1]), module.exports = o
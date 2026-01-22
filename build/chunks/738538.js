/** Chunk was on 94678 **/
/** chunk id: 738538, original params: t,r,e (module,exports,require) **/
"use strict";
var n, o, Chunk308227 = require("./308227.js"),
  Chunk791553 = require("./791553.js"),
  u = Chunk308227.process,
  c = Chunk308227.Deno,
  a = u && u.versions || c && c.version,
  f = a && a.v8;
f && (o = (n = f.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && Chunk791553 && (!(n = Chunk791553.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = Chunk791553.match(/Chrome\/(\d+)/)) && (o = +n[1]), module.exports = o
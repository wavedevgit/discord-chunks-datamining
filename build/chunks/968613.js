/** Chunk was on 94678 **/
/** chunk id: 968613, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk414123 = require("./414123.js"),
  Chunk512008 = require("./512008.js"),
  s = Function.prototype,
  i = Chunk414123 && Object.getOwnPropertyDescriptor,
  u = Chunk512008(s, "name"),
  c = u && (!Chunk414123 || Chunk414123 && i(s, "name").configurable);
module.exports = {
  EXISTS: u,
  PROPER: u && "something" === (function() {}).name,
  CONFIGURABLE: c
}
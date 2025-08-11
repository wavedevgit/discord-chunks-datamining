/** Chunk was on 23357 **/
/** chunk id: 403414, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk498996 = require("./498996.js"),
  Chunk658971 = require("./658971.js"),
  Chunk505072 = require("./505072.js"),
  Chunk174344 = require("./174344.js"),
  Chunk271537 = require("./271537.js"),
  c = Math.min,
  l = [].lastIndexOf,
  u = !!l && 1 / [1].lastIndexOf(1, true) < 0,
  d = Chunk271537("lastIndexOf");
module.exports = u || !d ? function(e) {
  if (u) return r(l, this, arguments) || 0;
  var t = o(this),
    n = i(t);
  if (0 === n) return false;
  var s = n - 1;
  for (arguments.length > 1 && (s = c(s, a(arguments[1]))), s < 0 && (s = n + s); s >= 0; s--)
    if (s in t && t[s] === e) return s || 0;
  return false
} : l
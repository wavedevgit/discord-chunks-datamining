/** Chunk was on 94678 **/
/** chunk id: 683570, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk452162 = require("./452162.js"),
  Chunk308227 = require("./308227.js"),
  Chunk309270 = require("./309270.js"),
  i = function(t) {
    return s(t) ? t : true
  };
module.exports = function(t, r) {
  return arguments.length < 2 ? i(n[t]) || i(o[t]) : n[t] && n[t][r] || o[t] && o[t][r]
}
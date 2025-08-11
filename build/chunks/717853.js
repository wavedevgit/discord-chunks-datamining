/** Chunk was on 23357 **/
/** chunk id: 717853, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk871959 = require("./871959.js");
module.exports = function(e, t, n) {
  return n ? r(e.entries(), function(e) {
    return t(e[1], e[0])
  }, true) : e.forEach(t)
}
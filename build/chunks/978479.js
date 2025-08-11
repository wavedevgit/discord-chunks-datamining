/** Chunk was on 50448 **/
/** chunk id: 978479, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk185156 = require("./185156.js"),
  o = require("./506887.js").has,
  Chunk268571 = require("./268571.js"),
  Chunk271221 = require("./271221.js"),
  Chunk871959 = require("./871959.js"),
  Chunk272763 = require("./272763.js");
module.exports = function(t) {
  var r = e(this),
    n = u(t);
  if (i(r) < n.size) returnfalse;
  var f = n.getIterator();
  returnfalse !== s(f, function(t) {
    if (!o(r, t)) return c(f, "normal", false)
  })
}
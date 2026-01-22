/** Chunk was on 94678 **/
/** chunk id: 146160, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk610475 = require("./610475.js"),
  o = require("./208909.js").has,
  Chunk433979 = require("./433979.js"),
  Chunk500968 = require("./500968.js"),
  Chunk587822 = require("./587822.js"),
  Chunk349674 = require("./349674.js"),
  Chunk858534 = require("./858534.js");
module.exports = function(t) {
  var r = n(this),
    e = i(t);
  if (s(r) <= e.size) returnfalse !== u(r, function(t) {
    if (e.includes(t)) returnfalse
  }, true);
  var f = e.getIterator();
  returnfalse !== c(f, function(t) {
    if (o(r, t)) return a(f, "normal", false)
  })
}
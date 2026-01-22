/** Chunk was on 94678 **/
/** chunk id: 740628, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk356467 = require("./356467.js"),
  Chunk407057 = require("./407057.js"),
  Chunk693755 = require("./693755.js"),
  Chunk613655 = require("./613655.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t, r = false,
    e = {};
  try {
    (t = n(Object.prototype, "__proto__", "set"))(e, []), r = e instanceof Array
  } catch (t) {}
  return function(e, n) {
    return s(e), i(n), o(e) && (r ? t(e, n) : e.__proto__ = n), e
  }
}() : true)
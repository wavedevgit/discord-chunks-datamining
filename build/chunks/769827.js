/** Chunk was on web.js **/
/** chunk id: 769827, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860788 = require("./860788.js"),
  Chunk434431 = require("./434431.js"),
  Chunk497464 = require("./497464.js"),
  Chunk727025 = require("./727025.js");
module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e, t = false,
    n = {};
  try {
    (e = Chunk860788(Object.prototype, "__proto__", "set"))(require, []), t = require instanceof Array
  } catch (e) {}
  return function(n, r) {
    return o(n), a(r), i(n) && (t ? e(n, r) : n.__proto__ = r), n
  }
}() : true)
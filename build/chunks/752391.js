/** Chunk was on web.js **/
/** chunk id: 752391, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk739305 = require("./739305.js"),
  Chunk380296 = require("./380296.js"),
  Chunk900923 = require("./900923.js"),
  Chunk324988 = require("./324988.js"),
  Chunk446474 = require("./446474.js"),
  Chunk410323 = require("./410323.js"),
  Chunk503628 = require("./503628.js"),
  u = Chunk739305.aTypedArray,
  d = Chunk739305.exportTypedArrayMethod,
  f = Chunk410323("".slice);
d("fill", function(e) {
  var t = arguments.length;
  return u(this), o(i, this, "Big" === f(s(this), 0, 3) ? a(e) : +e, t > 1 ? arguments[1] : true, t > 2 ? arguments[2] : true)
}, Chunk503628(function() {
  var e = 0;
  return new Int8Array(2).fill({
    valueOf: function() {
      return e++
    }
  }), 1 !== e
}))
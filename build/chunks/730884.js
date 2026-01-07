/** Chunk was on web.js **/
/** chunk id: 730884, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk840475 = require("./840475.js"),
  Chunk760751 = require("./760751.js"),
  Chunk190475 = require("./190475.js"),
  Chunk214027 = require("./214027.js"),
  Chunk580983 = require("./580983.js"),
  Chunk46015 = require("./46015.js"),
  Chunk621523 = require("./621523.js"),
  u = Chunk840475.aTypedArray,
  d = Chunk840475.exportTypedArrayMethod,
  f = Chunk46015("".slice);
d("fill", function(e) {
  var t = arguments.length;
  return u(this), s(i, this, "Big" === f(o(this), 0, 3) ? a(e) : +e, t > 1 ? arguments[1] : true, t > 2 ? arguments[2] : true)
}, Chunk621523(function() {
  var e = 0;
  return new Int8Array(2).fill({
    valueOf: function() {
      return e++
    }
  }), 1 !== e
}))
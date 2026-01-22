/** Chunk was on 47950 **/
/** chunk id: 835976, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk306091 = require("./306091.js"),
  Chunk389647 = require("./389647.js"),
  Chunk682238 = require("./682238.js"),
  Chunk355242 = require("./355242.js"),
  Chunk591634 = require("./591634.js");

function s(e) {
  var t = false,
    r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
s.prototype.clear = Chunk306091.A, s.prototype.delete = Chunk389647.A, s.prototype.get = Chunk682238.A, s.prototype.has = Chunk355242.A, s.prototype.set = Chunk591634.A;
let u = s
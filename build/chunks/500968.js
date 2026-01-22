/** Chunk was on 94678 **/
/** chunk id: 500968, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk999843 = require("./999843.js"),
  Chunk155084 = require("./155084.js"),
  Chunk664886 = require("./664886.js"),
  Chunk918078 = require("./918078.js"),
  Chunk287752 = require("./287752.js"),
  c = "Invalid size",
  a = RangeError,
  f = TypeError,
  p = Math.max,
  l = function(t, r) {
    this.set = t, this.size = p(r, 0), this.has = n(t.has), this.keys = n(t.keys)
  };
l.prototype = {
  getIterator: function() {
    return u(o(s(this.keys, this.set)))
  },
  includes: function(t) {
    return s(this.has, this.set, t)
  }
}, module.exports = function(t) {
  o(t);
  var r = +t.size;
  if (r != r) throw new f(c);
  var e = i(r);
  if (e < 0) throw new a(c);
  return new l(t, e)
}
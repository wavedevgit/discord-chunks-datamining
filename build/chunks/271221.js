/** Chunk was on 50448 **/
/** chunk id: 271221, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk691593 = require("./691593.js"),
  Chunk921413 = require("./921413.js"),
  Chunk517522 = require("./517522.js"),
  Chunk505072 = require("./505072.js"),
  Chunk899781 = require("./899781.js"),
  c = "Invalid size",
  f = RangeError,
  a = TypeError,
  p = Math.max,
  l = function(t, r) {
    this.set = t, this.size = p(r, 0), this.has = e(t.has), this.keys = e(t.keys)
  };
l.prototype = {
  getIterator: function() {
    return s(o(i(this.keys, this.set)))
  },
  includes: function(t) {
    return i(this.has, this.set, t)
  }
}, module.exports = function(t) {
  o(t);
  var r = +t.size;
  if (r != r) throw new a(c);
  var n = u(r);
  if (n < 0) throw new f(c);
  return new l(t, n)
}
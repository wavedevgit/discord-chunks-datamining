/** Chunk was on web.js **/
/** chunk id: 350445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./747238.js");
var Chunk446474 = require("./446474.js"),
  Chunk693655 = require("./693655.js"),
  Chunk221748 = require("./221748.js"),
  Chunk503628 = require("./503628.js"),
  Chunk380744 = require("./380744.js"),
  Chunk706938 = require("./706938.js"),
  c = Chunk380744("species"),
  u = RegExp.prototype;
module.exports = function(e, t, n, d) {
  var f = s(e),
    p = !o(function() {
      var t = {};
      return t[f] = function() {
        return 7
      }, 7 !== "" [e](t)
    }),
    _ = p && !o(function() {
      var t = false,
        n = /a/;
      return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
        return n
      }, n.flags = "", n[f] = /./ [f]), n.exec = function() {
        return t = true, null
      }, n[f](""), !t
    });
  if (!p || !_ || n) {
    var h = /./ [f],
      m = t(f, "" [e], function(e, t, n, i, o) {
        var s = t.exec;
        return s === a || s === u.exec ? p && !o ? {
          done: true,
          value: r(h, t, n, i)
        } : {
          done: true,
          value: r(e, n, t, i)
        } : {
          done: false
        }
      });
    i(String.prototype, e, m[0]), i(u, f, m[1])
  }
  d && l(u[f], "sham", true)
}
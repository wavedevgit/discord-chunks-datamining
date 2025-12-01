/** Chunk was on web.js **/
/** chunk id: 518187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./35282.js");
var Chunk580983 = require("./580983.js"),
  Chunk556585 = require("./556585.js"),
  Chunk16721 = require("./16721.js"),
  Chunk621523 = require("./621523.js"),
  Chunk751736 = require("./751736.js"),
  Chunk436207 = require("./436207.js"),
  c = Chunk751736("species"),
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
    var m = /./ [f],
      h = t(f, "" [e], function(e, t, n, i, o) {
        var s = t.exec;
        return s === a || s === u.exec ? p && !o ? {
          done: true,
          value: r(m, t, n, i)
        } : {
          done: true,
          value: r(e, n, t, i)
        } : {
          done: false
        }
      });
    i(String.prototype, e, h[0]), i(u, f, h[1])
  }
  d && l(u[f], "sham", true)
}
/** Chunk was on web.js **/
/** chunk id: 323240, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk48511 = require("./48511.js"),
  Chunk815329 = require("./815329.js"),
  a = function(e, t, n) {
    for (var r, i = e; null != (r = i.next); i = r)
      if (r.key === t) return i.next = r.next, n || (r.next = e.next, e.next = r), r
  },
  o = function(e, t) {
    if (e) {
      var n = a(e, t);
      return n && n.value
    }
  },
  s = function(e, t, n) {
    var r = a(e, t);
    r ? r.value = n : e.next = {
      key: t,
      next: e.next,
      value: n
    }
  },
  l = function(e, t) {
    return !!e && !!a(e, t)
  },
  c = function(e, t) {
    if (e) return a(e, t, true)
  };
module.exports = function() {
  var e, t = {
    assert: function(e) {
      if (!t.has(e)) throw new i("Side channel does not contain " + r(e))
    },
    delete: function(t) {
      var n = e && e.next,
        r = c(e, t);
      return r && n && n === r && (e = true), !!r
    },
    get: function(t) {
      return o(e, t)
    },
    has: function(t) {
      return l(e, t)
    },
    set: function(t, n) {
      e || (e = {
        next: true
      }), s(e, t, n)
    }
  };
  return exports
}
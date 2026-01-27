/** Chunk was on web.js **/
/** chunk id: 963980, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r;
if (!Object.keys) {
  var i = Object.prototype.hasOwnProperty,
    a = Object.prototype.toString,
    Chunk560332 = require("./560332.js"),
    s = Object.prototype.propertyIsEnumerable,
    l = !s.call({
      toString: null
    }, "toString"),
    c = s.call(function() {}, "prototype"),
    u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
    d = function(e) {
      var t = e.constructor;
      return t && t.prototype === e
    },
    f = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    },
    p = function() {
      if ("u" < typeof window) returnfalse;
      for (var e in window) try {
        if (!f["$" + e] && i.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
          d(window[e])
        } catch (e) {
          returntrue
        }
      } catch (e) {
        returntrue
      }
      returnfalse
    }(),
    _ = function(e) {
      if ("u" < typeof window || !p) return d(e);
      try {
        return d(e)
      } catch (e) {
        returnfalse
      }
    };
  r = function(e) {
    var t = null !== e && "object" == typeof e,
      n = "[object Function]" === a.call(e),
      r = o(e),
      s = t && "[object String]" === a.call(e),
      d = [];
    if (!t && !n && !r) throw TypeError("Object.keys called on a non-object");
    var f = c && n;
    if (s && e.length > 0 && !i.call(e, 0))
      for (var p = 0; p < e.length; ++p) d.push(String(p));
    if (r && e.length > 0)
      for (var h = 0; h < e.length; ++h) d.push(String(h));
    else
      for (var m in e) !(f && "prototype" === m) && i.call(e, m) && d.push(String(m));
    if (l)
      for (var g = _(e), E = 0; E < u.length; ++E) !(g && "constructor" === u[E]) && i.call(e, u[E]) && d.push(u[E]);
    return d
  }
}
module.exports = r
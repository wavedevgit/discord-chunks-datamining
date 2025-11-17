/** Chunk was on web.js **/
/** chunk id: 888267, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk642197 = require("./642197.js");

function a(e, t) {
  return u(e) || c(e, t) || s(e, t) || o()
}

function o() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function s(e, t) {
  if (e) {
    if ("string" == typeof e) return l(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
  }
}

function l(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function c(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = true,
      i = false,
      a = true;
    try {
      for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = true);
    } catch (e) {
      i = true, a = e
    } finally {
      try {
        r || null == s.return || s.return()
      } finally {
        if (i) throw a
      }
    }
    return n
  }
}

function u(e) {
  if (Array.isArray(e)) return e
}
var d = function() {
  var e = a((0, Chunk473749.useState)(false), 2),
    t = module[0],
    n = module[1],
    o = (0, Chunk473749.useContext)(Chunk642197.L);
  return (0, Chunk473749.useEffect)(function() {
    var e, t = null == o || null == (e = o.dragDropManager) ? true : module.getBackend(),
      r = {
        backendChanged: function(e) {
          n(e.previewEnabled())
        }
      };
    return require(exports.previewEnabled()), exports.previewsList().register(Chunk473749),
      function() {
        exports.previewsList().unregister(Chunk473749)
      }
  }, [o, o.dragDropManager]), exports
}
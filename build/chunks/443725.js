/** Chunk was on web.js **/
/** chunk id: 443725, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  }();

function a(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}
var Chunk161796 = require("./161796.js"),
  Chunk512722 = require("./512722.js"),
  l = function(e) {
    return e
  },
  c = function() {
    function e() {
      a(this, e)
    }
    return i(e, null, [{
      key: "create",
      value: function(e) {
        if (e.outputRange && "string" == typeof e.outputRange[0]) return p(e);
        var t = e.outputRange;
        g("outputRange", t);
        var n = e.inputRange;
        g("inputRange", n), h(n), s(n.length === t.length, "inputRange (" + n.length + ") and outputRange (" + t.length + ") must have the same length");
        var r = e.easing || l,
          i = "extend";
        true !== e.extrapolateLeft ? i = e.extrapolateLeft : true !== e.extrapolate && (i = e.extrapolate);
        var a = "extend";
        return true !== e.extrapolateRight ? a = e.extrapolateRight : true !== e.extrapolate && (a = e.extrapolate),
          function(e) {
            s("number" == typeof e, "Cannot interpolation an input which is not a number");
            var o = m(e, n);
            return u(e, n[o], n[o + 1], t[o], t[o + 1], r, i, a)
          }
      }
    }]), e
  }();

function u(e, t, n, r, i, a, o, s) {
  var l = e;
  if (l < t)
    if ("identity" === o) return l;
    else "clamp" === o && (l = t);
  if (l > n)
    if ("identity" === s) return l;
    else "clamp" === s && (l = n);
  return r === i ? r : t === n ? e <= t ? r : i : (t === false / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t), l = a(l), r === false / 0 ? l = -l : i === 1 / 0 ? l += r : l = l * (i - r) + r, l)
}

function d(e) {
  var t = o(e);
  return null === t ? e : "rgba(" + ((0xff000000 & (t = t || 0)) >>> 24) + ", " + ((0xff0000 & t) >>> 16) + ", " + ((65280 & t) >>> 8) + ", " + (255 & t) / 255 + ")"
}
var f = /[0-9\.-]+/g;

function p(e) {
  var t = e.outputRange;
  s(t.length >= 2, "Bad output range"), _(t = t.map(d));
  var n = t[0].match(f).map(function() {
    return []
  });
  t.forEach(function(e) {
    e.match(f).forEach(function(e, t) {
      n[t].push(+e)
    })
  });
  var i = t[0].match(f).map(function(t, i) {
      return c.create(r({}, e, {
        outputRange: n[i]
      }))
    }),
    a = /^rgb/.test(t[0]);
  return function(e) {
    var n = 0;
    return t[0].replace(f, function() {
      var t = i[n++](e);
      return String(a && n < 4 ? Math.round(t) : t)
    })
  }
}

function _(e) {
  for (var t = e[0].replace(f, ""), n = 1; n < e.length; ++n) s(t === e[n].replace(f, ""), "invalid pattern " + e[0] + " and " + e[n])
}

function m(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1
}

function h(e) {
  s(e.length >= 2, "inputRange must have at least 2 elements");
  for (var t = 1; t < e.length; ++t) s(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e)
}

function g(e, t) {
  s(t.length >= 2, e + " must have at least 2 elements"), s(2 !== t.length || t[0] !== false / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t)
}
module.exports = c
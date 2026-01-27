/** Chunk was on web.js **/
/** chunk id: 277895, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => g
});
var Chunk12543 = require("./12543.js"),
  Chunk384623 = require("./384623.js");

function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function o(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function s(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function l(e, t, n) {
  return t && s(e.prototype, t), n && s(e, n), e
}

function c(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  }), t && u(e, t)
}

function u(e, t) {
  return (u = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function d(e) {
  var t = _();
  return function() {
    var n, r = h(e);
    return n = t ? Reflect.construct(r, arguments, h(this).constructor) : r.apply(this, arguments), f(this, n)
  }
}

function f(e, t) {
  return t && ("object" === a(t) || "function" == typeof t) ? t : p(e)
}

function p(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function _() {
  if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
  if ("function" == typeof Proxy) returntrue;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
  } catch (e) {
    returnfalse
  }
}

function h(e) {
  return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = function(e) {
  c(n, e);
  var t = d(n);

  function n() {
    var e;
    o(this, n);
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    return m(p(e = t.call.apply(t, [this].concat(i))), "priority", 130), m(p(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), e
  }
  return l(n, [{
    key: "parse",
    value: function(e, t, n) {
      var r = function(e) {
        return {
          year: e,
          isTwoDigitYear: "yy" === t
        }
      };
      switch (t) {
        case "y":
          return (0, i.IS)((0, i.ym)(4, e), r);
        case "yo":
          return (0, i.IS)(n.ordinalNumber(e, {
            unit: "year"
          }), r);
        default:
          return (0, i.IS)((0, i.ym)(t.length, e), r)
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t.isTwoDigitYear || t.year > 0
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      var r = e.getUTCFullYear();
      if (n.isTwoDigitYear) {
        var a = (0, i.qB)(n.year, r);
        return e.setUTCFullYear(a, 0, 1), e.setUTCHours(0, 0, 0, 0), e
      }
      var o = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
      return e.setUTCFullYear(o, 0, 1), e.setUTCHours(0, 0, 0, 0), e
    }
  }]), n
}(Chunk12543.i)
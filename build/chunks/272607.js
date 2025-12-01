/** Chunk was on web.js **/
/** chunk id: 272607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => b
});
var Chunk717029 = require("./717029.js"),
  Chunk846042 = require("./846042.js"),
  Chunk193603 = require("./193603.js"),
  Chunk780603 = require("./780603.js");

function s(e) {
  return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function l(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function c(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function u(e, t, n) {
  return t && c(e.prototype, t), n && c(e, n), e
}

function d(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  }), t && f(e, t)
}

function f(e, t) {
  return (f = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function p(e) {
  var t = h();
  return function() {
    var n, r = g(e);
    return n = t ? Reflect.construct(r, arguments, g(this).constructor) : r.apply(this, arguments), _(this, n)
  }
}

function _(e, t) {
  return t && ("object" === s(t) || "function" == typeof t) ? t : m(e)
}

function m(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function h() {
  if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
  if ("function" == typeof Proxy) returntrue;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
  } catch (e) {
    returnfalse
  }
}

function g(e) {
  return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var b = function(e) {
  d(n, e);
  var t = p(n);

  function n() {
    var e;
    l(this, n);
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    return E(m(e = t.call.apply(t, [this].concat(i))), "priority", 130), E(m(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), e
  }
  return u(n, [{
    key: "parse",
    value: function(e, t, n) {
      var r = function(e) {
        return {
          year: e,
          isTwoDigitYear: "YY" === t
        }
      };
      switch (t) {
        case "Y":
          return (0, i.jg)((0, i.ZL)(4, e), r);
        case "Yo":
          return (0, i.jg)(n.ordinalNumber(e, {
            unit: "year"
          }), r);
        default:
          return (0, i.jg)((0, i.ZL)(t.length, e), r)
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t.isTwoDigitYear || t.year > 0
    }
  }, {
    key: "set",
    value: function(e, t, n, r) {
      var s = (0, a.Z)(e, r);
      if (n.isTwoDigitYear) {
        var l = (0, i.WG)(n.year, s);
        return e.setUTCFullYear(l, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, o.Z)(e, r)
      }
      var c = "era" in t && 1 !== t.era ? 1 - n.year : n.year;
      return e.setUTCFullYear(c, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, o.Z)(e, r)
    }
  }]), n
}(Chunk717029._)
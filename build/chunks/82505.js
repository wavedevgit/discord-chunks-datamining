/** Chunk was on web.js **/
/** chunk id: 82505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => E
});
var Chunk12543 = require("./12543.js"),
  Chunk438767 = require("./438767.js"),
  Chunk384623 = require("./384623.js");

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function s(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function c(e, t, n) {
  return t && l(e.prototype, t), n && l(e, n), e
}

function u(e, t) {
  if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: true,
      configurable: true
    }
  }), t && d(e, t)
}

function d(e, t) {
  return (d = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function f(e) {
  var t = h();
  return function() {
    var n, r = m(e);
    return n = t ? Reflect.construct(r, arguments, m(this).constructor) : r.apply(this, arguments), p(this, n)
  }
}

function p(e, t) {
  return t && ("object" === o(t) || "function" == typeof t) ? t : _(e)
}

function _(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function h() {
  if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
  if ("function" == typeof Proxy) returntrue;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
  } catch (e) {
    returnfalse
  }
}

function m(e) {
  return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var E = function(e) {
  u(n, e);
  var t = f(n);

  function n() {
    var e;
    s(this, n);
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    return g(_(e = t.call.apply(t, [this].concat(i))), "priority", 110), g(_(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), e
  }
  return c(n, [{
    key: "parse",
    value: function(e, t, n) {
      var r = function(e) {
        return e - 1
      };
      switch (t) {
        case "L":
          return (0, a.IS)((0, a.P2)(i.h.month, e), r);
        case "LL":
          return (0, a.IS)((0, a.ym)(2, e), r);
        case "Lo":
          return (0, a.IS)(n.ordinalNumber(e, {
            unit: "month"
          }), r);
        case "LLL":
          return n.month(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.month(e, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return n.month(e, {
            width: "narrow",
            context: "standalone"
          });
        default:
          return n.month(e, {
            width: "wide",
            context: "standalone"
          }) || n.month(e, {
            width: "abbreviated",
            context: "standalone"
          }) || n.month(e, {
            width: "narrow",
            context: "standalone"
          })
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t >= 0 && t <= 11
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      return e.setUTCMonth(n, 1), e.setUTCHours(0, 0, 0, 0), e
    }
  }]), n
}(Chunk12543.i)
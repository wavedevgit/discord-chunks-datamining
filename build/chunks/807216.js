/** Chunk was on web.js **/
/** chunk id: 807216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => g
});
var Chunk717029 = require("./717029.js"),
  Chunk846042 = require("./846042.js");

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function a(e, t) {
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
    var n, r = m(e);
    return n = t ? Reflect.construct(r, arguments, m(this).constructor) : r.apply(this, arguments), f(this, n)
  }
}

function f(e, t) {
  return t && ("object" === o(t) || "function" == typeof t) ? t : p(e)
}

function p(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function _() {
  if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
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

function h(e, t, n) {
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
    a(this, n);
    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return h(p(e = t.call.apply(t, [this].concat(i))), "priority", 80), h(p(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), e
  }
  return l(n, [{
    key: "parse",
    value: function(e, t, n) {
      switch (t) {
        case "b":
        case "bb":
        case "bbb":
          return n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.dayPeriod(e, {
            width: "wide",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      return e.setUTCHours((0, i.RQ)(n), 0, 0, 0), e
    }
  }]), n
}(Chunk717029._)
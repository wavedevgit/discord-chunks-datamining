/** Chunk was on web.js **/
/** chunk id: 596500, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => g
});
var Chunk12543 = require("./12543.js"),
  Chunk54265 = require("./54265.js");

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
    return m(p(e = t.call.apply(t, [this].concat(i))), "priority", 90), m(p(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), e
  }
  return l(n, [{
    key: "parse",
    value: function(e, t, n) {
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return n.day(e, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.day(e, {
            width: "wide",
            context: "formatting"
          }) || n.day(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.day(e, {
            width: "short",
            context: "formatting"
          }) || n.day(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t >= 0 && t <= 6
    }
  }, {
    key: "set",
    value: function(e, t, n, r) {
      return (e = (0, i.A)(e, n, r)).setUTCHours(0, 0, 0, 0), e
    }
  }]), n
}(Chunk12543.i)
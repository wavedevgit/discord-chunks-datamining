/** Chunk was on web.js **/
/** chunk id: 6061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => E
});
var Chunk717029 = require("./717029.js"),
  Chunk25487 = require("./25487.js"),
  Chunk846042 = require("./846042.js");

function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
  var t = m();
  return function() {
    var n, r = h(e);
    return n = t ? Reflect.construct(r, arguments, h(this).constructor) : r.apply(this, arguments), p(this, n)
  }
}

function p(e, t) {
  return t && ("object" === a(t) || "function" == typeof t) ? t : _(e)
}

function _(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function m() {
  if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
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
    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return g(_(e = t.call.apply(t, [this].concat(i))), "priority", 10), g(_(e), "incompatibleTokens", ["t", "T", "x"]), e
  }
  return c(n, [{
    key: "parse",
    value: function(e, t) {
      switch (t) {
        case "X":
          return (0, o.DA)(i.s.basicOptionalMinutes, e);
        case "XX":
          return (0, o.DA)(i.s.basic, e);
        case "XXXX":
          return (0, o.DA)(i.s.basicOptionalSeconds, e);
        case "XXXXX":
          return (0, o.DA)(i.s.extendedOptionalSeconds, e);
        default:
          return (0, o.DA)(i.s.extended, e)
      }
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      return t.timestampIsSet ? e : new Date(e.getTime() - n)
    }
  }]), n
}(Chunk717029._)
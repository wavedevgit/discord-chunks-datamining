/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  d: () => E
});
var r = n(717029),
  i = n(25487),
  o = n(846042);

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
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
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
      writable: !0,
      configurable: !0
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
  return t && ("object" === a(t) || "function" == typeof t) ? t : _(e)
}

function _(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function h() {
  if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
  } catch (e) {
    return !1
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
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var E = function(e) {
  u(n, e);
  var t = f(n);

  function n() {
    var e;
    s(this, n);
    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
    return g(_(e = t.call.apply(t, [this].concat(i))), "priority", 50), g(_(e), "incompatibleTokens", ["t", "T"]), e
  }
  return c(n, [{
    key: "parse",
    value: function(e, t, n) {
      switch (t) {
        case "s":
          return (0, o.ie)(i.z.second, e);
        case "so":
          return n.ordinalNumber(e, {
            unit: "second"
          });
        default:
          return (0, o.ZL)(t.length, e)
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t >= 0 && t <= 59
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      return e.setUTCSeconds(n, 0), e
    }
  }]), n
}(r._)
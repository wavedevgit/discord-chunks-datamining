/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var r = n(444675),
  i = Object.getOwnPropertyDescriptors || function(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
    return n
  },
  o = /%[sdj%]/g;
t.format = function(e) {
  if (!I(e)) {
    for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
    return t.join(" ")
  }
  for (var n = 1, r = arguments, i = r.length, a = String(e).replace(o, function(e) {
      if ("%%" === e) return "%";
      if (n >= i) return e;
      switch (e) {
        case "%s":
          return String(r[n++]);
        case "%d":
          return Number(r[n++]);
        case "%j":
          try {
            return JSON.stringify(r[n++])
          } catch (e) {
            return "[Circular]"
          }
        default:
          return e
      }
    }), s = r[n]; n < i; s = r[++n]) y(s) || !C(s) ? a += " " + s : a += " " + c(s);
  return a
}, t.deprecate = function(e, n) {
  if (void 0 !== r && !0 === r.noDeprecation) return e;
  if (void 0 === r) return function() {
    return t.deprecate(e, n).apply(this, arguments)
  };
  var i = !1;
  return function() {
    if (!i) {
      if (r.throwDeprecation) throw Error(n);
      r.traceDeprecation ? console.trace(n) : console.error(n), i = !0
    }
    return e.apply(this, arguments)
  }
};
var a = {},
  s = /^$/;
if (r.env.NODE_DEBUG) {
  var l = r.env.NODE_DEBUG;
  s = RegExp("^" + (l = l.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
}

function c(e, n) {
  var r = {
    seen: [],
    stylize: d
  };
  return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), b(n) ? r.showHidden = n : n && t._extend(r, n), N(r.showHidden) && (r.showHidden = !1), N(r.depth) && (r.depth = 2), N(r.colors) && (r.colors = !1), N(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = u), p(r, e, r.depth)
}

function u(e, t) {
  var n = c.styles[t];
  return n ? "\x1b[" + c.colors[n][0] + "m" + e + "\x1b[" + c.colors[n][1] + "m" : e
}

function d(e, t) {
  return e
}

function f(e) {
  var t = {};
  return e.forEach(function(e, n) {
    t[e] = !0
  }), t
}

function p(e, n, r) {
  if (e.customInspect && n && w(n.inspect) && n.inspect !== t.inspect && !(n.constructor && n.constructor.prototype === n)) {
    var i, o = n.inspect(r, e);
    return I(o) || (o = p(e, o, r)), o
  }
  var a = _(e, n);
  if (a) return a;
  var s = Object.keys(n),
    l = f(s);
  if (e.showHidden && (s = Object.getOwnPropertyNames(n)), P(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return h(n);
  if (0 === s.length) {
    if (w(n)) {
      var c = n.name ? ": " + n.name : "";
      return e.stylize("[Function" + c + "]", "special")
    }
    if (A(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
    if (R(n)) return e.stylize(Date.prototype.toString.call(n), "date");
    if (P(n)) return h(n)
  }
  var u = "",
    d = !1,
    b = ["{", "}"];
  return (v(n) && (d = !0, b = ["[", "]"]), w(n) && (u = " [Function" + (n.name ? ": " + n.name : "") + "]"), A(n) && (u = " " + RegExp.prototype.toString.call(n)), R(n) && (u = " " + Date.prototype.toUTCString.call(n)), P(n) && (u = " " + h(n)), 0 !== s.length || d && 0 != n.length) ? r < 0 ? A(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), i = d ? m(e, n, r, l, s) : s.map(function(t) {
    return g(e, n, r, l, t, d)
  }), e.seen.pop(), E(i, u, b)) : b[0] + u + b[1]
}

function _(e, t) {
  if (N(t)) return e.stylize("undefined", "undefined");
  if (I(t)) {
    var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
    return e.stylize(n, "string")
  }
  return S(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : y(t) ? e.stylize("null", "null") : void 0
}

function h(e) {
  return "[" + Error.prototype.toString.call(e) + "]"
}

function m(e, t, n, r, i) {
  for (var o = [], a = 0, s = t.length; a < s; ++a) j(t, String(a)) ? o.push(g(e, t, n, r, String(a), !0)) : o.push("");
  return i.forEach(function(i) {
    i.match(/^\d+$/) || o.push(g(e, t, n, r, i, !0))
  }), o
}

function g(e, t, n, r, i, o) {
  var a, s, l;
  if ((l = Object.getOwnPropertyDescriptor(t, i) || {
      value: t[i]
    }).get ? s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")), j(r, i) || (a = "[" + i + "]"), !s && (0 > e.seen.indexOf(l.value) ? (s = y(n) ? p(e, l.value, null) : p(e, l.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map(function(e) {
      return "  " + e
    }).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
      return "   " + e
    }).join("\n")) : s = e.stylize("[Circular]", "special")), N(a)) {
    if (o && i.match(/^\d+$/)) return s;
    (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.slice(1, -1), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
  }
  return a + ": " + s
}

function E(e, t, n) {
  var r = 0;
  return e.reduce(function(e, t) {
    return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
  }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
}

function v(e) {
  return Array.isArray(e)
}

function b(e) {
  return "boolean" == typeof e
}

function y(e) {
  return null === e
}

function O(e) {
  return null == e
}

function S(e) {
  return "number" == typeof e
}

function I(e) {
  return "string" == typeof e
}

function T(e) {
  return "symbol" == typeof e
}

function N(e) {
  return void 0 === e
}

function A(e) {
  return C(e) && "[object RegExp]" === x(e)
}

function C(e) {
  return "object" == typeof e && null !== e
}

function R(e) {
  return C(e) && "[object Date]" === x(e)
}

function P(e) {
  return C(e) && ("[object Error]" === x(e) || e instanceof Error)
}

function w(e) {
  return "function" == typeof e
}

function D(e) {
  return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
}

function x(e) {
  return Object.prototype.toString.call(e)
}

function L(e) {
  return e < 10 ? "0" + e.toString(10) : e.toString(10)
}
t.debuglog = function(e) {
  if (!a[e = e.toUpperCase()]) {
    if (s.test(e)) {
      var n = r.pid;
      a[e] = function() {
        var r = t.format.apply(t, arguments);
        console.error("%s %d: %s", e, n, r)
      }
    } else a[e] = function() {}
  }
  return a[e]
}, t.inspect = c, c.colors = {
  bold: [1, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  white: [37, 39],
  grey: [90, 39],
  black: [30, 39],
  blue: [34, 39],
  cyan: [36, 39],
  green: [32, 39],
  magenta: [35, 39],
  red: [31, 39],
  yellow: [33, 39]
}, c.styles = {
  special: "cyan",
  number: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  date: "magenta",
  regexp: "red"
}, t.types = n(842406), t.isArray = v, t.isBoolean = b, t.isNull = y, t.isNullOrUndefined = O, t.isNumber = S, t.isString = I, t.isSymbol = T, t.isUndefined = N, t.isRegExp = A, t.types.isRegExp = A, t.isObject = C, t.isDate = R, t.types.isDate = R, t.isError = P, t.types.isNativeError = P, t.isFunction = w, t.isPrimitive = D, t.isBuffer = n(102439);
var M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function k() {
  var e = new Date,
    t = [L(e.getHours()), L(e.getMinutes()), L(e.getSeconds())].join(":");
  return [e.getDate(), M[e.getMonth()], t].join(" ")
}

function j(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
t.log = function() {
  console.log("%s - %s", k(), t.format.apply(t, arguments))
}, t.inherits = n(689118), t._extend = function(e, t) {
  if (!t || !C(t)) return e;
  for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
  return e
};
var U = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

function G(e, t) {
  if (!e) {
    var n = Error("Promise was rejected with a falsy value");
    n.reason = e, e = n
  }
  return t(e)
}

function B(e) {
  if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');

  function t() {
    for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
    var i = t.pop();
    if ("function" != typeof i) throw TypeError("The last argument must be of type Function");
    var o = this,
      a = function() {
        return i.apply(o, arguments)
      };
    e.apply(this, t).then(function(e) {
      r.nextTick(a.bind(null, null, e))
    }, function(e) {
      r.nextTick(G.bind(null, e, a))
    })
  }
  return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t
}
t.promisify = function(e) {
  if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
  if (U && e[U]) {
    var t = e[U];
    if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t, U, {
      value: t,
      enumerable: !1,
      writable: !1,
      configurable: !0
    }), t
  }

  function t() {
    for (var t, n, r = new Promise(function(e, r) {
        t = e, n = r
      }), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
    i.push(function(e, r) {
      e ? n(e) : t(r)
    });
    try {
      e.apply(this, i)
    } catch (e) {
      n(e)
    }
    return r
  }
  return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), U && Object.defineProperty(t, U, {
    value: t,
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), Object.defineProperties(t, i(e))
}, t.promisify.custom = U, t.callbackify = B
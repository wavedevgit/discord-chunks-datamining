/** Chunk was on web.js **/
/** chunk id: 315646, original params: e,t,n (module,exports,re quire) **/
var r = "function" == typeof Map && Map.prototype,
  i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
  a = r && i && "function" == typeof i.get ? i.get : null,
  s = r && Map.prototype.forEach,
  o = "function" == typeof Set && Set.prototype,
  l = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
  c = o && l && "function" == typeof l.get ? l.get : null,
  u = o && Set.prototype.forEach,
  d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
  f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
  p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
  _ = Boolean.prototype.valueOf,
  h = Object.prototype.toString,
  m = Function.prototype.toString,
  g = String.prototype.match,
  E = String.prototype.slice,
  y = String.prototype.replace,
  b = String.prototype.toUpperCase,
  O = String.prototype.toLowerCase,
  v = RegExp.prototype.test,
  A = Array.prototype.concat,
  I = Array.prototype.join,
  S = Array.prototype.slice,
  T = Math.floor,
  C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
  N = Object.getOwnPropertySymbols,
  w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
  R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
  P = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === R ? "object" : "symbol") ? Symbol.toStringTag : null,
  D = Object.prototype.propertyIsEnumerable,
  x = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__
  } : null);

function L(e, t) {
  if (e === 1 / 0 || e === false / 0 || e != e || e && e > false && e < 1e3 || v.call(/e/, t)) return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if ("number" == typeof e) {
    var r = e < 0 ? -T(-e) : T(e);
    if (r !== e) {
      var i = String(r),
        a = E.call(t, i.length + 1);
      return y.call(i, n, "$&_") + "." + y.call(y.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
    }
  }
  return y.call(t, n, "$&_")
}
var Chunk234629 = require("./234629.js"),
  M = Chunk234629.custom,
  k = X(M) ? M : null,
  U = {
    __proto__: null,
    double: '"',
    single: "'"
  },
  G = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };

function V(e, t, n) {
  var r = U[n.quoteStyle || t];
  return r + e + r
}

function F(e) {
  return y.call(String(e), /"/g, "&quot;")
}

function B(e) {
  return !P || !("object" == typeof e && (P in e || true !== e[P]))
}

function H(e) {
  return "[object Array]" === ee(e) && B(e)
}

function Y(e) {
  return "[object Date]" === ee(e) && B(e)
}

function W(e) {
  return "[object RegExp]" === ee(e) && B(e)
}

function K(e) {
  return "[object Error]" === ee(e) && B(e)
}

function z(e) {
  return "[object String]" === ee(e) && B(e)
}

function q(e) {
  return "[object Number]" === ee(e) && B(e)
}

function Z(e) {
  return "[object Boolean]" === ee(e) && B(e)
}

function X(e) {
  if (R) return e && "object" == typeof e && e instanceof Symbol;
  if ("symbol" == typeof e) returntrue;
  if (!e || "object" != typeof e || !w) returnfalse;
  try {
    return w.call(e), true
  } catch (e) {}
  returnfalse
}

function Q(e) {
  if (!e || "object" != typeof e || !C) returnfalse;
  try {
    return C.call(e), true
  } catch (e) {}
  returnfalse
}
module.exports = function e(t, r, i, o) {
  var l = r || {};
  if ($(l, "quoteStyle") && !$(U, l.quoteStyle)) throw TypeError('option "quoteStyle" must be "single" or "double"');
  if ($(l, "maxStringLength") && ("number" == typeof l.maxStringLength ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0 : null !== l.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var d = !$(l, "customInspect") || l.customInspect;
  if ("boolean" != typeof d && "symbol" !== d) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if ($(l, "indent") && null !== l.indent && "	" !== l.indent && !(parseInt(l.indent, 10) === l.indent && l.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if ($(l, "numericSeparator") && "boolean" != typeof l.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var f = l.numericSeparator;
  if (true === t) return "undefined";
  if (null === t) return "null";
  if ("boolean" == typeof t) return t ? "true" : "false";
  if ("string" == typeof t) return ec(t, l);
  if ("number" == typeof t) {
    if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
    var p = String(t);
    return f ? L(t, p) : p
  }
  if ("bigint" == typeof t) {
    var h = String(t) + "n";
    return f ? L(t, h) : h
  }
  var m = true === l.depth ? 5 : l.depth;
  if (true === i && (i = 0), i >= m && m > 0 && "object" == typeof t) return H(t) ? "[Array]" : "[Object]";
  var g = eh(l, i);
  if (true === o) o = [];
  else if (en(o, t) >= 0) return "[Circular]";

  function b(t, n, r) {
    if (n && (o = S.call(o)).push(n), r) {
      var a = {
        depth: l.depth
      };
      return $(l, "quoteStyle") && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, o)
    }
    return e(t, l, i + 1, o)
  }
  if ("function" == typeof t && !W(t)) {
    var v = et(t),
      T = eg(t, b);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (T.length > 0 ? " { " + I.call(T, ", ") + " }" : "")
  }
  if (X(t)) {
    var N = R ? y.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : w.call(t);
    return "object" != typeof t || R ? N : ed(N)
  }
  if (el(t)) {
    for (var M = "<" + O.call(String(t.nodeName)), G = t.attributes || [], B = 0; B < G.length; B++) M += " " + G[B].name + "=" + V(F(G[B].value), "double", l);
    return M += ">", t.childNodes && t.childNodes.length && (M += "..."), M += "</" + O.call(String(t.nodeName)) + ">"
  }
  if (H(t)) {
    if (0 === t.length) return "[]";
    var J = eg(t, b);
    return g && !e_(J) ? "[" + em(J, g) + "]" : "[ " + I.call(J, ", ") + " ]"
  }
  if (K(t)) {
    var eu = eg(t, b);
    return "cause" in Error.prototype || !("cause" in t) || D.call(t, "cause") ? 0 === eu.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + I.call(eu, ", ") + " }" : "{ [" + String(t) + "] " + I.call(A.call("[cause]: " + b(t.cause), eu), ", ") + " }"
  }
  if ("object" == typeof t && d) {
    if (k && "function" == typeof t[k] && j) return j(t, {
      depth: m - i
    });
    else if ("symbol" !== d && "function" == typeof t.inspect) return t.inspect()
  }
  if (er(t)) {
    var eE = [];
    return s && s.call(t, function(e, n) {
      eE.push(b(n, t, true) + " => " + b(e, t))
    }), ep("Map", a.call(t), eE, g)
  }
  if (es(t)) {
    var ey = [];
    return u && u.call(t, function(e) {
      ey.push(b(e, t))
    }), ep("Set", c.call(t), ey, g)
  }
  if (ei(t)) return ef("WeakMap");
  if (eo(t)) return ef("WeakSet");
  if (ea(t)) return ef("WeakRef");
  if (q(t)) return ed(b(Number(t)));
  if (Q(t)) return ed(b(C.call(t)));
  if (Z(t)) return ed(_.call(t));
  if (z(t)) return ed(b(String(t)));
  if ("u" > typeof window && t === window) return "{ [object Window] }";
  if ("u" > typeof globalThis && t === globalThis || true !== n.g && t === n.g) return "{ [object globalThis] }";
  if (!Y(t) && !W(t)) {
    var eb = eg(t, b),
      eO = x ? x(t) === Object.prototype : t instanceof Object || t.constructor === Object,
      ev = t instanceof Object ? "" : "null prototype",
      eA = !eO && P && Object(t) === t && P in t ? E.call(ee(t), 8, false) : ev ? "Object" : "",
      eI = (eO || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (eA || ev ? "[" + I.call(A.call([], eA || [], ev || []), ": ") + "] " : "");
    return 0 === eb.length ? eI + "{}" : g ? eI + "{" + em(eb, g) + "}" : eI + "{ " + I.call(eb, ", ") + " }"
  }
  return String(t)
};
var J = Object.prototype.hasOwnProperty || function(e) {
  return e in this
};

function $(e, t) {
  return J.call(e, t)
}

function ee(e) {
  return h.call(e)
}

function et(e) {
  if (e.name) return e.name;
  var t = g.call(m.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null
}

function en(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t) return n;
  return false
}

function er(e) {
  if (!a || !e || "object" != typeof e) returnfalse;
  try {
    a.call(e);
    try {
      c.call(e)
    } catch (e) {
      returntrue
    }
    return e instanceof Map
  } catch (e) {}
  returnfalse
}

function ei(e) {
  if (!d || !e || "object" != typeof e) returnfalse;
  try {
    d.call(e, d);
    try {
      f.call(e, f)
    } catch (e) {
      returntrue
    }
    return e instanceof WeakMap
  } catch (e) {}
  returnfalse
}

function ea(e) {
  if (!p || !e || "object" != typeof e) returnfalse;
  try {
    return p.call(e), true
  } catch (e) {}
  returnfalse
}

function es(e) {
  if (!c || !e || "object" != typeof e) returnfalse;
  try {
    c.call(e);
    try {
      a.call(e)
    } catch (e) {
      returntrue
    }
    return e instanceof Set
  } catch (e) {}
  returnfalse
}

function eo(e) {
  if (!f || !e || "object" != typeof e) returnfalse;
  try {
    f.call(e, f);
    try {
      d.call(e, d)
    } catch (e) {
      returntrue
    }
    return e instanceof WeakSet
  } catch (e) {}
  returnfalse
}

function el(e) {
  return !!e && "object" == typeof e && (!!("u" > typeof HTMLElement && e instanceof HTMLElement) || "string" == typeof e.nodeName && "function" == typeof e.getAttribute)
}

function ec(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength,
      r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return ec(E.call(e, 0, t.maxStringLength), t) + r
  }
  var i = G[t.quoteStyle || "single"];
  return i.lastIndex = 0, V(y.call(y.call(e, i, "\\$1"), /[\x00-\x1f]/g, eu), "single", t)
}

function eu(e) {
  var t = e.charCodeAt(0),
    n = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    } [t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + b.call(t.toString(16))
}

function ed(e) {
  return "Object(" + e + ")"
}

function ef(e) {
  return e + " { ? }"
}

function ep(e, t, n, r) {
  return e + " (" + t + ") {" + (r ? em(n, r) : I.call(n, ", ")) + "}"
}

function e_(e) {
  for (var t = 0; t < e.length; t++)
    if (en(e[t], "\n") >= 0) returnfalse;
  returntrue
}

function eh(e, t) {
  var n;
  if ("	" === e.indent) n = "	";
  else {
    if ("number" != typeof e.indent || !(e.indent > 0)) return null;
    n = I.call(Array(e.indent + 1), " ")
  }
  return {
    base: n,
    prev: I.call(Array(t + 1), n)
  }
}

function em(e, t) {
  if (0 === e.length) return "";
  var n = "\n" + t.prev + t.base;
  return n + I.call(e, "," + n) + "\n" + t.prev
}

function eg(e, t) {
  var n, r = H(e),
    i = [];
  if (r) {
    i.length = e.length;
    for (var a = 0; a < e.length; a++) i[a] = $(e, a) ? t(e[a], e) : ""
  }
  var s = "function" == typeof N ? N(e) : [];
  if (R) {
    n = {};
    for (var o = 0; o < s.length; o++) n["$" + s[o]] = s[o]
  }
  for (var l in e)
    if ($(e, l) && (!r || String(Number(l)) !== l || !(l < e.length)))
      if (R && n["$" + l] instanceof Symbol) continue;
      else v.call(/[^\w$]/, l) ? i.push(t(l, e) + ": " + t(e[l], e)) : i.push(l + ": " + t(e[l], e));
  if ("function" == typeof N)
    for (var c = 0; c < s.length; c++) D.call(e, s[c]) && i.push("[" + t(s[c]) + "]: " + t(e[s[c]], e));
  return i
}
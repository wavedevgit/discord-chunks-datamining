/** Chunk was on web.js **/
"use strict";
var r = n(728804),
  i = n(505388),
  o = n(363406),
  a = Object.prototype.hasOwnProperty,
  s = {
    brackets: function(e) {
      return e + "[]"
    },
    comma: "comma",
    indices: function(e, t) {
      return e + "[" + t + "]"
    },
    repeat: function(e) {
      return e
    }
  },
  l = Array.isArray,
  c = Array.prototype.push,
  u = function(e, t) {
    c.apply(e, l(t) ? t : [t])
  },
  d = Date.prototype.toISOString,
  f = o.default,
  _ = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: i.encode,
    encodeValuesOnly: !1,
    format: f,
    formatter: o.formatters[f],
    indices: !1,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  p = function(e) {
    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
  },
  h = {},
  g = function e(t, n, o, a, s, c, d, f, g, m, E, v, b, y, O, S) {
    for (var I, T = t, N = S, A = 0, C = !1; void 0 !== (N = N.get(h)) && !C;) {
      var R = N.get(t);
      if (A += 1, void 0 !== R) {
        if (R === A) throw RangeError("Cyclic object value");
        C = !0
      }
      void 0 === N.get(h) && (A = 0)
    }
    if ("function" == typeof f ? T = f(n, T) : T instanceof Date ? T = E(T) : "comma" === o && l(T) && (T = i.maybeMap(T, function(e) {
        return e instanceof Date ? E(e) : e
      })), null === T) {
      if (s) return d && !y ? d(n, _.encoder, O, "key", v) : n;
      T = ""
    }
    if (p(T) || i.isBuffer(T)) return d ? [b(y ? n : d(n, _.encoder, O, "key", v)) + "=" + b(d(T, _.encoder, O, "value", v))] : [b(n) + "=" + b(String(T))];
    var P = [];
    if (void 0 === T) return P;
    if ("comma" === o && l(T)) y && d && (T = i.maybeMap(T, d)), I = [{
      value: T.length > 0 ? T.join(",") || null : void 0
    }];
    else if (l(f)) I = f;
    else {
      var D = Object.keys(T);
      I = g ? D.sort(g) : D
    }
    for (var w = a && l(T) && 1 === T.length ? n + "[]" : n, L = 0; L < I.length; ++L) {
      var x = I[L],
        M = "object" == typeof x && void 0 !== x.value ? x.value : T[x];
      if (!c || null !== M) {
        var k = l(T) ? "function" == typeof o ? o(w, x) : w : w + (m ? "." + x : "[" + x + "]");
        S.set(t, A);
        var j = r();
        j.set(h, S), u(P, e(M, k, o, a, s, c, "comma" === o && y && l(T) ? null : d, f, g, m, E, v, b, y, O, j))
      }
    }
    return P
  },
  m = function(e) {
    if (!e) return _;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || _.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = o.default;
    if (void 0 !== e.format) {
      if (!a.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = o.formatters[n],
      i = _.filter;
    return ("function" == typeof e.filter || l(e.filter)) && (i = e.filter), {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
      allowDots: void 0 === e.allowDots ? _.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : _.charsetSentinel,
      delimiter: void 0 === e.delimiter ? _.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : _.encode,
      encoder: "function" == typeof e.encoder ? e.encoder : _.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : _.encodeValuesOnly,
      filter: i,
      format: n,
      formatter: r,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, i, o, a = e,
    c = m(t);
  "function" == typeof c.filter ? a = (i = c.filter)("", a) : l(c.filter) && (n = i = c.filter);
  var d = [];
  if ("object" != typeof a || null === a) return "";
  o = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var f = s[o];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var _ = "comma" === f && t && t.commaRoundTrip;
  n || (n = Object.keys(a)), c.sort && n.sort(c.sort);
  for (var p = r(), h = 0; h < n.length; ++h) {
    var E = n[h];
    (!c.skipNulls || null !== a[E]) && u(d, g(a[E], E, f, _, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, p))
  }
  var v = d.join(c.delimiter),
    b = !0 === c.addQueryPrefix ? "?" : "";
  return c.charsetSentinel && ("iso-8859-1" === c.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), v.length > 0 ? b + v : ""
}
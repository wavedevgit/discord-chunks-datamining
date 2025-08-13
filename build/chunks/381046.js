/** Chunk was on web.js **/
/** chunk id: 381046, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk260674 = require("./260674.js"),
  Chunk288660 = require("./288660.js"),
  Chunk72689 = require("./72689.js"),
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
  f = Chunk72689.default,
  _ = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: Chunk288660.encode,
    encodeValuesOnly: false,
    filter: true,
    format: f,
    formatter: Chunk72689.formatters[f],
    indices: false,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: false,
    strictNullHandling: false
  },
  p = function(e) {
    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
  },
  h = {},
  m = function e(t, n, o, a, s, c, d, f, m, g, E, b, y, O, v, I, T, S) {
    for (var A, N = t, C = S, R = 0, P = false; true !== (C = C.get(h)) && !P;) {
      var w = C.get(t);
      if (R += 1, true !== w)
        if (w === R) throw RangeError("Cyclic object value");
        else P = true;
      true === C.get(h) && (R = 0)
    }
    if ("function" == typeof g ? N = g(n, N) : N instanceof Date ? N = y(N) : "comma" === o && l(N) && (N = i.maybeMap(N, function(e) {
        return e instanceof Date ? y(e) : e
      })), null === N) {
      if (c) return m && !I ? m(n, _.encoder, T, "key", O) : n;
      N = ""
    }
    if (p(N) || i.isBuffer(N)) return m ? [v(I ? n : m(n, _.encoder, T, "key", O)) + "=" + v(m(N, _.encoder, T, "value", O))] : [v(n) + "=" + v(String(N))];
    var D = [];
    if (true === N) return D;
    if ("comma" === o && l(N)) I && m && (N = i.maybeMap(N, m)), A = [{
      value: N.length > 0 ? N.join(",") || null : true
    }];
    else if (l(g)) A = g;
    else {
      var L = Object.keys(N);
      A = E ? L.sort(E) : L
    }
    var x = f ? String(n).replace(/\./g, "%2E") : String(n),
      M = a && l(N) && 1 === N.length ? x + "[]" : x;
    if (s && l(N) && 0 === N.length) return M + "[]";
    for (var j = 0; j < A.length; ++j) {
      var k = A[j],
        U = "object" == typeof k && k && true !== k.value ? k.value : N[k];
      if (!d || null !== U) {
        var G = b && f ? String(k).replace(/\./g, "%2E") : String(k),
          B = l(N) ? "function" == typeof o ? o(M, G) : M : M + (b ? "." + G : "[" + G + "]");
        S.set(t, R);
        var Z = r();
        Z.set(h, S), u(D, e(U, B, o, a, s, c, d, f, "comma" === o && I && l(N) ? null : m, g, E, b, y, O, v, I, T, Z))
      }
    }
    return D
  },
  g = function(e) {
    if (!e) return _;
    if (true !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (true !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e.encoder && true !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t, n = e.charset || _.charset;
    if (true !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = o.default;
    if (true !== e.format) {
      if (!a.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
      r = e.format
    }
    var i = o.formatters[r],
      c = _.filter;
    if (("function" == typeof e.filter || l(e.filter)) && (c = e.filter), t = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : _.arrayFormat, "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = true === e.allowDots ? true === e.encodeDotInKeys || _.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
      allowDots: u,
      allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : _.allowEmptyArrays,
      arrayFormat: t,
      charset: n,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : _.charsetSentinel,
      commaRoundTrip: !!e.commaRoundTrip,
      delimiter: true === e.delimiter ? _.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : _.encode,
      encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : _.encodeDotInKeys,
      encoder: "function" == typeof e.encoder ? e.encoder : _.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : _.encodeValuesOnly,
      filter: c,
      format: r,
      formatter: i,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
    }
  };
module.exports = function(e, t) {
  var n, i, o = e,
    a = g(t);
  "function" == typeof a.filter ? o = (i = a.filter)("", o) : l(a.filter) && (n = i = a.filter);
  var c = [];
  if ("object" != typeof o || null === o) return "";
  var d = s[a.arrayFormat],
    f = "comma" === d && a.commaRoundTrip;
  n || (n = Object.keys(o)), a.sort && n.sort(a.sort);
  for (var _ = r(), p = 0; p < n.length; ++p) {
    var h = n[p],
      E = o[h];
    a.skipNulls && null === E || u(c, m(E, h, d, f, a.allowEmptyArrays, a.strictNullHandling, a.skipNulls, a.encodeDotInKeys, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.format, a.formatter, a.encodeValuesOnly, a.charset, _))
  }
  var b = c.join(a.delimiter),
    y = true === a.addQueryPrefix ? "?" : "";
  return a.charsetSentinel && ("iso-8859-1" === a.charset ? y += "utf8=%26%2310003%3B&" : y += "utf8=%E2%9C%93&"), b.length > 0 ? y + b : ""
}
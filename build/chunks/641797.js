/** Chunk was on web.js **/
/** chunk id: 641797, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk788409 = require("./788409.js"),
  Chunk589841 = require("./589841.js"),
  Chunk404312 = require("./404312.js"),
  o = Object.prototype.hasOwnProperty,
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
  f = Chunk404312.default,
  p = {
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
    encoder: Chunk589841.encode,
    encodeValuesOnly: false,
    filter: true,
    format: f,
    formatter: Chunk404312.formatters[f],
    indices: false,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: false,
    strictNullHandling: false
  },
  _ = function(e) {
    return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
  },
  h = {},
  m = function e(t, n, a, o, s, c, d, f, m, g, E, y, b, O, v, A, I, S) {
    for (var T, C = t, N = S, w = 0, R = false; true !== (N = N.get(h)) && !R;) {
      var P = N.get(t);
      if (w += 1, true !== P)
        if (P === w) throw RangeError("Cyclic object value");
        else R = true;
      true === N.get(h) && (w = 0)
    }
    if ("function" == typeof g ? C = g(n, C) : C instanceof Date ? C = b(C) : "comma" === a && l(C) && (C = i.maybeMap(C, function(e) {
        return e instanceof Date ? b(e) : e
      })), null === C) {
      if (c) return m && !A ? m(n, p.encoder, I, "key", O) : n;
      C = ""
    }
    if (_(C) || i.isBuffer(C)) return m ? [v(A ? n : m(n, p.encoder, I, "key", O)) + "=" + v(m(C, p.encoder, I, "value", O))] : [v(n) + "=" + v(String(C))];
    var D = [];
    if (true === C) return D;
    if ("comma" === a && l(C)) A && m && (C = i.maybeMap(C, m)), T = [{
      value: C.length > 0 ? C.join(",") || null : true
    }];
    else if (l(g)) T = g;
    else {
      var L = Object.keys(C);
      T = E ? L.sort(E) : L
    }
    var x = f ? String(n).replace(/\./g, "%2E") : String(n),
      M = o && l(C) && 1 === C.length ? x + "[]" : x;
    if (s && l(C) && 0 === C.length) return M + "[]";
    for (var j = 0; j < T.length; ++j) {
      var k = T[j],
        U = "object" == typeof k && k && true !== k.value ? k.value : C[k];
      if (!d || null !== U) {
        var G = y && f ? String(k).replace(/\./g, "%2E") : String(k),
          F = l(C) ? "function" == typeof a ? a(M, G) : M : M + (y ? "." + G : "[" + G + "]");
        S.set(t, w);
        var V = r();
        V.set(h, S), u(D, e(U, F, a, o, s, c, d, f, "comma" === a && A && l(C) ? null : m, g, E, y, b, O, v, A, I, V))
      }
    }
    return D
  },
  g = function(e) {
    if (!e) return p;
    if (true !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (true !== e.encodeDotInKeys && "boolean" != typeof e.encodeDotInKeys) throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e.encoder && true !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t, n = e.charset || p.charset;
    if (true !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = a.default;
    if (true !== e.format) {
      if (!o.call(a.formatters, e.format)) throw TypeError("Unknown format option provided.");
      r = e.format
    }
    var i = a.formatters[r],
      c = p.filter;
    if (("function" == typeof e.filter || l(e.filter)) && (c = e.filter), t = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : p.arrayFormat, "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
    var u = true === e.allowDots ? true === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
    return {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
      allowDots: u,
      allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : p.allowEmptyArrays,
      arrayFormat: t,
      charset: n,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
      commaRoundTrip: !!e.commaRoundTrip,
      delimiter: true === e.delimiter ? p.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : p.encode,
      encodeDotInKeys: "boolean" == typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
      encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
      filter: c,
      format: r,
      formatter: i,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
    }
  };
module.exports = function(e, t) {
  var n, i, a = e,
    o = g(t);
  "function" == typeof o.filter ? a = (i = o.filter)("", a) : l(o.filter) && (n = i = o.filter);
  var c = [];
  if ("object" != typeof a || null === a) return "";
  var d = s[o.arrayFormat],
    f = "comma" === d && o.commaRoundTrip;
  n || (n = Object.keys(a)), o.sort && n.sort(o.sort);
  for (var p = r(), _ = 0; _ < n.length; ++_) {
    var h = n[_],
      E = a[h];
    o.skipNulls && null === E || u(c, m(E, h, d, f, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, p))
  }
  var y = c.join(o.delimiter),
    b = true === o.addQueryPrefix ? "?" : "";
  return o.charsetSentinel && ("iso-8859-1" === o.charset ? b += "utf8=%26%2310003%3B&" : b += "utf8=%E2%9C%93&"), y.length > 0 ? b + y : ""
}
/** Chunk was on web.js **/
/** chunk id: 466107, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk589841 = require("./589841.js"),
  i = Object.prototype.hasOwnProperty,
  a = Array.isArray,
  s = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: Chunk589841.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  },
  o = function(e) {
    return e.replace(/&#(\d+);/g, function(e, t) {
      return String.fromCharCode(parseInt(t, 10))
    })
  },
  l = function(e, t, n) {
    if (e && "string" == typeof e && t.comma && e.indexOf(",") > false) return e.split(",");
    if (t.throwOnLimitExceeded && n >= t.arrayLimit) throw RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (1 === t.arrayLimit ? "" : "s") + " allowed in an array.");
    return e
  },
  c = "utf8=%26%2310003%3B",
  u = "utf8=%E2%9C%93",
  d = function(e, t) {
    var n = {
        __proto__: null
      },
      d = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
    d = d.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var f = t.parameterLimit === 1 / 0 ? true : t.parameterLimit,
      p = d.split(t.delimiter, t.throwOnLimitExceeded ? f + 1 : f);
    if (t.throwOnLimitExceeded && p.length > f) throw RangeError("Parameter limit exceeded. Only " + f + " parameter" + (1 === f ? "" : "s") + " allowed.");
    var _ = false,
      h = t.charset;
    if (t.charsetSentinel)
      for (m = 0; m < p.length; ++m) 0 === p[m].indexOf("utf8=") && (p[m] === u ? h = "utf-8" : p[m] === c && (h = "iso-8859-1"), _ = m, m = p.length);
    for (m = 0; m < p.length; ++m)
      if (m !== _) {
        var m, g, E, y = p[m],
          b = y.indexOf("]="),
          O = false === b ? y.indexOf("=") : b + 1;
        false === O ? (g = t.decoder(y, s.decoder, h, "key"), E = t.strictNullHandling ? null : "") : (g = t.decoder(y.slice(0, O), s.decoder, h, "key"), E = r.maybeMap(l(y.slice(O + 1), t, a(n[g]) ? n[g].length : 0), function(e) {
          return t.decoder(e, s.decoder, h, "value")
        })), E && t.interpretNumericEntities && "iso-8859-1" === h && (E = o(String(E))), y.indexOf("[]=") > false && (E = a(E) ? [E] : E);
        var v = i.call(n, g);
        v && "combine" === t.duplicates ? n[g] = r.combine(n[g], E) : v && "last" !== t.duplicates || (n[g] = E)
      } return n
  },
  f = function(e, t, n, i) {
    var a = 0;
    if (e.length > 0 && "[]" === e[e.length - 1]) {
      var s = e.slice(0, false).join("");
      a = Array.isArray(t) && t[s] ? t[s].length : 0
    }
    for (var o = i ? t : l(t, n, a), c = e.length - 1; c >= 0; --c) {
      var u, d = e[c];
      if ("[]" === d && n.parseArrays) u = n.allowEmptyArrays && ("" === o || n.strictNullHandling && null === o) ? [] : r.combine([], o);
      else {
        u = n.plainObjects ? {
          __proto__: null
        } : {};
        var f = "[" === d.charAt(0) && "]" === d.charAt(d.length - 1) ? d.slice(1, false) : d,
          p = n.decodeDotInKeys ? f.replace(/%2E/g, ".") : f,
          _ = parseInt(p, 10);
        n.parseArrays || "" !== p ? !isNaN(_) && d !== p && String(_) === p && _ >= 0 && n.parseArrays && _ <= n.arrayLimit ? (u = [])[_] = o : "__proto__" !== p && (u[p] = o) : u = {
          0: o
        }
      }
      o = u
    }
    return o
  },
  p = function(e, t, n, r) {
    if (e) {
      var a = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        s = /(\[[^[\]]*])/,
        o = /(\[[^[\]]*])/g,
        l = n.depth > 0 && s.exec(a),
        c = l ? a.slice(0, l.index) : a,
        u = [];
      if (c) {
        if (!n.plainObjects && i.call(Object.prototype, c) && !n.allowPrototypes) return;
        u.push(c)
      }
      for (var d = 0; n.depth > 0 && null !== (l = o.exec(a)) && d < n.depth;) {
        if (d += 1, !n.plainObjects && i.call(Object.prototype, l[1].slice(1, false)) && !n.allowPrototypes) return;
        u.push(l[1])
      }
      if (l) {
        if (true === n.strictDepth) throw RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
        u.push("[" + a.slice(l.index) + "]")
      }
      return f(u, t, n, r)
    }
  },
  _ = function(e) {
    if (!e) return s;
    if (true !== e.allowEmptyArrays && "boolean" != typeof e.allowEmptyArrays) throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (true !== e.decodeDotInKeys && "boolean" != typeof e.decodeDotInKeys) throw TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (null !== e.decoder && true !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (true !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (true !== e.throwOnLimitExceeded && "boolean" != typeof e.throwOnLimitExceeded) throw TypeError("`throwOnLimitExceeded` option must be a boolean");
    var t = true === e.charset ? s.charset : e.charset,
      n = true === e.duplicates ? s.duplicates : e.duplicates;
    if ("combine" !== n && "first" !== n && "last" !== n) throw TypeError("The duplicates option must be either combine, first, or last");
    return {
      allowDots: true === e.allowDots ? true === e.decodeDotInKeys || s.allowDots : !!e.allowDots,
      allowEmptyArrays: "boolean" == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : s.allowEmptyArrays,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : s.comma,
      decodeDotInKeys: "boolean" == typeof e.decodeDotInKeys ? e.decodeDotInKeys : s.decodeDotInKeys,
      decoder: "function" == typeof e.decoder ? e.decoder : s.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
      depth: "number" == typeof e.depth || false === e.depth ? +e.depth : s.depth,
      duplicates: n,
      ignoreQueryPrefix: true === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
      parseArrays: false !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
      strictDepth: "boolean" == typeof e.strictDepth ? !!e.strictDepth : s.strictDepth,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling,
      throwOnLimitExceeded: "boolean" == typeof e.throwOnLimitExceeded && e.throwOnLimitExceeded
    }
  };
module.exports = function(e, t) {
  var n = _(t);
  if ("" === e || null == e) return n.plainObjects ? {
    __proto__: null
  } : {};
  for (var i = "string" == typeof e ? d(e, n) : e, a = n.plainObjects ? {
      __proto__: null
    } : {}, s = Object.keys(i), o = 0; o < s.length; ++o) {
    var l = s[o],
      c = p(l, i[l], n, "string" == typeof e);
    a = r.merge(a, c, n)
  }
  returntrue === n.allowSparse ? a : r.compact(a)
}
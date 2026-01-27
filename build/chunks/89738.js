/** Chunk was on web.js **/
/** chunk id: 89738, original params: e,t,n (module,exports,re quire) **/
e = require.nmd(module),
  function(r) {
    var i = t && !t.nodeType && t,
      a = e && !e.nodeType && e,
      o = "object" == typeof n.g && n.g;
    (o.global === o || o.window === o || o.self === o) && (r = o);
    var s, l, c = 0x7fffffff,
      u = 36,
      d = 1,
      f = 26,
      p = 38,
      _ = 700,
      h = 72,
      m = 128,
      g = "-",
      E = /^xn--/,
      y = /[^\x20-\x7E]/,
      b = /[\x2E\u3002\uFF0E\uFF61]/g,
      O = {
        overflow: "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      },
      v = 35,
      A = Math.floor,
      I = String.fromCharCode;

    function S(e) {
      throw RangeError(O[e])
    }

    function T(e, t) {
      for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
      return r
    }

    function C(e, t) {
      var n = e.split("@"),
        r = "";
      return n.length > 1 && (r = n[0] + "@", e = n[1]), r + T((e = e.replace(b, ".")).split("."), t).join(".")
    }

    function N(e) {
      for (var t, n, r = [], i = 0, a = e.length; i < a;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? (64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
      return r
    }

    function w(e) {
      return T(e, function(e) {
        var t = "";
        return e > 65535 && (e -= 65536, t += I(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += I(e)
      }).join("")
    }

    function R(e) {
      return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : u
    }

    function P(e, t) {
      return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
    }

    function D(e, t, n) {
      var r = 0;
      for (e = n ? A(e / _) : e >> 1, e += A(e / t); e > v * f >> 1; r += u) e = A(e / v);
      return A(r + (v + 1) * e / (e + p))
    }

    function L(e) {
      var t, n, r, i, a, o, s, l, p, _, E = [],
        y = e.length,
        b = 0,
        O = m,
        v = h;
      for ((n = e.lastIndexOf(g)) < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && S("not-basic"), E.push(e.charCodeAt(r));
      for (i = n > 0 ? n + 1 : 0; i < y;) {
        for (a = b, o = 1, s = u; i >= y && S("invalid-input"), ((l = R(e.charCodeAt(i++))) >= u || l > A((c - b) / o)) && S("overflow"), b += l * o, !(l < (p = s <= v ? d : s >= v + f ? f : s - v)); s += u) o > A(c / (_ = u - p)) && S("overflow"), o *= _;
        v = D(b - a, t = E.length + 1, 0 == a), A(b / t) > c - O && S("overflow"), O += A(b / t), b %= t, E.splice(b++, 0, O)
      }
      return w(E)
    }

    function x(e) {
      var t, n, r, i, a, o, s, l, p, _, E, y, b, O, v, T = [];
      for (o = 0, y = (e = N(e)).length, t = m, n = 0, a = h; o < y; ++o)(E = e[o]) < 128 && T.push(I(E));
      for (r = i = T.length, i && T.push(g); r < y;) {
        for (s = c, o = 0; o < y; ++o)(E = e[o]) >= t && E < s && (s = E);
        for (s - t > A((c - n) / (b = r + 1)) && S("overflow"), n += (s - t) * b, t = s, o = 0; o < y; ++o)
          if ((E = e[o]) < t && ++n > c && S("overflow"), E == t) {
            for (l = n, p = u; !(l < (_ = p <= a ? d : p >= a + f ? f : p - a)); p += u) v = l - _, O = u - _, T.push(I(P(_ + v % O, 0))), l = A(v / O);
            T.push(I(P(l, 0))), a = D(n, b, r == i), n = 0, ++r
          }++ n, ++t
      }
      return T.join("")
    }

    function M(e) {
      return C(e, function(e) {
        return E.test(e) ? L(e.slice(4).toLowerCase()) : e
      })
    }

    function j(e) {
      return C(e, function(e) {
        return y.test(e) ? "xn--" + x(e) : e
      })
    }
    if (s = {
        version: "1.4.1",
        ucs2: {
          decode: N,
          encode: w
        },
        decode: L,
        encode: x,
        toASCII: j,
        toUnicode: M
      }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
      return s
    });
    else if (i && a)
      if (e.exports == i) a.exports = s;
      else
        for (l in s) s.hasOwnProperty(l) && (i[l] = s[l]);
    else r.punycode = s
  }(this)
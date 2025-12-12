/** Chunk was on web.js **/
/** chunk id: 711739, original params: e (module,exports,re quire) **/
"use strict";
let t = 0x7fffffff,
  n = 36,
  r = 1,
  i = 26,
  o = 38,
  a = 700,
  s = 72,
  l = 128,
  c = "-",
  u = /^xn--/,
  d = /[^\0-\x7E]/,
  f = /[\x2E\u3002\uFF0E\uFF61]/g,
  p = {
    overflow: "Overflow: input needs wider integers to process",
    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
    "invalid-input": "Invalid input"
  },
  _ = 35,
  m = Math.floor,
  h = String.fromCharCode;

function g(e) {
  throw RangeError(p[e])
}

function E(e, t) {
  let n = [],
    r = e.length;
  for (; r--;) n[r] = t(e[r]);
  return n
}

function b(e, t) {
  let n = e.split("@"),
    r = "";
  return n.length > 1 && (r = n[0] + "@", e = n[1]), r + E((e = e.replace(f, ".")).split("."), t).join(".")
}

function y(e) {
  let t = [],
    n = 0,
    r = e.length;
  for (; n < r;) {
    let i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      let r = e.charCodeAt(n++);
      (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--)
    } else t.push(i)
  }
  return t
}
let O = function(e) {
    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : n
  },
  v = function(e, t) {
    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
  },
  S = function(e, t, r) {
    let s = 0;
    for (e = r ? m(e / a) : e >> 1, e += m(e / t); e > _ * i >> 1; s += n) e = m(e / _);
    return m(s + (_ + 1) * e / (e + o))
  },
  I = function(e) {
    let o = [],
      a = e.length,
      u = 0,
      d = l,
      f = s,
      p = e.lastIndexOf(c);
    p < 0 && (p = 0);
    for (let t = 0; t < p; ++t) e.charCodeAt(t) >= 128 && g("not-basic"), o.push(e.charCodeAt(t));
    for (let s = p > 0 ? p + 1 : 0; s < a;) {
      let l = u;
      for (let o = 1, l = n;; l += n) {
        s >= a && g("invalid-input");
        let c = O(e.charCodeAt(s++));
        (c >= n || c > m((t - u) / o)) && g("overflow"), u += c * o;
        let d = l <= f ? r : l >= f + i ? i : l - f;
        if (c < d) break;
        let p = n - d;
        o > m(t / p) && g("overflow"), o *= p
      }
      let c = o.length + 1;
      f = S(u - l, c, 0 == l), m(u / c) > t - d && g("overflow"), d += m(u / c), u %= c, o.splice(u++, 0, d)
    }
    return String.fromCodePoint(...o)
  },
  T = function(e) {
    let o = [],
      a = (e = y(e)).length,
      u = l,
      d = 0,
      f = s;
    for (let t of e) t < 128 && o.push(h(t));
    let p = o.length,
      _ = p;
    for (p && o.push(c); _ < a;) {
      let a = t;
      for (let t of e) t >= u && t < a && (a = t);
      let s = _ + 1;
      for (let l of (a - u > m((t - d) / s) && g("overflow"), d += (a - u) * s, u = a, e))
        if (l < u && ++d > t && g("overflow"), l == u) {
          let e = d;
          for (let t = n;; t += n) {
            let a = t <= f ? r : t >= f + i ? i : t - f;
            if (e < a) break;
            let s = e - a,
              l = n - a;
            o.push(h(v(a + s % l, 0))), e = m(s / l)
          }
          o.push(h(v(e, 0))), f = S(d, s, _ == p), d = 0, ++_
        }++ d, ++u
    }
    return o.join("")
  },
  C = function(e) {
    return b(e, function(e) {
      return u.test(e) ? I(e.slice(4).toLowerCase()) : e
    })
  },
  A = function(e) {
    return b(e, function(e) {
      return d.test(e) ? "xn--" + T(e) : e
    })
  };
module.exports = {
  version: "2.1.0",
  ucs2: {
    decode: y,
    encode: e => String.fromCodePoint(...e)
  },
  decode: I,
  encode: T,
  toASCII: A,
  toUnicode: C
}
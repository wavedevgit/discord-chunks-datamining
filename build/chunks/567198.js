/** Chunk was on web.js **/ ! function(t) {
  "use strict";
  var n, r = 1e9,
    i = {
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    o = !0,
    a = "[DecimalError] ",
    s = a + "Invalid argument: ",
    l = a + "Exponent out of range: ",
    c = Math.floor,
    u = Math.pow,
    d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    f = 1e7,
    p = 7,
    _ = 0x1fffffffffffff,
    h = c(1286742750677284.5),
    m = {};

  function g(e, t) {
    var n, r, i, a, s, l, c, u, d = e.constructor,
      _ = d.precision;
    if (!e.s || !t.s) return t.s || (t = new d(e)), o ? A(t, _) : t;
    if (c = e.d, u = t.d, s = e.e, i = t.e, c = c.slice(), a = s - i) {
      for (a < 0 ? (r = c, a = -a, l = u.length) : (r = u, i = s, l = c.length), a > (l = (s = Math.ceil(_ / p)) > l ? s + 1 : l + 1) && (a = l, r.length = 1), r.reverse(); a--;) r.push(0);
      r.reverse()
    }
    for ((l = c.length) - (a = u.length) < 0 && (a = l, r = u, u = c, c = r), n = 0; a;) n = (c[--a] = c[a] + u[a] + n) / f | 0, c[a] %= f;
    for (n && (c.unshift(n), ++i), l = c.length; 0 == c[--l];) c.pop();
    return t.d = c, t.e = i, o ? A(t, _) : t
  }

  function E(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(s + e)
  }

  function v(e) {
    var t, n, r, i = e.length - 1,
      o = "",
      a = e[0];
    if (i > 0) {
      for (o += a, t = 1; t < i; t++)(n = p - (r = e[t] + "").length) && (o += I(n)), o += r;
      (n = p - (r = (a = e[t]) + "").length) && (o += I(n))
    } else if (0 === a) return "0";
    for (; a % 10 == 0;) a /= 10;
    return o + a
  }
  m.absoluteValue = m.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
  }, m.comparedTo = m.cmp = function(e) {
    var t, n, r, i, o = this;
    if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
    if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
    for (t = 0, n = (r = o.d.length) < (i = e.d.length) ? r : i; t < n; ++t)
      if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
    return r === i ? 0 : r > i ^ o.s < 0 ? 1 : -1
  }, m.decimalPlaces = m.dp = function() {
    var e = this,
      t = e.d.length - 1,
      n = (t - e.e) * p;
    if (t = e.d[t])
      for (; t % 10 == 0; t /= 10) n--;
    return n < 0 ? 0 : n
  }, m.dividedBy = m.div = function(e) {
    return b(this, new this.constructor(e))
  }, m.dividedToIntegerBy = m.idiv = function(e) {
    var t = this,
      n = t.constructor;
    return A(b(t, new n(e), 0, 1), n.precision)
  }, m.equals = m.eq = function(e) {
    return !this.cmp(e)
  }, m.exponent = function() {
    return O(this)
  }, m.greaterThan = m.gt = function(e) {
    return this.cmp(e) > 0
  }, m.greaterThanOrEqualTo = m.gte = function(e) {
    return this.cmp(e) >= 0
  }, m.isInteger = m.isint = function() {
    return this.e > this.d.length - 2
  }, m.isNegative = m.isneg = function() {
    return this.s < 0
  }, m.isPositive = m.ispos = function() {
    return this.s > 0
  }, m.isZero = function() {
    return 0 === this.s
  }, m.lessThan = m.lt = function(e) {
    return 0 > this.cmp(e)
  }, m.lessThanOrEqualTo = m.lte = function(e) {
    return 1 > this.cmp(e)
  }, m.logarithm = m.log = function(e) {
    var t, r = this,
      i = r.constructor,
      s = i.precision,
      l = s + 5;
    if (void 0 === e) e = new i(10);
    else if ((e = new i(e)).s < 1 || e.eq(n)) throw Error(a + "NaN");
    if (r.s < 1) throw Error(a + (r.s ? "NaN" : "-Infinity"));
    return r.eq(n) ? new i(0) : (o = !1, t = b(T(r, l), T(e, l), l), o = !0, A(t, s))
  }, m.minus = m.sub = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? C(t, e) : g(t, (e.s = -e.s, e))
  }, m.modulo = m.mod = function(e) {
    var t, n = this,
      r = n.constructor,
      i = r.precision;
    if (!(e = new r(e)).s) throw Error(a + "NaN");
    return n.s ? (o = !1, t = b(n, e, 0, 1).times(e), o = !0, n.minus(t)) : A(new r(n), i)
  }, m.naturalExponential = m.exp = function() {
    return y(this)
  }, m.naturalLogarithm = m.ln = function() {
    return T(this)
  }, m.negated = m.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
  }, m.plus = m.add = function(e) {
    var t = this;
    return e = new t.constructor(e), t.s == e.s ? g(t, e) : C(t, (e.s = -e.s, e))
  }, m.precision = m.sd = function(e) {
    var t, n, r, i = this;
    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
    if (t = O(i) + 1, n = (r = i.d.length - 1) * p + 1, r = i.d[r]) {
      for (; r % 10 == 0; r /= 10) n--;
      for (r = i.d[0]; r >= 10; r /= 10) n++
    }
    return e && t > n ? t : n
  }, m.squareRoot = m.sqrt = function() {
    var e, t, n, r, i, s, l, u = this,
      d = u.constructor;
    if (u.s < 1) {
      if (!u.s) return new d(0);
      throw Error(a + "NaN")
    }
    for (e = O(u), o = !1, 0 == (i = Math.sqrt(+u)) || i == 1 / 0 ? (((t = v(u.d)).length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), r = new d(t = i == 1 / 0 ? "1e" + e : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new d(i.toString()), i = l = (n = d.precision) + 3;;)
      if (r = (s = r).plus(b(u, s, l + 2)).times(.5), v(s.d).slice(0, l) === (t = v(r.d)).slice(0, l)) {
        if (t = t.slice(l - 3, l + 1), i == l && "4999" == t) {
          if (A(s, n + 1, 0), s.times(s).eq(u)) {
            r = s;
            break
          }
        } else if ("9999" != t) break;
        l += 4
      } return o = !0, A(r, n)
  }, m.times = m.mul = function(e) {
    var t, n, r, i, a, s, l, c, u, d = this,
      p = d.constructor,
      _ = d.d,
      h = (e = new p(e)).d;
    if (!d.s || !e.s) return new p(0);
    for (e.s *= d.s, n = d.e + e.e, (c = _.length) < (u = h.length) && (a = _, _ = h, h = a, s = c, c = u, u = s), a = [], r = s = c + u; r--;) a.push(0);
    for (r = u; --r >= 0;) {
      for (t = 0, i = c + r; i > r;) l = a[i] + h[r] * _[i - r - 1] + t, a[i--] = l % f | 0, t = l / f | 0;
      a[i] = (a[i] + t) % f | 0
    }
    for (; !a[--s];) a.pop();
    return t ? ++n : a.shift(), e.d = a, e.e = n, o ? A(e, p.precision) : e
  }, m.toDecimalPlaces = m.todp = function(e, t) {
    var n = this,
      i = n.constructor;
    return (n = new i(n), void 0 === e) ? n : (E(e, 0, r), void 0 === t ? t = i.rounding : E(t, 0, 8), A(n, e + O(n) + 1, t))
  }, m.toExponential = function(e, t) {
    var n, i = this,
      o = i.constructor;
    return void 0 === e ? n = R(i, !0) : (E(e, 0, r), void 0 === t ? t = o.rounding : E(t, 0, 8), n = R(i = A(new o(i), e + 1, t), !0, e + 1)), n
  }, m.toFixed = function(e, t) {
    var n, i, o = this,
      a = o.constructor;
    return void 0 === e ? R(o) : (E(e, 0, r), void 0 === t ? t = a.rounding : E(t, 0, 8), n = R((i = A(new a(o), e + O(o) + 1, t)).abs(), !1, e + O(i) + 1), o.isneg() && !o.isZero() ? "-" + n : n)
  }, m.toInteger = m.toint = function() {
    var e = this,
      t = e.constructor;
    return A(new t(e), O(e) + 1, t.rounding)
  }, m.toNumber = function() {
    return +this
  }, m.toPower = m.pow = function(e) {
    var t, r, i, s, l, u, d = this,
      f = d.constructor,
      h = 12,
      m = +(e = new f(e));
    if (!e.s) return new f(n);
    if (!(d = new f(d)).s) {
      if (e.s < 1) throw Error(a + "Infinity");
      return d
    }
    if (d.eq(n)) return d;
    if (i = f.precision, e.eq(n)) return A(d, i);
    if (u = (t = e.e) >= (r = e.d.length - 1), l = d.s, u) {
      if ((r = m < 0 ? -m : m) <= _) {
        for (s = new f(n), t = Math.ceil(i / p + 4), o = !1; r % 2 && P((s = s.times(d)).d, t), 0 !== (r = c(r / 2));) P((d = d.times(d)).d, t);
        return o = !0, e.s < 0 ? new f(n).div(s) : A(s, i)
      }
    } else if (l < 0) throw Error(a + "NaN");
    return l = l < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, d.s = 1, o = !1, s = e.times(T(d, i + h)), o = !0, (s = y(s)).s = l, s
  }, m.toPrecision = function(e, t) {
    var n, i, o = this,
      a = o.constructor;
    return void 0 === e ? (n = O(o), i = R(o, n <= a.toExpNeg || n >= a.toExpPos)) : (E(e, 1, r), void 0 === t ? t = a.rounding : E(t, 0, 8), n = O(o = A(new a(o), e, t)), i = R(o, e <= n || n <= a.toExpNeg, e)), i
  }, m.toSignificantDigits = m.tosd = function(e, t) {
    var n = this,
      i = n.constructor;
    return void 0 === e ? (e = i.precision, t = i.rounding) : (E(e, 1, r), void 0 === t ? t = i.rounding : E(t, 0, 8)), A(new i(n), e, t)
  }, m.toString = m.valueOf = m.val = m.toJSON = function() {
    var e = this,
      t = O(e),
      n = e.constructor;
    return R(e, t <= n.toExpNeg || t >= n.toExpPos)
  };
  var b = function() {
    function e(e, t) {
      var n, r = 0,
        i = e.length;
      for (e = e.slice(); i--;) n = e[i] * t + r, e[i] = n % f | 0, r = n / f | 0;
      return r && e.unshift(r), e
    }

    function t(e, t, n, r) {
      var i, o;
      if (n != r) o = n > r ? 1 : -1;
      else
        for (i = o = 0; i < n; i++)
          if (e[i] != t[i]) {
            o = e[i] > t[i] ? 1 : -1;
            break
          } return o
    }

    function n(e, t, n) {
      for (var r = 0; n--;) e[n] -= r, r = +(e[n] < t[n]), e[n] = r * f + e[n] - t[n];
      for (; !e[0] && e.length > 1;) e.shift()
    }
    return function(r, i, o, s) {
      var l, c, u, d, _, h, m, g, E, v, b, y, S, I, T, N, C, R, P = r.constructor,
        w = r.s == i.s ? 1 : -1,
        D = r.d,
        L = i.d;
      if (!r.s) return new P(r);
      if (!i.s) throw Error(a + "Division by zero");
      for (u = 0, c = r.e - i.e, C = L.length, T = D.length, g = (m = new P(w)).d = []; L[u] == (D[u] || 0);) ++u;
      if (L[u] > (D[u] || 0) && --c, (y = null == o ? o = P.precision : s ? o + (O(r) - O(i)) + 1 : o) < 0) return new P(0);
      if (y = y / p + 2 | 0, u = 0, 1 == C)
        for (d = 0, L = L[0], y++;
          (u < T || d) && y--; u++) S = d * f + (D[u] || 0), g[u] = S / L | 0, d = S % L | 0;
      else {
        for ((d = f / (L[0] + 1) | 0) > 1 && (L = e(L, d), D = e(D, d), C = L.length, T = D.length), I = C, v = (E = D.slice(0, C)).length; v < C;) E[v++] = 0;
        (R = L.slice()).unshift(0), N = L[0], L[1] >= f / 2 && ++N;
        do d = 0, (l = t(L, E, C, v)) < 0 ? (b = E[0], C != v && (b = b * f + (E[1] || 0)), (d = b / N | 0) > 1 ? (d >= f && (d = f - 1), h = (_ = e(L, d)).length, v = E.length, 1 == (l = t(_, E, h, v)) && (d--, n(_, C < h ? R : L, h))) : (0 == d && (l = d = 1), _ = L.slice()), (h = _.length) < v && _.unshift(0), n(E, _, v), -1 == l && (v = E.length, (l = t(L, E, C, v)) < 1 && (d++, n(E, C < v ? R : L, v))), v = E.length) : 0 === l && (d++, E = [0]), g[u++] = d, l && E[0] ? E[v++] = D[I] || 0 : (E = [D[I]], v = 1); while ((I++ < T || void 0 !== E[0]) && y--)
      }
      return g[0] || g.shift(), m.e = c, A(m, s ? o + O(m) + 1 : o)
    }
  }();

  function y(e, t) {
    var r, i, a, s, c, d = 0,
      f = 0,
      p = e.constructor,
      _ = p.precision;
    if (O(e) > 16) throw Error(l + O(e));
    if (!e.s) return new p(n);
    for (null == t ? (o = !1, c = _) : c = t, s = new p(.03125); e.abs().gte(.1);) e = e.times(s), f += 5;
    for (c += Math.log(u(2, f)) / Math.LN10 * 2 + 5 | 0, r = i = a = new p(n), p.precision = c;;) {
      if (i = A(i.times(e), c), r = r.times(++d), v((s = a.plus(b(i, r, c))).d).slice(0, c) === v(a.d).slice(0, c)) {
        for (; f--;) a = A(a.times(a), c);
        return p.precision = _, null == t ? (o = !0, A(a, _)) : a
      }
      a = s
    }
  }

  function O(e) {
    for (var t = e.e * p, n = e.d[0]; n >= 10; n /= 10) t++;
    return t
  }

  function S(e, t, n) {
    if (t > e.LN10.sd()) throw o = !0, n && (e.precision = n), Error(a + "LN10 precision limit exceeded");
    return A(new e(e.LN10), t)
  }

  function I(e) {
    for (var t = ""; e--;) t += "0";
    return t
  }

  function T(e, t) {
    var r, i, s, l, c, u, d, f, p, _ = 1,
      h = 10,
      m = e,
      g = m.d,
      E = m.constructor,
      y = E.precision;
    if (m.s < 1) throw Error(a + (m.s ? "NaN" : "-Infinity"));
    if (m.eq(n)) return new E(0);
    if (null == t ? (o = !1, f = y) : f = t, m.eq(10)) return null == t && (o = !0), S(E, f);
    if (f += h, E.precision = f, i = (r = v(g)).charAt(0), !(15e14 > Math.abs(l = O(m)))) return d = S(E, f + 2, y).times(l + ""), m = T(new E(i + "." + r.slice(1)), f - h).plus(d), E.precision = y, null == t ? (o = !0, A(m, y)) : m;
    for (; i < 7 && 1 != i || 1 == i && r.charAt(1) > 3;) i = (r = v((m = m.times(e)).d)).charAt(0), _++;
    for (l = O(m), i > 1 ? (m = new E("0." + r), l++) : m = new E(i + "." + r.slice(1)), u = c = m = b(m.minus(n), m.plus(n), f), p = A(m.times(m), f), s = 3;;) {
      if (c = A(c.times(p), f), v((d = u.plus(b(c, new E(s), f))).d).slice(0, f) === v(u.d).slice(0, f)) return u = u.times(2), 0 !== l && (u = u.plus(S(E, f + 2, y).times(l + ""))), u = b(u, new E(_), f), E.precision = y, null == t ? (o = !0, A(u, y)) : u;
      u = d, s += 2
    }
  }

  function N(e, t) {
    var n, r, i;
    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) ++r;
    for (i = t.length; 48 === t.charCodeAt(i - 1);) --i;
    if (t = t.slice(r, i)) {
      if (i -= r, n = n - r - 1, e.e = c(n / p), e.d = [], r = (n + 1) % p, n < 0 && (r += p), r < i) {
        for (r && e.d.push(+t.slice(0, r)), i -= p; r < i;) e.d.push(+t.slice(r, r += p));
        r = p - (t = t.slice(r)).length
      } else r -= i;
      for (; r--;) t += "0";
      if (e.d.push(+t), o && (e.e > h || e.e < -h)) throw Error(l + n)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
  }

  function A(e, t, n) {
    var r, i, a, s, d, _, m, g, E = e.d;
    for (s = 1, a = E[0]; a >= 10; a /= 10) s++;
    if ((r = t - s) < 0) r += p, i = t, m = E[g = 0];
    else {
      if ((g = Math.ceil((r + 1) / p)) >= (a = E.length)) return e;
      for (s = 1, m = a = E[g]; a >= 10; a /= 10) s++;
      r %= p, i = r - p + s
    }
    if (void 0 !== n && (d = m / (a = u(10, s - i - 1)) % 10 | 0, _ = t < 0 || void 0 !== E[g + 1] || m % a, _ = n < 4 ? (d || _) && (0 == n || n == (e.s < 0 ? 3 : 2)) : d > 5 || 5 == d && (4 == n || _ || 6 == n && (r > 0 ? i > 0 ? m / u(10, s - i) : 0 : E[g - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !E[0]) return _ ? (a = O(e), E.length = 1, t = t - a - 1, E[0] = u(10, (p - t % p) % p), e.e = c(-t / p) || 0) : (E.length = 1, E[0] = e.e = e.s = 0), e;
    if (0 == r ? (E.length = g, a = 1, g--) : (E.length = g + 1, a = u(10, p - r), E[g] = i > 0 ? (m / u(10, s - i) % u(10, i) | 0) * a : 0), _)
      for (;;) {
        if (0 == g) {
          (E[0] += a) == f && (E[0] = 1, ++e.e);
          break
        }
        if (E[g] += a, E[g] != f) break;
        E[g--] = 0, a = 1
      }
    for (r = E.length; 0 === E[--r];) E.pop();
    if (o && (e.e > h || e.e < -h)) throw Error(l + O(e));
    return e
  }

  function C(e, t) {
    var n, r, i, a, s, l, c, u, d, _, h = e.constructor,
      m = h.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new h(e), o ? A(t, m) : t;
    if (c = e.d, _ = t.d, r = t.e, u = e.e, c = c.slice(), s = u - r) {
      for ((d = s < 0) ? (n = c, s = -s, l = _.length) : (n = _, r = u, l = c.length), s > (i = Math.max(Math.ceil(m / p), l) + 2) && (s = i, n.length = 1), n.reverse(), i = s; i--;) n.push(0);
      n.reverse()
    } else {
      for ((d = (i = c.length) < (l = _.length)) && (l = i), i = 0; i < l; i++)
        if (c[i] != _[i]) {
          d = c[i] < _[i];
          break
        } s = 0
    }
    for (d && (n = c, c = _, _ = n, t.s = -t.s), l = c.length, i = _.length - l; i > 0; --i) c[l++] = 0;
    for (i = _.length; i > s;) {
      if (c[--i] < _[i]) {
        for (a = i; a && 0 === c[--a];) c[a] = f - 1;
        --c[a], c[i] += f
      }
      c[i] -= _[i]
    }
    for (; 0 === c[--l];) c.pop();
    for (; 0 === c[0]; c.shift()) --r;
    return c[0] ? (t.d = c, t.e = r, o ? A(t, m) : t) : new h(0)
  }

  function R(e, t, n) {
    var r, i = O(e),
      o = v(e.d),
      a = o.length;
    return t ? (n && (r = n - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + I(r) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + I(-i - 1) + o, n && (r = n - a) > 0 && (o += I(r))) : i >= a ? (o += I(i + 1 - a), n && (r = n - i - 1) > 0 && (o = o + "." + I(r))) : ((r = i + 1) < a && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - a) > 0 && (i + 1 === a && (o += "."), o += I(r))), e.s < 0 ? "-" + o : o
  }

  function P(e, t) {
    if (e.length > t) return e.length = t, !0
  }

  function w(e) {
    var t, n, r;

    function i(e) {
      var t = this;
      if (!(t instanceof i)) return new i(e);
      if (t.constructor = i, e instanceof i) {
        t.s = e.s, t.e = e.e, t.d = (e = e.d) ? e.slice() : e;
        return
      }
      if ("number" == typeof e) {
        if (0 * e != 0) throw Error(s + e);
        if (e > 0) t.s = 1;
        else if (e < 0) e = -e, t.s = -1;
        else {
          t.s = 0, t.e = 0, t.d = [0];
          return
        }
        if (e === ~~e && e < 1e7) {
          t.e = 0, t.d = [e];
          return
        }
        return N(t, e.toString())
      }
      if ("string" != typeof e) throw Error(s + e);
      if (45 === e.charCodeAt(0) ? (e = e.slice(1), t.s = -1) : t.s = 1, d.test(e)) N(t, e);
      else throw Error(s + e)
    }
    if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = w, i.config = i.set = D, void 0 === e && (e = {}), e)
      for (t = 0, r = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; t < r.length;) e.hasOwnProperty(n = r[t++]) || (e[n] = this[n]);
    return i.config(e), i
  }

  function D(e) {
    if (!e || "object" != typeof e) throw Error(a + "Object expected");
    var t, n, i, o = ["precision", 1, r, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < o.length; t += 3)
      if (void 0 !== (i = e[n = o[t]])) {
        if (c(i) === i && i >= o[t + 1] && i <= o[t + 2]) this[n] = i;
        else throw Error(s + n + ": " + i)
      } if (void 0 !== (i = e[n = "LN10"])) {
      if (i == Math.LN10) this[n] = new this(i);
      else throw Error(s + n + ": " + i)
    }
    return this
  }(i = w(i)).default = i.Decimal = i, n = new i(1), "function" == typeof define && define.amd ? define(function() {
    return i
  }) : e.exports ? e.exports = i : (t || (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), t.Decimal = i)
}(this)
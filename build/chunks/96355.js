/** Chunk was on web.js **/ ! function(e, n) {
  n(t)
}(0, function(e) {
  "use strict";

  function t(e) {
    return 10 === e || 13 === e || 8232 === e || 8233 === e || 32 === e || 9 === e || 11 === e || 12 === e || 160 === e || e >= 5760 && e4.indexOf(e) >= 0
  }

  function n(e) {
    switch (32 | e) {
      case 109:
      case 122:
      case 108:
      case 104:
      case 118:
      case 99:
      case 115:
      case 113:
      case 116:
      case 97:
      case 114:
        return !0
    }
    return !1
  }

  function r(e) {
    return e >= 48 && e <= 57
  }

  function i(e) {
    return e >= 48 && e <= 57 || 43 === e || 45 === e || 46 === e
  }

  function o(e) {
    this.index = 0, this.path = e, this.max = e.length, this.result = [], this.param = 0, this.err = "", this.segmentStart = 0, this.data = []
  }

  function a(e) {
    for (; e.index < e.max && t(e.path.charCodeAt(e.index));) e.index++
  }

  function s(e) {
    var t, n = e.index,
      i = n,
      o = e.max,
      a = !1,
      s = !1,
      l = !1,
      c = !1;
    if (i >= o) return void(e.err = "SvgPath: missed param (at pos " + i + ")");
    if (43 !== (t = e.path.charCodeAt(i)) && 45 !== t || (t = ++i < o ? e.path.charCodeAt(i) : 0), !r(t) && 46 !== t) return void(e.err = "SvgPath: param should start with 0..9 or `.` (at pos " + i + ")");
    if (46 !== t) {
      if (a = 48 === t, t = ++i < o ? e.path.charCodeAt(i) : 0, a && i < o && t && r(t)) return void(e.err = "SvgPath: numbers started with `0` such as `09` are ilegal (at pos " + n + ")");
      for (; i < o && r(e.path.charCodeAt(i));) i++, s = !0;
      t = i < o ? e.path.charCodeAt(i) : 0
    }
    if (46 === t) {
      for (c = !0, i++; r(e.path.charCodeAt(i));) i++, l = !0;
      t = i < o ? e.path.charCodeAt(i) : 0
    }
    if (101 === t || 69 === t) {
      if (c && !s && !l || (43 !== (t = ++i < o ? e.path.charCodeAt(i) : 0) && 45 !== t || i++, !(i < o && r(e.path.charCodeAt(i))))) return void(e.err = "SvgPath: invalid float exponent (at pos " + i + ")");
      for (; i < o && r(e.path.charCodeAt(i));) i++
    }
    e.index = i, e.param = parseFloat(e.path.slice(n, i)) + 0
  }

  function l(e) {
    n = (t = e.path[e.segmentStart]).toLowerCase();
    var t, n, r = e.data;
    if ("m" === n && r.length > 2 && (e.result.push([t, r[0], r[1]]), r = r.slice(2), n = "l", t = "m" === t ? "l" : "L"), "r" === n) e.result.push([t].concat(r));
    else
      for (; r.length >= e3[n] && (e.result.push([t].concat(r.splice(0, e3[n]))), e3[n]););
  }

  function c(e) {
    var t, r, o, c = e.max;
    if (e.segmentStart = e.index, !n(e.path.charCodeAt(e.index))) return void(e.err = "SvgPath: bad command " + e.path[e.index] + " (at pos " + e.index + ")");
    if (r = e3[e.path[e.index].toLowerCase()], e.index++, a(e), e.data = [], !r) return void l(e);
    for (t = !1;;) {
      for (o = r; o > 0; o--) {
        if (s(e), e.err.length) return;
        e.data.push(e.param), a(e), t = !1, e.index < c && 44 === e.path.charCodeAt(e.index) && (e.index++, a(e), t = !0)
      }
      if (!t && (e.index >= e.max || !i(e.path.charCodeAt(e.index)))) break
    }
    l(e)
  }

  function u(e, t) {
    return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
  }

  function d() {
    if (!(this instanceof d)) return new d;
    this.queue = [], this.cache = null
  }

  function f(e, t, n, r) {
    var i = e * r - t * n < 0 ? -1 : 1,
      o = Math.sqrt(e * e + t * t),
      a = Math.sqrt(e * e + t * t),
      s = (e * n + t * r) / (o * a);
    return s > 1 && (s = 1), s < -1 && (s = -1), i * Math.acos(s)
  }

  function _(e, t, n, r, i, o, a, s, l, c) {
    var u = c * (e - n) / 2 + l * (t - r) / 2,
      d = -l * (e - n) / 2 + c * (t - r) / 2,
      _ = a * a,
      p = s * s,
      h = u * u,
      m = d * d,
      g = _ * p - _ * m - p * h;
    g < 0 && (g = 0), g /= _ * m + p * h;
    var E = (g = Math.sqrt(g) * (i === o ? -1 : 1)) * a / s * d,
      v = -(g * s) / a * u,
      b = c * E - l * v + (e + n) / 2,
      y = l * E + c * v + (t + r) / 2,
      O = (u - E) / a,
      I = (d - v) / s,
      S = (-u - E) / a,
      T = (-d - v) / s,
      N = f(1, 0, O, I),
      A = f(O, I, S, T);
    return 0 === o && A > 0 && (A -= tt), 1 === o && A < 0 && (A += tt), [b, y, N, A]
  }

  function p(e, t) {
    var n = 4 / 3 * Math.tan(t / 4),
      r = Math.cos(e),
      i = Math.sin(e),
      o = Math.cos(e + t),
      a = Math.sin(e + t);
    return [r, i, r - i * n, i + r * n, o + a * n, a - o * n, o, a]
  }

  function h(e, t, n) {
    if (!(this instanceof h)) return new h(e, t, n);
    this.rx = e, this.ry = t, this.ax = n
  }

  function m(e) {
    if (!(this instanceof m)) return new m(e);
    var t = e6(e);
    this.segments = t.segments, this.err = t.err, this.__stack = []
  }

  function g(e) {
    var t = e.match(tc);
    return t ? t.map(Number) : []
  }

  function E(e, t, n, r, i, o, a, s) {
    this.a = {
      x: e,
      y: t
    }, this.b = {
      x: n,
      y: r
    }, this.c = {
      x: i,
      y: o
    }, this.d = {
      x: a,
      y: s
    }, null != a && null != s ? (this.getArcLength = C, this.getPoint = I, this.getDerivative = b) : (this.getArcLength = S, this.getPoint = O, this.getDerivative = v), this.init()
  }

  function v(e, t, n) {
    return {
      x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
      y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
    }
  }

  function b(e, t, n) {
    return O([3 * (e[1] - e[0]), 3 * (e[2] - e[1]), 3 * (e[3] - e[2])], [3 * (t[1] - t[0]), 3 * (t[2] - t[1]), 3 * (t[3] - t[2])], n)
  }

  function y(e, t, n, r, i) {
    for (var o = 1, a = e / t, s = (e - n(r, i, a)) / t; o > .001;) {
      var l = n(r, i, a + s),
        c = n(r, i, a - s),
        u = Math.abs(e - l) / t,
        d = Math.abs(e - c) / t;
      u < o ? (o = u, a += s) : d < o ? (o = d, a -= s) : s /= 2
    }
    return a
  }

  function O(e, t, n) {
    return {
      x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
      y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
    }
  }

  function I(e, t, n) {
    return {
      x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
      y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
    }
  }

  function S(e, t, n) {
    void 0 === n && (n = 1);
    var r = e[0] - 2 * e[1] + e[2],
      i = t[0] - 2 * t[1] + t[2],
      o = 2 * e[1] - 2 * e[0],
      a = 2 * t[1] - 2 * t[0],
      s = 4 * (r * r + i * i),
      l = 4 * (r * o + i * a),
      c = o * o + a * a;
    if (0 === s) return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
    var u = l / (2 * s),
      d = n + u,
      f = c / s - u * u;
    return Math.sqrt(s) / 2 * (d * Math.sqrt(d * d + f) - u * Math.sqrt(u * u + f) + f * Math.log(Math.abs((d + Math.sqrt(d * d + f)) / (u + Math.sqrt(u * u + f)))))
  }

  function T(e, t) {
    return t_[e][t]
  }

  function N(e, t, n) {
    var r, i, o, a = n.length - 1;
    if (0 === a) return 0;
    if (0 === e) {
      for (i = 0, o = 0; o <= a; o++) i += T(a, o) * Math.pow(1 - t, a - o) * Math.pow(t, o) * n[o];
      return i
    }
    for (r = Array(a), o = 0; o < a; o++) r[o] = a * (n[o + 1] - n[o]);
    return N(e - 1, t, r)
  }

  function A(e, t, n) {
    var r = N(1, n, e),
      i = N(1, n, t);
    return Math.sqrt(r * r + i * i)
  }

  function C(e, t, n) {
    var r, i, o, a;
    for (void 0 === n && (n = 1), r = n / 2, i = 0, o = 0; o < 20; o++) a = r * td[20][o] + r, i += tf[20][o] * A(e, t, a);
    return r * i
  }

  function R(e, t, n, r) {
    var i = e * r - t * n < 0 ? -1 : 1,
      o = e * n + t * r;
    return o > 1 && (o = 1), o < -1 && (o = -1), i * Math.acos(o)
  }

  function P(e, t, n, r, i, o, a, s, l, c) {
    var u = c * (e - n) / 2 + l * (t - r) / 2,
      d = -l * (e - n) / 2 + c * (t - r) / 2,
      f = a * a,
      _ = s * s,
      p = u * u,
      h = d * d,
      m = f * _ - f * h - _ * p;
    m < 0 && (m = 0), m /= f * h + _ * p;
    var g = (m = Math.sqrt(m) * (i === o ? -1 : 1)) * a / s * d,
      E = -(m * s) / a * u,
      v = c * g - l * E + (e + n) / 2,
      b = l * g + c * E + (t + r) / 2,
      y = (u - g) / a,
      O = (d - E) / s,
      I = (-u - g) / a,
      S = (-d - E) / s,
      T = R(1, 0, y, O),
      N = R(y, O, I, S);
    return 0 === o && N > 0 && (N -= tp), 1 === o && N < 0 && (N += tp), [v, b, T, N]
  }

  function w(e, t) {
    var n = 4 / 3 * Math.tan(t / 4),
      r = Math.cos(e),
      i = Math.sin(e),
      o = Math.cos(e + t),
      a = Math.sin(e + t);
    return [r, i, r - i * n, i + r * n, o + a * n, a - o * n, o, a]
  }

  function D(e, t, n, r, i, o, a, s, l) {
    var c = 0,
      u = [],
      d = [];
    th(e, t, n, r, i, o, a, s, l).forEach(function(e) {
      var t = new tu(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]),
        n = t.getTotalLength();
      c += n, u.push(n), d.push(t)
    }), this.length = c, this.partialLengths = u, this.curves = d
  }

  function L(e, t, n, r) {
    this.x0 = e, this.x1 = t, this.y0 = n, this.y1 = r
  }

  function x(e, t) {
    return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]))
  }

  function M(e, t, n) {
    return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n]
  }

  function k(e, t) {
    return 1e-9 > x(e, t)
  }

  function j(e, t, n) {
    var r = e.map(function(e, n) {
      return U(e, t[n])
    });
    return function(e) {
      var t = r.map(function(t) {
        return t(e)
      });
      return n ? H(t) : t
    }
  }

  function U(e, t) {
    return function(n) {
      return e.map(function(e, r) {
        return e + n * (t[r] - e)
      })
    }
  }

  function G(e) {
    return "number" == typeof e && isFinite(e)
  }

  function B(e) {
    return V(e) ? e1(e) : [(e[0][0] + e[e.length - 1][0]) / 2, (e[0][1] + e[e.length - 1][1]) / 2]
  }

  function V(e) {
    for (var t = 0; t < e.length - 2; t++) {
      var n = e[t],
        r = e[t + 1],
        i = e[t + 2];
      if (n[0] * (r[1] - i[1]) + r[0] * (i[1] - n[1]) + i[0] * (n[1] - r[1])) return !0
    }
    return !1
  }

  function F(e) {
    return new to(e).abs()
  }

  function Z(e) {
    return e.toString().split("M").map(function(e, t) {
      return e = e.trim(), t && e ? "M" + e : e
    }).filter(function(e) {
      return e
    })
  }

  function H(e) {
    return "M" + e.join("L") + "Z"
  }

  function W(e) {
    return Z(F(e))
  }

  function Y(e, t) {
    var n = F(e);
    return K(n) || z(n, t)
  }

  function K(e) {
    var t = e.segments || [],
      n = [];
    if (!t.length || "M" !== t[0][0]) return !1;
    for (var r = 0; r < t.length; r++) {
      var i = t[r],
        o = i[0],
        a = i[1],
        s = i[2];
      if ("M" === o && r || "Z" === o) break;
      if ("M" === o || "L" === o) n.push([a, s]);
      else if ("H" === o) n.push([a, n[n.length - 1][1]]);
      else {
        if ("V" !== o) return !1;
        n.push([n[n.length - 1][0], a])
      }
    }
    return !!n.length && {
      ring: n
    }
  }

  function z(e, t) {
    var n, r, i = Z(e)[0],
      o = [],
      a = 3;
    if (!i) throw TypeError(tv);
    n = (r = q(i)).getTotalLength(), t && G(t) && t > 0 && (a = Math.max(a, Math.ceil(n / t)));
    for (var s = 0; s < a; s++) {
      var l = r.getPointAtLength(n * s / a);
      o.push([l.x, l.y])
    }
    return {
      ring: o,
      skipBisect: !0
    }
  }

  function q(e) {
    if ("undefined" != typeof window && window && window.document) try {
      var t = window.document.createElementNS("http://www.w3.org/2000/svg", "path");
      return t.setAttributeNS(null, "d", e), t
    } catch (e) {}
    return tE(e)
  }

  function Q(e, t) {
    for (var n = e.length + t, r = e2(e) / t, i = 0, o = 0, a = r / 2; e.length < n;) {
      var s = e[i],
        l = e[(i + 1) % e.length],
        c = x(s, l);
      a <= o + c ? (e.splice(i + 1, 0, c ? M(s, l, (a - o) / c) : s.slice(0)), a += r) : (o += c, i++)
    }
  }

  function X(e, t) {
    void 0 === t && (t = 1 / 0);
    for (var n = 0; n < e.length; n++)
      for (var r = e[n], i = n === e.length - 1 ? e[0] : e[n + 1]; x(r, i) > t;) i = M(r, i, .5), e.splice(n + 1, 0, i)
  }

  function J(e, t) {
    var n, r;
    if ("string" == typeof e) {
      var i = Y(e, t);
      e = i.ring, r = i.skipBisect
    } else if (!Array.isArray(e)) throw TypeError(tv);
    if (!$(n = e.slice(0))) throw TypeError(tv);
    return n.length > 1 && k(n[0], n[n.length - 1]) && n.pop(), e0(n) > 0 && n.reverse(), !r && t && G(t) && t > 0 && X(n, t), n
  }

  function $(e) {
    return e.every(function(e) {
      return Array.isArray(e) && e.length >= 2 && G(e[0]) && G(e[1])
    })
  }

  function ee(e, t, n) {
    var r;
    return r = e.length - t.length, Q(e, r < 0 ? -1 * r : 0), Q(t, r > 0 ? r : 0), ty(e, t), j(e, t, n)
  }

  function et(e, t, n) {
    n = n || 2;
    var r, i, o, a, s, l, c, u = t && t.length,
      d = u ? t[0] * n : e.length,
      f = en(e, 0, d, n, !0),
      _ = [];
    if (!f) return _;
    if (u && (f = ec(e, t, f, n)), e.length > 80 * n) {
      r = o = e[0], i = a = e[1];
      for (var p = n; p < d; p += n) s = e[p], l = e[p + 1], s < r && (r = s), l < i && (i = l), s > o && (o = s), l > a && (a = l);
      c = Math.max(o - r, a - i)
    }
    return ei(f, _, n, r, i, c), _
  }

  function en(e, t, n, r, i) {
    var o, a;
    if (i === eR(e, t, n, r) > 0)
      for (o = t; o < n; o += r) a = eN(o, e[o], e[o + 1], a);
    else
      for (o = n - r; o >= t; o -= r) a = eN(o, e[o], e[o + 1], a);
    return a && eb(a, a.next) && (eA(a), a = a.next), a
  }

  function er(e, t) {
    if (!e) return e;
    t || (t = e);
    var n, r = e;
    do
      if (n = !1, r.steiner || !eb(r, r.next) && 0 !== ev(r.prev, r, r.next)) r = r.next;
      else {
        if (eA(r), (r = t = r.prev) === r.next) return null;
        n = !0
      } while (n || r !== t);
    return t
  }

  function ei(e, t, n, r, i, o, a) {
    if (e) {
      !a && o && e_(e, r, i, o);
      for (var s, l, c = e; e.prev !== e.next;)
        if (s = e.prev, l = e.next, o ? ea(e, r, i, o) : eo(e)) t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), eA(e), e = l.next, c = l.next;
        else if ((e = l) === c) {
        a ? 1 === a ? ei(e = es(e, t, n), t, n, r, i, o, 2) : 2 === a && el(e, t, n, r, i, o) : ei(er(e), t, n, r, i, o, 1);
        break
      }
    }
  }

  function eo(e) {
    var t = e.prev,
      n = e,
      r = e.next;
    if (ev(t, n, r) >= 0) return !1;
    for (var i = e.next.next; i !== e.prev;) {
      if (eg(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) && ev(i.prev, i, i.next) >= 0) return !1;
      i = i.next
    }
    return !0
  }

  function ea(e, t, n, r) {
    var i = e.prev,
      o = e,
      a = e.next;
    if (ev(i, o, a) >= 0) return !1;
    for (var s = i.x < o.x ? i.x < a.x ? i.x : a.x : o.x < a.x ? o.x : a.x, l = i.y < o.y ? i.y < a.y ? i.y : a.y : o.y < a.y ? o.y : a.y, c = i.x > o.x ? i.x > a.x ? i.x : a.x : o.x > a.x ? o.x : a.x, u = i.y > o.y ? i.y > a.y ? i.y : a.y : o.y > a.y ? o.y : a.y, d = eh(s, l, t, n, r), f = eh(c, u, t, n, r), _ = e.nextZ; _ && _.z <= f;) {
      if (_ !== e.prev && _ !== e.next && eg(i.x, i.y, o.x, o.y, a.x, a.y, _.x, _.y) && ev(_.prev, _, _.next) >= 0) return !1;
      _ = _.nextZ
    }
    for (_ = e.prevZ; _ && _.z >= d;) {
      if (_ !== e.prev && _ !== e.next && eg(i.x, i.y, o.x, o.y, a.x, a.y, _.x, _.y) && ev(_.prev, _, _.next) >= 0) return !1;
      _ = _.prevZ
    }
    return !0
  }

  function es(e, t, n) {
    var r = e;
    do {
      var i = r.prev,
        o = r.next.next;
      !eb(i, o) && ey(i, r, r.next, o) && eI(i, o) && eI(o, i) && (t.push(i.i / n), t.push(r.i / n), t.push(o.i / n), eA(r), eA(r.next), r = e = o), r = r.next
    } while (r !== e);
    return r
  }

  function el(e, t, n, r, i, o) {
    var a = e;
    do {
      for (var s = a.next.next; s !== a.prev;) {
        if (a.i !== s.i && eE(a, s)) {
          var l = eT(a, s);
          return a = er(a, a.next), l = er(l, l.next), ei(a, t, n, r, i, o), void ei(l, t, n, r, i, o)
        }
        s = s.next
      }
      a = a.next
    } while (a !== e)
  }

  function ec(e, t, n, r) {
    var i, o, a, s, l, c = [];
    for (i = 0, o = t.length; i < o; i++) a = t[i] * r, s = i < o - 1 ? t[i + 1] * r : e.length, (l = en(e, a, s, r, !1)) === l.next && (l.steiner = !0), c.push(em(l));
    for (c.sort(eu), i = 0; i < c.length; i++) ed(c[i], n), n = er(n, n.next);
    return n
  }

  function eu(e, t) {
    return e.x - t.x
  }

  function ed(e, t) {
    if (t = ef(e, t)) {
      var n = eT(t, e);
      er(n, n.next)
    }
  }

  function ef(e, t) {
    var n, r = t,
      i = e.x,
      o = e.y,
      a = -1 / 0;
    do {
      if (o <= r.y && o >= r.next.y) {
        var s = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
        if (s <= i && s > a) {
          if (a = s, s === i) {
            if (o === r.y) return r;
            if (o === r.next.y) return r.next
          }
          n = r.x < r.next.x ? r : r.next
        }
      }
      r = r.next
    } while (r !== t);
    if (!n) return null;
    if (i === a) return n.prev;
    var l, c = n,
      u = n.x,
      d = n.y,
      f = 1 / 0;
    for (r = n.next; r !== c;) i >= r.x && r.x >= u && eg(o < d ? i : a, o, u, d, o < d ? a : i, o, r.x, r.y) && ((l = Math.abs(o - r.y) / (i - r.x)) < f || l === f && r.x > n.x) && eI(r, e) && (n = r, f = l), r = r.next;
    return n
  }

  function e_(e, t, n, r) {
    var i = e;
    do null === i.z && (i.z = eh(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== e);
    i.prevZ.nextZ = null, i.prevZ = null, ep(i)
  }

  function ep(e) {
    var t, n, r, i, o, a, s, l, c = 1;
    do {
      for (n = e, e = null, o = null, a = 0; n;) {
        for (a++, r = n, s = 0, t = 0; t < c && (s++, r = r.nextZ); t++);
        for (l = c; s > 0 || l > 0 && r;) 0 === s ? (i = r, r = r.nextZ, l--) : 0 !== l && r ? n.z <= r.z ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--) : (i = n, n = n.nextZ, s--), o ? o.nextZ = i : e = i, i.prevZ = o, o = i;
        n = r
      }
      o.nextZ = null, c *= 2
    } while (a > 1);
    return e
  }

  function eh(e, t, n, r, i) {
    return (e = 0x55555555 & ((e = 0x33333333 & ((e = 0xf0f0f0f & ((e = 0xff00ff & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (t = 0x55555555 & ((t = 0x33333333 & ((t = 0xf0f0f0f & ((t = 0xff00ff & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1
  }

  function em(e) {
    var t = e,
      n = e;
    do t.x < n.x && (n = t), t = t.next; while (t !== e);
    return n
  }

  function eg(e, t, n, r, i, o, a, s) {
    return (i - a) * (t - s) - (e - a) * (o - s) >= 0 && (e - a) * (r - s) - (n - a) * (t - s) >= 0 && (n - a) * (o - s) - (i - a) * (r - s) >= 0
  }

  function eE(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && !eO(e, t) && eI(e, t) && eI(t, e) && eS(e, t)
  }

  function ev(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
  }

  function eb(e, t) {
    return e.x === t.x && e.y === t.y
  }

  function ey(e, t, n, r) {
    return !!(eb(e, t) && eb(n, r) || eb(e, r) && eb(n, t)) || ev(e, t, n) > 0 != ev(e, t, r) > 0 && ev(n, r, e) > 0 != ev(n, r, t) > 0
  }

  function eO(e, t) {
    var n = e;
    do {
      if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && ey(n, n.next, e, t)) return !0;
      n = n.next
    } while (n !== e);
    return !1
  }

  function eI(e, t) {
    return 0 > ev(e.prev, e, e.next) ? ev(e, t, e.next) >= 0 && ev(e, e.prev, t) >= 0 : 0 > ev(e, t, e.prev) || 0 > ev(e, e.next, t)
  }

  function eS(e, t) {
    var n = e,
      r = !1,
      i = (e.x + t.x) / 2,
      o = (e.y + t.y) / 2;
    do n.y > o != n.next.y > o && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== e);
    return r
  }

  function eT(e, t) {
    var n = new eC(e.i, e.x, e.y),
      r = new eC(t.i, t.x, t.y),
      i = e.next,
      o = t.prev;
    return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
  }

  function eN(e, t, n, r) {
    var i = new eC(e, t, n);
    return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
  }

  function eA(e) {
    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
  }

  function eC(e, t, n) {
    this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }

  function eR(e, t, n, r) {
    for (var i = 0, o = t, a = n - r; o < n; o += r) i += (e[a] - e[o]) * (e[o + 1] + e[a + 1]), a = o;
    return i
  }

  function eP(e, t) {
    var n = t.id,
      r = t.bbox,
      i = null == t.properties ? {} : t.properties,
      o = ew(e, t);
    return null == n && null == r ? {
      type: "Feature",
      properties: i,
      geometry: o
    } : null == r ? {
      type: "Feature",
      id: n,
      properties: i,
      geometry: o
    } : {
      type: "Feature",
      id: n,
      bbox: r,
      properties: i,
      geometry: o
    }
  }

  function ew(e, t) {
    function n(e, t) {
      t.length && t.pop();
      for (var n = c[e < 0 ? ~e : e], r = 0, i = n.length; r < i; ++r) t.push(l(n[r], r));
      e < 0 && tN(t, i)
    }

    function r(e) {
      return l(e)
    }

    function i(e) {
      for (var t = [], r = 0, i = e.length; r < i; ++r) n(e[r], t);
      return t.length < 2 && t.push(t[0]), t
    }

    function o(e) {
      for (var t = i(e); t.length < 4;) t.push(t[0]);
      return t
    }

    function a(e) {
      return e.map(o)
    }

    function s(e) {
      var t, n = e.type;
      switch (n) {
        case "GeometryCollection":
          return {
            type: n, geometries: e.geometries.map(s)
          };
        case "Point":
          t = r(e.coordinates);
          break;
        case "MultiPoint":
          t = e.coordinates.map(r);
          break;
        case "LineString":
          t = i(e.arcs);
          break;
        case "MultiLineString":
          t = e.arcs.map(i);
          break;
        case "Polygon":
          t = a(e.arcs);
          break;
        case "MultiPolygon":
          t = e.arcs.map(a);
          break;
        default:
          return null
      }
      return {
        type: n,
        coordinates: t
      }
    }
    var l = tT(e.transform),
      c = e.arcs;
    return s(t)
  }

  function eD(e) {
    for (var t, n = -1, r = e.length, i = e[r - 1], o = 0; ++n < r;) t = i, i = e[n], o += t[0] * i[1] - t[1] * i[0];
    return Math.abs(o)
  }

  function eL(e, t) {
    function n(e) {
      switch (e.type) {
        case "GeometryCollection":
          e.geometries.forEach(n);
          break;
        case "Polygon":
          r(e.arcs);
          break;
        case "MultiPolygon":
          e.arcs.forEach(r)
      }
    }

    function r(e) {
      e.forEach(function(t) {
        t.forEach(function(t) {
          (o[t = t < 0 ? ~t : t] || (o[t] = [])).push(e)
        })
      }), a.push(e)
    }

    function i(t) {
      return eD(ew(e, {
        type: "Polygon",
        arcs: [t]
      }).coordinates[0])
    }
    var o = {},
      a = [],
      s = [];
    return t.forEach(n), a.forEach(function(e) {
      if (!e._) {
        var t = [],
          n = [e];
        for (e._ = 1, s.push(t); e = n.pop();) t.push(e), e.forEach(function(e) {
          e.forEach(function(e) {
            o[e < 0 ? ~e : e].forEach(function(e) {
              e._ || (e._ = 1, n.push(e))
            })
          })
        })
      }
    }), a.forEach(function(e) {
      delete e._
    }), {
      type: "MultiPolygon",
      arcs: s.map(function(t) {
        var n, r = [];
        if (t.forEach(function(e) {
            e.forEach(function(e) {
              e.forEach(function(e) {
                o[e < 0 ? ~e : e].length < 2 && r.push(e)
              })
            })
          }), (n = (r = tC(e, r)).length) > 1)
          for (var a, s, l = 1, c = i(r[0]); l < n; ++l)(a = i(r[l])) > c && (s = r[0], r[0] = r[l], r[l] = s, c = a);
        return r
      })
    }
  }

  function ex(e) {
    return function(t, n) {
      return tw(e(t), n)
    }
  }

  function eM(e, t) {
    var n = {},
      r = {
        type: "Topology",
        objects: {
          triangles: {
            type: "GeometryCollection",
            geometries: []
          }
        },
        arcs: []
      };
    return e.forEach(function(e) {
      var i = [];
      e.forEach(function(e, o) {
        var a = e[0] < e[1] ? e.join(",") : e[1] + "," + e[0],
          s = e.map(function(e) {
            return t[e]
          });
        a in n ? i.push(~n[a]) : (i.push(n[a] = r.arcs.length), r.arcs.push(s))
      }), r.objects.triangles.geometries.push({
        type: "Polygon",
        area: Math.abs(e0(e.map(function(e) {
          return t[e[0]]
        }))),
        arcs: [i]
      })
    }), r.objects.triangles.geometries.sort(function(e, t) {
      return e.area - t.area
    }), r
  }

  function ek(e, t) {
    for (var n = e.objects.triangles.geometries, r = tD(function(e) {
        return e.area
      }).left; n.length > t;) ! function() {
      var t = n[0],
        i = tP(n)[0][0],
        o = n[i],
        a = eL(e, [t, o]);
      a.area = t.area + o.area, a.type = "Polygon", a.arcs = a.arcs[0], n.splice(i, 1), n.shift(), n.splice(r(n, a.area), 0, a)
    }();
    if (t > n.length) throw RangeError("Can't collapse topology into " + t + " pieces.");
    return tA(e, e.objects.triangles).features.map(function(e) {
      return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0]
    })
  }

  function ej(e) {
    for (var t = tI(e.reduce(function(e, t) {
        return e.concat([t[0]], [t[1]])
      }, [])), n = [], r = 0, i = t.length; r < i; r += 3) n.push([
      [t[r], t[r + 1]],
      [t[r + 1], t[r + 2]],
      [t[r + 2], t[r]]
    ]);
    return n
  }

  function eU(e, t, n) {
    function r(e, t, a) {
      void 0 === t && (t = []), void 0 === a && (a = 0);
      for (var s = 0; s < e.length; s++) {
        var l = e.splice(s, 1),
          c = n[l[0]][t.length];
        a + c < i && (e.length ? r(e.slice(), t.concat(l), a + c) : (i = a + c, o = t.concat(l))), e.length && e.splice(s, 0, l[0])
      }
    }
    var i = 1 / 0,
      o = e.map(function(e, t) {
        return t
      });
    return r(o), o
  }

  function eG(e, t) {
    var n = x(B(e), B(t));
    return n * n
  }

  function eB(e, t, n) {
    void 0 === n && (n = {});
    var r = n.maxSegmentLength;
    void 0 === r && (r = 10);
    var i = n.string;
    void 0 === i && (i = !0);
    var o = n.single;
    void 0 === o && (o = !1);
    var a = J(e, r);
    a.length < t.length + 2 && Q(a, t.length + 2 - a.length);
    var s, l = tL(a, t.length),
      c = t.map(function(e) {
        return J(e, r)
      }),
      u = "string" == typeof e && e;
    return o && !t.every(function(e) {
      return "string" == typeof e
    }) || (s = t.slice(0)), eZ(l, c, {
      match: !0,
      string: i,
      single: o,
      t0: u,
      t1: s
    })
  }

  function eV(e, t, n) {
    void 0 === n && (n = {});
    var r = n.maxSegmentLength;
    void 0 === r && (r = 10);
    var i = n.string;
    void 0 === i && (i = !0);
    var o = n.single;
    void 0 === o && (o = !1);
    var a = eB(t, e, {
      maxSegmentLength: r,
      string: i,
      single: o
    });
    return o ? function(e) {
      return a(1 - e)
    } : a.map(function(e) {
      return function(t) {
        return e(1 - t)
      }
    })
  }

  function eF(e, t, n) {
    void 0 === n && (n = {});
    var r = n.maxSegmentLength;
    void 0 === r && (r = 10);
    var i = n.string;
    void 0 === i && (i = !0);
    var o = n.single;
    if (void 0 === o && (o = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length) throw TypeError(tb);
    var a, s, l = function(e) {
        return J(e, r)
      },
      c = e.map(l),
      u = t.map(l);
    return o ? (e.every(function(e) {
      return "string" == typeof e
    }) && (a = e.slice(0)), t.every(function(e) {
      return "string" == typeof e
    }) && (s = t.slice(0))) : (a = e.slice(0), s = t.slice(0)), eZ(c, u, {
      string: i,
      single: o,
      t0: a,
      t1: s,
      match: !1
    })
  }

  function eZ(e, t, n) {
    void 0 === n && (n = {});
    var r = n.string,
      i = n.single,
      o = n.t0,
      a = n.t1,
      s = n.match,
      l = s ? tx(e, t) : e.map(function(e, t) {
        return t
      }),
      c = l.map(function(n, i) {
        return ee(e[n], t[i], r)
      });
    if (s && Array.isArray(o) && (o = l.map(function(e) {
        return o[e]
      })), i && r && (Array.isArray(o) && (o = o.join(" ")), Array.isArray(a) && (a = a.join(" "))), i) {
      var u = r ? function(e) {
        return c.map(function(t) {
          return t(e)
        }).join(" ")
      } : function(e) {
        return c.map(function(t) {
          return t(e)
        })
      };
      return r && (o || a) ? function(e) {
        return e < 1e-4 && o || 1 - e < 1e-4 && a || u(e)
      } : u
    }
    return r ? (o = Array.isArray(o) ? o.map(function(e) {
      return "string" == typeof e && e
    }) : [], a = Array.isArray(a) ? a.map(function(e) {
      return "string" == typeof e && e
    }) : [], c.map(function(e, t) {
      return o[t] || a[t] ? function(n) {
        return n < 1e-4 && o[t] || 1 - n < 1e-4 && a[t] || e(n)
      } : e
    })) : c
  }

  function eH(e, t, n, r, i) {
    return ez(eq(e, t, n), r, eJ(e, t, n), 2 * Math.PI * n, i)
  }

  function eW(e, t, n, r, i) {
    var o = eH(t, n, r, e, i);
    return function(e) {
      return o(1 - e)
    }
  }

  function eY(e, t, n, r, i, o) {
    return ez(eQ(e, t, n, r), i, e$(e, t, n, r), 2 * n + 2 * r, o)
  }

  function eK(e, t, n, r, i, o) {
    var a = eY(t, n, r, i, e, o);
    return function(e) {
      return a(1 - e)
    }
  }

  function ez(e, t, n, r, i) {
    void 0 === i && (i = {});
    var o = i.maxSegmentLength;
    void 0 === o && (o = 10);
    var a = i.string;
    void 0 === a && (a = !0);
    var s, l = J(t, o);
    return G(r) && l.length < r / o && Q(l, Math.ceil(r / o - l.length)), s = j(e(l), l, a), a ? function(e) {
      return e < 1e-4 ? n : s(e)
    } : s
  }

  function eq(e, t, n) {
    return function(r) {
      var i = B(r),
        o = e2(r.concat([r[0]])),
        a = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]),
        s = 0;
      return r.map(function(i, l) {
        var c;
        return l && (s += x(i, r[l - 1])), [Math.cos(c = a + 2 * Math.PI * (o ? s / o : l / r.length)) * n + e, Math.sin(c) * n + t]
      })
    }
  }

  function eQ(e, t, n, r) {
    return function(i) {
      var o = B(i),
        a = e2(i.concat([i[0]])),
        s = Math.atan2(i[0][1] - o[1], i[0][0] - o[0]),
        l = 0;
      s < 0 && (s = 2 * Math.PI + s);
      var c = s / (2 * Math.PI);
      return i.map(function(o, s) {
        s && (l += x(o, i[s - 1]));
        var u = eX((c + (a ? l / a : s / i.length)) % 1);
        return [e + u[0] * n, t + u[1] * r]
      })
    }
  }

  function eX(e) {
    return e <= 1 / 8 ? [1, .5 + 4 * e] : e <= 3 / 8 ? [1.5 - 4 * e, 1] : e <= 5 / 8 ? [0, 2.5 - 4 * e] : e <= 7 / 8 ? [4 * e - 2.5, 0] : [1, 4 * e - 3.5]
  }

  function eJ(e, t, n) {
    var r = e - n + "," + t,
      i = e + n + "," + t,
      o = "A" + n + "," + n + ",0,1,1,";
    return "M" + r + o + i + o + r + "Z"
  }

  function e$(e, t, n, r) {
    var i = e + n,
      o = t + r;
    return "M" + e + "," + t + "L" + i + "," + t + "L" + i + "," + o + "L" + e + "," + o + "Z"
  }
  var e0 = function(e) {
      for (var t, n = -1, r = e.length, i = e[r - 1], o = 0; ++n < r;) t = i, i = e[n], o += t[1] * i[0] - t[0] * i[1];
      return o / 2
    },
    e1 = function(e) {
      for (var t, n, r = -1, i = e.length, o = 0, a = 0, s = e[i - 1], l = 0; ++r < i;) t = s, s = e[r], l += n = t[0] * s[1] - s[0] * t[1], o += (t[0] + s[0]) * n, a += (t[1] + s[1]) * n;
      return [o / (l *= 3), a / l]
    },
    e2 = function(e) {
      for (var t, n, r = -1, i = e.length, o = e[i - 1], a = o[0], s = o[1], l = 0; ++r < i;) t = a, n = s, a = (o = e[r])[0], s = o[1], t -= a, n -= s, l += Math.sqrt(t * t + n * n);
      return l
    },
    e3 = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      r: 4,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    },
    e4 = [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279],
    e6 = function(e) {
      var t = new o(e),
        n = t.max;
      for (a(t); t.index < n && !t.err.length;) c(t);
      return t.err.length ? t.result = [] : t.result.length && (0 > "mM".indexOf(t.result[0][0]) ? (t.err = "SvgPath: string should start with `M` or `m`", t.result = []) : t.result[0][0] = "M"), {
        err: t.err,
        segments: t.result
      }
    };
  d.prototype.matrix = function(e) {
    return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5] || (this.cache = null, this.queue.push(e)), this
  }, d.prototype.translate = function(e, t) {
    return 0 === e && 0 === t || (this.cache = null, this.queue.push([1, 0, 0, 1, e, t])), this
  }, d.prototype.scale = function(e, t) {
    return 1 === e && 1 === t || (this.cache = null, this.queue.push([e, 0, 0, t, 0, 0])), this
  }, d.prototype.rotate = function(e, t, n) {
    var r, i, o;
    return 0 !== e && (this.translate(t, n), i = Math.cos(r = e * Math.PI / 180), o = Math.sin(r), this.queue.push([i, o, -o, i, 0, 0]), this.cache = null, this.translate(-t, -n)), this
  }, d.prototype.skewX = function(e) {
    return 0 !== e && (this.cache = null, this.queue.push([1, 0, Math.tan(e * Math.PI / 180), 1, 0, 0])), this
  }, d.prototype.skewY = function(e) {
    return 0 !== e && (this.cache = null, this.queue.push([1, Math.tan(e * Math.PI / 180), 0, 1, 0, 0])), this
  }, d.prototype.toArray = function() {
    var e = this;
    if (this.cache) return this.cache;
    if (!this.queue.length) return this.cache = [1, 0, 0, 1, 0, 0], this.cache;
    if (this.cache = this.queue[0], 1 === this.queue.length) return this.cache;
    for (var t = 1; t < this.queue.length; t++) e.cache = u(e.cache, e.queue[t]);
    return this.cache
  }, d.prototype.calc = function(e, t, n) {
    var r;
    return this.queue.length ? (this.cache || (this.cache = this.toArray()), [e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]), e * r[1] + t * r[3] + (n ? 0 : r[5])]) : [e, t]
  };
  var e5 = d,
    e7 = {
      matrix: !0,
      scale: !0,
      rotate: !0,
      translate: !0,
      skewX: !0,
      skewY: !0
    },
    e8 = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
    e9 = /[\s,]+/,
    te = function(e) {
      var t, n, r = new e5;
      return e.split(e8).forEach(function(e) {
        if (e.length) {
          if (void 0 !== e7[e]) return void(t = e);
          switch (n = e.split(e9).map(function(e) {
              return +e || 0
            }), t) {
            case "matrix":
              return void(6 === n.length && r.matrix(n));
            case "scale":
              return void(1 === n.length ? r.scale(n[0], n[0]) : 2 === n.length && r.scale(n[0], n[1]));
            case "rotate":
              return void(1 === n.length ? r.rotate(n[0], 0, 0) : 3 === n.length && r.rotate(n[0], n[1], n[2]));
            case "translate":
              return void(1 === n.length ? r.translate(n[0], 0) : 2 === n.length && r.translate(n[0], n[1]));
            case "skewX":
              return void(1 === n.length && r.skewX(n[0]));
            case "skewY":
              return void(1 === n.length && r.skewY(n[0]))
          }
        }
      }), r
    },
    tt = 2 * Math.PI,
    tn = function(e, t, n, r, i, o, a, s, l) {
      var c = Math.sin(l * tt / 360),
        u = Math.cos(l * tt / 360),
        d = u * (e - n) / 2 + c * (t - r) / 2,
        f = -c * (e - n) / 2 + u * (t - r) / 2;
      if (0 === d && 0 === f || 0 === a || 0 === s) return [];
      var h = d * d / ((a = Math.abs(a)) * a) + f * f / ((s = Math.abs(s)) * s);
      h > 1 && (a *= Math.sqrt(h), s *= Math.sqrt(h));
      var m = _(e, t, n, r, i, o, a, s, c, u),
        g = [],
        E = m[2],
        v = m[3],
        b = Math.max(Math.ceil(Math.abs(v) / (tt / 4)), 1);
      v /= b;
      for (var y = 0; y < b; y++) g.push(p(E, v)), E += v;
      return g.map(function(e) {
        for (var t = 0; t < e.length; t += 2) {
          var n = e[t + 0],
            r = e[t + 1],
            i = u * (n *= a) - c * (r *= s),
            o = c * n + u * r;
          e[t + 0] = i + m[0], e[t + 1] = o + m[1]
        }
        return e
      })
    },
    tr = Math.PI / 180;
  h.prototype.transform = function(e) {
    var t = Math.cos(this.ax * tr),
      n = Math.sin(this.ax * tr),
      r = [this.rx * (e[0] * t + e[2] * n), this.rx * (e[1] * t + e[3] * n), this.ry * (-e[0] * n + e[2] * t), this.ry * (-e[1] * n + e[3] * t)],
      i = r[0] * r[0] + r[2] * r[2],
      o = r[1] * r[1] + r[3] * r[3],
      a = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])),
      s = (i + o) / 2;
    if (a < 1e-10 * s) return this.rx = this.ry = Math.sqrt(s), this.ax = 0, this;
    var l = r[0] * r[1] + r[2] * r[3],
      c = s + (a = Math.sqrt(a)) / 2,
      u = s - a / 2;
    return this.ax = 1e-10 > Math.abs(l) && 1e-10 > Math.abs(c - o) ? 90 : 180 * Math.atan(Math.abs(l) > Math.abs(c - o) ? (c - i) / l : l / (c - o)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(c), this.ry = Math.sqrt(u)) : (this.ax += 90, this.rx = Math.sqrt(u), this.ry = Math.sqrt(c)), this
  }, h.prototype.isDegenerate = function() {
    return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx
  };
  var ti = h;
  m.prototype.__matrix = function(e) {
    var t, n = this;
    e.queue.length && this.iterate(function(r, i, o, a) {
      var s, l, c, u;
      switch (r[0]) {
        case "v":
          l = 0 === (s = e.calc(0, r[1], !0))[0] ? ["v", s[1]] : ["l", s[0], s[1]];
          break;
        case "V":
          l = (s = e.calc(o, r[1], !1))[0] === e.calc(o, a, !1)[0] ? ["V", s[1]] : ["L", s[0], s[1]];
          break;
        case "h":
          l = 0 === (s = e.calc(r[1], 0, !0))[1] ? ["h", s[0]] : ["l", s[0], s[1]];
          break;
        case "H":
          l = (s = e.calc(r[1], a, !1))[1] === e.calc(o, a, !1)[1] ? ["H", s[0]] : ["L", s[0], s[1]];
          break;
        case "a":
        case "A":
          var d = e.toArray(),
            f = ti(r[1], r[2], r[3]).transform(d);
          if (d[0] * d[3] - d[1] * d[2] < 0 && (r[5] = r[5] ? "0" : "1"), s = e.calc(r[6], r[7], "a" === r[0]), "A" === r[0] && r[6] === o && r[7] === a || "a" === r[0] && 0 === r[6] && 0 === r[7]) {
            l = ["a" === r[0] ? "l" : "L", s[0], s[1]];
            break
          }
          l = f.isDegenerate() ? ["a" === r[0] ? "l" : "L", s[0], s[1]] : [r[0], f.rx, f.ry, f.ax, r[4], r[5], s[0], s[1]];
          break;
        case "m":
          u = i > 0, l = ["m", (s = e.calc(r[1], r[2], u))[0], s[1]];
          break;
        default:
          for (l = [c = r[0]], u = c.toLowerCase() === c, t = 1; t < r.length; t += 2) s = e.calc(r[t], r[t + 1], u), l.push(s[0], s[1])
      }
      n.segments[i] = l
    }, !0)
  }, m.prototype.__evaluateStack = function() {
    var e, t, n = this;
    if (this.__stack.length) {
      if (1 === this.__stack.length) return this.__matrix(this.__stack[0]), void(this.__stack = []);
      for (e = e5(), t = this.__stack.length; --t >= 0;) e.matrix(n.__stack[t].toArray());
      this.__matrix(e), this.__stack = []
    }
  }, m.prototype.toString = function() {
    var e, t, n = this,
      r = [];
    this.__evaluateStack();
    for (var i = 0; i < this.segments.length; i++) t = n.segments[i][0], e = i > 0 && "m" !== t && "M" !== t && t === n.segments[i - 1][0], r = r.concat(e ? n.segments[i].slice(1) : n.segments[i]);
    return r.join(" ").replace(/ ?([achlmqrstvz]) ?/gi, "$1").replace(/ \-/g, "-").replace(/zm/g, "z m")
  }, m.prototype.translate = function(e, t) {
    return this.__stack.push(e5().translate(e, t || 0)), this
  }, m.prototype.scale = function(e, t) {
    return this.__stack.push(e5().scale(e, t || 0 === t ? t : e)), this
  }, m.prototype.rotate = function(e, t, n) {
    return this.__stack.push(e5().rotate(e, t || 0, n || 0)), this
  }, m.prototype.skewX = function(e) {
    return this.__stack.push(e5().skewX(e)), this
  }, m.prototype.skewY = function(e) {
    return this.__stack.push(e5().skewY(e)), this
  }, m.prototype.matrix = function(e) {
    return this.__stack.push(e5().matrix(e)), this
  }, m.prototype.transform = function(e) {
    return e.trim() && this.__stack.push(te(e)), this
  }, m.prototype.round = function(e) {
    var t, n = 0,
      r = 0,
      i = 0,
      o = 0;
    return e = e || 0, this.__evaluateStack(), this.segments.forEach(function(a) {
      var s = a[0].toLowerCase() === a[0];
      switch (a[0]) {
        case "H":
        case "h":
          return s && (a[1] += i), i = a[1] - a[1].toFixed(e), void(a[1] = +a[1].toFixed(e));
        case "V":
        case "v":
          return s && (a[1] += o), o = a[1] - a[1].toFixed(e), void(a[1] = +a[1].toFixed(e));
        case "Z":
        case "z":
          return i = n, void(o = r);
        case "M":
        case "m":
          return s && (a[1] += i, a[2] += o), i = a[1] - a[1].toFixed(e), o = a[2] - a[2].toFixed(e), n = i, r = o, a[1] = +a[1].toFixed(e), void(a[2] = +a[2].toFixed(e));
        case "A":
        case "a":
          return s && (a[6] += i, a[7] += o), i = a[6] - a[6].toFixed(e), o = a[7] - a[7].toFixed(e), a[1] = +a[1].toFixed(e), a[2] = +a[2].toFixed(e), a[3] = +a[3].toFixed(e + 2), a[6] = +a[6].toFixed(e), void(a[7] = +a[7].toFixed(e));
        default:
          return t = a.length, s && (a[t - 2] += i, a[t - 1] += o), i = a[t - 2] - a[t - 2].toFixed(e), o = a[t - 1] - a[t - 1].toFixed(e), void a.forEach(function(t, n) {
            n && (a[n] = +a[n].toFixed(e))
          })
      }
    }), this
  }, m.prototype.iterate = function(e, t) {
    var n, r, i, o = this.segments,
      a = {},
      s = !1,
      l = 0,
      c = 0,
      u = 0,
      d = 0;
    if (t || this.__evaluateStack(), o.forEach(function(t, n) {
        var r = e(t, n, l, c);
        Array.isArray(r) && (a[n] = r, s = !0);
        var i = t[0] === t[0].toLowerCase();
        switch (t[0]) {
          case "m":
          case "M":
            return l = t[1] + (i ? l : 0), c = t[2] + (i ? c : 0), u = l, void(d = c);
          case "h":
          case "H":
            return void(l = t[1] + (i ? l : 0));
          case "v":
          case "V":
            return void(c = t[1] + (i ? c : 0));
          case "z":
          case "Z":
            return l = u, void(c = d);
          default:
            l = t[t.length - 2] + (i ? l : 0), c = t[t.length - 1] + (i ? c : 0)
        }
      }), !s) return this;
    for (i = [], n = 0; n < o.length; n++)
      if (void 0 !== a[n])
        for (r = 0; r < a[n].length; r++) i.push(a[n][r]);
      else i.push(o[n]);
    return this.segments = i, this
  }, m.prototype.abs = function() {
    return this.iterate(function(e, t, n, r) {
      var i, o = e[0],
        a = o.toUpperCase();
      if (o !== a) switch (e[0] = a, o) {
        case "v":
          return void(e[1] += r);
        case "a":
          return e[6] += n, void(e[7] += r);
        default:
          for (i = 1; i < e.length; i++) e[i] += i % 2 ? n : r
      }
    }, !0), this
  }, m.prototype.rel = function() {
    return this.iterate(function(e, t, n, r) {
      var i, o = e[0],
        a = o.toLowerCase();
      if (o !== a && (0 !== t || "M" !== o)) switch (e[0] = a, o) {
        case "V":
          return void(e[1] -= r);
        case "A":
          return e[6] -= n, void(e[7] -= r);
        default:
          for (i = 1; i < e.length; i++) e[i] -= i % 2 ? n : r
      }
    }, !0), this
  }, m.prototype.unarc = function() {
    return this.iterate(function(e, t, n, r) {
      var i, o, a, s = [],
        l = e[0];
      return "A" !== l && "a" !== l ? null : ("a" === l ? (o = n + e[6], a = r + e[7]) : (o = e[6], a = e[7]), 0 === (i = tn(n, r, o, a, e[4], e[5], e[1], e[2], e[3])).length ? [
        ["a" === e[0] ? "l" : "L", e[6], e[7]]
      ] : (i.forEach(function(e) {
        s.push(["C", e[2], e[3], e[4], e[5], e[6], e[7]])
      }), s))
    }), this
  }, m.prototype.unshort = function() {
    var e, t, n, r, i, o = this.segments;
    return this.iterate(function(a, s, l, c) {
      var u, d = a[0],
        f = d.toUpperCase();
      s && ("T" === f ? (u = "t" === d, "Q" === (n = o[s - 1])[0] ? (e = n[1] - l, t = n[2] - c) : "q" === n[0] ? (e = n[1] - n[3], t = n[2] - n[4]) : (e = 0, t = 0), r = -e, i = -t, u || (r += l, i += c), o[s] = [u ? "q" : "Q", r, i, a[1], a[2]]) : "S" === f && (u = "s" === d, "C" === (n = o[s - 1])[0] ? (e = n[3] - l, t = n[4] - c) : "c" === n[0] ? (e = n[3] - n[5], t = n[4] - n[6]) : (e = 0, t = 0), r = -e, i = -t, u || (r += l, i += c), o[s] = [u ? "c" : "C", r, i, a[1], a[2], a[3], a[4]]))
    }), this
  };
  var to = m,
    ta = {
      a: 7,
      c: 6,
      h: 1,
      l: 2,
      m: 2,
      q: 4,
      s: 4,
      t: 2,
      v: 1,
      z: 0
    },
    ts = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
    tl = function(e) {
      var t = [];
      return e.replace(ts, function(e, n, r) {
        var i = n.toLowerCase();
        for (r = g(r), "m" === i && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), i = "l", n = "m" === n ? "l" : "L"); r.length >= 0;) {
          if (r.length === ta[i]) return r.unshift(n), t.push(r);
          if (r.length < ta[i]) throw Error("malformed path data");
          t.push([n].concat(r.splice(0, ta[i])))
        }
      }), t
    },
    tc = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,
    tu = function(e, t, n, r, i, o, a, s) {
      return new E(e, t, n, r, i, o, a, s)
    };
  E.prototype = {
    constructor: E,
    init: function() {
      this.length = this.getArcLength([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y])
    },
    getTotalLength: function() {
      return this.length
    },
    getPointAtLength: function(e) {
      var t = y(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]);
      return this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t)
    },
    getTangentAtLength: function(e) {
      var t = y(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
        n = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], t),
        r = Math.sqrt(n.x * n.x + n.y * n.y);
      return r > 0 ? {
        x: n.x / r,
        y: n.y / r
      } : {
        x: 0,
        y: 0
      }
    },
    getPropertiesAtLength: function(e) {
      var t, n = y(e, this.length, this.getArcLength, [this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y]),
        r = this.getDerivative([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n),
        i = Math.sqrt(r.x * r.x + r.y * r.y);
      t = i > 0 ? {
        x: r.x / i,
        y: r.y / i
      } : {
        x: 0,
        y: 0
      };
      var o = this.getPoint([this.a.x, this.b.x, this.c.x, this.d.x], [this.a.y, this.b.y, this.c.y, this.d.y], n);
      return {
        x: o.x,
        y: o.y,
        tangentX: t.x,
        tangentY: t.y
      }
    }
  };
  var td = [
      [],
      [],
      [-.5773502691896257, .5773502691896257],
      [0, -.7745966692414834, .7745966692414834],
      [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526],
      [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664],
      [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152],
      [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585],
      [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363],
      [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904],
      [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717],
      [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057],
      [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192],
      [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881],
      [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123],
      [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854],
      [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499],
      [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174],
      [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309],
      [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844],
      [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949],
      [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895],
      [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992],
      [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522],
      [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]
    ],
    tf = [
      [],
      [],
      [1, 1],
      [.8888888888888888, .5555555555555556, .5555555555555556],
      [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385],
      [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908],
      [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036],
      [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697],
      [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626],
      [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544],
      [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814],
      [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366],
      [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183],
      [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588],
      [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186],
      [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727],
      [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096],
      [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793],
      [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331],
      [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478],
      [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118],
      [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335],
      [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722],
      [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771],
      [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]
    ],
    t_ = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1]
    ],
    tp = 2 * Math.PI,
    th = function(e, t, n, r, i, o, a, s, l) {
      var c = Math.sin(i * tp / 360),
        u = Math.cos(i * tp / 360),
        d = u * (e - s) / 2 + c * (t - l) / 2,
        f = -c * (e - s) / 2 + u * (t - l) / 2;
      if (0 === d && 0 === f || 0 === n || 0 === r) return [];
      var _ = d * d / ((n = Math.abs(n)) * n) + f * f / ((r = Math.abs(r)) * r);
      _ > 1 && (n *= Math.sqrt(_), r *= Math.sqrt(_));
      var p = P(e, t, s, l, o, a, n, r, c, u),
        h = [],
        m = p[2],
        g = p[3],
        E = Math.max(Math.ceil(Math.abs(g) / (tp / 4)), 1);
      g /= E;
      for (var v = 0; v < E; v++) h.push(w(m, g)), m += g;
      return h.map(function(e) {
        for (var t = 0; t < e.length; t += 2) {
          var i = e[t + 0],
            o = e[t + 1],
            a = u * (i *= n) - c * (o *= r),
            s = c * i + u * o;
          e[t + 0] = a + p[0], e[t + 1] = s + p[1]
        }
        return e
      })
    },
    tm = function(e, t, n, r, i, o, a, s, l) {
      return new D(e, t, n, r, i, o, a, s, l)
    };
  D.prototype = {
    constructor: D,
    init: function() {},
    getTotalLength: function() {
      return this.length
    },
    getPointAtLength: function(e) {
      var t = this;
      e < 0 ? e = 0 : e > this.length && (e = this.length);
      for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0;) n--;
      n < this.partialLengths.length - 1 && n++;
      for (var r = 0, i = 0; i < n; i++) r += t.partialLengths[i];
      return this.curves[n].getPointAtLength(e - r)
    },
    getTangentAtLength: function(e) {
      var t = this;
      e < 0 ? e = 0 : e > this.length && (e = this.length);
      for (var n = this.partialLengths.length - 1; this.partialLengths[n] >= e && this.partialLengths[n] > 0;) n--;
      n < this.partialLengths.length - 1 && n++;
      for (var r = 0, i = 0; i < n; i++) r += t.partialLengths[i];
      return this.curves[n].getTangentAtLength(e - r)
    },
    getPropertiesAtLength: function(e) {
      var t = this.getTangentAtLength(e),
        n = this.getPointAtLength(e);
      return {
        x: n.x,
        y: n.y,
        tangentX: t.x,
        tangentY: t.y
      }
    }
  };
  var tg = function(e, t, n, r) {
    return new L(e, t, n, r)
  };
  L.prototype.getTotalLength = function() {
    return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2))
  }, L.prototype.getPointAtLength = function(e) {
    var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)),
      n = (this.x1 - this.x0) * t,
      r = (this.y1 - this.y0) * t;
    return {
      x: this.x0 + n,
      y: this.y0 + r
    }
  }, L.prototype.getTangentAtLength = function() {
    var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
    return {
      x: (this.x1 - this.x0) / e,
      y: (this.y1 - this.y0) / e
    }
  }, L.prototype.getPropertiesAtLength = function(e) {
    var t = this.getPointAtLength(e),
      n = this.getTangentAtLength();
    return {
      x: t.x,
      y: t.y,
      tangentX: n.x,
      tangentY: n.y
    }
  };
  var tE = function(e) {
      function t(e) {
        if (!e) return null;
        for (var o, a = tl(e), s = [0, 0], l = [0, 0], c = 0; c < a.length; c++) "M" === a[c][0] ? (s = [a[c][1], a[c][2]], i.push(null)) : "m" === a[c][0] ? (s = [a[c][1] + s[0], a[c][2] + s[1]], i.push(null)) : "L" === a[c][0] ? (n += Math.sqrt(Math.pow(s[0] - a[c][1], 2) + Math.pow(s[1] - a[c][2], 2)), i.push(new tg(s[0], a[c][1], s[1], a[c][2])), s = [a[c][1], a[c][2]]) : "l" === a[c][0] ? (n += Math.sqrt(Math.pow(a[c][1], 2) + Math.pow(a[c][2], 2)), i.push(new tg(s[0], a[c][1] + s[0], s[1], a[c][2] + s[1])), s = [a[c][1] + s[0], a[c][2] + s[1]]) : "H" === a[c][0] ? (n += Math.abs(s[0] - a[c][1]), i.push(new tg(s[0], a[c][1], s[1], s[1])), s[0] = a[c][1]) : "h" === a[c][0] ? (n += Math.abs(a[c][1]), i.push(new tg(s[0], s[0] + a[c][1], s[1], s[1])), s[0] = a[c][1] + s[0]) : "V" === a[c][0] ? (n += Math.abs(s[1] - a[c][1]), i.push(new tg(s[0], s[0], s[1], a[c][1])), s[1] = a[c][1]) : "v" === a[c][0] ? (n += Math.abs(a[c][1]), i.push(new tg(s[0], s[0], s[1], s[1] + a[c][1])), s[1] = a[c][1] + s[1]) : "z" === a[c][0] || "Z" === a[c][0] ? (n += Math.sqrt(Math.pow(a[0][1] - s[0], 2) + Math.pow(a[0][2] - s[1], 2)), i.push(new tg(s[0], a[0][1], s[1], a[0][2])), s = [a[0][1], a[0][2]]) : "C" === a[c][0] ? (o = new tu(s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4], a[c][5], a[c][6]), n += o.getTotalLength(), s = [a[c][5], a[c][6]], i.push(o)) : "c" === a[c][0] ? (o = new tu(s[0], s[1], s[0] + a[c][1], s[1] + a[c][2], s[0] + a[c][3], s[1] + a[c][4], s[0] + a[c][5], s[1] + a[c][6]), n += o.getTotalLength(), s = [a[c][5] + s[0], a[c][6] + s[1]], i.push(o)) : "S" === a[c][0] ? (o = c > 0 && ["C", "c", "S", "s"].indexOf(a[c - 1][0]) > -1 ? new tu(s[0], s[1], 2 * s[0] - a[c - 1][a[c - 1].length - 4], 2 * s[1] - a[c - 1][a[c - 1].length - 3], a[c][1], a[c][2], a[c][3], a[c][4]) : new tu(s[0], s[1], s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4]), n += o.getTotalLength(), s = [a[c][3], a[c][4]], i.push(o)) : "s" === a[c][0] ? (o = c > 0 && ["C", "c", "S", "s"].indexOf(a[c - 1][0]) > -1 ? new tu(s[0], s[1], s[0] + o.d.x - o.c.x, s[1] + o.d.y - o.c.y, s[0] + a[c][1], s[1] + a[c][2], s[0] + a[c][3], s[1] + a[c][4]) : new tu(s[0], s[1], s[0], s[1], s[0] + a[c][1], s[1] + a[c][2], s[0] + a[c][3], s[1] + a[c][4]), n += o.getTotalLength(), s = [a[c][3] + s[0], a[c][4] + s[1]], i.push(o)) : "Q" === a[c][0] ? (o = new tu(s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4]), n += o.getTotalLength(), i.push(o), s = [a[c][3], a[c][4]], l = [a[c][1], a[c][2]]) : "q" === a[c][0] ? (o = new tu(s[0], s[1], s[0] + a[c][1], s[1] + a[c][2], s[0] + a[c][3], s[1] + a[c][4]), n += o.getTotalLength(), l = [s[0] + a[c][1], s[1] + a[c][2]], s = [a[c][3] + s[0], a[c][4] + s[1]], i.push(o)) : "T" === a[c][0] ? (o = c > 0 && ["Q", "q", "T", "t"].indexOf(a[c - 1][0]) > -1 ? new tu(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], a[c][1], a[c][2]) : new tg(s[0], a[c][1], s[1], a[c][2]), i.push(o), n += o.getTotalLength(), l = [2 * s[0] - l[0], 2 * s[1] - l[1]], s = [a[c][1], a[c][2]]) : "t" === a[c][0] ? (o = c > 0 && ["Q", "q", "T", "t"].indexOf(a[c - 1][0]) > -1 ? new tu(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], s[0] + a[c][1], s[1] + a[c][2]) : new tg(s[0], s[0] + a[c][1], s[1], s[1] + a[c][2]), n += o.getTotalLength(), l = [2 * s[0] - l[0], 2 * s[1] - l[1]], s = [a[c][1] + s[0], a[c][2] + s[0]], i.push(o)) : "A" === a[c][0] ? (o = new tm(s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4], a[c][5], a[c][6], a[c][7]), n += o.getTotalLength(), s = [a[c][6], a[c][7]], i.push(o)) : "a" === a[c][0] && (o = new tm(s[0], s[1], a[c][1], a[c][2], a[c][3], a[c][4], a[c][5], s[0] + a[c][6], s[1] + a[c][7]), n += o.getTotalLength(), s = [s[0] + a[c][6], s[1] + a[c][7]], i.push(o)), r.push(n);
        return t
      }
      var n = 0,
        r = [],
        i = [];
      t.getTotalLength = function() {
        return n
      }, t.getPointAtLength = function(e) {
        var t = o(e);
        return i[t.i].getPointAtLength(t.fraction)
      }, t.getTangentAtLength = function(e) {
        var t = o(e);
        return i[t.i].getTangentAtLength(t.fraction)
      }, t.getPropertiesAtLength = function(e) {
        var t = o(e);
        return i[t.i].getPropertiesAtLength(t.fraction)
      };
      var o = function(e) {
        e < 0 ? e = 0 : e > n && (e = n);
        for (var t = r.length - 1; r[t] >= e && r[t] > 0;) t--;
        return {
          fraction: e - r[++t - 1],
          i: t
        }
      };
      return t(e)
    },
    tv = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',
    tb = "flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",
    ty = function(e, t) {
      for (var n, r, i, o = e.length, a = 1 / 0, s = 0; s < o; s++) ! function(i) {
        r = 0, t.forEach(function(t, n) {
          var a = x(e[(i + n) % o], t);
          r += a * a
        }), r < a && (a = r, n = i)
      }(s);
      n && (i = e.splice(0, n), e.splice.apply(e, [e.length, 0].concat(i)))
    },
    tO = function(e, t, n) {
      void 0 === n && (n = {});
      var r = n.maxSegmentLength;
      void 0 === r && (r = 10);
      var i = n.string;
      void 0 === i && (i = !0);
      var o = ee(J(e, r), J(t, r), i);
      return i && ("string" == typeof e || "string" == typeof t) ? function(n) {
        return n < 1e-4 && "string" == typeof e ? e : 1 - n < 1e-4 && "string" == typeof t ? t : o(n)
      } : o
    },
    tI = et;
  et.deviation = function(e, t, n, r) {
    var i = t && t.length,
      o = i ? t[0] * n : e.length,
      a = Math.abs(eR(e, 0, o, n));
    if (i)
      for (var s = 0, l = t.length; s < l; s++) {
        var c = t[s] * n,
          u = s < l - 1 ? t[s + 1] * n : e.length;
        a -= Math.abs(eR(e, c, u, n))
      }
    var d = 0;
    for (s = 0; s < r.length; s += 3) {
      var f = r[s] * n,
        _ = r[s + 1] * n,
        p = r[s + 2] * n;
      d += Math.abs((e[f] - e[p]) * (e[_ + 1] - e[f + 1]) - (e[f] - e[_]) * (e[p + 1] - e[f + 1]))
    }
    return 0 === a && 0 === d ? 0 : Math.abs((d - a) / a)
  }, et.flatten = function(e) {
    for (var t = e[0][0].length, n = {
        vertices: [],
        holes: [],
        dimensions: t
      }, r = 0, i = 0; i < e.length; i++) {
      for (var o = 0; o < e[i].length; o++)
        for (var a = 0; a < t; a++) n.vertices.push(e[i][o][a]);
      i > 0 && (r += e[i - 1].length, n.holes.push(r))
    }
    return n
  };
  var tS = function(e) {
      return e
    },
    tT = function(e) {
      if (null == e) return tS;
      var t, n, r = e.scale[0],
        i = e.scale[1],
        o = e.translate[0],
        a = e.translate[1];
      return function(e, s) {
        s || (t = n = 0);
        var l = 2,
          c = e.length,
          u = Array(c);
        for (u[0] = (t += e[0]) * r + o, u[1] = (n += e[1]) * i + a; l < c;) u[l] = e[l], ++l;
        return u
      }
    },
    tN = function(e, t) {
      for (var n, r = e.length, i = r - t; i < --r;) n = e[i], e[i++] = e[r], e[r] = n
    },
    tA = function(e, t) {
      return "GeometryCollection" === t.type ? {
        type: "FeatureCollection",
        features: t.geometries.map(function(t) {
          return eP(e, t)
        })
      } : eP(e, t)
    },
    tC = function(e, t) {
      function n(t) {
        var n, r = e.arcs[t < 0 ? ~t : t],
          i = r[0];
        return e.transform ? (n = [0, 0], r.forEach(function(e) {
          n[0] += e[0], n[1] += e[1]
        })) : n = r[r.length - 1], t < 0 ? [n, i] : [i, n]
      }

      function r(e, t) {
        for (var n in e) {
          var r = e[n];
          delete t[r.start], delete r.start, delete r.end, r.forEach(function(e) {
            i[e < 0 ? ~e : e] = 1
          }), s.push(r)
        }
      }
      var i = {},
        o = {},
        a = {},
        s = [],
        l = -1;
      return t.forEach(function(n, r) {
        var i, o = e.arcs[n < 0 ? ~n : n];
        !(o.length < 3) || o[1][0] || o[1][1] || (i = t[++l], t[l] = n, t[r] = i)
      }), t.forEach(function(e) {
        var t, r, i = n(e),
          s = i[0],
          l = i[1];
        if (t = a[s]) {
          if (delete a[t.end], t.push(e), t.end = l, r = o[l]) {
            delete o[r.start];
            var c = r === t ? t : t.concat(r);
            o[c.start = t.start] = a[c.end = r.end] = c
          } else o[t.start] = a[t.end] = t
        } else if (t = o[l]) {
          if (delete o[t.start], t.unshift(e), t.start = s, r = a[s]) {
            delete a[r.end];
            var u = r === t ? t : r.concat(t);
            o[u.start = r.start] = a[u.end = t.end] = u
          } else o[t.start] = a[t.end] = t
        } else o[(t = [e]).start = s] = a[t.end = l] = t
      }), r(a, o), r(o, a), t.forEach(function(e) {
        i[e < 0 ? ~e : e] || s.push([e])
      }), s
    },
    tR = function(e, t) {
      for (var n = 0, r = e.length; n < r;) {
        var i = n + r >>> 1;
        e[i] < t ? n = i + 1 : r = i
      }
      return n
    },
    tP = function(e) {
      function t(e, t) {
        e.forEach(function(e) {
          e < 0 && (e = ~e);
          var n = i[e];
          n ? n.push(t) : i[e] = [t]
        })
      }

      function n(e, n) {
        e.forEach(function(e) {
          t(e, n)
        })
      }

      function r(e, t) {
        "GeometryCollection" === e.type ? e.geometries.forEach(function(e) {
          r(e, t)
        }) : e.type in a && a[e.type](e.arcs, t)
      }
      var i = {},
        o = e.map(function() {
          return []
        }),
        a = {
          LineString: t,
          MultiLineString: n,
          Polygon: n,
          MultiPolygon: function(e, t) {
            e.forEach(function(e) {
              n(e, t)
            })
          }
        };
      for (var s in e.forEach(r), i)
        for (var l = i[s], c = l.length, u = 0; u < c; ++u)
          for (var d = u + 1; d < c; ++d) {
            var f, _ = l[u],
              p = l[d];
            (f = o[_])[s = tR(f, p)] !== p && f.splice(s, 0, p), (f = o[p])[s = tR(f, _)] !== _ && f.splice(s, 0, _)
          }
      return o
    },
    tw = function(e, t) {
      return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    },
    tD = function(e) {
      return 1 === e.length && (e = ex(e)), {
        left: function(t, n, r, i) {
          for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
            var o = r + i >>> 1;
            0 > e(t[o], n) ? r = o + 1 : i = o
          }
          return r
        },
        right: function(t, n, r, i) {
          for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
            var o = r + i >>> 1;
            e(t[o], n) > 0 ? i = o : r = o + 1
          }
          return r
        }
      }
    },
    tL = (tD(tw).right, function(e, t) {
      return ek(eM(ej(e), e), t)
    }),
    tx = function(e, t) {
      if (e.length > 8) return e.map(function(e, t) {
        return t
      });
      var n = e.map(function(e) {
        return t.map(function(t) {
          return eG(e, t)
        })
      });
      return eU(e, t, n)
    };
  e.interpolate = tO, e.separate = eB, e.combine = eV, e.interpolateAll = eF, e.splitPathString = W, e.toPathString = H, e.fromCircle = eH, e.toCircle = eW, e.fromRect = eY, e.toRect = eK, Object.defineProperty(e, "__esModule", {
    value: !0
  })
})
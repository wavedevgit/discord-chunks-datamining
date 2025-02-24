/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/ ! function(t, n) {
  e.exports = n()
}(0, function() {
  "use strict";
  for (var e = function(e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e
    }, t = e, n = function(e) {
      e._clipped = !1, e._unclipped = e.slice(0);
      for (var n = 0; n <= 3; n++) n < 3 ? ((e[n] < 0 || e[n] > 255) && (e._clipped = !0), e[n] = t(e[n], 0, 255)) : 3 === n && (e[n] = t(e[n], 0, 1));
      return e
    }, r = {}, i = 0, o = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i < o.length; i += 1) {
    var a = o[i];
    r["[object " + a + "]"] = a.toLowerCase()
  }
  var s = function(e) {
      return r[Object.prototype.toString.call(e)] || "object"
    },
    l = s,
    c = s,
    u = Math.PI,
    d = {
      clip_rgb: n,
      limit: e,
      type: s,
      unpack: function(e, t) {
        return (void 0 === t && (t = null), e.length >= 3) ? Array.prototype.slice.call(e) : "object" == l(e[0]) && t ? t.split("").filter(function(t) {
          return void 0 !== e[0][t]
        }).map(function(t) {
          return e[0][t]
        }) : e[0]
      },
      last: function(e) {
        if (e.length < 2) return null;
        var t = e.length - 1;
        return "string" == c(e[t]) ? e[t].toLowerCase() : null
      },
      TWOPI: 2 * u,
      PITHIRD: u / 3,
      DEG2RAD: u / 180,
      RAD2DEG: 180 / u
    },
    f = {
      format: {},
      autodetect: []
    },
    p = d.last,
    _ = d.clip_rgb,
    h = d.type,
    m = f,
    g = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = this;
      if ("object" === h(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
      var r = p(e),
        i = !1;
      if (!r) {
        i = !0, m.sorted || (m.autodetect = m.autodetect.sort(function(e, t) {
          return t.p - e.p
        }), m.sorted = !0);
        for (var o = 0, a = m.autodetect; o < a.length; o += 1) {
          var s = a[o];
          if (r = s.test.apply(s, e)) break
        }
      }
      if (m.format[r]) {
        var l = m.format[r].apply(null, i ? e : e.slice(0, -1));
        n._rgb = _(l)
      } else throw Error("unknown format: " + e);
      3 === n._rgb.length && n._rgb.push(1)
    };
  g.prototype.toString = function() {
    return "function" == h(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
  };
  var E = g,
    v = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      return new(Function.prototype.bind.apply(v.Color, [null].concat(e)))
    };
  v.Color = E, v.version = "2.4.2";
  var b = v,
    y = d.unpack,
    O = Math.max,
    S = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = y(e, "rgb"),
        r = n[0],
        i = n[1],
        o = n[2],
        a = 1 - O(r /= 255, O(i /= 255, o /= 255)),
        s = a < 1 ? 1 / (1 - a) : 0;
      return [(1 - r - a) * s, (1 - i - a) * s, (1 - o - a) * s, a]
    },
    I = d.unpack,
    T = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = (e = I(e, "cmyk"))[0],
        r = e[1],
        i = e[2],
        o = e[3],
        a = e.length > 4 ? e[4] : 1;
      return 1 === o ? [0, 0, 0, a] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - o), r >= 1 ? 0 : 255 * (1 - r) * (1 - o), i >= 1 ? 0 : 255 * (1 - i) * (1 - o), a]
    },
    N = b,
    A = E,
    C = f,
    R = d.unpack,
    P = d.type,
    w = S;
  A.prototype.cmyk = function() {
    return w(this._rgb)
  }, N.cmyk = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(A, [null].concat(e, ["cmyk"])))
  }, C.format.cmyk = T, C.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === P(e = R(e, "cmyk")) && 4 === e.length) return "cmyk"
    }
  });
  var D = d.unpack,
    x = d.last,
    L = function(e) {
      return Math.round(100 * e) / 100
    },
    M = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = D(e, "hsla"),
        r = x(e) || "lsa";
      return n[0] = L(n[0] || 0), n[1] = L(100 * n[1]) + "%", n[2] = L(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
    },
    k = d.unpack,
    j = function() {
      for (var e, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
      var i = (n = k(n, "rgba"))[0],
        o = n[1],
        a = n[2],
        s = Math.min(i /= 255, o /= 255, a /= 255),
        l = Math.max(i, o, a),
        c = (l + s) / 2;
      return (l === s ? (e = 0, t = Number.NaN) : e = c < .5 ? (l - s) / (l + s) : (l - s) / (2 - l - s), i == l ? t = (o - a) / (l - s) : o == l ? t = 2 + (a - i) / (l - s) : a == l && (t = 4 + (i - o) / (l - s)), (t *= 60) < 0 && (t += 360), n.length > 3 && void 0 !== n[3]) ? [t, e, c, n[3]] : [t, e, c]
    },
    U = d.unpack,
    G = d.last,
    B = M,
    Z = j,
    F = Math.round,
    V = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = U(e, "rgba"),
        r = G(e) || "rgb";
      return "hsl" == r.substr(0, 3) ? B(Z(n), r) : (n[0] = F(n[0]), n[1] = F(n[1]), n[2] = F(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
    },
    H = d.unpack,
    W = Math.round,
    Y = function() {
      for (var e, t, n, r, i = [], o = arguments.length; o--;) i[o] = arguments[o];
      var a = (i = H(i, "hsl"))[0],
        s = i[1],
        l = i[2];
      if (0 === s) t = n = r = 255 * l;
      else {
        var c = [0, 0, 0],
          u = [0, 0, 0],
          d = l < .5 ? l * (1 + s) : l + s - l * s,
          f = 2 * l - d,
          p = a / 360;
        c[0] = p + 1 / 3, c[1] = p, c[2] = p - 1 / 3;
        for (var _ = 0; _ < 3; _++) c[_] < 0 && (c[_] += 1), c[_] > 1 && (c[_] -= 1), 6 * c[_] < 1 ? u[_] = f + (d - f) * 6 * c[_] : 2 * c[_] < 1 ? u[_] = d : 3 * c[_] < 2 ? u[_] = f + (d - f) * (2 / 3 - c[_]) * 6 : u[_] = f;
        t = (e = [W(255 * u[0]), W(255 * u[1]), W(255 * u[2])])[0], n = e[1], r = e[2]
      }
      return i.length > 3 ? [t, n, r, i[3]] : [t, n, r, 1]
    },
    K = Y,
    z = f,
    q = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
    Q = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
    X = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    J = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    $ = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    ee = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    et = Math.round,
    en = function(e) {
      if (e = e.toLowerCase().trim(), z.format.named) try {
        return z.format.named(e)
      } catch (e) {}
      if (t = e.match(q)) {
        for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
        return n[3] = 1, n
      }
      if (t = e.match(Q)) {
        for (var i = t.slice(1, 5), o = 0; o < 4; o++) i[o] = +i[o];
        return i
      }
      if (t = e.match(X)) {
        for (var a = t.slice(1, 4), s = 0; s < 3; s++) a[s] = et(2.55 * a[s]);
        return a[3] = 1, a
      }
      if (t = e.match(J)) {
        for (var l = t.slice(1, 5), c = 0; c < 3; c++) l[c] = et(2.55 * l[c]);
        return l[3] = +l[3], l
      }
      if (t = e.match($)) {
        var u = t.slice(1, 4);
        u[1] *= .01, u[2] *= .01;
        var d = K(u);
        return d[3] = 1, d
      }
      if (t = e.match(ee)) {
        var f = t.slice(1, 4);
        f[1] *= .01, f[2] *= .01;
        var p = K(f);
        return p[3] = +t[4], p
      }
    };
  en.test = function(e) {
    return q.test(e) || Q.test(e) || X.test(e) || J.test(e) || $.test(e) || ee.test(e)
  };
  var er = en,
    ei = b,
    eo = E,
    ea = f,
    es = d.type,
    el = V,
    ec = er;
  eo.prototype.css = function(e) {
    return el(this._rgb, e)
  }, ei.css = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(eo, [null].concat(e, ["css"])))
  }, ea.format.css = ec, ea.autodetect.push({
    p: 5,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === es(e) && ec.test(e)) return "css"
    }
  });
  var eu = E,
    ed = b,
    ef = f,
    ep = d.unpack;
  ef.format.gl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = ep(e, "rgba");
    return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
  }, ed.gl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(eu, [null].concat(e, ["gl"])))
  }, eu.prototype.gl = function() {
    var e = this._rgb;
    return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
  };
  var e_ = d.unpack,
    eh = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      var r = e_(t, "rgb"),
        i = r[0],
        o = r[1],
        a = r[2],
        s = Math.min(i, o, a),
        l = Math.max(i, o, a),
        c = l - s,
        u = 100 * c / 255,
        d = s / (255 - c) * 100;
      return 0 === c ? e = Number.NaN : (i === l && (e = (o - a) / c), o === l && (e = 2 + (a - i) / c), a === l && (e = 4 + (i - o) / c), (e *= 60) < 0 && (e += 360)), [e, u, d]
    },
    em = d.unpack,
    eg = Math.floor,
    eE = function() {
      for (var e, t, n, r, i, o, a, s, l, c = [], u = arguments.length; u--;) c[u] = arguments[u];
      var d = (c = em(c, "hcg"))[0],
        f = c[1],
        p = c[2];
      p *= 255;
      var _ = 255 * f;
      if (0 === f) a = s = l = p;
      else {
        360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
        var h = eg(d /= 60),
          m = d - h,
          g = p * (1 - f),
          E = g + _ * (1 - m),
          v = g + _ * m,
          b = g + _;
        switch (h) {
          case 0:
            a = (e = [b, v, g])[0], s = e[1], l = e[2];
            break;
          case 1:
            a = (t = [E, b, g])[0], s = t[1], l = t[2];
            break;
          case 2:
            a = (n = [g, b, v])[0], s = n[1], l = n[2];
            break;
          case 3:
            a = (r = [g, E, b])[0], s = r[1], l = r[2];
            break;
          case 4:
            a = (i = [v, g, b])[0], s = i[1], l = i[2];
            break;
          case 5:
            a = (o = [b, g, E])[0], s = o[1], l = o[2]
        }
      }
      return [a, s, l, c.length > 3 ? c[3] : 1]
    },
    ev = d.unpack,
    eb = d.type,
    ey = b,
    eO = E,
    eS = f,
    eI = eh;
  eO.prototype.hcg = function() {
    return eI(this._rgb)
  }, ey.hcg = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(eO, [null].concat(e, ["hcg"])))
  }, eS.format.hcg = eE, eS.autodetect.push({
    p: 1,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === eb(e = ev(e, "hcg")) && 3 === e.length) return "hcg"
    }
  });
  var eT = d.unpack,
    eN = d.last,
    eA = Math.round,
    eC = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eT(e, "rgba"),
        r = n[0],
        i = n[1],
        o = n[2],
        a = n[3],
        s = eN(e) || "auto";
      void 0 === a && (a = 1), "auto" === s && (s = a < 1 ? "rgba" : "rgb"), r = eA(r);
      var l = "000000" + (r << 16 | (i = eA(i)) << 8 | (o = eA(o))).toString(16);
      l = l.substr(l.length - 6);
      var c = "0" + eA(255 * a).toString(16);
      switch (c = c.substr(c.length - 2), s.toLowerCase()) {
        case "rgba":
          return "#" + l + c;
        case "argb":
          return "#" + c + l;
        default:
          return "#" + l
      }
    },
    eR = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    eP = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
    ew = function(e) {
      if (e.match(eR)) {
        (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        var t = parseInt(e, 16);
        return [t >> 16, t >> 8 & 255, 255 & t, 1]
      }
      if (e.match(eP)) {
        (5 === e.length || 9 === e.length) && (e = e.substr(1)), 4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        var n = parseInt(e, 16);
        return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
      }
      throw Error("unknown hex color: " + e)
    },
    eD = b,
    ex = E,
    eL = d.type,
    eM = f,
    ek = eC;
  ex.prototype.hex = function(e) {
    return ek(this._rgb, e)
  }, eD.hex = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(ex, [null].concat(e, ["hex"])))
  }, eM.format.hex = ew, eM.autodetect.push({
    p: 4,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === eL(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex"
    }
  });
  var ej = d.unpack,
    eU = d.TWOPI,
    eG = Math.min,
    eB = Math.sqrt,
    eZ = Math.acos,
    eF = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      var r = ej(t, "rgb"),
        i = r[0],
        o = r[1],
        a = r[2],
        s = eG(i /= 255, o /= 255, a /= 255),
        l = (i + o + a) / 3,
        c = l > 0 ? 1 - s / l : 0;
      return 0 === c ? e = NaN : (e = eZ(e = (i - o + (i - a)) / 2 / eB((i - o) * (i - o) + (i - a) * (o - a))), a > o && (e = eU - e), e /= eU), [360 * e, c, l]
    },
    eV = d.unpack,
    eH = d.limit,
    eW = d.TWOPI,
    eY = d.PITHIRD,
    eK = Math.cos,
    ez = function() {
      for (var e, t, n, r = [], i = arguments.length; i--;) r[i] = arguments[i];
      var o = (r = eV(r, "hsi"))[0],
        a = r[1],
        s = r[2];
      return isNaN(o) && (o = 0), isNaN(a) && (a = 0), o > 360 && (o -= 360), o < 0 && (o += 360), (o /= 360) < 1 / 3 ? t = 1 - ((n = (1 - a) / 3) + (e = (1 + a * eK(eW * o) / eK(eY - eW * o)) / 3)) : o < 2 / 3 ? (o -= 1 / 3, n = 1 - ((e = (1 - a) / 3) + (t = (1 + a * eK(eW * o) / eK(eY - eW * o)) / 3))) : (o -= 2 / 3, e = 1 - ((t = (1 - a) / 3) + (n = (1 + a * eK(eW * o) / eK(eY - eW * o)) / 3))), e = eH(s * e * 3), [255 * e, 255 * (t = eH(s * t * 3)), 255 * (n = eH(s * n * 3)), r.length > 3 ? r[3] : 1]
    },
    eq = d.unpack,
    eQ = d.type,
    eX = b,
    eJ = E,
    e$ = f,
    e0 = eF;
  eJ.prototype.hsi = function() {
    return e0(this._rgb)
  }, eX.hsi = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(eJ, [null].concat(e, ["hsi"])))
  }, e$.format.hsi = ez, e$.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === eQ(e = eq(e, "hsi")) && 3 === e.length) return "hsi"
    }
  });
  var e1 = d.unpack,
    e2 = d.type,
    e3 = b,
    e4 = E,
    e6 = f,
    e5 = j;
  e4.prototype.hsl = function() {
    return e5(this._rgb)
  }, e3.hsl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(e4, [null].concat(e, ["hsl"])))
  }, e6.format.hsl = Y, e6.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === e2(e = e1(e, "hsl")) && 3 === e.length) return "hsl"
    }
  });
  var e7 = d.unpack,
    e8 = Math.min,
    e9 = Math.max,
    te = function() {
      for (var e, t, n, r = [], i = arguments.length; i--;) r[i] = arguments[i];
      var o = (r = e7(r, "rgb"))[0],
        a = r[1],
        s = r[2],
        l = e8(o, a, s),
        c = e9(o, a, s),
        u = c - l;
      return n = c / 255, 0 === c ? (e = Number.NaN, t = 0) : (t = u / c, o === c && (e = (a - s) / u), a === c && (e = 2 + (s - o) / u), s === c && (e = 4 + (o - a) / u), (e *= 60) < 0 && (e += 360)), [e, t, n]
    },
    tt = d.unpack,
    tn = Math.floor,
    tr = function() {
      for (var e, t, n, r, i, o, a, s, l, c = [], u = arguments.length; u--;) c[u] = arguments[u];
      var d = (c = tt(c, "hsv"))[0],
        f = c[1],
        p = c[2];
      if (p *= 255, 0 === f) a = s = l = p;
      else {
        360 === d && (d = 0), d > 360 && (d -= 360), d < 0 && (d += 360);
        var _ = tn(d /= 60),
          h = d - _,
          m = p * (1 - f),
          g = p * (1 - f * h),
          E = p * (1 - f * (1 - h));
        switch (_) {
          case 0:
            a = (e = [p, E, m])[0], s = e[1], l = e[2];
            break;
          case 1:
            a = (t = [g, p, m])[0], s = t[1], l = t[2];
            break;
          case 2:
            a = (n = [m, p, E])[0], s = n[1], l = n[2];
            break;
          case 3:
            a = (r = [m, g, p])[0], s = r[1], l = r[2];
            break;
          case 4:
            a = (i = [E, m, p])[0], s = i[1], l = i[2];
            break;
          case 5:
            a = (o = [p, m, g])[0], s = o[1], l = o[2]
        }
      }
      return [a, s, l, c.length > 3 ? c[3] : 1]
    },
    ti = d.unpack,
    to = d.type,
    ta = b,
    ts = E,
    tl = f,
    tc = te;
  ts.prototype.hsv = function() {
    return tc(this._rgb)
  }, ta.hsv = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(ts, [null].concat(e, ["hsv"])))
  }, tl.format.hsv = tr, tl.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === to(e = ti(e, "hsv")) && 3 === e.length) return "hsv"
    }
  });
  var tu = {
      Kn: 18,
      Xn: .95047,
      Yn: 1,
      Zn: 1.08883,
      t0: .137931034,
      t1: .206896552,
      t2: .12841855,
      t3: .008856452
    },
    td = tu,
    tf = d.unpack,
    tp = Math.pow,
    t_ = function(e) {
      return (e /= 255) <= .04045 ? e / 12.92 : tp((e + .055) / 1.055, 2.4)
    },
    th = function(e) {
      return e > td.t3 ? tp(e, 1 / 3) : e / td.t2 + td.t0
    },
    tm = function(e, t, n) {
      return e = t_(e), [th((.4124564 * e + .3575761 * (t = t_(t)) + .1804375 * (n = t_(n))) / td.Xn), th((.2126729 * e + .7151522 * t + .072175 * n) / td.Yn), th((.0193339 * e + .119192 * t + .9503041 * n) / td.Zn)]
    },
    tg = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tf(e, "rgb"),
        r = tm(n[0], n[1], n[2]),
        i = r[0],
        o = r[1],
        a = r[2],
        s = 116 * o - 16;
      return [s < 0 ? 0 : s, 500 * (i - o), 200 * (o - a)]
    },
    tE = tu,
    tv = d.unpack,
    tb = Math.pow,
    ty = function(e) {
      return 255 * (e <= .00304 ? 12.92 * e : 1.055 * tb(e, 1 / 2.4) - .055)
    },
    tO = function(e) {
      return e > tE.t1 ? e * e * e : tE.t2 * (e - tE.t0)
    },
    tS = function() {
      for (var e, t, n, r, i = [], o = arguments.length; o--;) i[o] = arguments[o];
      var a = (i = tv(i, "lab"))[0],
        s = i[1],
        l = i[2];
      return t = (a + 16) / 116, e = isNaN(s) ? t : t + s / 500, n = isNaN(l) ? t : t - l / 200, t = tE.Yn * tO(t), r = ty(3.2404542 * (e = tE.Xn * tO(e)) - 1.5371385 * t - .4985314 * (n = tE.Zn * tO(n))), [r, ty(-.969266 * e + 1.8760108 * t + .041556 * n), ty(.0556434 * e - .2040259 * t + 1.0572252 * n), i.length > 3 ? i[3] : 1]
    },
    tI = d.unpack,
    tT = d.type,
    tN = b,
    tA = E,
    tC = f,
    tR = tg;
  tA.prototype.lab = function() {
    return tR(this._rgb)
  }, tN.lab = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(tA, [null].concat(e, ["lab"])))
  }, tC.format.lab = tS, tC.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === tT(e = tI(e, "lab")) && 3 === e.length) return "lab"
    }
  });
  var tP = d.unpack,
    tw = d.RAD2DEG,
    tD = Math.sqrt,
    tx = Math.atan2,
    tL = Math.round,
    tM = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tP(e, "lab"),
        r = n[0],
        i = n[1],
        o = n[2],
        a = tD(i * i + o * o),
        s = (tx(o, i) * tw + 360) % 360;
      return 0 === tL(1e4 * a) && (s = Number.NaN), [r, a, s]
    },
    tk = d.unpack,
    tj = tg,
    tU = tM,
    tG = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tk(e, "rgb"),
        r = tj(n[0], n[1], n[2]);
      return tU(r[0], r[1], r[2])
    },
    tB = d.unpack,
    tZ = d.DEG2RAD,
    tF = Math.sin,
    tV = Math.cos,
    tH = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tB(e, "lch"),
        r = n[0],
        i = n[1],
        o = n[2];
      return isNaN(o) && (o = 0), [r, tV(o *= tZ) * i, tF(o) * i]
    },
    tW = d.unpack,
    tY = tH,
    tK = tS,
    tz = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tY((e = tW(e, "lch"))[0], e[1], e[2]),
        r = tK(n[0], n[1], n[2]);
      return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1]
    },
    tq = d.unpack,
    tQ = tz,
    tX = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tq(e, "hcl").reverse();
      return tQ.apply(void 0, n)
    },
    tJ = d.unpack,
    t$ = d.type,
    t0 = b,
    t1 = E,
    t2 = f,
    t3 = tG;
  t1.prototype.lch = function() {
    return t3(this._rgb)
  }, t1.prototype.hcl = function() {
    return t3(this._rgb).reverse()
  }, t0.lch = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(t1, [null].concat(e, ["lch"])))
  }, t0.hcl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(t1, [null].concat(e, ["hcl"])))
  }, t2.format.lch = tz, t2.format.hcl = tX, ["lch", "hcl"].forEach(function(e) {
    return t2.autodetect.push({
      p: 2,
      test: function() {
        for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
        if ("array" === t$(t = tJ(t, e)) && 3 === t.length) return e
      }
    })
  });
  var t4 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    t6 = E,
    t5 = f,
    t7 = d.type,
    t8 = t4,
    t9 = ew,
    ne = eC;
  t6.prototype.name = function() {
    for (var e = ne(this._rgb, "rgb"), t = 0, n = Object.keys(t8); t < n.length; t += 1) {
      var r = n[t];
      if (t8[r] === e) return r.toLowerCase()
    }
    return e
  }, t5.format.named = function(e) {
    if (t8[e = e.toLowerCase()]) return t9(t8[e]);
    throw Error("unknown color name: " + e)
  }, t5.autodetect.push({
    p: 5,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === t7(e) && t8[e.toLowerCase()]) return "named"
    }
  });
  var nt = d.unpack,
    nn = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = nt(e, "rgb");
      return (n[0] << 16) + (n[1] << 8) + n[2]
    },
    nr = d.type,
    ni = function(e) {
      if ("number" == nr(e) && e >= 0 && e <= 0xffffff) return [e >> 16, e >> 8 & 255, 255 & e, 1];
      throw Error("unknown num color: " + e)
    },
    no = b,
    na = E,
    ns = f,
    nl = d.type,
    nc = nn;
  na.prototype.num = function() {
    return nc(this._rgb)
  }, no.num = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(na, [null].concat(e, ["num"])))
  }, ns.format.num = ni, ns.autodetect.push({
    p: 5,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if (1 === e.length && "number" === nl(e[0]) && e[0] >= 0 && e[0] <= 0xffffff) return "num"
    }
  });
  var nu = b,
    nd = E,
    nf = f,
    np = d.unpack,
    n_ = d.type,
    nh = Math.round;
  nd.prototype.rgb = function(e) {
    return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(nh)
  }, nd.prototype.rgba = function(e) {
    return void 0 === e && (e = !0), this._rgb.slice(0, 4).map(function(t, n) {
      return n < 3 ? !1 === e ? t : nh(t) : t
    })
  }, nu.rgb = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(nd, [null].concat(e, ["rgb"])))
  }, nf.format.rgb = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = np(e, "rgba");
    return void 0 === n[3] && (n[3] = 1), n
  }, nf.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === n_(e = np(e, "rgba")) && (3 === e.length || 4 === e.length && "number" == n_(e[3]) && e[3] >= 0 && e[3] <= 1)) return "rgb"
    }
  });
  var nm = Math.log,
    ng = function(e) {
      var t, n, r, i = e / 100;
      return i < 66 ? (t = 255, n = i < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = i - 2) + 104.49216199393888 * nm(n), r = i < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (r = i - 10) + 115.67994401066147 * nm(r)) : (t = 351.97690566805693 + .114206453784165 * (t = i - 55) - 40.25366309332127 * nm(t), n = 325.4494125711974 + .07943456536662342 * (n = i - 50) - 28.0852963507957 * nm(n), r = 255), [t, n, r, 1]
    },
    nE = ng,
    nv = d.unpack,
    nb = Math.round,
    ny = b,
    nO = E,
    nS = f,
    nI = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      for (var r = nv(t, "rgb"), i = r[0], o = r[2], a = 1e3, s = 4e4, l = .4; s - a > l;) {
        var c = nE(e = (s + a) * .5);
        c[2] / c[0] >= o / i ? s = e : a = e
      }
      return nb(e)
    };
  nO.prototype.temp = nO.prototype.kelvin = nO.prototype.temperature = function() {
    return nI(this._rgb)
  }, ny.temp = ny.kelvin = ny.temperature = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(nO, [null].concat(e, ["temp"])))
  }, nS.format.temp = nS.format.kelvin = nS.format.temperature = ng;
  var nT = d.unpack,
    nN = Math.cbrt,
    nA = Math.pow,
    nC = Math.sign,
    nR = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = nT(e, "rgb"),
        r = n[0],
        i = n[1],
        o = n[2],
        a = [nP(r / 255), nP(i / 255), nP(o / 255)],
        s = a[0],
        l = a[1],
        c = a[2],
        u = nN(.4122214708 * s + .5363325363 * l + .0514459929 * c),
        d = nN(.2119034982 * s + .6806995451 * l + .1073969566 * c),
        f = nN(.0883024619 * s + .2817188376 * l + .6299787005 * c);
      return [.2104542553 * u + .793617785 * d - .0040720468 * f, 1.9779984951 * u - 2.428592205 * d + .4505937099 * f, .0259040371 * u + .7827717662 * d - .808675766 * f]
    };

  function nP(e) {
    var t = Math.abs(e);
    return t < .04045 ? e / 12.92 : (nC(e) || 1) * nA((t + .055) / 1.055, 2.4)
  }
  var nw = d.unpack,
    nD = Math.pow,
    nx = Math.sign,
    nL = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = (e = nw(e, "lab"))[0],
        r = e[1],
        i = e[2],
        o = nD(n + .3963377774 * r + .2158037573 * i, 3),
        a = nD(n - .1055613458 * r - .0638541728 * i, 3),
        s = nD(n - .0894841775 * r - 1.291485548 * i, 3);
      return [255 * nM(4.0767416621 * o - 3.3077115913 * a + .2309699292 * s), 255 * nM(-1.2684380046 * o + 2.6097574011 * a - .3413193965 * s), 255 * nM(-.0041960863 * o - .7034186147 * a + 1.707614701 * s), e.length > 3 ? e[3] : 1]
    };

  function nM(e) {
    var t = Math.abs(e);
    return t > .0031308 ? (nx(e) || 1) * (1.055 * nD(t, 1 / 2.4) - .055) : 12.92 * e
  }
  var nk = d.unpack,
    nj = d.type,
    nU = b,
    nG = E,
    nB = f,
    nZ = nR;
  nG.prototype.oklab = function() {
    return nZ(this._rgb)
  }, nU.oklab = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(nG, [null].concat(e, ["oklab"])))
  }, nB.format.oklab = nL, nB.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === nj(e = nk(e, "oklab")) && 3 === e.length) return "oklab"
    }
  });
  var nF = d.unpack,
    nV = nR,
    nH = tM,
    nW = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = nF(e, "rgb"),
        r = nV(n[0], n[1], n[2]);
      return nH(r[0], r[1], r[2])
    },
    nY = d.unpack,
    nK = tH,
    nz = nL,
    nq = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = nK((e = nY(e, "lch"))[0], e[1], e[2]),
        r = nz(n[0], n[1], n[2]);
      return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1]
    },
    nQ = d.unpack,
    nX = d.type,
    nJ = b,
    n$ = E,
    n0 = f,
    n1 = nW;
  n$.prototype.oklch = function() {
    return n1(this._rgb)
  }, nJ.oklch = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(n$, [null].concat(e, ["oklch"])))
  }, n0.format.oklch = nq, n0.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === nX(e = nQ(e, "oklch")) && 3 === e.length) return "oklch"
    }
  });
  var n2 = E,
    n3 = d.type;
  n2.prototype.alpha = function(e, t) {
    return (void 0 === t && (t = !1), void 0 !== e && "number" === n3(e)) ? t ? (this._rgb[3] = e, this) : new n2([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3]
  }, E.prototype.clipped = function() {
    return this._rgb._clipped || !1
  };
  var n4 = E,
    n6 = tu;
  n4.prototype.darken = function(e) {
    void 0 === e && (e = 1);
    var t = this,
      n = t.lab();
    return n[0] -= n6.Kn * e, new n4(n, "lab").alpha(t.alpha(), !0)
  }, n4.prototype.brighten = function(e) {
    return void 0 === e && (e = 1), this.darken(-e)
  }, n4.prototype.darker = n4.prototype.darken, n4.prototype.brighter = n4.prototype.brighten, E.prototype.get = function(e) {
    var t = e.split("."),
      n = t[0],
      r = t[1],
      i = this[n]();
    if (!r) return i;
    var o = n.indexOf(r) - 2 * ("ok" === n.substr(0, 2));
    if (o > -1) return i[o];
    throw Error("unknown channel " + r + " in mode " + n)
  };
  var n5 = E,
    n7 = d.type,
    n8 = Math.pow,
    n9 = 1e-7,
    re = 20;
  n5.prototype.luminance = function(e) {
    if (void 0 !== e && "number" === n7(e)) {
      if (0 === e) return new n5([0, 0, 0, this._rgb[3]], "rgb");
      if (1 === e) return new n5([255, 255, 255, this._rgb[3]], "rgb");
      var t = this.luminance(),
        n = "rgb",
        r = re,
        i = function(t, o) {
          var a = t.interpolate(o, .5, n),
            s = a.luminance();
          return !(Math.abs(e - s) < n9) && r-- ? s > e ? i(t, a) : i(a, o) : a
        },
        o = (t > e ? i(new n5([0, 0, 0]), this) : i(this, new n5([255, 255, 255]))).rgb();
      return new n5(o.concat([this._rgb[3]]))
    }
    return rt.apply(void 0, this._rgb.slice(0, 3))
  };
  var rt = function(e, t, n) {
      return e = rn(e), .2126 * e + .7152 * (t = rn(t)) + .0722 * (n = rn(n))
    },
    rn = function(e) {
      return (e /= 255) <= .03928 ? e / 12.92 : n8((e + .055) / 1.055, 2.4)
    },
    rr = {},
    ri = E,
    ro = d.type,
    ra = rr,
    rs = function(e, t, n) {
      void 0 === n && (n = .5);
      for (var r = [], i = arguments.length - 3; i-- > 0;) r[i] = arguments[i + 3];
      var o = r[0] || "lrgb";
      if (ra[o] || r.length || (o = Object.keys(ra)[0]), !ra[o]) throw Error("interpolation mode " + o + " is not defined");
      return "object" !== ro(e) && (e = new ri(e)), "object" !== ro(t) && (t = new ri(t)), ra[o](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
    },
    rl = E,
    rc = rs;
  rl.prototype.mix = rl.prototype.interpolate = function(e, t) {
    void 0 === t && (t = .5);
    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
    return rc.apply(void 0, [this, e, t].concat(n))
  };
  var ru = E;
  ru.prototype.premultiply = function(e) {
    void 0 === e && (e = !1);
    var t = this._rgb,
      n = t[3];
    return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new ru([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
  };
  var rd = E,
    rf = tu;
  rd.prototype.saturate = function(e) {
    void 0 === e && (e = 1);
    var t = this,
      n = t.lch();
    return n[1] += rf.Kn * e, n[1] < 0 && (n[1] = 0), new rd(n, "lch").alpha(t.alpha(), !0)
  }, rd.prototype.desaturate = function(e) {
    return void 0 === e && (e = 1), this.saturate(-e)
  };
  var rp = E,
    r_ = d.type;
  rp.prototype.set = function(e, t, n) {
    void 0 === n && (n = !1);
    var r = e.split("."),
      i = r[0],
      o = r[1],
      a = this[i]();
    if (!o) return a;
    var s = i.indexOf(o) - 2 * ("ok" === i.substr(0, 2));
    if (s > -1) {
      if ("string" == r_(t)) switch (t.charAt(0)) {
          case "+":
          case "-":
            a[s] += +t;
            break;
          case "*":
            a[s] *= +t.substr(1);
            break;
          case "/":
            a[s] /= +t.substr(1);
            break;
          default:
            a[s] = +t
        } else if ("number" === r_(t)) a[s] = t;
        else throw Error("unsupported value for Color.set");
      var l = new rp(a, i);
      return n ? (this._rgb = l._rgb, this) : l
    }
    throw Error("unknown channel " + o + " in mode " + i)
  };
  var rh = E,
    rm = function(e, t, n) {
      var r = e._rgb,
        i = t._rgb;
      return new rh(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb")
    };
  rr.rgb = rm;
  var rg = E,
    rE = Math.sqrt,
    rv = Math.pow,
    rb = function(e, t, n) {
      var r = e._rgb,
        i = r[0],
        o = r[1],
        a = r[2],
        s = t._rgb,
        l = s[0],
        c = s[1],
        u = s[2];
      return new rg(rE(rv(i, 2) * (1 - n) + rv(l, 2) * n), rE(rv(o, 2) * (1 - n) + rv(c, 2) * n), rE(rv(a, 2) * (1 - n) + rv(u, 2) * n), "rgb")
    };
  rr.lrgb = rb;
  var ry = E,
    rO = function(e, t, n) {
      var r = e.lab(),
        i = t.lab();
      return new ry(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab")
    };
  rr.lab = rO;
  var rS = E,
    rI = function(e, t, n, r) {
      var i, o, a, s, l, c, u, d, f, p, _, h, m, g;
      return "hsl" === r ? (a = e.hsl(), s = t.hsl()) : "hsv" === r ? (a = e.hsv(), s = t.hsv()) : "hcg" === r ? (a = e.hcg(), s = t.hcg()) : "hsi" === r ? (a = e.hsi(), s = t.hsi()) : "lch" === r || "hcl" === r ? (r = "hcl", a = e.hcl(), s = t.hcl()) : "oklch" === r && (a = e.oklch().reverse(), s = t.oklch().reverse()), ("h" === r.substr(0, 1) || "oklch" === r) && (l = (i = a)[0], u = i[1], f = i[2], c = (o = s)[0], d = o[1], p = o[2]), isNaN(l) || isNaN(c) ? isNaN(l) ? isNaN(c) ? h = Number.NaN : (h = c, (1 == f || 0 == f) && "hsv" != r && (_ = d)) : (h = l, (1 == p || 0 == p) && "hsv" != r && (_ = u)) : (g = c > l && c - l > 180 ? c - (l + 360) : c < l && l - c > 180 ? c + 360 - l : c - l, h = l + n * g), void 0 === _ && (_ = u + n * (d - u)), m = f + n * (p - f), "oklch" === r ? new rS([m, _, h], r) : new rS([h, _, m], r)
    },
    rT = rI,
    rN = function(e, t, n) {
      return rT(e, t, n, "lch")
    };
  rr.lch = rN, rr.hcl = rN;
  var rA = E,
    rC = function(e, t, n) {
      var r = e.num();
      return new rA(r + n * (t.num() - r), "num")
    };
  rr.num = rC;
  var rR = rI,
    rP = function(e, t, n) {
      return rR(e, t, n, "hcg")
    };
  rr.hcg = rP;
  var rw = rI,
    rD = function(e, t, n) {
      return rw(e, t, n, "hsi")
    };
  rr.hsi = rD;
  var rx = rI,
    rL = function(e, t, n) {
      return rx(e, t, n, "hsl")
    };
  rr.hsl = rL;
  var rM = rI,
    rk = function(e, t, n) {
      return rM(e, t, n, "hsv")
    };
  rr.hsv = rk;
  var rj = E,
    rU = function(e, t, n) {
      var r = e.oklab(),
        i = t.oklab();
      return new rj(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab")
    };
  rr.oklab = rU;
  var rG = rI,
    rB = function(e, t, n) {
      return rG(e, t, n, "oklch")
    };
  rr.oklch = rB;
  var rZ = E,
    rF = d.clip_rgb,
    rV = Math.pow,
    rH = Math.sqrt,
    rW = Math.PI,
    rY = Math.cos,
    rK = Math.sin,
    rz = Math.atan2,
    rq = function(e, t, n) {
      void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
      var r = e.length;
      n || (n = Array.from(Array(r)).map(function() {
        return 1
      }));
      var i = r / n.reduce(function(e, t) {
        return e + t
      });
      if (n.forEach(function(e, t) {
          n[t] *= i
        }), e = e.map(function(e) {
          return new rZ(e)
        }), "lrgb" === t) return rQ(e, n);
      for (var o = e.shift(), a = o.get(t), s = [], l = 0, c = 0, u = 0; u < a.length; u++)
        if (a[u] = (a[u] || 0) * n[0], s.push(isNaN(a[u]) ? 0 : n[0]), "h" === t.charAt(u) && !isNaN(a[u])) {
          var d = a[u] / 180 * rW;
          l += rY(d) * n[0], c += rK(d) * n[0]
        } var f = o.alpha() * n[0];
      e.forEach(function(e, r) {
        var i = e.get(t);
        f += e.alpha() * n[r + 1];
        for (var o = 0; o < a.length; o++)
          if (!isNaN(i[o])) {
            if (s[o] += n[r + 1], "h" === t.charAt(o)) {
              var u = i[o] / 180 * rW;
              l += rY(u) * n[r + 1], c += rK(u) * n[r + 1]
            } else a[o] += i[o] * n[r + 1]
          }
      });
      for (var p = 0; p < a.length; p++)
        if ("h" === t.charAt(p)) {
          for (var _ = rz(c / s[p], l / s[p]) / rW * 180; _ < 0;) _ += 360;
          for (; _ >= 360;) _ -= 360;
          a[p] = _
        } else a[p] = a[p] / s[p];
      return f /= r, new rZ(a, t).alpha(f > .99999 ? 1 : f, !0)
    },
    rQ = function(e, t) {
      for (var n = e.length, r = [0, 0, 0, 0], i = 0; i < e.length; i++) {
        var o = e[i],
          a = t[i] / n,
          s = o._rgb;
        r[0] += rV(s[0], 2) * a, r[1] += rV(s[1], 2) * a, r[2] += rV(s[2], 2) * a, r[3] += s[3] * a
      }
      return r[0] = rH(r[0]), r[1] = rH(r[1]), r[2] = rH(r[2]), r[3] > .9999999 && (r[3] = 1), new rZ(rF(r))
    },
    rX = b,
    rJ = d.type,
    r$ = Math.pow,
    r0 = function(e) {
      var t = "rgb",
        n = rX("#ccc"),
        r = 0,
        i = [0, 1],
        o = [],
        a = [0, 0],
        s = !1,
        l = [],
        c = !1,
        u = 0,
        d = 1,
        f = !1,
        p = {},
        _ = !0,
        h = 1,
        m = function(e) {
          if ("string" === rJ(e = e || ["#fff", "#000"]) && rX.brewer && rX.brewer[e.toLowerCase()] && (e = rX.brewer[e.toLowerCase()]), "array" === rJ(e)) {
            1 === e.length && (e = [e[0], e[0]]), e = e.slice(0);
            for (var t = 0; t < e.length; t++) e[t] = rX(e[t]);
            o.length = 0;
            for (var n = 0; n < e.length; n++) o.push(n / (e.length - 1))
          }
          return y(), l = e
        },
        g = function(e) {
          if (null != s) {
            for (var t = s.length - 1, n = 0; n < t && e >= s[n];) n++;
            return n - 1
          }
          return 0
        },
        E = function(e) {
          return e
        },
        v = function(e) {
          return e
        },
        b = function(e, r) {
          if (null == r && (r = !1), isNaN(e) || null === e) return n;
          if (r) c = e;
          else if (s && s.length > 2) {
            var i, c;
            c = g(e) / (s.length - 2)
          } else c = d !== u ? (e - u) / (d - u) : 1;
          c = v(c), r || (c = E(c)), 1 !== h && (c = r$(c, h));
          var f = Math.floor(1e4 * (c = Math.min(1, Math.max(0, c = a[0] + c * (1 - a[0] - a[1])))));
          if (_ && p[f]) i = p[f];
          else {
            if ("array" === rJ(l))
              for (var m = 0; m < o.length; m++) {
                var b = o[m];
                if (c <= b || c >= b && m === o.length - 1) {
                  i = l[m];
                  break
                }
                if (c > b && c < o[m + 1]) {
                  c = (c - b) / (o[m + 1] - b), i = rX.interpolate(l[m], l[m + 1], c, t);
                  break
                }
              } else "function" === rJ(l) && (i = l(c));
            _ && (p[f] = i)
          }
          return i
        },
        y = function() {
          return p = {}
        };
      m(e);
      var O = function(e) {
        var t = rX(b(e));
        return c && t[c] ? t[c]() : t
      };
      return O.classes = function(e) {
        if (null != e) {
          if ("array" === rJ(e)) s = e, i = [e[0], e[e.length - 1]];
          else {
            var t = rX.analyze(i);
            s = 0 === e ? [t.min, t.max] : rX.limits(t, "e", e)
          }
          return O
        }
        return s
      }, O.domain = function(e) {
        if (!arguments.length) return i;
        u = e[0], d = e[e.length - 1], o = [];
        var t = l.length;
        if (e.length === t && u !== d)
          for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
            var a = r[n];
            o.push((a - u) / (d - u))
          } else {
            for (var s = 0; s < t; s++) o.push(s / (t - 1));
            if (e.length > 2) {
              var c = e.map(function(t, n) {
                  return n / (e.length - 1)
                }),
                f = e.map(function(e) {
                  return (e - u) / (d - u)
                });
              f.every(function(e, t) {
                return c[t] === e
              }) || (v = function(e) {
                if (e <= 0 || e >= 1) return e;
                for (var t = 0; e >= f[t + 1];) t++;
                var n = (e - f[t]) / (f[t + 1] - f[t]);
                return c[t] + n * (c[t + 1] - c[t])
              })
            }
          }
        return i = [u, d], O
      }, O.mode = function(e) {
        return arguments.length ? (t = e, y(), O) : t
      }, O.range = function(e, t) {
        return m(e), O
      }, O.out = function(e) {
        return c = e, O
      }, O.spread = function(e) {
        return arguments.length ? (r = e, O) : r
      }, O.correctLightness = function(e) {
        return null == e && (e = !0), f = e, y(), E = f ? function(e) {
          for (var t = b(0, !0).lab()[0], n = b(1, !0).lab()[0], r = t > n, i = b(e, !0).lab()[0], o = t + (n - t) * e, a = i - o, s = 0, l = 1, c = 20; Math.abs(a) > .01 && c-- > 0;) ! function() {
            r && (a *= -1), a < 0 ? (s = e, e += (l - e) * .5) : (l = e, e += (s - e) * .5), a = (i = b(e, !0).lab()[0]) - o
          }();
          return e
        } : function(e) {
          return e
        }, O
      }, O.padding = function(e) {
        return null != e ? ("number" === rJ(e) && (e = [e, e]), a = e, O) : a
      }, O.colors = function(t, n) {
        arguments.length < 2 && (n = "hex");
        var r = [];
        if (0 == arguments.length) r = l.slice(0);
        else if (1 === t) r = [O(.5)];
        else if (t > 1) {
          var o = i[0],
            a = i[1] - o;
          r = r1(0, t, !1).map(function(e) {
            return O(o + e / (t - 1) * a)
          })
        } else {
          e = [];
          var c = [];
          if (s && s.length > 2)
            for (var u = 1, d = s.length, f = 1 <= d; f ? u < d : u > d; f ? u++ : u--) c.push((s[u - 1] + s[u]) * .5);
          else c = i;
          r = c.map(function(e) {
            return O(e)
          })
        }
        return rX[n] && (r = r.map(function(e) {
          return e[n]()
        })), r
      }, O.cache = function(e) {
        return null != e ? (_ = e, O) : _
      }, O.gamma = function(e) {
        return null != e ? (h = e, O) : h
      }, O.nodata = function(e) {
        return null != e ? (n = rX(e), O) : n
      }, O
    };

  function r1(e, t, n) {
    for (var r = [], i = e < t, o = n ? i ? t + 1 : t - 1 : t, a = e; i ? a < o : a > o; i ? a++ : a--) r.push(a);
    return r
  }
  var r2 = E,
    r3 = r0,
    r4 = function(e) {
      for (var t = [1, 1], n = 1; n < e; n++) {
        for (var r = [1], i = 1; i <= t.length; i++) r[i] = (t[i] || 0) + t[i - 1];
        t = r
      }
      return t
    },
    r6 = function(e) {
      var t, n, r, i, o, a, s, l, c, u, d;
      if (2 === (e = e.map(function(e) {
          return new r2(e)
        })).length) o = (t = e.map(function(e) {
        return e.lab()
      }))[0], a = t[1], i = function(e) {
        return new r2([0, 1, 2].map(function(t) {
          return o[t] + e * (a[t] - o[t])
        }), "lab")
      };
      else if (3 === e.length) o = (n = e.map(function(e) {
        return e.lab()
      }))[0], a = n[1], s = n[2], i = function(e) {
        return new r2([0, 1, 2].map(function(t) {
          return (1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * a[t] + e * e * s[t]
        }), "lab")
      };
      else if (4 === e.length) o = (r = e.map(function(e) {
        return e.lab()
      }))[0], a = r[1], s = r[2], l = r[3], i = function(e) {
        return new r2([0, 1, 2].map(function(t) {
          return (1 - e) * (1 - e) * (1 - e) * o[t] + 3 * (1 - e) * (1 - e) * e * a[t] + 3 * (1 - e) * e * e * s[t] + e * e * e * l[t]
        }), "lab")
      };
      else if (e.length >= 5) c = e.map(function(e) {
        return e.lab()
      }), u = r4(d = e.length - 1), i = function(e) {
        var t = 1 - e;
        return new r2([0, 1, 2].map(function(n) {
          return c.reduce(function(r, i, o) {
            return r + u[o] * Math.pow(t, d - o) * Math.pow(e, o) * i[n]
          }, 0)
        }), "lab")
      };
      else throw RangeError("No point in running bezier with only one color.");
      return i
    },
    r5 = function(e) {
      var t = r6(e);
      return t.scale = function() {
        return r3(t)
      }, t
    },
    r7 = b,
    r8 = function(e, t, n) {
      if (!r8[n]) throw Error("unknown blend mode " + n);
      return r8[n](e, t)
    },
    r9 = function(e) {
      return function(t, n) {
        var r = r7(n).rgb(),
          i = r7(t).rgb();
        return r7.rgb(e(r, i))
      }
    },
    ie = function(e) {
      return function(t, n) {
        var r = [];
        return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r
      }
    },
    it = function(e) {
      return e
    },
    ir = function(e, t) {
      return e * t / 255
    },
    ii = function(e, t) {
      return e > t ? t : e
    },
    io = function(e, t) {
      return e > t ? e : t
    },
    ia = function(e, t) {
      return 255 * (1 - (1 - e / 255) * (1 - t / 255))
    },
    is = function(e, t) {
      return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
    },
    il = function(e, t) {
      return 255 * (1 - (1 - t / 255) / (e / 255))
    },
    ic = function(e, t) {
      return 255 === e ? 255 : (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e
    };
  r8.normal = r9(ie(it)), r8.multiply = r9(ie(ir)), r8.screen = r9(ie(ia)), r8.overlay = r9(ie(is)), r8.darken = r9(ie(ii)), r8.lighten = r9(ie(io)), r8.dodge = r9(ie(ic)), r8.burn = r9(ie(il));
  for (var iu = r8, id = d.type, ip = d.clip_rgb, i_ = d.TWOPI, ih = Math.pow, im = Math.sin, ig = Math.cos, iE = b, iv = function(e, t, n, r, i) {
      void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = [0, 1]);
      var o, a = 0;
      "array" === id(i) ? o = i[1] - i[0] : (o = 0, i = [i, i]);
      var s = function(s) {
        var l = i_ * ((e + 120) / 360 + t * s),
          c = ih(i[0] + o * s, r),
          u = (0 !== a ? n[0] + s * a : n) * c * (1 - c) / 2,
          d = ig(l),
          f = im(l);
        return iE(ip([255 * (c + u * (-.14861 * d + 1.78277 * f)), 255 * (c + u * (-.29227 * d - .90649 * f)), 255 * (c + 1.97294 * d * u), 1]))
      };
      return s.start = function(t) {
        return null == t ? e : (e = t, s)
      }, s.rotations = function(e) {
        return null == e ? t : (t = e, s)
      }, s.gamma = function(e) {
        return null == e ? r : (r = e, s)
      }, s.hue = function(e) {
        return null == e ? n : ("array" === id(n = e) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : a = 0, s)
      }, s.lightness = function(e) {
        return null == e ? i : ("array" === id(e) ? (i = e, o = e[1] - e[0]) : (i = [e, e], o = 0), s)
      }, s.scale = function() {
        return iE.scale(s)
      }, s.hue(n), s
    }, ib = E, iy = "0123456789abcdef", iO = Math.floor, iS = Math.random, iI = function() {
      for (var e = "#", t = 0; t < 6; t++) e += iy.charAt(iO(16 * iS()));
      return new ib(e, "hex")
    }, iT = s, iN = Math.log, iA = Math.pow, iC = Math.floor, iR = Math.abs, iP = function(e, t) {
      void 0 === t && (t = null);
      var n = {
        min: Number.MAX_VALUE,
        max: -1 * Number.MAX_VALUE,
        sum: 0,
        values: [],
        count: 0
      };
      return "object" === iT(e) && (e = Object.values(e)), e.forEach(function(e) {
        t && "object" === iT(e) && (e = e[t]), null == e || isNaN(e) || (n.values.push(e), n.sum += e, e < n.min && (n.min = e), e > n.max && (n.max = e), n.count += 1)
      }), n.domain = [n.min, n.max], n.limits = function(e, t) {
        return iw(n, e, t)
      }, n
    }, iw = function(e, t, n) {
      void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == iT(e) && (e = iP(e));
      var r = e.min,
        i = e.max,
        o = e.values.sort(function(e, t) {
          return e - t
        });
      if (1 === n) return [r, i];
      var a = [];
      if ("c" === t.substr(0, 1) && (a.push(r), a.push(i)), "e" === t.substr(0, 1)) {
        a.push(r);
        for (var s = 1; s < n; s++) a.push(r + s / n * (i - r));
        a.push(i)
      } else if ("l" === t.substr(0, 1)) {
        if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
        var l = Math.LOG10E * iN(r),
          c = Math.LOG10E * iN(i);
        a.push(r);
        for (var u = 1; u < n; u++) a.push(iA(10, l + u / n * (c - l)));
        a.push(i)
      } else if ("q" === t.substr(0, 1)) {
        a.push(r);
        for (var d = 1; d < n; d++) {
          var f = (o.length - 1) * d / n,
            p = iC(f);
          if (p === f) a.push(o[p]);
          else {
            var _ = f - p;
            a.push(o[p] * (1 - _) + o[p + 1] * _)
          }
        }
        a.push(i)
      } else if ("k" === t.substr(0, 1)) {
        var h, m = o.length,
          g = Array(m),
          E = Array(n),
          v = !0,
          b = 0,
          y = null;
        (y = []).push(r);
        for (var O = 1; O < n; O++) y.push(r + O / n * (i - r));
        for (y.push(i); v;) {
          for (var S = 0; S < n; S++) E[S] = 0;
          for (var I = 0; I < m; I++)
            for (var T = o[I], N = Number.MAX_VALUE, A = void 0, C = 0; C < n; C++) {
              var R = iR(y[C] - T);
              R < N && (N = R, A = C), E[A]++, g[I] = A
            }
          for (var P = Array(n), w = 0; w < n; w++) P[w] = null;
          for (var D = 0; D < m; D++) null === P[h = g[D]] ? P[h] = o[D] : P[h] += o[D];
          for (var x = 0; x < n; x++) P[x] *= 1 / E[x];
          v = !1;
          for (var L = 0; L < n; L++)
            if (P[L] !== y[L]) {
              v = !0;
              break
            } y = P, ++b > 200 && (v = !1)
        }
        for (var M = {}, k = 0; k < n; k++) M[k] = [];
        for (var j = 0; j < m; j++) M[h = g[j]].push(o[j]);
        for (var U = [], G = 0; G < n; G++) U.push(M[G][0]), U.push(M[G][M[G].length - 1]);
        U = U.sort(function(e, t) {
          return e - t
        }), a.push(U[0]);
        for (var B = 1; B < U.length; B += 2) {
          var Z = U[B];
          isNaN(Z) || -1 !== a.indexOf(Z) || a.push(Z)
        }
      }
      return a
    }, iD = iP, ix = iw, iL = E, iM = function(e, t) {
      e = new iL(e), t = new iL(t);
      var n = e.luminance(),
        r = t.luminance();
      return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
    }, ik = E, ij = Math.sqrt, iU = Math.pow, iG = Math.min, iB = Math.max, iZ = Math.atan2, iF = Math.abs, iV = Math.cos, iH = Math.sin, iW = Math.exp, iY = Math.PI, iK = function(e, t, n, r, i) {
      void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === i && (i = 1);
      var o = function(e) {
          return 360 * e / (2 * iY)
        },
        a = function(e) {
          return 2 * iY * e / 360
        };
      e = new ik(e), t = new ik(t);
      var s = Array.from(e.lab()),
        l = s[0],
        c = s[1],
        u = s[2],
        d = Array.from(t.lab()),
        f = d[0],
        p = d[1],
        _ = d[2],
        h = (l + f) / 2,
        m = (ij(iU(c, 2) + iU(u, 2)) + ij(iU(p, 2) + iU(_, 2))) / 2,
        g = .5 * (1 - ij(iU(m, 7) / (iU(m, 7) + iU(25, 7)))),
        E = c * (1 + g),
        v = p * (1 + g),
        b = ij(iU(E, 2) + iU(u, 2)),
        y = ij(iU(v, 2) + iU(_, 2)),
        O = (b + y) / 2,
        S = o(iZ(u, E)),
        I = o(iZ(_, v)),
        T = S >= 0 ? S : S + 360,
        N = I >= 0 ? I : I + 360,
        A = iF(T - N) > 180 ? (T + N + 360) / 2 : (T + N) / 2,
        C = 1 - .17 * iV(a(A - 30)) + .24 * iV(a(2 * A)) + .32 * iV(a(3 * A + 6)) - .2 * iV(a(4 * A - 63)),
        R = N - T;
      R = 180 >= iF(R) ? R : N <= T ? R + 360 : R - 360, R = 2 * ij(b * y) * iH(a(R) / 2);
      var P = f - l,
        w = y - b,
        D = 1 + .015 * iU(h - 50, 2) / ij(20 + iU(h - 50, 2)),
        x = 1 + .045 * O,
        L = 1 + .015 * O * C,
        M = 30 * iW(-iU((A - 275) / 25, 2)),
        k = -(2 * ij(iU(O, 7) / (iU(O, 7) + iU(25, 7)))) * iH(2 * a(M));
      return iB(0, iG(100, ij(iU(P / (n * D), 2) + iU(w / (r * x), 2) + iU(R / (i * L), 2) + w / (r * x) * k * (R / (i * L)))))
    }, iz = E, iq = function(e, t, n) {
      void 0 === n && (n = "lab"), e = new iz(e), t = new iz(t);
      var r = e.get(n),
        i = t.get(n),
        o = 0;
      for (var a in r) {
        var s = (r[a] || 0) - (i[a] || 0);
        o += s * s
      }
      return Math.sqrt(o)
    }, iQ = E, iX = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      try {
        return new(Function.prototype.bind.apply(iQ, [null].concat(e))), !0
      } catch (e) {
        return !1
      }
    }, iJ = b, i$ = r0, i0 = {
      cool: function() {
        return i$([iJ.hsl(180, 1, .9), iJ.hsl(250, .7, .4)])
      },
      hot: function() {
        return i$(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
      }
    }, i1 = {
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, i2 = 0, i3 = Object.keys(i1); i2 < i3.length; i2 += 1) {
    var i4 = i3[i2];
    i1[i4.toLowerCase()] = i1[i4]
  }
  var i6 = i1,
    i5 = b;
  return i5.average = rq, i5.bezier = r5, i5.blend = iu, i5.cubehelix = iv, i5.mix = i5.interpolate = rs, i5.random = iI, i5.scale = r0, i5.analyze = iD, i5.contrast = iM, i5.deltaE = iK, i5.distance = iq, i5.limits = ix, i5.valid = iX, i5.scales = i0, i5.colors = t4, i5.brewer = i6, i5
})
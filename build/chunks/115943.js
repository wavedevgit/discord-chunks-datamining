/** Chunk was on web.js **/
/** chunk id: 115943, original params: e (module,exports,re quire) **/
var t = function() {
  var e = {
    nextZero: function(e, t) {
      for (; 0 != e[t];) t++;
      return t
    },
    readUshort: function(e, t) {
      return e[t] << 8 | e[t + 1]
    },
    writeUshort: function(e, t, n) {
      e[t] = n >> 8 & 255, e[t + 1] = 255 & n
    },
    readUint: function(e, t) {
      return 0x1000000 * e[t] + (e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3])
    },
    writeUint: function(e, t, n) {
      e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = 255 & n
    },
    readASCII: function(e, t, n) {
      for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]);
      return r
    },
    writeASCII: function(e, t, n) {
      for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r)
    },
    readBytes: function(e, t, n) {
      for (var r = [], i = 0; i < n; i++) r.push(e[t + i]);
      return r
    },
    pad: function(e) {
      return e.length < 2 ? "0" + e : e
    },
    readUTF8: function(t, n, r) {
      for (var i, a = "", s = 0; s < r; s++) a += "%" + e.pad(t[n + s].toString(16));
      try {
        i = decodeURIComponent(a)
      } catch (i) {
        return e.readASCII(t, n, r)
      }
      return i
    }
  };

  function t(e) {
    var t = e.width,
      r = e.height;
    if (null == e.tabs.acTL) return [n(e.data, t, r, e).buffer];
    var i = [];
    null == e.frames[0].data && (e.frames[0].data = e.data);
    for (var a = t * r * 4, s = new Uint8Array(a), o = new Uint8Array(a), l = new Uint8Array(a), c = 0; c < e.frames.length; c++) {
      var u = e.frames[c],
        d = u.rect.x,
        p = u.rect.y,
        _ = u.rect.width,
        h = u.rect.height,
        m = n(u.data, _, h, e);
      if (0 != c)
        for (var g = 0; g < a; g++) l[g] = s[g];
      if (0 == u.blend ? f(m, _, h, s, t, r, d, p, 0) : 1 == u.blend && f(m, _, h, s, t, r, d, p, 1), i.push(s.buffer.slice(0)), 0 == u.dispose);
      else if (1 == u.dispose) f(o, _, h, s, t, r, d, p, 0);
      else if (2 == u.dispose)
        for (var g = 0; g < a; g++) s[g] = l[g]
    }
    return i
  }

  function n(t, n, r, i) {
    var a = n * r,
      s = Math.ceil(n * l(i) / 8),
      o = new Uint8Array(4 * a),
      c = new Uint32Array(o.buffer),
      u = i.ctype,
      d = i.depth,
      f = e.readUshort;
    if (Date.now(), 6 == u) {
      var p = a << 2;
      if (8 == d)
        for (var _ = 0; _ < p; _ += 4) o[_] = t[_], o[_ + 1] = t[_ + 1], o[_ + 2] = t[_ + 2], o[_ + 3] = t[_ + 3];
      if (16 == d)
        for (var _ = 0; _ < p; _++) o[_] = t[_ << 1]
    } else if (2 == u) {
      var h = i.tabs.tRNS;
      if (null == h) {
        if (8 == d)
          for (var _ = 0; _ < a; _++) {
            var m = 3 * _;
            c[_] = false | t[m + 2] << 16 | t[m + 1] << 8 | t[m]
          }
        if (16 == d)
          for (var _ = 0; _ < a; _++) {
            var m = 6 * _;
            c[_] = false | t[m + 4] << 16 | t[m + 2] << 8 | t[m]
          }
      } else {
        var g = h[0],
          E = h[1],
          y = h[2];
        if (8 == d)
          for (var _ = 0; _ < a; _++) {
            var b = _ << 2,
              m = 3 * _;
            c[_] = false | t[m + 2] << 16 | t[m + 1] << 8 | t[m], t[m] == g && t[m + 1] == E && t[m + 2] == y && (o[b + 3] = 0)
          }
        if (16 == d)
          for (var _ = 0; _ < a; _++) {
            var b = _ << 2,
              m = 6 * _;
            c[_] = false | t[m + 4] << 16 | t[m + 2] << 8 | t[m], f(t, m) == g && f(t, m + 2) == E && f(t, m + 4) == y && (o[b + 3] = 0)
          }
      }
    } else if (3 == u) {
      var O = i.tabs.PLTE,
        v = i.tabs.tRNS,
        A = v ? v.length : 0;
      if (1 == d)
        for (var I = 0; I < r; I++)
          for (var S = I * s, T = I * n, _ = 0; _ < n; _++) {
            var b = T + _ << 2,
              C = t[S + (_ >> 3)] >> 7 - (7 & _) & 1,
              N = 3 * C;
            o[b] = O[N], o[b + 1] = O[N + 1], o[b + 2] = O[N + 2], o[b + 3] = C < A ? v[C] : 255
          }
      if (2 == d)
        for (var I = 0; I < r; I++)
          for (var S = I * s, T = I * n, _ = 0; _ < n; _++) {
            var b = T + _ << 2,
              C = t[S + (_ >> 2)] >> 6 - ((3 & _) << 1) & 3,
              N = 3 * C;
            o[b] = O[N], o[b + 1] = O[N + 1], o[b + 2] = O[N + 2], o[b + 3] = C < A ? v[C] : 255
          }
      if (4 == d)
        for (var I = 0; I < r; I++)
          for (var S = I * s, T = I * n, _ = 0; _ < n; _++) {
            var b = T + _ << 2,
              C = t[S + (_ >> 1)] >> 4 - ((1 & _) << 2) & 15,
              N = 3 * C;
            o[b] = O[N], o[b + 1] = O[N + 1], o[b + 2] = O[N + 2], o[b + 3] = C < A ? v[C] : 255
          }
      if (8 == d)
        for (var _ = 0; _ < a; _++) {
          var b = _ << 2,
            C = t[_],
            N = 3 * C;
          o[b] = O[N], o[b + 1] = O[N + 1], o[b + 2] = O[N + 2], o[b + 3] = C < A ? v[C] : 255
        }
    } else if (4 == u) {
      if (8 == d)
        for (var _ = 0; _ < a; _++) {
          var b = _ << 2,
            R = _ << 1,
            w = t[R];
          o[b] = w, o[b + 1] = w, o[b + 2] = w, o[b + 3] = t[R + 1]
        }
      if (16 == d)
        for (var _ = 0; _ < a; _++) {
          var b = _ << 2,
            R = _ << 2,
            w = t[R];
          o[b] = w, o[b + 1] = w, o[b + 2] = w, o[b + 3] = t[R + 2]
        }
    } else if (0 == u)
      for (var g = i.tabs.tRNS ? i.tabs.tRNS : false, I = 0; I < r; I++) {
        var P = I * s,
          D = I * n;
        if (1 == d)
          for (var x = 0; x < n; x++) {
            var w = 255 * (t[P + (x >>> 3)] >>> 7 - (7 & x) & 1),
              L = 255 * (w != 255 * g);
            c[D + x] = L << 24 | w << 16 | w << 8 | w
          } else if (2 == d)
            for (var x = 0; x < n; x++) {
              var w = 85 * (t[P + (x >>> 2)] >>> 6 - ((3 & x) << 1) & 3),
                L = 255 * (w != 85 * g);
              c[D + x] = L << 24 | w << 16 | w << 8 | w
            } else if (4 == d)
              for (var x = 0; x < n; x++) {
                var w = 17 * (t[P + (x >>> 1)] >>> 4 - ((1 & x) << 2) & 15),
                  L = 255 * (w != 17 * g);
                c[D + x] = L << 24 | w << 16 | w << 8 | w
              } else if (8 == d)
                for (var x = 0; x < n; x++) {
                  var w = t[P + x],
                    L = 255 * (w != g);
                  c[D + x] = L << 24 | w << 16 | w << 8 | w
                } else if (16 == d)
                  for (var x = 0; x < n; x++) {
                    var w = t[P + (x << 1)],
                      L = 255 * (f(t, P + (x << 1)) != g);
                    c[D + x] = L << 24 | w << 16 | w << 8 | w
                  }
      }
    return o
  }

  function r(t) {
    for (var n, r = new Uint8Array(t), o = 8, l = e, c = l.readUshort, u = l.readUint, f = {
        tabs: {},
        frames: []
      }, p = new Uint8Array(r.length), _ = 0, h = 0, m = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++)
      if (r[g] != m[g]) throw "The input is not a PNG file!";
    for (; o < r.length;) {
      var E = l.readUint(r, o);
      o += 4;
      var y = l.readASCII(r, o, 4);
      if (o += 4, "IHDR" == y) d(r, o, f);
      else if ("iCCP" == y) {
        for (var b = o; 0 != r[b];) b++;
        l.readASCII(r, o, b - o), r[b + 1];
        var O = r.slice(b + 2, o + E),
          v = null;
        try {
          v = a(O)
        } catch (e) {
          v = s(O)
        }
        f.tabs[y] = v
      } else if ("CgBI" == y) f.tabs[y] = r.slice(o, o + 4);
      else if ("IDAT" == y) {
        for (var g = 0; g < E; g++) p[_ + g] = r[o + g];
        _ += E
      } else if ("acTL" == y) f.tabs[y] = {
        num_frames: u(r, o),
        num_plays: u(r, o + 4)
      }, n = new Uint8Array(r.length);
      else if ("fcTL" == y) {
        if (0 != h) {
          var A = f.frames[f.frames.length - 1];
          A.data = i(f, n.slice(0, h), A.rect.width, A.rect.height), h = 0
        }
        var I = {
            x: u(r, o + 12),
            y: u(r, o + 16),
            width: u(r, o + 4),
            height: u(r, o + 8)
          },
          S = c(r, o + 22),
          T = {
            rect: I,
            delay: 1e3 * (S = c(r, o + 20) / (0 == S ? 100 : S)),
            dispose: r[o + 24],
            blend: r[o + 25]
          };
        f.frames.push(T)
      } else if ("fdAT" == y) {
        for (var g = 0; g < E - 4; g++) n[h + g] = r[o + g + 4];
        h += E - 4
      } else if ("pHYs" == y) f.tabs[y] = [l.readUint(r, o), l.readUint(r, o + 4), r[o + 8]];
      else if ("cHRM" == y) {
        f.tabs[y] = [];
        for (var g = 0; g < 8; g++) f.tabs[y].push(l.readUint(r, o + 4 * g))
      } else if ("tEXt" == y || "zTXt" == y) {
        null == f.tabs[y] && (f.tabs[y] = {});
        var C, N = l.nextZero(r, o),
          R = l.readASCII(r, o, N - o),
          w = o + E - N - 1;
        if ("tEXt" == y) C = l.readASCII(r, N + 1, w);
        else {
          var P = a(r.slice(N + 2, N + 2 + w));
          C = l.readUTF8(P, 0, P.length)
        }
        f.tabs[y][R] = C
      } else if ("iTXt" == y) {
        null == f.tabs[y] && (f.tabs[y] = {});
        var N = 0,
          b = o;
        N = l.nextZero(r, b);
        var R = l.readASCII(r, b, N - b),
          D = r[b = N + 1];
        r[b + 1], b += 2, N = l.nextZero(r, b), l.readASCII(r, b, N - b), b = N + 1, N = l.nextZero(r, b), l.readUTF8(r, b, N - b);
        var C, w = E - ((b = N + 1) - o);
        if (0 == D) C = l.readUTF8(r, b, w);
        else {
          var P = a(r.slice(b, b + w));
          C = l.readUTF8(P, 0, P.length)
        }
        f.tabs[y][R] = C
      } else if ("PLTE" == y) f.tabs[y] = l.readBytes(r, o, E);
      else if ("hIST" == y) {
        var x = f.tabs.PLTE.length / 3;
        f.tabs[y] = [];
        for (var g = 0; g < x; g++) f.tabs[y].push(c(r, o + 2 * g))
      } else if ("tRNS" == y) 3 == f.ctype ? f.tabs[y] = l.readBytes(r, o, E) : 0 == f.ctype ? f.tabs[y] = c(r, o) : 2 == f.ctype && (f.tabs[y] = [c(r, o), c(r, o + 2), c(r, o + 4)]);
      else if ("gAMA" == y) f.tabs[y] = l.readUint(r, o) / 1e5;
      else if ("sRGB" == y) f.tabs[y] = r[o];
      else if ("bKGD" == y) 0 == f.ctype || 4 == f.ctype ? f.tabs[y] = [c(r, o)] : 2 == f.ctype || 6 == f.ctype ? f.tabs[y] = [c(r, o), c(r, o + 2), c(r, o + 4)] : 3 == f.ctype && (f.tabs[y] = r[o]);
      else if ("IEND" == y) break;
      o += E, l.readUint(r, o), o += 4
    }
    if (0 != h) {
      var A = f.frames[f.frames.length - 1];
      A.data = i(f, n.slice(0, h), A.rect.width, A.rect.height)
    }
    return f.data = i(f, p, f.width, f.height), delete f.compress, delete f.interlace, delete f.filter, f
  }

  function i(e, t, n, r) {
    var i = Date.now(),
      u = new Uint8Array((Math.ceil(n * l(e) / 8) + 1 + e.interlace) * r);
    t = e.tabs.CgBI ? s(t, u) : a(t, u);
    var i = Date.now();
    return 0 == e.interlace ? t = c(t, e, 0, n, r) : 1 == e.interlace && (t = o(t, e)), t
  }

  function a(e, t) {
    return s(new Uint8Array(e.buffer, 2, e.length - 6), t)
  }
  var s = function() {
    var e = function() {
      var e = Uint16Array,
        t = Uint32Array;
      return {
        m: new e(16),
        v: new e(16),
        d: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        o: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999],
        z: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0],
        B: new e(32),
        p: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535],
        w: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0],
        h: new t(32),
        g: new e(512),
        s: [],
        A: new e(32),
        t: [],
        k: new e(32768),
        c: [],
        a: [],
        n: new e(32768),
        e: [],
        C: new e(512),
        b: [],
        i: new e(32768),
        r: new t(286),
        f: new t(30),
        l: new t(19),
        u: new t(15e3),
        q: new e(65536),
        j: new e(32768)
      }
    }();

    function t(t, n) {
      for (var r, i, a, s, o, l = t.length, c = e.v, s = 0; s <= n; s++) c[s] = 0;
      for (s = 1; s < l; s += 2) c[t[s]]++;
      var u = e.m;
      for (i = 1, r = 0, c[0] = 0; i <= n; i++) r = r + c[i - 1] << 1, u[i] = r;
      for (a = 0; a < l; a += 2) 0 != (o = t[a + 1]) && (t[a] = u[o], u[o]++)
    }

    function n(t, n, r) {
      for (var i = t.length, a = e.i, s = 0; s < i; s += 2)
        if (0 != t[s + 1])
          for (var o = s >> 1, l = t[s + 1], c = o << 4 | l, u = n - l, d = t[s] << u, f = d + (1 << u); d != f;) r[a[d] >>> 15 - n] = c, d++
    }

    function r(t, n) {
      for (var r = e.i, i = 15 - n, a = 0; a < t.length; a += 2) {
        var s = t[a] << n - t[a + 1];
        t[a] = r[s] >>> i
      }
    }

    function i(e, t, n) {
      return (e[t >>> 3] | e[(t >>> 3) + 1] << 8) >>> (7 & t) & (1 << n) - 1
    }

    function a(e, t, n) {
      return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (7 & t) & (1 << n) - 1
    }

    function s(e, t) {
      return (e[t >>> 3] | e[(t >>> 3) + 1] << 8 | e[(t >>> 3) + 2] << 16) >>> (7 & t)
    }

    function o(e, t) {
      var n = e.length;
      if (t <= n) return e;
      var r = new Uint8Array(Math.max(n << 1, t));
      return r.set(e, 0), r
    }

    function l(e, t, n, r, a, o) {
      for (var l = 0; l < n;) {
        var c = e[s(r, a) & t];
        a += 15 & c;
        var u = c >>> 4;
        if (u <= 15) o[l] = u, l++;
        else {
          var d = 0,
            f = 0;
          16 == u ? (f = 3 + i(r, a, 2), a += 2, d = o[l - 1]) : 17 == u ? (f = 3 + i(r, a, 3), a += 3) : 18 == u && (f = 11 + i(r, a, 7), a += 7);
          for (var p = l + f; l < p;) o[l] = d, l++
        }
      }
      return a
    }

    function c(e, t, n, r) {
      for (var i = 0, a = 0, s = r.length >>> 1; a < n;) {
        var o = e[a + t];
        r[a << 1] = 0, r[(a << 1) + 1] = o, o > i && (i = o), a++
      }
      for (; a < s;) r[a << 1] = 0, r[(a << 1) + 1] = 0, a++;
      return i
    }
    return ! function() {
        for (var i = 32768, a = 0; a < i; a++) {
          var s = a;
          s = (0xff00ff00 & (s = (0xf0f0f0f0 & (s = (0xcccccccc & (s = (0xaaaaaaaa & s) >>> 1 | (0x55555555 & s) << 1)) >>> 2 | (0x33333333 & s) << 2)) >>> 4 | (0xf0f0f0f & s) << 4)) >>> 8 | (0xff00ff & s) << 8, e.i[a] = (s >>> 16 | s << 16) >>> 17
        }

        function o(e, t, n) {
          for (; 0 != t--;) e.push(0, n)
        }
        for (var a = 0; a < 32; a++) e.B[a] = e.o[a] << 3 | e.z[a], e.h[a] = e.p[a] << 4 | e.w[a];
        o(e.s, 144, 8), o(e.s, 112, 9), o(e.s, 24, 7), o(e.s, 8, 8), t(e.s, 9), n(e.s, 9, e.g), r(e.s, 9), o(e.t, 32, 5), t(e.t, 5), n(e.t, 5, e.A), r(e.t, 5), o(e.b, 19, 0), o(e.c, 286, 0), o(e.e, 30, 0), o(e.a, 320, 0)
      }(),
      function(r, u) {
        var d, f, p = Uint8Array,
          _ = 0,
          h = 0,
          m = 0,
          g = 0,
          E = 0,
          y = 0,
          b = 0,
          O = 0,
          v = 0;
        if (3 == r[0] && 0 == r[1]) return u || new p(0);
        var A = null == u;
        for (A && (u = new p(r.length >>> 2 << 3)); 0 == _;) {
          if (_ = a(r, v, 1), h = a(r, v + 1, 2), v += 3, 0 == h) {
            (7 & v) != 0 && (v += 8 - (7 & v));
            var I = (v >>> 3) + 4,
              S = r[I - 4] | r[I - 3] << 8;
            A && (u = o(u, O + S)), u.set(new p(r.buffer, r.byteOffset + I, S), O), v = I + S << 3, O += S;
            continue
          }
          if (A && (u = o(u, O + 131072)), 1 == h && (d = e.g, f = e.A, y = 511, b = 31), 2 == h) {
            m = i(r, v, 5) + 257, g = i(r, v + 5, 5) + 1, E = i(r, v + 10, 4) + 4, v += 14;
            for (var T = 1, C = 0; C < 38; C += 2) e.b[C] = 0, e.b[C + 1] = 0;
            for (var C = 0; C < E; C++) {
              var N = i(r, v + 3 * C, 3);
              e.b[(e.d[C] << 1) + 1] = N, N > T && (T = N)
            }
            v += 3 * E, t(e.b, T), n(e.b, T, e.C), d = e.k, f = e.n, v = l(e.C, (1 << T) - 1, m + g, r, v, e.a);
            var R = c(e.a, 0, m, e.c);
            y = (1 << R) - 1;
            var w = c(e.a, m, g, e.e);
            b = (1 << w) - 1, t(e.c, R), n(e.c, R, d), t(e.e, w), n(e.e, w, f)
          }
          for (;;) {
            var P = d[s(r, v) & y];
            v += 15 & P;
            var D = P >>> 4;
            if (D >>> 8 == 0) u[O++] = D;
            else if (256 == D) break;
            else {
              var x = O + D - 254;
              if (D > 264) {
                var L = e.B[D - 257];
                x = O + (L >>> 3) + i(r, v, 7 & L), v += 7 & L
              }
              var j = f[s(r, v) & b];
              v += 15 & j;
              var M = j >>> 4,
                k = e.h[M],
                U = (k >>> 4) + a(r, v, 15 & k);
              for (v += 15 & k, A && (u = o(u, O + 131072)); O < x;) u[O] = u[O++ - U], u[O] = u[O++ - U], u[O] = u[O++ - U], u[O] = u[O++ - U];
              O = x
            }
          }
        }
        return u.length == O ? u : u.slice(0, O)
      }
  }();

  function o(e, t) {
    for (var n = t.width, r = t.height, i = l(t), a = i >> 3, s = Math.ceil(n * i / 8), o = new Uint8Array(r * s), u = 0, d = [0, 0, 4, 0, 2, 0, 1], f = [0, 4, 0, 2, 0, 1, 0], p = [8, 8, 8, 4, 4, 2, 2], _ = [8, 8, 4, 4, 2, 2, 1], h = 0; h < 7;) {
      for (var m = p[h], g = _[h], E = 0, y = 0, b = d[h]; b < r;) b += m, y++;
      for (var O = f[h]; O < n;) O += g, E++;
      var v = Math.ceil(E * i / 8);
      c(e, t, u, E, y);
      for (var A = 0, I = d[h]; I < r;) {
        for (var S = f[h], T = u + A * v << 3; S < n;) {
          if (1 == i) {
            var C = e[T >> 3];
            C = C >> 7 - (7 & T) & 1, o[I * s + (S >> 3)] |= C << 7 - (7 & S)
          }
          if (2 == i) {
            var C = e[T >> 3];
            C = C >> 6 - (7 & T) & 3, o[I * s + (S >> 2)] |= C << 6 - ((3 & S) << 1)
          }
          if (4 == i) {
            var C = e[T >> 3];
            C = C >> 4 - (7 & T) & 15, o[I * s + (S >> 1)] |= C << 4 - ((1 & S) << 2)
          }
          if (i >= 8)
            for (var N = I * s + S * a, R = 0; R < a; R++) o[N + R] = e[(T >> 3) + R];
          T += i, S += g
        }
        A++, I += m
      }
      E * y != 0 && (u += y * (1 + v)), h += 1
    }
    return o
  }

  function l(e) {
    return [1, null, 3, 1, 2, null, 4][e.ctype] * e.depth
  }

  function c(e, t, n, r, i) {
    var a = l(t),
      s = Math.ceil(r * a / 8);
    a = Math.ceil(a / 8);
    var o, c, d = e[n],
      f = 0;
    if (d > 1 && (e[n] = [0, 0, 1][d - 2]), 3 == d)
      for (f = a; f < s; f++) e[f + 1] = e[f + 1] + (e[f + 1 - a] >>> 1) & 255;
    for (var p = 0; p < i; p++)
      if (d = e[(c = (o = n + p * s) + p + 1) - 1], f = 0, 0 == d)
        for (; f < s; f++) e[o + f] = e[c + f];
      else if (1 == d) {
      for (; f < a; f++) e[o + f] = e[c + f];
      for (; f < s; f++) e[o + f] = e[c + f] + e[o + f - a]
    } else if (2 == d)
      for (; f < s; f++) e[o + f] = e[c + f] + e[o + f - s];
    else if (3 == d) {
      for (; f < a; f++) e[o + f] = e[c + f] + (e[o + f - s] >>> 1);
      for (; f < s; f++) e[o + f] = e[c + f] + (e[o + f - s] + e[o + f - a] >>> 1)
    } else {
      for (; f < a; f++) e[o + f] = e[c + f] + u(0, e[o + f - s], 0);
      for (; f < s; f++) e[o + f] = e[c + f] + u(e[o + f - a], e[o + f - s], e[o + f - a - s])
    }
    return e
  }

  function u(e, t, n) {
    var r = e + t - n,
      i = r - e,
      a = r - t,
      s = r - n;
    return i * i <= a * a && i * i <= s * s ? e : a * a <= s * s ? t : n
  }

  function d(t, n, r) {
    r.width = e.readUint(t, n), n += 4, r.height = e.readUint(t, n), r.depth = t[n += 4], r.ctype = t[++n], r.compress = t[++n], r.filter = t[++n], r.interlace = t[++n], n++
  }

  function f(e, t, n, r, i, a, s, o, l) {
    for (var c = Math.min(t, i), u = Math.min(n, a), d = 0, f = 0, p = 0; p < u; p++)
      for (var _ = 0; _ < c; _++)
        if (s >= 0 && o >= 0 ? (d = p * t + _ << 2, f = (o + p) * i + s + _ << 2) : (d = (-o + p) * t - s + _ << 2, f = p * i + _ << 2), 0 == l) r[f] = e[d], r[f + 1] = e[d + 1], r[f + 2] = e[d + 2], r[f + 3] = e[d + 3];
        else if (1 == l) {
      var h = e[d + 3] * (1 / 255),
        m = e[d] * h,
        g = e[d + 1] * h,
        E = e[d + 2] * h,
        y = r[f + 3] * (1 / 255),
        b = r[f] * y,
        O = r[f + 1] * y,
        v = r[f + 2] * y,
        A = 1 - h,
        I = h + y * A,
        S = 0 == I ? 0 : 1 / I;
      r[f + 3] = 255 * I, r[f + 0] = (m + b * A) * S, r[f + 1] = (g + O * A) * S, r[f + 2] = (E + v * A) * S
    } else if (2 == l) {
      var h = e[d + 3],
        m = e[d],
        g = e[d + 1],
        E = e[d + 2],
        y = r[f + 3],
        b = r[f],
        O = r[f + 1],
        v = r[f + 2];
      h == y && m == b && g == O && E == v ? (r[f] = 0, r[f + 1] = 0, r[f + 2] = 0, r[f + 3] = 0) : (r[f] = m, r[f + 1] = g, r[f + 2] = E, r[f + 3] = h)
    } else if (3 == l) {
      var h = e[d + 3],
        m = e[d],
        g = e[d + 1],
        E = e[d + 2],
        y = r[f + 3],
        b = r[f],
        O = r[f + 1],
        v = r[f + 2];
      if (h == y && m == b && g == O && E == v) continue;
      if (h < 220 && y > 20) returnfalse
    }
    returntrue
  }
  return {
    decode: r,
    toRGBA8: t,
    _paeth: u,
    _copyTile: f,
    _bin: e
  }
}();
! function() {
  var e = t._copyTile,
    n = t._bin,
    r = t._paeth,
    i = {
      table: function() {
        for (var e = new Uint32Array(256), t = 0; t < 256; t++) {
          for (var n = t, r = 0; r < 8; r++) 1 & n ? n = 0xedb88320 ^ n >>> 1 : n >>>= 1;
          e[t] = n
        }
        return e
      }(),
      update: function(e, t, n, r) {
        for (var a = 0; a < r; a++) e = i.table[(e ^ t[n + a]) & 255] ^ e >>> 8;
        return e
      },
      crc: function(e, t, n) {
        return 0xffffffff ^ i.update(0xffffffff, e, t, n)
      }
    };

  function a(e, t, n, r) {
    t[n] += e[0] * r >> 4, t[n + 1] += e[1] * r >> 4, t[n + 2] += e[2] * r >> 4, t[n + 3] += e[3] * r >> 4
  }

  function s(e) {
    return Math.max(0, Math.min(255, e))
  }

  function o(e, t) {
    var n = e[0] - t[0],
      r = e[1] - t[1],
      i = e[2] - t[2],
      a = e[3] - t[3];
    return n * n + r * r + i * i + a * a
  }

  function l(e, t, n, r, i, l, c) {
    null == c && (c = 1);
    for (var u = r.length, d = [], f = [], p = 0; p < u; p++) {
      var _ = r[p];
      d.push([_ >>> 0 & 255, _ >>> 8 & 255, _ >>> 16 & 255, _ >>> 24 & 255])
    }
    for (var p = 0; p < u; p++) {
      for (var h = 0xffffffff, m = 0, g = 0; g < u; g++) {
        var E = o(d[p], d[g]);
        g != p && E < h && (h = E, m = g)
      }
      var y = Math.sqrt(h) / 2;
      f[p] = ~~(y * y)
    }
    for (var b = new Uint32Array(i.buffer), O = new Int16Array(t * n * 4), v = 4, A = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5], p = 0; p < A.length; p++) A[p] = 255 * (false + (A[p] + .5) / (v * v));
    for (var I = 0; I < n; I++)
      for (var S = 0; S < t; S++) {
        var T, p = (I * t + S) * 4;
        if (2 != c) T = [s(e[p] + O[p]), s(e[p + 1] + O[p + 1]), s(e[p + 2] + O[p + 2]), s(e[p + 3] + O[p + 3])];
        else {
          var E = A[(I & v - 1) * v + (S & v - 1)];
          T = [s(e[p] + E), s(e[p + 1] + E), s(e[p + 2] + E), s(e[p + 3] + E)]
        }
        for (var m = 0, C = 0xffffff, g = 0; g < u; g++) {
          var N = o(T, d[g]);
          N < C && (C = N, m = g)
        }
        var R = d[m],
          w = [T[0] - R[0], T[1] - R[1], T[2] - R[2], T[3] - R[3]];
        1 == c && (S != t - 1 && a(w, O, p + 4, 7), I != n - 1 && (0 != S && a(w, O, p + 4 * t - 4, 3), a(w, O, p + 4 * t, 5), S != t - 1 && a(w, O, p + 4 * t + 4, 1))), l[p >> 2] = m, b[p >> 2] = r[m]
      }
  }

  function c(e, t, n, r, i, a, s, o) {
    var l = {
      ctype: 0 + 2 * (1 != r) + 4 * (0 != i),
      depth: a,
      frames: []
    };
    Date.now();
    for (var c = (r + i) * a, f = c * t, p = 0; p < e.length; p++) l.frames.push({
      rect: {
        x: 0,
        y: 0,
        width: t,
        height: n
      },
      img: new Uint8Array(e[p]),
      blend: 0,
      dispose: 1,
      bpp: Math.ceil(c / 8),
      bpl: Math.ceil(f / 8)
    });
    return d(l, 0, true), u(l, t, n, s, o)
  }

  function u(e, t, r, a, s) {
    null == s && (s = {});
    var o, l = i.crc,
      c = n.writeUint,
      u = n.writeUshort,
      d = n.writeASCII,
      f = 8,
      p = e.frames.length > 1,
      _ = false,
      h = 33 + 20 * !!p;
    if (null != s.sRGB && (h += 13), null != s.pHYs && (h += 21), null != s.iCCP && (h += 21 + (o = pako.deflate(s.iCCP)).length + 4), 3 == e.ctype) {
      for (var m = e.plte.length, g = 0; g < m; g++) e.plte[g] >>> 24 != 255 && (_ = true);
      h += 8 + 3 * m + 4 + (_ ? 8 + +m + 4 : 0)
    }
    for (var E = 0; E < e.frames.length; E++) {
      var y = e.frames[E];
      p && (h += 38), h += y.cimg.length + 12, 0 != E && (h += 4)
    }
    for (var b = new Uint8Array(h += 12), O = [137, 80, 78, 71, 13, 10, 26, 10], g = 0; g < 8; g++) b[g] = O[g];
    if (c(b, f, 13), d(b, f += 4, "IHDR"), c(b, f += 4, t), c(b, f += 4, r), b[f += 4] = e.depth, b[++f] = e.ctype, b[++f] = 0, b[++f] = 0, b[++f] = 0, c(b, ++f, l(b, f - 17, 17)), f += 4, null != s.sRGB && (c(b, f, 1), d(b, f += 4, "sRGB"), b[f += 4] = s.sRGB, c(b, ++f, l(b, f - 5, 5)), f += 4), null != s.iCCP) {
      var v = 13 + o.length;
      c(b, f, v), d(b, f += 4, "iCCP"), d(b, f += 4, "ICC profile"), f += 11, f += 2, b.set(o, f), c(b, f += o.length, l(b, f - (v + 4), v + 4)), f += 4
    }
    if (null != s.pHYs && (c(b, f, 9), d(b, f += 4, "pHYs"), c(b, f += 4, s.pHYs[0]), c(b, f += 4, s.pHYs[1]), b[f += 4] = s.pHYs[2], c(b, ++f, l(b, f - 13, 13)), f += 4), p && (c(b, f, 8), d(b, f += 4, "acTL"), c(b, f += 4, e.frames.length), c(b, f += 4, null != s.loop ? s.loop : 0), c(b, f += 4, l(b, f - 12, 12)), f += 4), 3 == e.ctype) {
      var m = e.plte.length;
      c(b, f, 3 * m), d(b, f += 4, "PLTE"), f += 4;
      for (var g = 0; g < m; g++) {
        var A = 3 * g,
          I = e.plte[g],
          S = 255 & I,
          T = I >>> 8 & 255,
          C = I >>> 16 & 255;
        b[f + A + 0] = S, b[f + A + 1] = T, b[f + A + 2] = C
      }
      if (c(b, f += 3 * m, l(b, f - 3 * m - 4, 3 * m + 4)), f += 4, _) {
        c(b, f, m), d(b, f += 4, "tRNS"), f += 4;
        for (var g = 0; g < m; g++) b[f + g] = e.plte[g] >>> 24 & 255;
        c(b, f += m, l(b, f - m - 4, m + 4)), f += 4
      }
    }
    for (var N = 0, E = 0; E < e.frames.length; E++) {
      var y = e.frames[E];
      p && (c(b, f, 26), d(b, f += 4, "fcTL"), c(b, f += 4, N++), c(b, f += 4, y.rect.width), c(b, f += 4, y.rect.height), c(b, f += 4, y.rect.x), c(b, f += 4, y.rect.y), u(b, f += 4, a[E]), u(b, f += 2, 1e3), b[f += 2] = y.dispose, b[++f] = y.blend, c(b, ++f, l(b, f - 30, 30)), f += 4);
      var R = y.cimg,
        m = R.length;
      c(b, f, m + 4 * (0 != E));
      var w = f += 4;
      d(b, f, 0 == E ? "IDAT" : "fdAT"), f += 4, 0 != E && (c(b, f, N++), f += 4), b.set(R, f), c(b, f += m, l(b, w, f - w)), f += 4
    }
    return c(b, f, 0), d(b, f += 4, "IEND"), c(b, f += 4, l(b, f - 4, 4)), f += 4, b.buffer
  }

  function d(e, t, n) {
    for (var r = 0; r < e.frames.length; r++) {
      var i = e.frames[r],
        a = (i.rect.width, i.rect.height),
        s = new Uint8Array(a * i.bpl + a);
      i.cimg = m(i.img, a, i.bpp, i.bpl, s, t, n)
    }
  }

  function f(e, t, n, r, i) {
    for (var a = i[0], s = i[1], o = i[2], c = i[3], u = i[4], d = i[5], f = 6, _ = 8, h = 255, m = 0; m < e.length; m++)
      for (var g = new Uint8Array(e[m]), y = g.length, b = 0; b < y; b += 4) h &= g[b + 3];
    var O = 255 != h,
      v = p(e, t, n, a, s, o),
      A = {},
      I = [],
      S = [];
    if (0 != r) {
      for (var T = [], b = 0; b < v.length; b++) T.push(v[b].img.buffer);
      for (var C = E(D(T), r), b = 0; b < C.plte.length; b++) I.push(C.plte[b].est.rgba);
      for (var N = 0, b = 0; b < v.length; b++) {
        var R = v[b],
          w = R.img.length,
          P = new Uint8Array(C.inds.buffer, N >> 2, w >> 2);
        S.push(P);
        var x = new Uint8Array(C.abuf, N, w);
        d && l(R.img, R.rect.width, R.rect.height, I, x, P), R.img.set(x), N += w
      }
    } else
      for (var m = 0; m < v.length; m++) {
        var R = v[m],
          L = new Uint32Array(R.img.buffer),
          j = R.rect.width,
          y = L.length,
          P = new Uint8Array(y);
        S.push(P);
        for (var b = 0; b < y; b++) {
          var M = L[b];
          if (0 != b && M == L[b - 1]) P[b] = P[b - 1];
          else if (b > j && M == L[b - j]) P[b] = P[b - j];
          else {
            var k = A[M];
            if (null == k && (A[M] = k = I.length, I.push(M), I.length >= 300)) break;
            P[b] = k
          }
        }
      }
    var U = I.length;
    U <= 256 && false == u && (_ = Math.max(_ = U <= 2 ? 1 : U <= 4 ? 2 : U <= 16 ? 4 : 8, c));
    for (var m = 0; m < v.length; m++) {
      var R = v[m],
        j = (R.rect.x, R.rect.y, R.rect.width),
        G = R.rect.height,
        V = R.img;
      new Uint32Array(V.buffer);
      var F = 4 * j,
        B = 4;
      if (U <= 256 && false == u) {
        for (var H = new Uint8Array((F = Math.ceil(_ * j / 8)) * G), Y = S[m], W = 0; W < G; W++) {
          var b = W * F,
            K = W * j;
          if (8 == _)
            for (var z = 0; z < j; z++) H[b + z] = Y[K + z];
          else if (4 == _)
            for (var z = 0; z < j; z++) H[b + (z >> 1)] |= Y[K + z] << 4 - (1 & z) * 4;
          else if (2 == _)
            for (var z = 0; z < j; z++) H[b + (z >> 2)] |= Y[K + z] << 6 - (3 & z) * 2;
          else if (1 == _)
            for (var z = 0; z < j; z++) H[b + (z >> 3)] |= Y[K + z] << 7 - (7 & z) * 1
        }
        V = H, f = 3, B = 1
      } else if (false == O && 1 == v.length) {
        for (var H = new Uint8Array(j * G * 3), q = j * G, b = 0; b < q; b++) {
          var X = 3 * b,
            Z = 4 * b;
          H[X] = V[Z], H[X + 1] = V[Z + 1], H[X + 2] = V[Z + 2]
        }
        V = H, f = 2, B = 3, F = 3 * j
      }
      R.img = V, R.bpl = F, R.bpp = B
    }
    return {
      ctype: f,
      depth: _,
      plte: I,
      frames: v
    }
  }

  function p(t, n, r, i, a, s) {
    for (var o = [], l = 0; l < t.length; l++) {
      var c, u = new Uint8Array(t[l]),
        d = new Uint32Array(u.buffer),
        f = 0,
        p = 0,
        m = n,
        g = r,
        E = +!!i;
      if (0 != l) {
        for (var y = s || i || 1 == l || 0 != o[l - 2].dispose ? 1 : 2, b = 0, O = 1e9, v = 0; v < y; v++) {
          for (var A = new Uint8Array(t[l - 1 - v]), I = new Uint32Array(t[l - 1 - v]), S = n, T = r, C = false, N = false, R = 0; R < r; R++)
            for (var w = 0; w < n; w++) {
              var P = R * n + w;
              d[P] != I[P] && (w < S && (S = w), w > C && (C = w), R < T && (T = R), R > N && (N = R))
            }
          false == C && (S = T = C = N = 0), a && ((1 & S) == 1 && S--, (1 & T) == 1 && T--);
          var D = (C - S + 1) * (N - T + 1);
          D < O && (O = D, b = v, f = S, p = T, m = C - S + 1, g = N - T + 1)
        }
        var A = new Uint8Array(t[l - 1 - b]);
        1 == b && (o[l - 1].dispose = 2), e(A, n, r, c = new Uint8Array(m * g * 4), m, g, -f, -p, 0), 1 == (E = +!!e(u, n, r, c, m, g, -f, -p, 3)) ? h(u, n, r, c, {
          x: f,
          y: p,
          width: m,
          height: g
        }) : e(u, n, r, c, m, g, -f, -p, 0)
      } else c = u.slice(0);
      o.push({
        rect: {
          x: f,
          y: p,
          width: m,
          height: g
        },
        img: c,
        blend: E,
        dispose: 0
      })
    }
    if (i)
      for (var l = 0; l < o.length; l++) {
        var x = o[l];
        if (1 != x.blend) {
          var L = x.rect,
            j = o[l - 1].rect,
            M = Math.min(L.x, j.x),
            k = Math.min(L.y, j.y),
            U = Math.max(L.x + L.width, j.x + j.width),
            G = Math.max(L.y + L.height, j.y + j.height),
            V = {
              x: M,
              y: k,
              width: U - M,
              height: G - k
            };
          o[l - 1].dispose = 1, l - 1 != 0 && _(t, n, r, o, l - 1, V, a), _(t, n, r, o, l, V, a)
        }
      }
    var F = 0;
    if (1 != t.length)
      for (var P = 0; P < o.length; P++) {
        var x = o[P];
        F += x.rect.width * x.rect.height
      }
    return o
  }

  function _(t, n, r, i, a, s, o) {
    for (var l = Uint8Array, c = Uint32Array, u = new l(t[a - 1]), d = new c(t[a - 1]), f = a + 1 < t.length ? new l(t[a + 1]) : null, p = new l(t[a]), _ = new c(p.buffer), m = n, g = r, E = false, y = false, b = 0; b < s.height; b++)
      for (var O = 0; O < s.width; O++) {
        var v = s.x + O,
          A = s.y + b,
          I = A * n + v,
          S = _[I];
        0 == S || 0 == i[a - 1].dispose && d[I] == S && (null == f || 0 != f[4 * I + 3]) || (v < m && (m = v), v > E && (E = v), A < g && (g = A), A > y && (y = A))
      }
    false == E && (m = g = E = y = 0), o && ((1 & m) == 1 && m--, (1 & g) == 1 && g--), s = {
      x: m,
      y: g,
      width: E - m + 1,
      height: y - g + 1
    };
    var T = i[a];
    T.rect = s, T.blend = 1, T.img = new Uint8Array(s.width * s.height * 4), 0 == i[a - 1].dispose ? (e(u, n, r, T.img, s.width, s.height, -s.x, -s.y, 0), h(p, n, r, T.img, s)) : e(p, n, r, T.img, s.width, s.height, -s.x, -s.y, 0)
  }

  function h(t, n, r, i, a) {
    e(t, n, r, i, a.width, a.height, -a.x, -a.y, 2)
  }

  function m(e, t, n, r, i, a, s) {
    var o = [],
      l = [0, 1, 2, 3, 4];
    false != a ? l = [a] : (t * r > 5e5 || 1 == n) && (l = [0]), s && (f = {
      level: 0
    });
    var c = i.length > 1e7 && null != window.UZIP ? window.UZIP : pako;
    Date.now();
    for (var u = 0; u < l.length; u++) {
      for (var d = 0; d < t; d++) g(i, e, d, r, n, l[u]);
      o.push(c.deflate(i, f))
    }
    for (var f, p, _ = 1e9, u = 0; u < o.length; u++) o[u].length < _ && (p = u, _ = o[u].length);
    return o[p]
  }

  function g(e, t, n, i, a, s) {
    var o = n * i,
      l = o + n;
    if (e[l] = s, l++, 0 == s)
      if (i < 500)
        for (var c = 0; c < i; c++) e[l + c] = t[o + c];
      else e.set(new Uint8Array(t.buffer, o, i), l);
    else if (1 == s) {
      for (var c = 0; c < a; c++) e[l + c] = t[o + c];
      for (var c = a; c < i; c++) e[l + c] = t[o + c] - t[o + c - a] + 256 & 255
    } else if (0 == n) {
      for (var c = 0; c < a; c++) e[l + c] = t[o + c];
      if (2 == s)
        for (var c = a; c < i; c++) e[l + c] = t[o + c];
      if (3 == s)
        for (var c = a; c < i; c++) e[l + c] = t[o + c] - (t[o + c - a] >> 1) + 256 & 255;
      if (4 == s)
        for (var c = a; c < i; c++) e[l + c] = t[o + c] - r(t[o + c - a], 0, 0) + 256 & 255
    } else {
      if (2 == s)
        for (var c = 0; c < i; c++) e[l + c] = t[o + c] + 256 - t[o + c - i] & 255;
      if (3 == s) {
        for (var c = 0; c < a; c++) e[l + c] = t[o + c] + 256 - (t[o + c - i] >> 1) & 255;
        for (var c = a; c < i; c++) e[l + c] = t[o + c] + 256 - (t[o + c - i] + t[o + c - a] >> 1) & 255
      }
      if (4 == s) {
        for (var c = 0; c < a; c++) e[l + c] = t[o + c] + 256 - r(0, t[o + c - i], 0) & 255;
        for (var c = a; c < i; c++) e[l + c] = t[o + c] + 256 - r(t[o + c - a], t[o + c - i], t[o + c - a - i]) & 255
      }
    }
  }

  function E(e, t, n) {
    Date.now();
    for (var r = new Uint8Array(e), i = r.slice(0), a = new Uint32Array(i.buffer), s = A(i, t), o = s[0], l = s[1], c = l.length, u = new Uint32Array(c), d = new Uint8Array(u.buffer), f = 0; f < c; f++) u[f] = l[f].est.rgba;
    var p, _ = r.length,
      h = new Uint8Array(_ >> 2);
    if (c <= 60) v(r, h, d), y(h, a, u);
    else if (r.length < 32e6)
      for (var f = 0; f < _; f += 4) {
        var m = r[f] * (1 / 255),
          g = r[f + 1] * (1 / 255),
          E = r[f + 2] * (1 / 255),
          O = r[f + 3] * (1 / 255);
        p = I(o, m, g, E, O), h[f >> 2] = p.ind, a[f >> 2] = p.est.rgba
      } else
        for (var f = 0; f < _; f += 4) {
          var m = r[f] * (1 / 255),
            g = r[f + 1] * (1 / 255),
            E = r[f + 2] * (1 / 255),
            O = r[f + 3] * (1 / 255);
          for (p = o; p.left;) p = 0 >= S(p.est, m, g, E, O) ? p.left : p.right;
          h[f >> 2] = p.ind, a[f >> 2] = p.est.rgba
        }
    if (n || r.length * c < 10 * 4e6) {
      for (var T = 1e9, f = 0; f < 10; f++) {
        var C = b(r, h, d);
        if (C / T > .997) break;
        T = C
      }
      for (var f = 0; f < c; f++) l[f].est.rgba = u[f];
      y(h, a, u)
    }
    return {
      abuf: i.buffer,
      inds: h,
      plte: l
    }
  }

  function y(e, t, n) {
    for (var r = 0; r < e.length; r++) t[r] = n[e[r]]
  }

  function b(e, t, n) {
    return O(e, t, n), v(e, t, n)
  }

  function O(e, t, n) {
    for (var r = n.length >>> 2, i = new Uint32Array(4 * r), a = new Uint32Array(r), s = 0; s < e.length; s += 4) {
      var o = t[s >>> 2],
        l = 4 * o;
      a[o]++, i[l] += e[s], i[l + 1] += e[s + 1], i[l + 2] += e[s + 2], i[l + 3] += e[s + 3]
    }
    for (var s = 0; s < n.length; s++) n[s] = Math.round(i[s] / a[s >>> 2])
  }

  function v(e, t, n) {
    for (var r = 0, i = n.length >>> 2, a = [], s = 0; s < i; s++) {
      for (var o = 4 * s, l = n[o], c = n[o + 1], u = n[o + 2], d = n[o + 3], f = 0, p = 1e9, _ = 0; _ < i; _++)
        if (s != _) {
          var h = 4 * _,
            m = l - n[h],
            g = c - n[h + 1],
            E = u - n[h + 2],
            y = d - n[h + 3],
            b = m * m + g * g + E * E + y * y;
          b < p && (p = b, f = _)
        } a[s] = .5 * Math.sqrt(p), a[s] = a[s] * a[s]
    }
    for (var s = 0; s < e.length; s += 4) {
      var l = e[s],
        c = e[s + 1],
        u = e[s + 2],
        d = e[s + 3],
        f = t[s >>> 2],
        o = 4 * f,
        m = l - n[o],
        g = c - n[o + 1],
        E = u - n[o + 2],
        y = d - n[o + 3],
        p = m * m + g * g + E * E + y * y;
      if (p > a[f])
        for (var _ = 0; _ < i; _++) {
          m = l - n[o = 4 * _], g = c - n[o + 1];
          var b = m * m + g * g + (E = u - n[o + 2]) * E + (y = d - n[o + 3]) * y;
          if (b < p && (p = b, f = _, p < a[_])) break
        }
      t[s >>> 2] = f, r += p
    }
    return r / (e.length >>> 2)
  }

  function A(e, t, n) {
    null == n && (n = 1e-4);
    var r = new Uint32Array(e.buffer),
      i = {
        i0: 0,
        i1: e.length,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
    i.bst = R(e, i.i0, i.i1), i.est = w(i.bst);
    for (var a = [i]; a.length < t;) {
      for (var s = 0, o = 0, l = 0; l < a.length; l++) a[l].est.L > s && (s = a[l].est.L, o = l);
      if (s < n) break;
      var c = a[o],
        u = C(e, r, c.i0, c.i1, c.est.e, c.est.eMq255);
      if (c.i0 >= u || c.i1 <= u) {
        c.est.L = 0;
        continue
      }
      var d = {
        i0: c.i0,
        i1: u,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      d.bst = R(e, d.i0, d.i1), d.est = w(d.bst);
      var f = {
        i0: u,
        i1: c.i1,
        bst: null,
        est: null,
        tdst: 0,
        left: null,
        right: null
      };
      f.bst = {
        R: [],
        m: [],
        N: c.bst.N - d.bst.N
      };
      for (var l = 0; l < 16; l++) f.bst.R[l] = c.bst.R[l] - d.bst.R[l];
      for (var l = 0; l < 4; l++) f.bst.m[l] = c.bst.m[l] - d.bst.m[l];
      f.est = w(f.bst), c.left = d, c.right = f, a[o] = d, a.push(f)
    }
    a.sort(function(e, t) {
      return t.bst.N - e.bst.N
    });
    for (var l = 0; l < a.length; l++) a[l].ind = l;
    return [i, a]
  }

  function I(e, t, n, r, i) {
    if (null == e.left) return e.tdst = T(e.est.q, t, n, r, i), e;
    var a = S(e.est, t, n, r, i),
      s = e.left,
      o = e.right;
    a > 0 && (s = e.right, o = e.left);
    var l = I(s, t, n, r, i);
    if (l.tdst <= a * a) return l;
    var c = I(o, t, n, r, i);
    return c.tdst < l.tdst ? c : l
  }

  function S(e, t, n, r, i) {
    var a = e.e;
    return a[0] * t + a[1] * n + a[2] * r + a[3] * i - e.eMq
  }

  function T(e, t, n, r, i) {
    var a = t - e[0],
      s = n - e[1],
      o = r - e[2],
      l = i - e[3];
    return a * a + s * s + o * o + l * l
  }

  function C(e, t, n, r, i, a) {
    for (r -= 4; n < r;) {
      for (; N(e, n, i) <= a;) n += 4;
      for (; N(e, r, i) > a;) r -= 4;
      if (n >= r) break;
      var s = t[n >> 2];
      t[n >> 2] = t[r >> 2], t[r >> 2] = s, n += 4, r -= 4
    }
    for (; N(e, n, i) > a;) n -= 4;
    return n + 4
  }

  function N(e, t, n) {
    return e[t] * n[0] + e[t + 1] * n[1] + e[t + 2] * n[2] + e[t + 3] * n[3]
  }

  function R(e, t, n) {
    for (var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0], a = n - t >> 2, s = t; s < n; s += 4) {
      var o = e[s] * (1 / 255),
        l = e[s + 1] * (1 / 255),
        c = e[s + 2] * (1 / 255),
        u = e[s + 3] * (1 / 255);
      i[0] += o, i[1] += l, i[2] += c, i[3] += u, r[0] += o * o, r[1] += o * l, r[2] += o * c, r[3] += o * u, r[5] += l * l, r[6] += l * c, r[7] += l * u, r[10] += c * c, r[11] += c * u, r[15] += u * u
    }
    return r[4] = r[1], r[8] = r[2], r[9] = r[6], r[12] = r[3], r[13] = r[7], r[14] = r[11], {
      R: r,
      m: i,
      N: a
    }
  }

  function w(e) {
    var t = e.R,
      n = e.m,
      r = e.N,
      i = n[0],
      a = n[1],
      s = n[2],
      o = n[3],
      l = 0 == r ? 0 : 1 / r,
      c = [t[0] - i * i * l, t[1] - i * a * l, t[2] - i * s * l, t[3] - i * o * l, t[4] - a * i * l, t[5] - a * a * l, t[6] - a * s * l, t[7] - a * o * l, t[8] - s * i * l, t[9] - s * a * l, t[10] - s * s * l, t[11] - s * o * l, t[12] - o * i * l, t[13] - o * a * l, t[14] - o * s * l, t[15] - o * o * l],
      u = c,
      d = P,
      f = [Math.random(), Math.random(), Math.random(), Math.random()],
      p = 0,
      _ = 0;
    if (0 != r)
      for (var h = 0; h < 16 && (f = d.multVec(u, f), _ = Math.sqrt(d.dot(f, f)), f = d.sml(1 / _, f), !(0 != h && 1e-9 > Math.abs(_ - p))); h++) p = _;
    var m = [i * l, a * l, s * l, o * l],
      g = d.dot(d.sml(255, m), f);
    return {
      Cov: c,
      q: m,
      e: f,
      L: p,
      eMq255: g,
      eMq: d.dot(f, m),
      rgba: (Math.round(255 * m[3]) << 24 | Math.round(255 * m[2]) << 16 | Math.round(255 * m[1]) << 8 | (0 | Math.round(255 * m[0]))) >>> 0
    }
  }
  var P = {
    multVec: function(e, t) {
      return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3], e[4] * t[0] + e[5] * t[1] + e[6] * t[2] + e[7] * t[3], e[8] * t[0] + e[9] * t[1] + e[10] * t[2] + e[11] * t[3], e[12] * t[0] + e[13] * t[1] + e[14] * t[2] + e[15] * t[3]]
    },
    dot: function(e, t) {
      return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    },
    sml: function(e, t) {
      return [e * t[0], e * t[1], e * t[2], e * t[3]]
    }
  };

  function D(e) {
    for (var t = 0, n = 0; n < e.length; n++) t += e[n].byteLength;
    for (var r = new Uint8Array(t), i = 0, n = 0; n < e.length; n++) {
      for (var a = new Uint8Array(e[n]), s = a.length, o = 0; o < s; o += 4) {
        var l = a[o],
          c = a[o + 1],
          u = a[o + 2],
          d = a[o + 3];
        0 == d && (l = c = u = 0), r[i + o] = l, r[i + o + 1] = c, r[i + o + 2] = u, r[i + o + 3] = d
      }
      i += s
    }
    return r.buffer
  }
  t.encode = function(e, t, n, r, i, a, s) {
    null == r && (r = 0), null == s && (s = false);
    var o = f(e, t, n, r, [false, false, false, 0, s, false]);
    return d(o, false), u(o, t, n, i, a)
  }, t.encodeLL = c, t.encode.compress = f, t.encode.dither = l, t.quantize = E, t.quantize.findNearest = v, t.quantize.getKDtree = A, t.quantize.getNearest = I
}(), module.exports = t
/** Chunk was on web.js **/
/** chunk id: 755448, original params: e (module,exports,re quire) **/
"use strict";
var t = 30,
  n = 12;
module.exports = function(e, r) {
  var i, a, o, s, l, c, u, d, f, p, _, h, m, g, E, b, y, O, v, S, I, T, C, A, N;
  i = e.state, a = e.next_in, A = e.input, o = a + (e.avail_in - 5), s = e.next_out, N = e.output, l = s - (r - e.avail_out), c = s + (e.avail_out - 257), u = i.dmax, d = i.wsize, f = i.whave, p = i.wnext, _ = i.window, h = i.hold, m = i.bits, g = i.lencode, E = i.distcode, b = (1 << i.lenbits) - 1, y = (1 << i.distbits) - 1;
  r: do
      for (m < 15 && (h += A[a++] << m, m += 8, h += A[a++] << m, m += 8), O = g[h & b];;) {
        if (h >>>= v = O >>> 24, m -= v, 0 == (v = O >>> 16 & 255)) N[s++] = 65535 & O;
        else if (16 & v)
          for (S = 65535 & O, (v &= 15) && (m < v && (h += A[a++] << m, m += 8), S += h & (1 << v) - 1, h >>>= v, m -= v), m < 15 && (h += A[a++] << m, m += 8, h += A[a++] << m, m += 8), O = E[h & y];;) {
            if (h >>>= v = O >>> 24, m -= v, 16 & (v = O >>> 16 & 255)) {
              if (I = 65535 & O, m < (v &= 15) && (h += A[a++] << m, (m += 8) < v && (h += A[a++] << m, m += 8)), (I += h & (1 << v) - 1) > u) {
                e.msg = "invalid distance too far back", i.mode = t;
                break r
              }
              if (h >>>= v, m -= v, I > (v = s - l)) {
                if ((v = I - v) > f && i.sane) {
                  e.msg = "invalid distance too far back", i.mode = t;
                  break r
                }
                if (T = 0, C = _, 0 === p) {
                  if (T += d - v, v < S) {
                    S -= v;
                    do N[s++] = _[T++]; while (--v);
                    T = s - I, C = N
                  }
                } else if (p < v) {
                  if (T += d + p - v, (v -= p) < S) {
                    S -= v;
                    do N[s++] = _[T++]; while (--v);
                    if (T = 0, p < S) {
                      S -= v = p;
                      do N[s++] = _[T++]; while (--v);
                      T = s - I, C = N
                    }
                  }
                } else if (T += p - v, v < S) {
                  S -= v;
                  do N[s++] = _[T++]; while (--v);
                  T = s - I, C = N
                }
                for (; S > 2;) N[s++] = C[T++], N[s++] = C[T++], N[s++] = C[T++], S -= 3;
                S && (N[s++] = C[T++], S > 1 && (N[s++] = C[T++]))
              } else {
                T = s - I;
                do N[s++] = N[T++], N[s++] = N[T++], N[s++] = N[T++], S -= 3; while (S > 2);
                S && (N[s++] = N[T++], S > 1 && (N[s++] = N[T++]))
              }
            } else if ((64 & v) == 0) {
              O = E[(65535 & O) + (h & (1 << v) - 1)];
              continue
            } else {
              e.msg = "invalid distance code", i.mode = t;
              break r
            }
            break
          } else if ((64 & v) == 0) {
            O = g[(65535 & O) + (h & (1 << v) - 1)];
            continue
          } else if (32 & v) {
          i.mode = n;
          break r
        } else {
          e.msg = "invalid literal/length code", i.mode = t;
          break r
        }
        break
      }
    while (a < o && s < c);
    a -= S = m >> 3, m -= S << 3, h &= (1 << m) - 1, e.next_in = a, e.next_out = s, e.avail_in = a < o ? 5 + (o - a) : 5 - (a - o), e.avail_out = s < c ? 257 + (c - s) : 257 - (s - c), i.hold = h, i.bits = m
}
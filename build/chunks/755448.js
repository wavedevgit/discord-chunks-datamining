/** Chunk was on web.js **/
"use strict";
var t = 30,
  n = 12;
e.exports = function(e, r) {
  var i, o, a, s, l, c, u, d, f, _, p, h, m, g, E, v, b, y, O, S, I, T, N, A, C;
  i = e.state, o = e.next_in, A = e.input, a = o + (e.avail_in - 5), s = e.next_out, C = e.output, l = s - (r - e.avail_out), c = s + (e.avail_out - 257), u = i.dmax, d = i.wsize, f = i.whave, _ = i.wnext, p = i.window, h = i.hold, m = i.bits, g = i.lencode, E = i.distcode, v = (1 << i.lenbits) - 1, b = (1 << i.distbits) - 1;
  n: do
      for (m < 15 && (h += A[o++] << m, m += 8, h += A[o++] << m, m += 8), y = g[h & v];;) {
        if (h >>>= O = y >>> 24, m -= O, 0 == (O = y >>> 16 & 255)) C[s++] = 65535 & y;
        else if (16 & O)
          for (S = 65535 & y, (O &= 15) && (m < O && (h += A[o++] << m, m += 8), S += h & (1 << O) - 1, h >>>= O, m -= O), m < 15 && (h += A[o++] << m, m += 8, h += A[o++] << m, m += 8), y = E[h & b];;) {
            if (h >>>= O = y >>> 24, m -= O, 16 & (O = y >>> 16 & 255)) {
              if (I = 65535 & y, m < (O &= 15) && (h += A[o++] << m, (m += 8) < O && (h += A[o++] << m, m += 8)), (I += h & (1 << O) - 1) > u) {
                e.msg = "invalid distance too far back", i.mode = t;
                break n
              }
              if (h >>>= O, m -= O, I > (O = s - l)) {
                if ((O = I - O) > f && i.sane) {
                  e.msg = "invalid distance too far back", i.mode = t;
                  break n
                }
                if (T = 0, N = p, 0 === _) {
                  if (T += d - O, O < S) {
                    S -= O;
                    do C[s++] = p[T++]; while (--O);
                    T = s - I, N = C
                  }
                } else if (_ < O) {
                  if (T += d + _ - O, (O -= _) < S) {
                    S -= O;
                    do C[s++] = p[T++]; while (--O);
                    if (T = 0, _ < S) {
                      S -= O = _;
                      do C[s++] = p[T++]; while (--O);
                      T = s - I, N = C
                    }
                  }
                } else if (T += _ - O, O < S) {
                  S -= O;
                  do C[s++] = p[T++]; while (--O);
                  T = s - I, N = C
                }
                for (; S > 2;) C[s++] = N[T++], C[s++] = N[T++], C[s++] = N[T++], S -= 3;
                S && (C[s++] = N[T++], S > 1 && (C[s++] = N[T++]))
              } else {
                T = s - I;
                do C[s++] = C[T++], C[s++] = C[T++], C[s++] = C[T++], S -= 3; while (S > 2);
                S && (C[s++] = C[T++], S > 1 && (C[s++] = C[T++]))
              }
            } else if ((64 & O) == 0) {
              y = E[(65535 & y) + (h & (1 << O) - 1)];
              continue
            } else {
              e.msg = "invalid distance code", i.mode = t;
              break n
            }
            break
          } else if ((64 & O) == 0) {
            y = g[(65535 & y) + (h & (1 << O) - 1)];
            continue
          } else if (32 & O) {
          i.mode = n;
          break n
        } else {
          e.msg = "invalid literal/length code", i.mode = t;
          break n
        }
        break
      }
    while (o < a && s < c);
    o -= S = m >> 3, m -= S << 3, h &= (1 << m) - 1, e.next_in = o, e.next_out = s, e.avail_in = o < a ? 5 + (a - o) : 5 - (o - a), e.avail_out = s < c ? 257 + (c - s) : 257 - (s - c), i.hold = h, i.bits = m
}
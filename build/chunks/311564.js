/** Chunk was on web.js **/
/** chunk id: 311564, original params: e (module,exports,re quire) **/
"use strict";
var t = 30,
  n = 12;
module.exports = function(e, r) {
  var i, a, s, o, l, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T, C, N;
  i = e.state, a = e.next_in, C = e.input, s = a + (e.avail_in - 5), o = e.next_out, N = e.output, l = o - (r - e.avail_out), c = o + (e.avail_out - 257), u = i.dmax, d = i.wsize, f = i.whave, p = i.wnext, _ = i.window, h = i.hold, m = i.bits, g = i.lencode, E = i.distcode, y = (1 << i.lenbits) - 1, b = (1 << i.distbits) - 1;
  r: do
      for (m < 15 && (h += C[a++] << m, m += 8, h += C[a++] << m, m += 8), O = g[h & y];;) {
        if (h >>>= v = O >>> 24, m -= v, 0 == (v = O >>> 16 & 255)) N[o++] = 65535 & O;
        else if (16 & v)
          for (A = 65535 & O, (v &= 15) && (m < v && (h += C[a++] << m, m += 8), A += h & (1 << v) - 1, h >>>= v, m -= v), m < 15 && (h += C[a++] << m, m += 8, h += C[a++] << m, m += 8), O = E[h & b];;) {
            if (h >>>= v = O >>> 24, m -= v, 16 & (v = O >>> 16 & 255)) {
              if (I = 65535 & O, m < (v &= 15) && (h += C[a++] << m, (m += 8) < v && (h += C[a++] << m, m += 8)), (I += h & (1 << v) - 1) > u) {
                e.msg = "invalid distance too far back", i.mode = t;
                break r
              }
              if (h >>>= v, m -= v, I > (v = o - l)) {
                if ((v = I - v) > f && i.sane) {
                  e.msg = "invalid distance too far back", i.mode = t;
                  break r
                }
                if (S = 0, T = _, 0 === p) {
                  if (S += d - v, v < A) {
                    A -= v;
                    do N[o++] = _[S++]; while (--v);
                    S = o - I, T = N
                  }
                } else if (p < v) {
                  if (S += d + p - v, (v -= p) < A) {
                    A -= v;
                    do N[o++] = _[S++]; while (--v);
                    if (S = 0, p < A) {
                      A -= v = p;
                      do N[o++] = _[S++]; while (--v);
                      S = o - I, T = N
                    }
                  }
                } else if (S += p - v, v < A) {
                  A -= v;
                  do N[o++] = _[S++]; while (--v);
                  S = o - I, T = N
                }
                for (; A > 2;) N[o++] = T[S++], N[o++] = T[S++], N[o++] = T[S++], A -= 3;
                A && (N[o++] = T[S++], A > 1 && (N[o++] = T[S++]))
              } else {
                S = o - I;
                do N[o++] = N[S++], N[o++] = N[S++], N[o++] = N[S++], A -= 3; while (A > 2);
                A && (N[o++] = N[S++], A > 1 && (N[o++] = N[S++]))
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
    while (a < s && o < c);
    a -= A = m >> 3, m -= A << 3, h &= (1 << m) - 1, e.next_in = a, e.next_out = o, e.avail_in = a < s ? 5 + (s - a) : 5 - (a - s), e.avail_out = o < c ? 257 + (c - o) : 257 - (o - c), i.hold = h, i.bits = m
}
/** Chunk was on 87668 **/
"use strict";

function r(e) {
  let t = function(e) {
    var t;
    let n, r, o;
    let {
      PI: c,
      min: i,
      max: a,
      cos: l,
      round: d
    } = Math, s = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, _ = (63 & s) / 63, f = (s >> 6 & 63) / 31.5 - 1, b = (s >> 12 & 63) / 31.5 - 1, p = s >> 23, g = u >> 15, h = a(3, g ? p ? 5 : 7 : 7 & u), m = a(3, g ? 7 & u : p ? 5 : 7), v = p ? (15 & e[5]) / 15 : 1, w = (e[5] >> 4) / 15, O = p ? 6 : 5, y = 0, I = (t, n, r) => {
      let o = [];
      for (let c = 0; c < n; c++)
        for (let i = +!c; i * n < t * (n - c); i++) o.push(((e[O + (y >> 1)] >> ((1 & y++) << 2) & 15) / 7.5 - 1) * r);
      return o
    }, x = I(h, m, (s >> 18 & 31) / 31), P = I(3, 3, (u >> 3 & 63) / 63 * 1.25), S = I(3, 3, (u >> 9 & 63) / 63 * 1.25), C = p && I(5, 5, w), j = (n = (t = e)[3], r = 128 & t[2], ((o = 128 & t[4]) ? r ? 5 : 7 : 7 & n) / (o ? 7 & n : r ? 5 : 7)), T = d(j > 1 ? 32 : 32 * j), k = d(j > 1 ? 32 / j : 32), W = new Uint8Array(T * k * 4), B = [], D = [];
    for (let e = 0, t = 0; e < k; e++)
      for (let n = 0; n < T; n++, t += 4) {
        let r = _,
          o = f,
          d = b,
          s = v;
        for (let e = 0, t = a(h, p ? 5 : 3); e < t; e++) B[e] = l(c / T * (n + .5) * e);
        for (let t = 0, n = a(m, p ? 5 : 3); t < n; t++) D[t] = l(c / k * (e + .5) * t);
        for (let e = 0, t = 0; e < m; e++)
          for (let n = +!e, o = 2 * D[e]; n * m < h * (m - e); n++, t++) r += x[t] * B[n] * o;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = +!e, r = 2 * D[e]; n < 3 - e; n++, t++) {
            let e = B[n] * r;
            o += P[t] * e, d += S[t] * e
          }
        if (p)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = +!e, r = 2 * D[e]; n < 5 - e; n++, t++) s += C[t] * B[n] * r;
        let u = r - 2 / 3 * o,
          g = (3 * r - u + d) / 2,
          w = g - d;
        W[t] = a(0, 255 * i(1, g)), W[t + 1] = a(0, 255 * i(1, w)), W[t + 2] = a(0, 255 * i(1, u)), W[t + 3] = a(0, 255 * i(1, s))
      }
    return {
      w: T,
      h: k,
      rgba: W
    }
  }(e);
  return function(e, t, n) {
    let r = 4 * e + 1,
      o = 6 + t * (5 + r),
      c = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, o >>> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 73, 68, 65, 84, 120, 1],
      i = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0, -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4],
      a = 1,
      l = 0;
    for (let e = 0, o = 0, i = r - 1; e < t; e++, i += r - 1)
      for (c.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), l = (l + a) % 65521; o < i; o++) {
        let e = 255 & n[o];
        c.push(e), l = (l + (a = (a + e) % 65521)) % 65521
      }
    for (let [e, t] of(c.push(l >> 8, 255 & l, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + o]
      ])) {
      let n = -1;
      for (let r = e; r < t; r++) n ^= c[r], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
      n = ~n, c[t++] = n >>> 24, c[t++] = n >> 16 & 255, c[t++] = n >> 8 & 255, c[t++] = 255 & n
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...c))
  }(t.w, t.h, t.rgba)
}
n.d(t, {
  xS: () => r
})
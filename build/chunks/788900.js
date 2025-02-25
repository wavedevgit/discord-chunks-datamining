/** Chunk was on 63354 **/
"use strict";

function o(e) {
  let t = function(e) {
    var t;
    let n, o, r;
    let {
      PI: c,
      min: i,
      max: _,
      cos: d,
      round: a
    } = Math, l = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, u = (63 & l) / 63, f = (l >> 6 & 63) / 31.5 - 1, g = (l >> 12 & 63) / 31.5 - 1, h = l >> 23, p = s >> 15, b = _(3, p ? h ? 5 : 7 : 7 & s), v = _(3, p ? 7 & s : h ? 5 : 7), m = h ? (15 & e[5]) / 15 : 1, w = (e[5] >> 4) / 15, I = h ? 6 : 5, x = 0, C = (t, n, o) => {
      let r = [];
      for (let c = 0; c < n; c++)
        for (let i = +!c; i * n < t * (n - c); i++) r.push(((e[I + (x >> 1)] >> ((1 & x++) << 2) & 15) / 7.5 - 1) * o);
      return r
    }, T = C(b, v, (l >> 18 & 31) / 31), S = C(3, 3, (s >> 3 & 63) / 63 * 1.25), y = C(3, 3, (s >> 9 & 63) / 63 * 1.25), O = h && C(5, 5, w), W = (n = (t = e)[3], o = 128 & t[2], ((r = 128 & t[4]) ? o ? 5 : 7 : 7 & n) / (r ? 7 & n : o ? 5 : 7)), P = a(W > 1 ? 32 : 32 * W), k = a(W > 1 ? 32 / W : 32), B = new Uint8Array(P * k * 4), N = [], H = [];
    for (let e = 0, t = 0; e < k; e++)
      for (let n = 0; n < P; n++, t += 4) {
        let o = u,
          r = f,
          a = g,
          l = m;
        for (let e = 0, t = _(b, h ? 5 : 3); e < t; e++) N[e] = d(c / P * (n + .5) * e);
        for (let t = 0, n = _(v, h ? 5 : 3); t < n; t++) H[t] = d(c / k * (e + .5) * t);
        for (let e = 0, t = 0; e < v; e++)
          for (let n = +!e, r = 2 * H[e]; n * v < b * (v - e); n++, t++) o += T[t] * N[n] * r;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = +!e, o = 2 * H[e]; n < 3 - e; n++, t++) {
            let e = N[n] * o;
            r += S[t] * e, a += y[t] * e
          }
        if (h)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = +!e, o = 2 * H[e]; n < 5 - e; n++, t++) l += O[t] * N[n] * o;
        let s = o - 2 / 3 * r,
          p = (3 * o - s + a) / 2,
          w = p - a;
        B[t] = _(0, 255 * i(1, p)), B[t + 1] = _(0, 255 * i(1, w)), B[t + 2] = _(0, 255 * i(1, s)), B[t + 3] = _(0, 255 * i(1, l))
      }
    return {
      w: P,
      h: k,
      rgba: B
    }
  }(e);
  return function(e, t, n) {
    let o = 4 * e + 1,
      r = 6 + t * (5 + o),
      c = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, r >>> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 73, 68, 65, 84, 120, 1],
      i = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0, -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4],
      _ = 1,
      d = 0;
    for (let e = 0, r = 0, i = o - 1; e < t; e++, i += o - 1)
      for (c.push(e + 1 < t ? 0 : 1, 255 & o, o >> 8, 255 & ~o, o >> 8 ^ 255, 0), d = (d + _) % 65521; r < i; r++) {
        let e = 255 & n[r];
        c.push(e), d = (d + (_ = (_ + e) % 65521)) % 65521
      }
    for (let [e, t] of(c.push(d >> 8, 255 & d, _ >> 8, 255 & _, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + r]
      ])) {
      let n = -1;
      for (let o = e; o < t; o++) n ^= c[o], n = (n = n >>> 4 ^ i[15 & n]) >>> 4 ^ i[15 & n];
      n = ~n, c[t++] = n >>> 24, c[t++] = n >> 16 & 255, c[t++] = n >> 8 & 255, c[t++] = 255 & n
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...c))
  }(t.w, t.h, t.rgba)
}
n.d(t, {
  xS: () => o
})
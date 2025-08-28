/** Chunk was on 79839 **/
/** chunk id: 788900, original params: e,t,r (module,exports,require) **/
"use strict";

function n(e) {
  let t = function(e) {
    var t;
    let r, n, l, {
        PI: i,
        min: o,
        max: u,
        cos: a,
        round: s
      } = Math,
      f = e[0] | e[1] << 8 | e[2] << 16,
      c = e[3] | e[4] << 8,
      d = (63 & f) / 63,
      v = (f >> 6 & 63) / 31.5 - 1,
      h = (f >> 12 & 63) / 31.5 - 1,
      p = f >> 23,
      g = c >> 15,
      m = u(3, g ? p ? 5 : 7 : 7 & c),
      b = u(3, g ? 7 & c : p ? 5 : 7),
      x = p ? (15 & e[5]) / 15 : 1,
      w = (e[5] >> 4) / 15,
      P = p ? 6 : 5,
      S = 0,
      E = (t, r, n) => {
        let l = [];
        for (let i = 0; i < r; i++)
          for (let o = +!i; o * r < t * (r - i); o++) l.push(((e[P + (S >> 1)] >> ((1 & S++) << 2) & 15) / 7.5 - 1) * n);
        return l
      },
      N = E(m, b, (f >> 18 & 31) / 31),
      _ = E(3, 3, (c >> 3 & 63) / 63 * 1.25),
      C = E(3, 3, (c >> 9 & 63) / 63 * 1.25),
      O = p && E(5, 5, w),
      A = (r = (t = e)[3], n = 128 & t[2], ((l = 128 & t[4]) ? n ? 5 : 7 : 7 & r) / (l ? 7 & r : n ? 5 : 7)),
      W = s(A > 1 ? 32 : 32 * A),
      I = s(A > 1 ? 32 / A : 32),
      D = new Uint8Array(W * I * 4),
      Z = [],
      R = [];
    for (let e = 0, t = 0; e < I; e++)
      for (let r = 0; r < W; r++, t += 4) {
        let n = d,
          l = v,
          s = h,
          f = x;
        for (let e = 0, t = u(m, p ? 5 : 3); e < t; e++) Z[e] = a(i / W * (r + .5) * e);
        for (let t = 0, r = u(b, p ? 5 : 3); t < r; t++) R[t] = a(i / I * (e + .5) * t);
        for (let e = 0, t = 0; e < b; e++)
          for (let r = +!e, l = 2 * R[e]; r * b < m * (b - e); r++, t++) n += N[t] * Z[r] * l;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = +!e, n = 2 * R[e]; r < 3 - e; r++, t++) {
            let e = Z[r] * n;
            l += _[t] * e, s += C[t] * e
          }
        if (p)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = +!e, n = 2 * R[e]; r < 5 - e; r++, t++) f += O[t] * Z[r] * n;
        let c = n - 2 / 3 * l,
          g = (3 * n - c + s) / 2,
          w = g - s;
        D[t] = u(0, 255 * o(1, g)), D[t + 1] = u(0, 255 * o(1, w)), D[t + 2] = u(0, 255 * o(1, c)), D[t + 3] = u(0, 255 * o(1, f))
      }
    return {
      w: W,
      h: I,
      rgba: D
    }
  }(e);
  return function(e, t, r) {
    let n = 4 * e + 1,
      l = 6 + t * (5 + n),
      i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
      o = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, false, false, false, false, false, false, false, false],
      u = 1,
      a = 0;
    for (let e = 0, l = 0, o = n - 1; e < t; e++, o += n - 1)
      for (i.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), a = (a + u) % 65521; l < o; l++) {
        let e = 255 & r[l];
        i.push(e), a = (a + (u = (u + e) % 65521)) % 65521
      }
    for (let [e, t] of(i.push(a >> 8, 255 & a, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + l]
      ])) {
      let r = false;
      for (let n = e; n < t; n++) r ^= i[n], r = (r = r >>> 4 ^ o[15 & r]) >>> 4 ^ o[15 & r];
      r = ~r, i[t++] = r >>> 24, i[t++] = r >> 16 & 255, i[t++] = r >> 8 & 255, i[t++] = 255 & r
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...i))
  }(t.w, t.h, t.rgba)
}
require.d(exports, {
  xS: () => n
})
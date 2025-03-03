/** Chunk was on 46746 **/
n.d(t, {
  xS: () => r
});

function r(e) {
  let t = function(e) {
    var t;
    let n, r, l;
    let {
      PI: i,
      min: s,
      max: o,
      cos: a,
      round: c
    } = Math, d = e[0] | e[1] << 8 | e[2] << 16, u = e[3] | e[4] << 8, f = (63 & d) / 63, h = (d >> 6 & 63) / 31.5 - 1, m = (d >> 12 & 63) / 31.5 - 1, p = d >> 23, x = u >> 15, g = o(3, x ? p ? 5 : 7 : 7 & u), _ = o(3, x ? 7 & u : p ? 5 : 7), v = p ? (15 & e[5]) / 15 : 1, j = (e[5] >> 4) / 15, b = p ? 6 : 5, C = 0, S = (t, n, r) => {
      let l = [];
      for (let i = 0; i < n; i++)
        for (let s = +!i; s * n < t * (n - i); s++) l.push(((e[b + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * r);
      return l
    }, N = S(g, _, (d >> 18 & 31) / 31), y = S(3, 3, (u >> 3 & 63) / 63 * 1.25), Z = S(3, 3, (u >> 9 & 63) / 63 * 1.25), w = p && S(5, 5, j), O = (n = (t = e)[3], r = 128 & t[2], ((l = 128 & t[4]) ? r ? 5 : 7 : 7 & n) / (l ? 7 & n : r ? 5 : 7)), I = c(O > 1 ? 32 : 32 * O), P = c(O > 1 ? 32 / O : 32), T = new Uint8Array(I * P * 4), E = [], R = [];
    for (let e = 0, t = 0; e < P; e++)
      for (let n = 0; n < I; n++, t += 4) {
        let r = f,
          l = h,
          c = m,
          d = v;
        for (let e = 0, t = o(g, p ? 5 : 3); e < t; e++) E[e] = a(i / I * (n + .5) * e);
        for (let t = 0, n = o(_, p ? 5 : 3); t < n; t++) R[t] = a(i / P * (e + .5) * t);
        for (let e = 0, t = 0; e < _; e++)
          for (let n = +!e, l = 2 * R[e]; n * _ < g * (_ - e); n++, t++) r += N[t] * E[n] * l;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = +!e, r = 2 * R[e]; n < 3 - e; n++, t++) {
            let e = E[n] * r;
            l += y[t] * e, c += Z[t] * e
          }
        if (p)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = +!e, r = 2 * R[e]; n < 5 - e; n++, t++) d += w[t] * E[n] * r;
        let u = r - 2 / 3 * l,
          x = (3 * r - u + c) / 2,
          j = x - c;
        T[t] = o(0, 255 * s(1, x)), T[t + 1] = o(0, 255 * s(1, j)), T[t + 2] = o(0, 255 * s(1, u)), T[t + 3] = o(0, 255 * s(1, d))
      }
    return {
      w: I,
      h: P,
      rgba: T
    }
  }(e);
  return function(e, t, n) {
    let r = 4 * e + 1,
      l = 6 + t * (5 + r),
      i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, l >>> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 73, 68, 65, 84, 120, 1],
      s = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, -0x12477ce0, -0xff06cbc, -0x29295c18, -0x349e4c74, -0x649b3d50, -0x792c2d2c, -0x5ff51d88, -0x42420de4],
      o = 1,
      a = 0;
    for (let e = 0, l = 0, s = r - 1; e < t; e++, s += r - 1)
      for (i.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), a = (a + o) % 65521; l < s; l++) {
        let e = 255 & n[l];
        i.push(e), a = (a + (o = (o + e) % 65521)) % 65521
      }
    for (let [e, t] of(i.push(a >> 8, 255 & a, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + l]
      ])) {
      let n = -1;
      for (let r = e; r < t; r++) n ^= i[r], n = (n = n >>> 4 ^ s[15 & n]) >>> 4 ^ s[15 & n];
      n = ~n, i[t++] = n >>> 24, i[t++] = n >> 16 & 255, i[t++] = n >> 8 & 255, i[t++] = 255 & n
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...i))
  }(t.w, t.h, t.rgba)
}
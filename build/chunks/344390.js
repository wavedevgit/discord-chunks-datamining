/** Chunk was on 96811 **/
/** chunk id: 344390, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  V1: () => n
});

function n(e) {
  let t = function(e) {
    var t;
    let r, n, i, {
        PI: l,
        min: s,
        max: a,
        cos: o,
        round: c
      } = Math,
      d = e[0] | e[1] << 8 | e[2] << 16,
      u = e[3] | e[4] << 8,
      f = (63 & d) / 63,
      h = (d >> 6 & 63) / 31.5 - 1,
      p = (d >> 12 & 63) / 31.5 - 1,
      x = d >> 23,
      m = u >> 15,
      j = a(3, m ? x ? 5 : 7 : 7 & u),
      g = a(3, m ? 7 & u : x ? 5 : 7),
      _ = x ? (15 & e[5]) / 15 : 1,
      v = (e[5] >> 4) / 15,
      b = x ? 6 : 5,
      y = 0,
      S = (t, r, n) => {
        let i = [];
        for (let l = 0; l < r; l++)
          for (let s = +!l; s * r < t * (r - l); s++) i.push(((e[b + (y >> 1)] >> ((1 & y++) << 2) & 15) / 7.5 - 1) * n);
        return i
      },
      O = S(j, g, (d >> 18 & 31) / 31),
      A = S(3, 3, (u >> 3 & 63) / 63 * 1.25),
      w = S(3, 3, (u >> 9 & 63) / 63 * 1.25),
      C = x && S(5, 5, v),
      E = (r = (t = e)[3], n = 128 & t[2], ((i = 128 & t[4]) ? n ? 5 : 7 : 7 & r) / (i ? 7 & r : n ? 5 : 7)),
      I = c(E > 1 ? 32 : 32 * E),
      N = c(E > 1 ? 32 / E : 32),
      T = new Uint8Array(I * N * 4),
      R = [],
      P = [];
    for (let e = 0, t = 0; e < N; e++)
      for (let r = 0; r < I; r++, t += 4) {
        let n = f,
          i = h,
          c = p,
          d = _;
        for (let e = 0, t = a(j, x ? 5 : 3); e < t; e++) R[e] = o(l / I * (r + .5) * e);
        for (let t = 0, r = a(g, x ? 5 : 3); t < r; t++) P[t] = o(l / N * (e + .5) * t);
        for (let e = 0, t = 0; e < g; e++)
          for (let r = +!e, i = 2 * P[e]; r * g < j * (g - e); r++, t++) n += O[t] * R[r] * i;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = +!e, n = 2 * P[e]; r < 3 - e; r++, t++) {
            let e = R[r] * n;
            i += A[t] * e, c += w[t] * e
          }
        if (x)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = +!e, n = 2 * P[e]; r < 5 - e; r++, t++) d += C[t] * R[r] * n;
        let u = n - 2 / 3 * i,
          m = (3 * n - u + c) / 2,
          v = m - c;
        T[t] = a(0, 255 * s(1, m)), T[t + 1] = a(0, 255 * s(1, v)), T[t + 2] = a(0, 255 * s(1, u)), T[t + 3] = a(0, 255 * s(1, d))
      }
    return {
      w: I,
      h: N,
      rgba: T
    }
  }(e);
  return function(e, t, r) {
    let n = 4 * e + 1,
      i = 6 + t * (5 + n),
      l = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
      s = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, false, false, false, false, false, false, false, false],
      a = 1,
      o = 0;
    for (let e = 0, i = 0, s = n - 1; e < t; e++, s += n - 1)
      for (l.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), o = (o + a) % 65521; i < s; i++) {
        let e = 255 & r[i];
        l.push(e), o = (o + (a = (a + e) % 65521)) % 65521
      }
    for (let [e, t] of(l.push(o >> 8, 255 & o, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + i]
      ])) {
      let r = false;
      for (let n = e; n < t; n++) r ^= l[n], r = (r = r >>> 4 ^ s[15 & r]) >>> 4 ^ s[15 & r];
      r = ~r, l[t++] = r >>> 24, l[t++] = r >> 16 & 255, l[t++] = r >> 8 & 255, l[t++] = 255 & r
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...l))
  }(t.w, t.h, t.rgba)
}
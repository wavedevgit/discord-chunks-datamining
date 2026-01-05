/** Chunk was on 46746 **/
/** chunk id: 788900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  xS: () => r
});

function r(e) {
  let t = function(e) {
    var t;
    let n, r, i, {
        PI: s,
        min: l,
        max: o,
        cos: c,
        round: a
      } = Math,
      d = e[0] | e[1] << 8 | e[2] << 16,
      u = e[3] | e[4] << 8,
      f = (63 & d) / 63,
      h = (d >> 6 & 63) / 31.5 - 1,
      p = (d >> 12 & 63) / 31.5 - 1,
      x = d >> 23,
      m = u >> 15,
      g = o(3, m ? x ? 5 : 7 : 7 & u),
      v = o(3, m ? 7 & u : x ? 5 : 7),
      j = x ? (15 & e[5]) / 15 : 1,
      _ = (e[5] >> 4) / 15,
      b = x ? 6 : 5,
      y = 0,
      w = (t, n, r) => {
        let i = [];
        for (let s = 0; s < n; s++)
          for (let l = +!s; l * n < t * (n - s); l++) i.push(((e[b + (y >> 1)] >> ((1 & y++) << 2) & 15) / 7.5 - 1) * r);
        return i
      },
      O = w(g, v, (d >> 18 & 31) / 31),
      C = w(3, 3, (u >> 3 & 63) / 63 * 1.25),
      S = w(3, 3, (u >> 9 & 63) / 63 * 1.25),
      I = x && w(5, 5, _),
      Z = (n = (t = e)[3], r = 128 & t[2], ((i = 128 & t[4]) ? r ? 5 : 7 : 7 & n) / (i ? 7 & n : r ? 5 : 7)),
      E = a(Z > 1 ? 32 : 32 * Z),
      P = a(Z > 1 ? 32 / Z : 32),
      N = new Uint8Array(E * P * 4),
      T = [],
      R = [];
    for (let e = 0, t = 0; e < P; e++)
      for (let n = 0; n < E; n++, t += 4) {
        let r = f,
          i = h,
          a = p,
          d = j;
        for (let e = 0, t = o(g, x ? 5 : 3); e < t; e++) T[e] = c(s / E * (n + .5) * e);
        for (let t = 0, n = o(v, x ? 5 : 3); t < n; t++) R[t] = c(s / P * (e + .5) * t);
        for (let e = 0, t = 0; e < v; e++)
          for (let n = +!e, i = 2 * R[e]; n * v < g * (v - e); n++, t++) r += O[t] * T[n] * i;
        for (let e = 0, t = 0; e < 3; e++)
          for (let n = +!e, r = 2 * R[e]; n < 3 - e; n++, t++) {
            let e = T[n] * r;
            i += C[t] * e, a += S[t] * e
          }
        if (x)
          for (let e = 0, t = 0; e < 5; e++)
            for (let n = +!e, r = 2 * R[e]; n < 5 - e; n++, t++) d += I[t] * T[n] * r;
        let u = r - 2 / 3 * i,
          m = (3 * r - u + a) / 2,
          _ = m - a;
        N[t] = o(0, 255 * l(1, m)), N[t + 1] = o(0, 255 * l(1, _)), N[t + 2] = o(0, 255 * l(1, u)), N[t + 3] = o(0, 255 * l(1, d))
      }
    return {
      w: E,
      h: P,
      rgba: N
    }
  }(e);
  return function(e, t, n) {
    let r = 4 * e + 1,
      i = 6 + t * (5 + r),
      s = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
      l = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, false, false, false, false, false, false, false, false],
      o = 1,
      c = 0;
    for (let e = 0, i = 0, l = r - 1; e < t; e++, l += r - 1)
      for (s.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), c = (c + o) % 65521; i < l; i++) {
        let e = 255 & n[i];
        s.push(e), c = (c + (o = (o + e) % 65521)) % 65521
      }
    for (let [e, t] of(s.push(c >> 8, 255 & c, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + i]
      ])) {
      let n = false;
      for (let r = e; r < t; r++) n ^= s[r], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
      n = ~n, s[t++] = n >>> 24, s[t++] = n >> 16 & 255, s[t++] = n >> 8 & 255, s[t++] = 255 & n
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...s))
  }(t.w, t.h, t.rgba)
}
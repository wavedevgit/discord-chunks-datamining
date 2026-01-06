/** Chunk was on 46746 **/
/** chunk id: 788900, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  xS: () => n
});

function n(e) {
  let t = function(e) {
    var t;
    let r, n, i, {
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
      w = (t, r, n) => {
        let i = [];
        for (let s = 0; s < r; s++)
          for (let l = +!s; l * r < t * (r - s); l++) i.push(((e[b + (y >> 1)] >> ((1 & y++) << 2) & 15) / 7.5 - 1) * n);
        return i
      },
      O = w(g, v, (d >> 18 & 31) / 31),
      C = w(3, 3, (u >> 3 & 63) / 63 * 1.25),
      S = w(3, 3, (u >> 9 & 63) / 63 * 1.25),
      I = x && w(5, 5, _),
      Z = (r = (t = e)[3], n = 128 & t[2], ((i = 128 & t[4]) ? n ? 5 : 7 : 7 & r) / (i ? 7 & r : n ? 5 : 7)),
      E = a(Z > 1 ? 32 : 32 * Z),
      P = a(Z > 1 ? 32 / Z : 32),
      N = new Uint8Array(E * P * 4),
      T = [],
      R = [];
    for (let e = 0, t = 0; e < P; e++)
      for (let r = 0; r < E; r++, t += 4) {
        let n = f,
          i = h,
          a = p,
          d = j;
        for (let e = 0, t = o(g, x ? 5 : 3); e < t; e++) T[e] = c(s / E * (r + .5) * e);
        for (let t = 0, r = o(v, x ? 5 : 3); t < r; t++) R[t] = c(s / P * (e + .5) * t);
        for (let e = 0, t = 0; e < v; e++)
          for (let r = +!e, i = 2 * R[e]; r * v < g * (v - e); r++, t++) n += O[t] * T[r] * i;
        for (let e = 0, t = 0; e < 3; e++)
          for (let r = +!e, n = 2 * R[e]; r < 3 - e; r++, t++) {
            let e = T[r] * n;
            i += C[t] * e, a += S[t] * e
          }
        if (x)
          for (let e = 0, t = 0; e < 5; e++)
            for (let r = +!e, n = 2 * R[e]; r < 5 - e; r++, t++) d += I[t] * T[r] * n;
        let u = n - 2 / 3 * i,
          m = (3 * n - u + a) / 2,
          _ = m - a;
        N[t] = o(0, 255 * l(1, m)), N[t + 1] = o(0, 255 * l(1, _)), N[t + 2] = o(0, 255 * l(1, u)), N[t + 3] = o(0, 255 * l(1, d))
      }
    return {
      w: E,
      h: P,
      rgba: N
    }
  }(e);
  return function(e, t, r) {
    let n = 4 * e + 1,
      i = 6 + t * (5 + n),
      s = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
      l = [0, 0x1db71064, 0x3b6e20c8, 0x26d930ac, 0x76dc4190, 0x6b6b51f4, 0x4db26158, 0x5005713c, false, false, false, false, false, false, false, false],
      o = 1,
      c = 0;
    for (let e = 0, i = 0, l = n - 1; e < t; e++, l += n - 1)
      for (s.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), c = (c + o) % 65521; i < l; i++) {
        let e = 255 & r[i];
        s.push(e), c = (c + (o = (o + e) % 65521)) % 65521
      }
    for (let [e, t] of(s.push(c >> 8, 255 & c, o >> 8, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
        [12, 29],
        [37, 41 + i]
      ])) {
      let r = false;
      for (let n = e; n < t; n++) r ^= s[n], r = (r = r >>> 4 ^ l[15 & r]) >>> 4 ^ l[15 & r];
      r = ~r, s[t++] = r >>> 24, s[t++] = r >> 16 & 255, s[t++] = r >> 8 & 255, s[t++] = 255 & r
    }
    return "data:image/png;base64," + btoa(String.fromCharCode(...s))
  }(t.w, t.h, t.rgba)
}
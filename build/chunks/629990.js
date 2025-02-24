/** Chunk was on 38597 **/
"use strict";
r.d(t, {
  ZP: () => i,
  db: () => o,
  mh: () => s
});
var a = r(527628),
  n = r(99978);
let s = {
  D50: [.3457 / .3585, 1, .8251046025104602],
  D65: [.3127 / .329, 1, 1.0890577507598784]
};

function o(e) {
  return Array.isArray(e) ? e : s[e]
}

function i(e, t, r, c = {}) {
  if (e = o(e), t = o(t), !e || !t) throw TypeError(`Missing white point to convert ${e?"":"from"}${e||t?"":"/"}${t?"":"to"}`);
  if (e === t) return r;
  let l = {
    W1: e,
    W2: t,
    XYZ: r,
    options: c
  };
  if (a.Z.run("chromatic-adaptation-start", l), l.M || (l.W1 === s.D65 && l.W2 === s.D50 ? l.M = [
      [1.0479297925449969, .022946870601609652, -.05019226628920524],
      [.02962780877005599, .9904344267538799, -.017073799063418826],
      [-.009243040646204504, .015055191490298152, .7518742814281371]
    ] : l.W1 !== s.D50 || l.W2 !== s.D65 || (l.M = [
      [.955473421488075, -.02309845494876471, .06325924320057072],
      [-.0283697093338637, 1.0099953980813041, .021041441191917323],
      [.012314014864481998, -.020507649298898964, 1.330365926242124]
    ])), a.Z.run("chromatic-adaptation-end", l), l.M) return (0, n.Z)(l.M, l.XYZ);
  throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")
}
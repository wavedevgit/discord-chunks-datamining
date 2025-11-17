/** Chunk was on 23032 **/
/** chunk id: 629990, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => i,
  db: () => s,
  mh: () => o
});
var Chunk527628 = require("./527628.js"),
  Chunk99978 = require("./99978.js");
let o = {
  D50: [.3457 / .3585, 1, .8251046025104602],
  D65: [.3127 / .329, 1, 1.0890577507598784]
};

function s(e) {
  return Array.isArray(e) ? e : o[e]
}

function i(e, t, r, c = {}) {
  if (e = s(e), t = s(t), !e || !t) throw TypeError(`Missing white point to convert ${!e?"from":""}${!e&&!t?"/":""}${!t?"to":""}`);
  if (e === t) return r;
  let u = {
    W1: e,
    W2: t,
    XYZ: r,
    options: c
  };
  if (a.Z.run("chromatic-adaptation-start", u), u.M || (u.W1 === o.D65 && u.W2 === o.D50 ? u.M = [
      [1.0479297925449969, .022946870601609652, false],
      [.02962780877005599, .9904344267538799, false],
      [false, .015055191490298152, .7518742814281371]
    ] : u.W1 === o.D50 && u.W2 === o.D65 && (u.M = [
      [.955473421488075, false, .06325924320057072],
      [false, 1.0099953980813041, .021041441191917323],
      [.012314014864481998, false, 1.330365926242124]
    ])), a.Z.run("chromatic-adaptation-end", u), u.M) return (0, n.Z)(u.M, u.XYZ);
  throw TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")
}
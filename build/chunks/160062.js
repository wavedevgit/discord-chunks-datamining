/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  Kl: () => o,
  Wv: () => l,
  cT: () => a,
  l1: () => s,
  xg: () => c
});
var r = n(174212),
  i = n(689079);

function o(e) {
  let t = e.toLowerCase() === i.WO.toLowerCase(),
    n = e.toLowerCase() === i.Lu.toLowerCase();
  if (t || n) return t
}

function a(e, t) {
  var n;
  let r = null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value;
  if ("string" == typeof r) return r
}

function s(e, t) {
  var n;
  let r = null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value;
  if ("number" == typeof r) return r
}

function l(e, t, n) {
  return a(r.Z.getAutocompleteLastChoices(e, t), n)
}

function c(e, t, n) {
  return s(r.Z.getAutocompleteLastChoices(e, t), n)
}
/** Chunk was on web.js **/
/** chunk id: 871465, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CZ: () => o,
  LB: () => l,
  O5: () => s,
  YC: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk433517 = require("./433517.js"),
  Chunk388032 = require("./388032.jsx"),
  a = function(e) {
    return e.CLASSIC = "classic", e.RETRO = "retro", e.BUBBLE = "bop", e.DUCKY = "ducky", e.LOFI = "lofi", e.ASMR = "asmr", e.DISCODO = "discodo", e.HALLOWEEN = "halloween", e.WINTER_HOLIDAY = "winter_holiday", e
  }({});
let o = "custom_notification_sounds_asmr",
  s = "custom_notification_sounds_discodo";

function l() {
  let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
    t = c(module);
  return [{
    value: "classic",
    label: Chunk388032.intl.string(Chunk388032.t.p3Hg5e),
    description: Chunk388032.intl.string(Chunk388032.t["4iA55u"]),
    requirePremium: false
  }, {
    value: "retro",
    label: Chunk388032.intl.string(Chunk388032.t.Rrwrnp),
    description: Chunk388032.intl.string(Chunk388032.t["zKG+ur"]),
    requirePremium: true
  }, {
    value: "lofi",
    label: Chunk388032.intl.string(Chunk388032.t.aEsrnp),
    description: Chunk388032.intl.string(Chunk388032.t.fMUEj4),
    requirePremium: true
  }, {
    value: "ducky",
    label: Chunk388032.intl.string(Chunk388032.t["4TOv0t"]),
    description: Chunk388032.intl.string(Chunk388032.t["1kbe6e"]),
    requirePremium: true
  }, {
    value: "bop",
    label: Chunk388032.intl.string(Chunk388032.t.s5Qo8P),
    description: Chunk388032.intl.string(Chunk388032.t.I39onp),
    requirePremium: true
  }, ...exports]
}

function c(e) {
  if (!e) return [];
  let t = [];
  return r.K.get(s, false) && t.push({
    value: "discodo",
    label: "DISCODO",
    description: "๑(◕‿◕)๑",
    requirePremium: true
  }), r.K.get(o, false) && t.push({
    value: "asmr",
    label: i.intl.string(i.t["3SJZKC"]),
    description: i.intl.formatToMarkdownString(i.t.MZlgQE, {}),
    requirePremium: true
  }), t
}
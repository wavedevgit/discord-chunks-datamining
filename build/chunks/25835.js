/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r(e, t) {
  if (e) {
    if ("string" == typeof e) return i(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
  }
}

function i(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
n(192379)
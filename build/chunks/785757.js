/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
e.exports = function(e, t) {
  if ((" " + t.className + " ").indexOf(" combokeys ") > -1) return !1;
  var n = t.tagName.toLowerCase();
  return "input" === n || "select" === n || "textarea" === n || t.isContentEditable
}
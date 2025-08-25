/** Chunk was on web.js **/
/** chunk id: 419363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M9: () => s,
  Zh: () => i,
  e6: () => o,
  iq: () => a
}), require("./704826.js"), require("./35282.js");
var Chunk441729 = require("./441729.js");
let i = null != window.speechSynthesis;

function o(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let i = new SpeechSynthesisUtterance(n);
  return i.rate = r.Z.speechRate, i
}

function a(e, t) {
  i && (e.voice = t, speechSynthesis.speak(e))
}

function s() {
  i && speechSynthesis.cancel()
}
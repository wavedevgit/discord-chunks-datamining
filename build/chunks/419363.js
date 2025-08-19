/** Chunk was on 66181 **/
/** chunk id: 419363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M9: () => l,
  Zh: () => r,
  e6: () => s,
  iq: () => a
}), require("./704826.js"), require("./35282.js");
var Chunk441729 = require("./441729.js");
let r = null != window.speechSynthesis;

function s(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let r = new SpeechSynthesisUtterance(n);
  return r.rate = i.Z.speechRate, r
}

function a(e, t) {
  r && (e.voice = t, speechSynthesis.speak(e))
}

function l() {
  r && speechSynthesis.cancel()
}
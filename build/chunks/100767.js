/** Chunk was on 5606 **/
/** chunk id: 100767, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $j: () => i,
  _X: () => a,
  aW: () => l,
  wz: () => s
}), require("./747238.js"), require("./812715.js");
var Chunk8880 = require("./8880.js");
let i = null != window.speechSynthesis;

function l(e, t) {
  let n = e.replace(/(https?:\/\/[^\s]+)/g, e => {
    let t = e.match(/^https?:\/\/(?:www\.)?([^/?#]+)(?:[/?#]|$)/i);
    return null != t ? t[1] : ""
  });
  null != t && n.length > t && (n = (n = n.substring(0, t)).substring(0, Math.min(n.length, n.lastIndexOf(" "))));
  let i = new SpeechSynthesisUtterance(n);
  return i.rate = r.A.speechRate, i
}

function s(e, t) {
  i && (e.voice = t, speechSynthesis.speak(e))
}

function a() {
  i && speechSynthesis.cancel()
}
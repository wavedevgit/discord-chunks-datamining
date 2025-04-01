/** Chunk was on 13323 **/
n.d(t, {
  M9: () => o,
  Zh: () => i,
  e6: () => s,
  iq: () => a
}), n(757143), n(301563);
var r = n(441729);
let i = null != window.speechSynthesis;

function s(e, t) {
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

function o() {
  i && speechSynthesis.cancel()
}
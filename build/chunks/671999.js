/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r(e, t, n) {
  return new MouseEvent(e, {
    screenX: t,
    screenY: n,
    clientX: t,
    clientY: n,
    bubbles: !0,
    view: window
  })
}

function i(e, t, n) {
  let r = document.elementFromPoint(t, n);
  if (null == r) throw Error();
  r.dispatchEvent(e)
}
n.d(t, {
  B: () => r,
  J: () => i
}), n(411104)
/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => l
});
var r = n(924826),
  i = n(442837),
  o = n(607070);

function a() {
  return Promise.resolve()
}

function s(e) {
  let t = document.querySelector(e);
  null != t && t.focus()
}

function l(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.keyboardModeEnabled);
  return (0, r.ZP)({
    id: e,
    isEnabled: n,
    orientation: t,
    setFocus: s,
    scrollToStart: a,
    scrollToEnd: a
  })
}
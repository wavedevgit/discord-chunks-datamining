/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Qe: () => a,
  ap: () => i,
  wj: () => o
});
var r = n(231338);

function i(e) {
  return e === r.BR.LIGHT
}

function o(e) {
  switch (e) {
    case r.BR.DARK:
    case r.BR.MIDNIGHT:
    case r.BR.DARKER:
      return !0;
    default:
      return !1
  }
}

function a(e) {
  if (null == e) return;
  let t = r.Al.get(e);
  return null != t ? "theme-".concat(t, " theme-").concat(e, " images-").concat(t) : "theme-".concat(e, " images-").concat(e)
}
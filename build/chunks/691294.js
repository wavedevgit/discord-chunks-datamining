/** Chunk was on web.js **/
/** chunk id: 691294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => c
});
var Chunk960048 = require("./960048.js");
let i = null,
  o = null,
  a = null;

function s(e, t, n) {
  return t.beginPath(), t.arc(n / 2, n / 2, n / 2, 0, 2 * Math.PI), t.closePath(), t.clip(), t.drawImage(e, 0, 0, n, n, 0, 0, n, n), t
}

function l(e) {
  let t = document.createElement("canvas"),
    n = t.getContext("2d"),
    r = Math.min(e.width, e.height);
  t.width = r, t.height = r, null != n && (n = s(e, n, r));
  let i = t.toDataURL();
  return t.remove(), i
}

function c(e) {
  let t = new Image;
  return t.src = e, t.crossOrigin = "anonymous", new Promise(e => {
    t.onload = () => {
      "" !== t.src && e(l(t))
    }, t.onerror = n => {
      r.Z.captureMessage("Failed to load notification avatar to circle crop: ".concat(n)), e(t.src)
    }
  })
}
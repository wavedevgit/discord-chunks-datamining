/** Chunk was on web.js **/
"use strict";
n.d(t, {
  G6: () => b,
  hY: () => g,
  og: () => v,
  rO: () => y,
  vu: () => f
});
var r, i, o, a, s, l = n(525654),
  c = n.n(l);
let u = (null !== (r = c().name) && void 0 !== r ? r : "unknown").toLowerCase(),
  d = "chrome" === u.toLowerCase() ? parseInt(null !== (i = c().version) && void 0 !== i ? i : "", 10) : -1;

function f() {
  return d
}
let _ = "electron" === u.toLowerCase() ? parseInt(null !== (o = c().version) && void 0 !== o ? o : "", 10) : -1;

function p() {
  return _
}
let h = "firefox" === u.toLowerCase() ? parseInt(null !== (a = c().version) && void 0 !== a ? a : "", 10) : -1;

function g() {
  return h
}
let m = "edge" === u.toLowerCase() ? parseInt(null !== (s = c().version) && void 0 !== s ? s : "", 10) : -1;

function E() {
  return m
}

function v() {
  return -1 !== f() || -1 !== p() || -1 !== g() || -1 !== E()
}

function b() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
    t = e.toLowerCase();
  return -1 !== t.indexOf("safari") && -1 === t.indexOf("chrome") && -1 !== t.indexOf("version/")
}

function y() {
  var e;
  let t = window.navigator,
    n = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
  return b(t.userAgent) && n
}
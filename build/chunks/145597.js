/** Chunk was on web.js **/
"use strict";
let r;
n.d(t, {
  FW: () => s,
  Gr: () => a,
  Ht: () => p,
  Js: () => c,
  QF: () => f,
  R2: () => u,
  Te: () => h,
  Tq: () => o,
  VS: () => m,
  qU: () => l,
  tB: () => _,
  vR: () => g
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563), n(490029);
var i = n(358085);
n(981631);
let o = 2,
  a = {
    width: 3840,
    height: 2160
  },
  s = {
    width: 768,
    height: 432
  },
  l = "overlay_default",
  c = -2,
  u = -1,
  d = !1;

function f() {
  var e;
  if (void 0 !== r && r !== u) return r;
  let t = parseInt(null !== (e = new URLSearchParams(window.location.search).get("pid")) && void 0 !== e ? e : "", 10);
  return isNaN(t) && (t = u), r = t
}

function _(e) {
  r = e
}

function p() {
  return new URLSearchParams(window.location.search).get("rpc_auth_token")
}

function h(e) {
  return !i.isPlatformEmbedded || e.width >= s.width && e.height >= s.height
}

function g(e) {
  d = e
}

function m() {
  return d
}
/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Vb: () => l,
  Yz: () => a,
  by: () => s,
  is: () => i,
  lx: () => o
});
var r = n(570140);

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: e
  })
}

function o(e, t) {
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_END",
    handoffToken: e,
    fingerprint: t
  })
}

function a(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: o = 1e4
  } = e;
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_FROM_APP",
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: o
  })
}

function s() {
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_UNAVAILABLE"
  })
}

function l(e) {
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_SET_USER",
    user: e
  })
}
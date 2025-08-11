/** Chunk was on web.js **/
/** chunk id: 899742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vb: () => l,
  Yz: () => a,
  by: () => s,
  is: () => i,
  lx: () => o
});
var Chunk570140 = require("./570140.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e4;
  Chunk570140.Z.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: module
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
  Chunk570140.Z.dispatch({
    type: "BROWSER_HANDOFF_UNAVAILABLE"
  })
}

function l(e) {
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_SET_USER",
    user: e
  })
}
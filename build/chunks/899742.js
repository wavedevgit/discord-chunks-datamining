/** Chunk was on web.js **/
/** chunk id: 899742, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Vb: () => l,
  Yz: () => o,
  by: () => s,
  is: () => i,
  lx: () => a
});
var Chunk570140 = require("./570140.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e4;
  Chunk570140.Z.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: module
  })
}

function a(e, t) {
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_END",
    handoffToken: e,
    fingerprint: t
  })
}

function o(e) {
  let {
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: a = 1e4
  } = e;
  r.Z.dispatch({
    type: "BROWSER_HANDOFF_FROM_APP",
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: a
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
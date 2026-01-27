/** Chunk was on web.js **/
/** chunk id: 6981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J0: () => s,
  Qh: () => o,
  ST: () => i,
  mZ: () => a,
  uA: () => l
});
var Chunk73153 = require("./73153.js");

function i() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e4;
  r.h.dispatch({
    type: "BROWSER_HANDOFF_BEGIN",
    timeout: e
  })
}

function a(e, t) {
  r.h.dispatch({
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
  r.h.dispatch({
    type: "BROWSER_HANDOFF_FROM_APP",
    handoffKey: t,
    handoffToken: n,
    handoffSource: i,
    timeout: a
  })
}

function s() {
  r.h.dispatch({
    type: "BROWSER_HANDOFF_UNAVAILABLE"
  })
}

function l(e) {
  r.h.dispatch({
    type: "BROWSER_HANDOFF_SET_USER",
    user: e
  })
}
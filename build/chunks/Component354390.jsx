/** Chunk was on 39048 **/
/** chunk id: 354390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  S: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk192701 = require("./192701.js");

function a(e) {
  return e
}

function o(e) {
  let {
    onEnableMFAClick: t,
    onMFAEnabled: n
  } = e, {
    isUserMFAEnabled: o,
    isModerationMFAEnabled: c
  } = (0, s.f)(), d = i.useCallback(async () => {
    await t(), null == n || n()
  }, [t, n]), u = i.useCallback(e => (0, r.jsx)(l.A, {
    onClick: d,
    children: e
  }), [d]);
  return o && c ? a : u
}
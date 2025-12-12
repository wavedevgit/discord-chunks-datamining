/** Chunk was on 384 **/
/** chunk id: 500047, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk431516 = require("./431516.js");

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
  } = (0, s.N)(), u = i.useCallback(async () => {
    await t(), null == n || n()
  }, [t, n]), d = i.useCallback(e => (0, r.jsx)(l.Z, {
    onClick: u,
    children: e
  }), [u]);
  return o && c ? a : d
}
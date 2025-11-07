/** Chunk was on 64982 **/
/** chunk id: 500047, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk431516 = require("./431516.js");

function s(e) {
  return e
}

function o(e) {
  let {
    onEnableMFAClick: t,
    onMFAEnabled: n
  } = e, {
    isUserMFAEnabled: o,
    isModerationMFAEnabled: c
  } = (0, a.N)(), d = i.useCallback(async () => {
    await t(), null == n || n()
  }, [t, n]), u = i.useCallback(e => (0, r.jsx)(l.Z, {
    onClick: d,
    children: e
  }), [d]);
  return o && c ? s : u
}
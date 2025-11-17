/** Chunk was on 384 **/
/** chunk id: 500047, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
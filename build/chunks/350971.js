/** Chunk was on web.js **/
/** chunk id: 350971, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let {
    isInline: t,
    isVoid: n
  } = e;
  return e.isInline = e => "testInline" === e.type || "testInlineVoid" === e.type || t(e), e.isVoid = e => "testInlineVoid" === e.type || n(e), e
}
require.d(exports, {
  A: () => r
})
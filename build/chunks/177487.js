/** Chunk was on web.js **/
/** chunk id: 177487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => i
});
var Chunk145282 = require("./145282.js");
let i = {
  decode: a,
  TAG_HEADER_SIZE: 5
};

function a(e, t) {
  let n = r.A.get();
  if (true !== n && true !== e) try {
    return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t))
  } catch (e) {}
  return o(t.map(e => String.fromCharCode(e)).join(""))
}

function o(e) {
  try {
    return decodeURIComponent(escape(e))
  } catch (t) {
    return e
  }
}
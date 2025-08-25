/** Chunk was on web.js **/
/** chunk id: 140827, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => i
});
var Chunk573707 = require("./573707.js");
let i = {
  decode: o,
  TAG_HEADER_SIZE: 5
};

function o(e, t) {
  let n = r.Z.get();
  if (true !== n && true !== e) try {
    return new n(e).decode(t instanceof DataView ? t.buffer : Uint8Array.from(t))
  } catch (e) {}
  return a(t.map(e => String.fromCharCode(e)).join(""))
}

function a(e) {
  try {
    return decodeURIComponent(escape(e))
  } catch (t) {
    return e
  }
}
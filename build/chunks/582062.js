/** Chunk was on web.js **/
/** chunk id: 582062, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  A: () => a
});
let i = new Uint8Array(16);

function a() {
  if (!r && !(r = "u" > typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto))) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return r(i)
}
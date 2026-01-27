/** Chunk was on web.js **/
/** chunk id: 890167, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => a
});
let r = 18761,
  i = 19789,
  a = {
    BIG_ENDIAN: 19789,
    LITTLE_ENDIAN: 18761,
    getByteOrder: o
  };

function o(e, t) {
  if (e.getUint16(t) === r) return r;
  if (e.getUint16(t) === i) return i;
  throw Error("Illegal byte order value. Faulty image.")
}
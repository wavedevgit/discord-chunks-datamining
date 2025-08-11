/** Chunk was on 50448 **/
/** chunk id: 605486, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t, r) {
  return 1 === r ? function(r, n) {
    return r[t](n)
  } : function(r, n, e) {
    return r[t](n, e)
  }
}
/** Chunk was on web.js **/
/** chunk id: 601027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  u: () => a
});
var r = {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
    trunc: function(e) {
      return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
  },
  i = "trunc";

function a(e) {
  return e ? r[e] : r[i]
}
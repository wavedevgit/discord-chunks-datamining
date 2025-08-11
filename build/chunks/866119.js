/** Chunk was on web.js **/
/** chunk id: 866119, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = 0,
    r = Math.min(e.length, t.length);
  for (let i = 0; i < r; i++) n |= e.charCodeAt(i) ^ t.charCodeAt(i);
  return 0 === n && e.length === t.length
}
require.d(exports, {
  y: () => r
})
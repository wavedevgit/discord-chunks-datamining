/** Chunk was on web.js **/
/** chunk id: 161591, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e.length !== t.length) returnfalse;
  for (let n = 0; n < t.length && n < e.length; n++)
    if (!Object.is(e[n], t[n])) returnfalse;
  returntrue
}
require.d(exports, {
  A: () => r
})
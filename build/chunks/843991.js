/** Chunk was on web.js **/
/** chunk id: 843991, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (e === t) returntrue;
  if (e.size !== t.size) returnfalse;
  for (let n of e)
    if (!t.has(n)) returnfalse;
  returntrue
}

function i(e) {
  return null == e ? new Set : e instanceof Set ? e : new Set(e)
}
require.d(exports, {
  G: () => i,
  O: () => r
}), require("./388685.js")
/** Chunk was on web.js **/
/** chunk id: 357758, original params: e,t,n (module,exports,re quire) **/
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
  _: () => r,
  y: () => i
}), require("./896048.js")
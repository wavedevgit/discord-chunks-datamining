/** Chunk was on web.js **/
/** chunk id: 671999, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return new MouseEvent(e, {
    screenX: t,
    screenY: n,
    clientX: t,
    clientY: n,
    bubbles: true,
    view: window
  })
}

function i(e, t, n) {
  let r = document.elementFromPoint(t, n);
  if (null == r) throw Error();
  r.dispatchEvent(e)
}
require.d(exports, {
  B: () => r,
  J: () => i
}), require("./415506.js")
/** Chunk was on web.js **/
/** chunk id: 565942, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  let n = new Image;
  n.src = e, n.onload = () => null == t ? true : t(e)
}
require.d(exports, {
  p: () => r
})
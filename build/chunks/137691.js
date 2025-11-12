/** Chunk was on web.js **/
/** chunk id: 137691, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}
require.d(exports, {
  k: () => r
})
/** Chunk was on web.js **/
/** chunk id: 692417, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (e.applications.length > 0) return e.applications[0].id;
  if (e.windows.length > 0) {
    var t, n;
    return null != (n = null == (t = e.windows[0].owningApplication) ? true : t.id) ? n : null
  }
  return null
}
require.d(exports, {
  Z: () => r
})
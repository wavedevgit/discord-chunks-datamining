/** Chunk was on web.js **/
/** chunk id: 472229, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r() {
  if (null == Intl.DateTimeFormat) return null;
  let e = Intl.DateTimeFormat();
  return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone
}
require.d(exports, {
  A: () => r
})
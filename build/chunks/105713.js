/** Chunk was on web.js **/
"use strict";

function r() {
  if (null == Intl.DateTimeFormat) return null;
  let e = Intl.DateTimeFormat();
  return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone
}
n.d(t, {
  Z: () => r
})
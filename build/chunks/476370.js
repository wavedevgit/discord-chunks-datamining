/** Chunk was on web.js **/
/** chunk id: 476370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => r
});
let r = e => {
  var t;
  let {
    storeState: n,
    surface: r
  } = e, i = Date.now(), a = null == (t = n.dateRangesForSurfaces) ? true : t[r];
  return null != a && new Date(a.fromDate).getTime() < i && new Date(a.untilDate).getTime() > i ? Math.floor(new Date(a.fromDate).getTime() / 1e3) : 0
}
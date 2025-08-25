/** Chunk was on web.js **/
/** chunk id: 416587, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => r
});
let r = e => {
  var t;
  let {
    storeState: n,
    surface: r
  } = e, i = Date.now(), o = null == (t = n.dateRangesForSurfaces) ? true : t[r];
  return null != o && new Date(o.fromDate).getTime() < i && new Date(o.untilDate).getTime() > i ? Math.floor(new Date(o.fromDate).getTime() / 1e3) : 0
}
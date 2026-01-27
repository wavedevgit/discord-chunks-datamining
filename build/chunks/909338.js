/** Chunk was on web.js **/
/** chunk id: 909338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => i
});
var Chunk998218 = require("./998218.js");

function i(e) {
  var t, n, i;
  let a = r.A.toURLSafe(e),
    o = null != (t = null == a ? true : a.searchParams.get("referrer_id")) ? t : true;
  return {
    referrerId: o,
    customId: null != (n = null == a ? true : a.searchParams.get("custom_id")) ? n : true,
    linkId: null != (i = null == a ? true : a.searchParams.get("link_id")) ? i : true
  }
}
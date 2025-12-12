/** Chunk was on web.js **/
/** chunk id: 234431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => i
});
var Chunk591759 = require("./591759.js");

function i(e) {
  var t, n, i;
  let a = r.Z.toURLSafe(e),
    o = null != (t = null == a ? true : a.searchParams.get("referrer_id")) ? t : true;
  return {
    referrerId: o,
    customId: null != (n = null == a ? true : a.searchParams.get("custom_id")) ? n : true,
    linkId: null != (i = null == a ? true : a.searchParams.get("link_id")) ? i : true
  }
}
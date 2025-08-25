/** Chunk was on web.js **/
/** chunk id: 234431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => i
});
var Chunk591759 = require("./591759.js");

function i(e) {
  var t, n, i;
  let o = r.Z.toURLSafe(e),
    a = null != (t = null == o ? true : o.searchParams.get("referrer_id")) ? t : true;
  return {
    referrerId: a,
    customId: null != (n = null == o ? true : o.searchParams.get("custom_id")) ? n : true,
    linkId: null != (i = null == o ? true : o.searchParams.get("link_id")) ? i : true
  }
}
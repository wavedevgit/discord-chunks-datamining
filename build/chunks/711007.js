/** Chunk was on web.js **/
/** chunk id: 711007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk409813 = require("./409813.js"),
  Chunk882712 = require("./882712.js");

function o(e, t, n) {
  r.useEffect(() => {
    null != e && e !== i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.PENDING ? n(i.h8.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.h8.AWAITING_PURCHASE_TOKEN_AUTH && t === a.I.SUCCESS && n(i.h8.REVIEW)
  }, [e, t, n])
}
/** Chunk was on web.js **/
/** chunk id: 869573, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk166532 = require("./166532.js"),
  Chunk293700 = require("./293700.js");

function o(e, t, n) {
  r.useEffect(() => {
    null != e && e !== i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.PENDING ? n(i.pn.AWAITING_PURCHASE_TOKEN_AUTH) : e === i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === a.C.SUCCESS && n(i.pn.REVIEW)
  }, [e, t, n])
}
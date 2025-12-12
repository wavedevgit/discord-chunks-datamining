/** Chunk was on web.js **/
/** chunk id: 653603, original params: e (module,exports,re quire) **/
"use strict";
module.exports = o;
var t = "֑-߿יִ-﷽ﹰ-ﻼ",
  n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  r = RegExp("^[^" + n + "]*[" + t + "]"),
  i = RegExp("^[^" + t + "]*[" + n + "]");

function o(e) {
  return (e = String(e || ""), r.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
}
/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
e.exports = o;
var t = "֑-߿יִ-﷽ﹰ-ﻼ",
  n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
  r = RegExp("^[^" + n + "]*[" + t + "]"),
  i = RegExp("^[^" + t + "]*[" + n + "]");

function o(e) {
  return (e = String(e || ""), r.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
}
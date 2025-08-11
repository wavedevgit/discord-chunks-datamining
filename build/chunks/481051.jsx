/** Chunk was on web.js **/
/** chunk id: 481051, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk454335 = require("./454335.js");

function l(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: i
  } = e;
  return <a.Text className={o()(s.unreadCount, i, {
      [s.mention]: t
    })} variant={"text-xs/normal"}>{n}</a.Text>
}
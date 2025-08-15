/** Chunk was on 73551 **/
/** chunk id: 481051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk867506 = require("./867506.js");

function s(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: i
  } = e;
  return (0, r.jsx)(a.Text, {
    className: l()(o.unreadCount, i, {
      [o.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}
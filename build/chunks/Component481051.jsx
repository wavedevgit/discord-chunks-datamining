/** Chunk was on 86642 **/
/** chunk id: 481051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk867506 = require("./867506.js");

function s(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: r
  } = e;
  return (0, i.jsx)(a.Text, {
    className: l()(o.unreadCount, r, {
      [o.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}
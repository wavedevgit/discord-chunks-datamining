/** Chunk was on 71264 **/
/** chunk id: 481051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk153513 = require("./153513.js");

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
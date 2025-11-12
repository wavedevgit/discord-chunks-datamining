/** Chunk was on 38388 **/
/** chunk id: 561788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk430824 = require("./430824.js"),
  Chunk786994 = require("./786994.js");

function c(e) {
  let {
    channel: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.getGuild(t.guild_id)), c = (0, o.KS)(t, n);
  return null == c ? null : (0, r.jsxs)("div", {
    className: s.popoutHeader,
    children: [(0, r.jsx)(c, {
      className: s.channelIcon
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/semibold",
      color: "interactive-normal",
      className: s.channelName,
      children: t.name
    })]
  })
}
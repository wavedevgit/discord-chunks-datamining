/** Chunk was on 54844 **/
/** chunk id: 905434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435639 = require("./435639.js");
let d = e => {
  let {
    stageInstance: t
  } = e, n = a.Z.getGuild(t.guild_id);
  return null == n ? null : (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(l.Heading, {
      className: o.header,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t.InbJ8x)
    }), (0, r.jsxs)("div", {
      className: o.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: o.guildInfo,
        children: [(0, r.jsx)(i.Z, {
          guild: n,
          size: i.Z.Sizes.MINI,
          className: o.guildIcon
        }), (0, r.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.topic
      })]
    })]
  })
}
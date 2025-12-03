/** Chunk was on 54844 **/
/** chunk id: 273514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238972 = require("./238972.js");
let c = e => {
  let {
    entry: t
  } = e, n = a.Z.getChannel(t.channelId);
  if (null == n) return null;
  let c = s.Z.getGuild(n.guild_id);
  return null == c ? null : (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(i.Heading, {
      className: d.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.nTe4HC)
    }), (0, r.jsxs)("div", {
      className: d.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: d.hubInfo,
        children: [(0, r.jsx)(l.Z, {
          guild: c,
          size: l.Z.Sizes.MINI,
          className: d.hubIcon
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: c.name
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      })]
    })]
  })
}
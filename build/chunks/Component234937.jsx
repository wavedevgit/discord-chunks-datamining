/** Chunk was on 54844 **/
/** chunk id: 234937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk410886 = require("./410886.js");
let d = e => {
  let {
    event: t
  } = e, n = (0, i.e7)([s.Z], () => s.Z.getGuild(t.guild_id));
  return null == n ? null : (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(l.Heading, {
      className: c.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SDTOL7)
    }), (0, r.jsxs)("div", {
      className: c.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: c.guildInfo,
        children: [(0, r.jsx)(a.Z, {
          guild: n,
          size: a.Z.Sizes.MINI,
          className: c.guildIcon
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      })]
    })]
  })
}
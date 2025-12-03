/** Chunk was on 54844 **/
/** chunk id: 234937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573265 = require("./573265.js");
let c = e => {
  let {
    event: t
  } = e, n = (0, l.e7)([s.Z], () => s.Z.getGuild(t.guild_id));
  return null == n ? null : (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(i.Heading, {
      className: d.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SDTOL7)
    }), (0, r.jsxs)("div", {
      className: d.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: d.guildInfo,
        children: [(0, r.jsx)(a.Z, {
          guild: n,
          size: a.Z.Sizes.MINI,
          className: d.guildIcon
        }), (0, r.jsx)(i.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      })]
    })]
  })
}
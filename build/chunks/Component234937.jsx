/** Chunk was on 59727 **/
/** chunk id: 234937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk573265 = require("./573265.js");
let d = e => {
  let {
    event: t
  } = e, n = (0, a.e7)([o.Z], () => o.Z.getGuild(t.guild_id));
  return null == n ? null : (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(i.X6q, {
      className: c.header,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t.SDTOLy)
    }), (0, r.jsxs)("div", {
      className: c.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: c.guildInfo,
        children: [(0, r.jsx)(l.Z, {
          guild: n,
          size: l.Z.Sizes.MINI,
          className: c.guildIcon
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
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
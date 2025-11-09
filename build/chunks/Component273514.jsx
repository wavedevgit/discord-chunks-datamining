/** Chunk was on 54844 **/
/** chunk id: 273514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk50079 = require("./50079.js");
let d = e => {
  let {
    entry: t
  } = e, n = a.Z.getChannel(t.channelId);
  if (null == n) return null;
  let d = s.Z.getGuild(n.guild_id);
  return null == d ? null : (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(i.Heading, {
      className: c.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.nTe4HC)
    }), (0, r.jsxs)("div", {
      className: c.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: c.hubInfo,
        children: [(0, r.jsx)(l.Z, {
          guild: d,
          size: l.Z.Sizes.MINI,
          className: c.hubIcon
        }), (0, r.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: d.name
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.name
      })]
    })]
  })
}
/** Chunk was on 54844 **/
/** chunk id: 905434, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680006 = require("./680006.js");
let c = e => {
  let {
    stageInstance: t
  } = e, n = a.Z.getGuild(t.guild_id);
  return null == n ? null : (0, r.jsxs)("div", {
    className: o.container,
    children: [(0, r.jsx)(l.X6q, {
      className: o.header,
      variant: "heading-sm/semibold",
      children: s.intl.string(s.t["InbJ8/"])
    }), (0, r.jsxs)("div", {
      className: o.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: o.guildInfo,
        children: [(0, r.jsx)(i.Z, {
          guild: n,
          size: i.Z.Sizes.MINI,
          className: o.guildIcon
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
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
/** Chunk was on 59727 **/
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
  Chunk633570 = require("./633570.js");
let c = e => {
  let {
    stageInstance: t
  } = e, n = l.Z.getGuild(t.guild_id);
  return null == n ? null : (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(a.X6q, {
      className: s.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t["InbJ8/"])
    }), (0, r.jsxs)("div", {
      className: s.guildContainer,
      children: [(0, r.jsxs)("div", {
        className: s.guildInfo,
        children: [(0, r.jsx)(i.Z, {
          guild: n,
          size: i.Z.Sizes.MINI,
          className: s.guildIcon
        }), (0, r.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          children: n.name
        })]
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.topic
      })]
    })]
  })
}
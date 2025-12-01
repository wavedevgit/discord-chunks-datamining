/** Chunk was on 44799 **/
/** chunk id: 767218, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk673833 = require("./673833.js"),
  Chunk535396 = require("./535396.js"),
  Chunk293081 = require("./293081.js");

function u(e) {
  let {
    count: t,
    type: n
  } = e;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsxs)("div", {
      className: c.headerContainer,
      children: [(0, r.jsx)(i.Ucv, {
        size: "sm",
        color: n !== s.br.AVAILABLE ? l.Z.colors.HEADER_MUTED : l.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
      }), (0, r.jsx)(o.X6q, {
        color: n !== s.br.AVAILABLE ? "header-muted" : "header-primary",
        variant: "heading-lg/semibold",
        children: t
      })]
    }), (0, r.jsx)(o.xvT, {
      color: "header-muted",
      variant: "text-sm/medium",
      children: (0, a.t)(t, n)
    })]
  })
}
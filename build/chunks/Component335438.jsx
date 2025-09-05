/** Chunk was on 54052 **/
/** chunk id: 335438, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk578053 = require("./578053.jsx"),
  Chunk715224 = require("./715224.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851722 = require("./851722.js");

function d(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)(l.hjN, {
    title: o.intl.string(o.t.Cv6ANz),
    children: [(0, r.jsx)(i.xv, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: c.description,
      children: o.intl.string(o.t.qxIcra)
    }), (0, r.jsx)(s.W, {
      canManageGuild: t,
      guild: n,
      switchClassName: c.switch
    }), (0, r.jsxs)("div", {
      className: c.systemChannel,
      children: [(0, r.jsxs)("div", {
        className: c.halfWidth,
        children: [(0, r.jsx)(l.vwX, {
          children: o.intl.string(o.t.NASFnp)
        }), (0, r.jsx)(i.xv, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: o.intl.string(o.t.ZhOdpa)
        })]
      }), (0, r.jsx)("div", {
        className: c.halfWidth,
        children: (0, r.jsx)(a.u, {
          canManageGuild: t,
          guildId: n.id,
          systemChannelId: n.systemChannelId
        })
      })]
    })]
  })
}
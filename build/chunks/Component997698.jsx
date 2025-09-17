/** Chunk was on 8106 **/
/** chunk id: 997698, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk760632 = require("./760632.jsx"),
  Chunk578053 = require("./578053.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk354962 = require("./354962.js");

function d(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)(l.hjN, {
    children: [(0, r.jsxs)("div", {
      className: c.inactiveSelects,
      children: [(0, r.jsxs)("div", {
        className: c.halfWidth,
        children: [(0, r.jsx)(l.vwX, {
          children: o.intl.string(o.t.KuYcnZ)
        }), (0, r.jsx)(s.g, {
          canManageGuild: t,
          guildId: n.id,
          afkChannelId: n.afkChannelId
        })]
      }), (0, r.jsxs)("div", {
        className: c.halfWidth,
        children: [(0, r.jsx)(l.vwX, {
          children: o.intl.string(o.t.brhYaW)
        }), (0, r.jsx)(a.M, {
          canManageGuild: t,
          afkChannelId: n.afkChannelId,
          afkTimeout: n.afkTimeout
        })]
      })]
    }), (0, r.jsx)(i.xvT, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: o.intl.string(o.t.ffEOKC)
    })]
  })
}
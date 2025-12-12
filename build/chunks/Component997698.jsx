/** Chunk was on 384 **/
/** chunk id: 997698, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  L: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk760632 = require("./760632.jsx"),
  Chunk578053 = require("./578053.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk354962 = require("./354962.js");

function c(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: o.inactiveSelects,
      children: [(0, r.jsx)("div", {
        className: o.halfWidth,
        children: (0, r.jsx)(s.g, {
          label: a.intl.string(a.t.KuYcnU),
          canManageGuild: t,
          guildId: n.id,
          afkChannelId: n.afkChannelId
        })
      }), (0, r.jsx)("div", {
        className: o.halfWidth,
        children: (0, r.jsx)(l.M, {
          label: a.intl.string(a.t.brhYaR),
          canManageGuild: t,
          afkChannelId: n.afkChannelId,
          afkTimeout: n.afkTimeout
        })
      })]
    }), (0, r.jsx)(i.xvT, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: a.intl.string(a.t.ffEOKP)
    })]
  })
}
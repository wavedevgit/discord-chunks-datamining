/** Chunk was on 64982 **/
/** chunk id: 335438, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk578053 = require("./578053.jsx"),
  Chunk715224 = require("./715224.jsx"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)(i.C3N, {
    label: a.intl.string(a.t.Cv6ANz),
    description: a.intl.string(a.t.qxIcra),
    children: [(0, r.jsx)(s.W, {
      canManageGuild: t,
      guild: n
    }), (0, r.jsx)(l.u, {
      layout: "horizontal",
      label: a.intl.string(a.t.NASFnp),
      description: a.intl.string(a.t.ZhOdpa),
      canManageGuild: t,
      guildId: n.id,
      systemChannelId: n.systemChannelId
    })]
  })
}
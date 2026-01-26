/** Chunk was on 39048 **/
/** chunk id: 668133, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  h: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk863598 = require("./863598.jsx"),
  Chunk308889 = require("./308889.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)(i.nVY, {
    label: a.intl.string(a.t["Cv6AN/"]),
    description: a.intl.string(a.t.qxIcrT),
    children: [(0, r.jsx)(s.l, {
      canManageGuild: t,
      guild: n
    }), (0, r.jsx)(l.h, {
      layout: "horizontal",
      label: a.intl.string(a.t.NASFnq),
      description: a.intl.string(a.t.ZhOdpR),
      canManageGuild: t,
      guildId: n.id,
      systemChannelId: n.systemChannelId
    })]
  })
}
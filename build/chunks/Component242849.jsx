/** Chunk was on 47841 **/
/** chunk id: 242849, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk890514 = require("./890514.jsx"),
  Chunk863598 = require("./863598.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk932249 = require("./932249.js");

function o(e) {
  let {
    canManageGuild: t,
    guild: n
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      className: c.t,
      children: [(0, r.jsx)("div", {
        className: c._,
        children: (0, r.jsx)(s.y, {
          label: a.intl.string(a.t.KuYcnU),
          canManageGuild: t,
          guildId: n.id,
          afkChannelId: n.afkChannelId
        })
      }), (0, r.jsx)("div", {
        className: c._,
        children: (0, r.jsx)(l.S, {
          label: a.intl.string(a.t.brhYaR),
          canManageGuild: t,
          afkChannelId: n.afkChannelId,
          afkTimeout: n.afkTimeout
        })
      })]
    }), (0, r.jsx)(i.EYj, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: a.intl.string(a.t.ffEOKP)
    })]
  })
}
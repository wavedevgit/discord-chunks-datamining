/** Chunk was on 86142 **/
/** chunk id: 359438, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk557582 = require("./557582.jsx"),
  Chunk88860 = require("./88860.js");

function o(e) {
  let {
    channel: t
  } = e, n = (0, s._U)(t.type);
  return (0, r.jsxs)("div", {
    className: a.Nj,
    children: [null != n ? (0, r.jsx)(n, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20
    }) : null, (0, r.jsx)(i.Text, {
      className: a.dN,
      color: "none",
      variant: "text-sm/semibold",
      children: t.name
    })]
  })
}

function c(e) {
  let {
    channel: t,
    guildScheduledEvent: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a.kL,
    children: [(0, r.jsx)(l.Uq, {
      className: a.II,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), (0, r.jsx)(l.sC, {
      name: n.name,
      description: n.description,
      guildId: n.guild_id
    }), null != t && n.channel_id === t.id ? (0, r.jsx)(o, {
      channel: t
    }) : null]
  })
}
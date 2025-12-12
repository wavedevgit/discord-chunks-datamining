/** Chunk was on 27978 **/
/** chunk id: 639946, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  r: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk742593 = require("./742593.jsx"),
  Chunk952632 = require("./952632.js");

function o(e) {
  let {
    channel: t
  } = e, n = (0, s.Th)(t.type);
  return (0, r.jsxs)("div", {
    className: l.channelInfoContainer,
    children: [null != n ? (0, r.jsx)(n, {
      color: "currentColor",
      size: "custom",
      width: 20,
      height: 20
    }) : null, (0, r.jsx)(i.Text, {
      className: l.channelInfoText,
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
    className: l.container,
    children: [(0, r.jsx)(a.HZ, {
      className: l.statusContainer,
      guildId: n.guild_id,
      guildEvent: n,
      eventPreview: n
    }), (0, r.jsx)(a.Rf, {
      name: n.name,
      description: n.description,
      guildId: n.guild_id
    }), null != t && n.channel_id === t.id ? (0, r.jsx)(o, {
      channel: t
    }) : null]
  })
}
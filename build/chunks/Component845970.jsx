/** Chunk was on web.js **/
/** chunk id: 845970, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk113318 = require("./113318.js"),
  Chunk685172 = require("./685172.js");

function d(e) {
  let {
    benefit: t,
    guildId: n
  } = e, i = (0, c.Z)(n, t.ref_id), d = (0, r.jsx)(s.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), f = null != i ? (0, r.jsx)(o.P3F, {
    className: u.__invalid_channelLink,
    onClick: i.navigateToChannel,
    "aria-label": i.ariaLabel,
    role: "link",
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: a()(u.name, u.linkedName),
      children: (0, l.Z)(t)
    })
  }) : (0, r.jsx)(o.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: u.name,
    children: (0, l.Z)(t)
  });
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsxs)("div", {
      className: u.infoContainer,
      children: [f, (0, r.jsx)(o.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, r.jsx)("div", {
      className: u.emojiContainer,
      children: d
    })]
  })
}
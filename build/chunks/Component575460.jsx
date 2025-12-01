/** Chunk was on web.js **/
/** chunk id: 575460, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk113318 = require("./113318.js"),
  Chunk490944 = require("./490944.js");

function u(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: u
  } = e, d = (0, l.Z)(n, t.ref_id), f = () => {
    null == d || d.navigateToChannel(), u()
  }, p = (0, r.jsx)(o.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, r.jsxs)(i.P3F, {
    className: c.container,
    onClick: f,
    "aria-label": null == d ? true : d.ariaLabel,
    role: "link",
    children: [(0, r.jsx)("div", {
      className: c.emojiContainer,
      children: p
    }), (0, r.jsxs)("div", {
      className: c.infoContainer,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        className: c.name,
        children: (0, s.Z)(t)
      }), (0, r.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, r.jsx)(a.Z, {
      direction: a.Z.Directions.RIGHT,
      className: c.caret
    })]
  })
}
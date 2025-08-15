/** Chunk was on 48091 **/
/** chunk id: 845970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk113318 = require("./113318.js"),
  Chunk685172 = require("./685172.js");

function u(e) {
  let {
    benefit: t,
    guildId: n
  } = e, i = (0, c.Z)(n, t.ref_id), u = (0, r.jsx)(s.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), m = null != i ? (0, r.jsx)(a.P3F, {
    className: d.__invalid_channelLink,
    onClick: i.navigateToChannel,
    "aria-label": i.ariaLabel,
    role: "link",
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: l()(d.name, d.linkedName),
      children: (0, o.Z)(t)
    })
  }) : (0, r.jsx)(a.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, o.Z)(t)
  });
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.infoContainer,
      children: [m, (0, r.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, r.jsx)("div", {
      className: d.emojiContainer,
      children: u
    })]
  })
}
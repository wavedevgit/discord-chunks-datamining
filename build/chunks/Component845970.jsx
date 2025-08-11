/** Chunk was on 25548 **/
/** chunk id: 845970, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk113318 = require("./113318.js"),
  Chunk277937 = require("./277937.js");

function u(e) {
  let {
    benefit: t,
    guildId: n
  } = e, r = (0, c.Z)(n, t.ref_id), u = (0, i.jsx)(s.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  }), m = null != r ? (0, i.jsx)(a.P3F, {
    className: d.__invalid_channelLink,
    onClick: r.navigateToChannel,
    "aria-label": r.ariaLabel,
    role: "link",
    children: (0, i.jsx)(a.Text, {
      variant: "text-md/medium",
      color: "header-primary",
      className: l()(d.name, d.linkedName),
      children: (0, o.Z)(t)
    })
  }) : (0, i.jsx)(a.Text, {
    variant: "text-md/medium",
    color: "header-primary",
    className: d.name,
    children: (0, o.Z)(t)
  });
  return (0, i.jsxs)("div", {
    className: d.container,
    children: [(0, i.jsxs)("div", {
      className: d.infoContainer,
      children: [m, (0, i.jsx)(a.Text, {
        color: "interactive-normal",
        variant: "text-sm/normal",
        children: t.description
      })]
    }), (0, i.jsx)("div", {
      className: d.emojiContainer,
      children: u
    })]
  })
}
/** Chunk was on 48091 **/
/** chunk id: 575460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk528027 = require("./528027.jsx"),
  Chunk686807 = require("./686807.jsx"),
  Chunk113318 = require("./113318.js"),
  Chunk490944 = require("./490944.js");

function d(e) {
  let {
    benefit: t,
    guildId: n,
    onClick: d
  } = e, u = (0, o.Z)(n, t.ref_id), m = (0, r.jsx)(a.Z, {
    guildId: n,
    emojiId: t.emoji_id,
    emojiName: t.emoji_name
  });
  return (0, r.jsxs)(i.P3F, {
    className: c.container,
    onClick: () => {
      null == u || u.navigateToChannel(), d()
    },
    "aria-label": null == u ? true : u.ariaLabel,
    role: "link",
    children: [(0, r.jsx)("div", {
      className: c.emojiContainer,
      children: m
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
    }), (0, r.jsx)(l.Z, {
      direction: l.Z.Directions.RIGHT,
      className: c.caret
    })]
  })
}
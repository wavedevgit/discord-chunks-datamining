/** Chunk was on 41700 **/
/** chunk id: 826763, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk962086 = require("./962086.js"),
  Chunk303737 = require("./303737.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk517681 = require("./517681.js"),
  Chunk497224 = require("./497224.js");

function p(e) {
  let {
    guildId: t
  } = e;
  return (0, r.jsx)("div", {
    className: d.upsellPage,
    children: (0, r.jsxs)("div", {
      className: d.upsellContainer,
      children: [(0, r.jsx)("img", {
        src: u,
        alt: ""
      }), (0, r.jsxs)("div", {
        className: d.upsellContent,
        children: [(0, r.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          children: c.intl.string(c.t["8gJGPs"])
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          className: d.bodyText,
          children: c.intl.string(c.t.GpOWIi)
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: d.__invalid_button,
          children: (0, r.jsx)(i.Button, {
            variant: "primary",
            text: c.intl.string(c.t["I/XhUn"]),
            onClick: () => {
              (0, a.mL)(t), l.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, true, o.KsC.ROLE_SUBSCRIPTION_TIERS), (0, s.GN)(t)
            }
          })
        })]
      })]
    })
  })
}
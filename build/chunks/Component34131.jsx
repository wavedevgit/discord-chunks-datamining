/** Chunk was on 1272 **/
/** chunk id: 34131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk70097 = require("./70097.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk970731 = require("./970731.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk766958 = require("./766958.js");

function u(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsx)("div", {
    className: c.container,
    children: (0, r.jsx)(a.ZP, {
      header: s.intl.string(s.t.gCgirq),
      content: s.intl.string(s.t.fLMZFx),
      asset: (0, r.jsx)(i.Z, {
        className: c.video,
        src: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        autoPlay: true,
        loop: true
      }),
      buttonCTA: s.intl.string(s.t.BQq86u),
      onClick: () => {
        l.Z.open(t, o.pNK.ROLE_SUBSCRIPTIONS, true, o.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      },
      secondaryButtonCTA: s.intl.string(s.t.WAI6xs),
      markAsDismissed: n
    })
  })
}
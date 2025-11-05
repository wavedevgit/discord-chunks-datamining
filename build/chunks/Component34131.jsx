/** Chunk was on 1272 **/
/** chunk id: 34131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk907862 = require("./907862.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    targetElementRef: c
  } = e;
  return (0, r.jsx)(i.Mb, {
    targetElementRef: c,
    title: o.intl.string(o.t.gCgirr),
    body: o.intl.string(o.t.fLMZFw),
    assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
    action: {
      text: o.intl.string(o.t.BQq86h),
      variant: "primary",
      onClick: () => {
        l.Z.open(t, a.pNK.ROLE_SUBSCRIPTIONS, true, a.KsC.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      }
    },
    onRequestClose: () => n(s.L.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      position: "top",
      align: "center"
    }
  })
}
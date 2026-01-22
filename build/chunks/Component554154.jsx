/** Chunk was on 21738 **/
/** chunk id: 554154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk342494 = require("./342494.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    guildId: t,
    markAsDismissed: n,
    targetElementRef: c
  } = e;
  return (0, r.jsx)(i.HZ, {
    targetElementRef: c,
    title: o.intl.string(o.t.gCgirr),
    body: o.intl.string(o.t.fLMZFw),
    assetUrl: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
    action: {
      text: o.intl.string(o.t.BQq86h),
      variant: "primary",
      onClick: () => {
        l.A.open(t, a.BEX.ROLE_SUBSCRIPTIONS, true, a.nd0.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      }
    },
    onRequestClose: () => n(s.i.USER_DISMISS),
    position: "bottom",
    caretConfig: {
      align: "center"
    }
  })
}
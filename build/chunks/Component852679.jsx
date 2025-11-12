/** Chunk was on web.js **/
/** chunk id: 852679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let _ = "guild-boost-purchase-modal";
async function p(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: p,
    analyticsSourceLocation: h,
    guildId: m,
    closeLayer: g,
    onCloseModal: E,
    totalNumberOfSlotsToAssign: b = 1,
    disablePremiumUpsell: y,
    onSubscribeComplete: O,
    onSubscriptionConfirmation: v,
    inPopout: I,
    applicationId: S,
    intent: T
  } = e, A = I ? i.u1M : i.z1l, C = l.Z.getPremiumTypeSubscription();
  if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
    null != g && g(), a.Z.show({
      title: f.intl.formatToPlainString(f.t["rTk9v/"], {
        paymentGatewayName: d.Vzj[C.paymentGateway]
      }),
      body: f.intl.format(f.t.NY03WF, {
        paymentGatewayName: d.Vzj[C.paymentGateway],
        subscriptionManagementLink: (0, u.JE)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      })
    });
    return
  }
  Promise.all([(0, o.tZ)(), (0, s.Y2)()]);
  let N = () => {
    c.default.track(d.rMx.MODAL_DISMISSED, {
      type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
      location: p
    })
  };
  await (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 343649));
    return n => {
      let {
        transitionState: i,
        onClose: a
      } = n;
      return (0, r.jsx)(e, {
        transitionState: i,
        onClose: e => {
          a(), null == E || E(e)
        },
        analyticsLocations: t,
        analyticsLocation: p,
        analyticsSourceLocation: null != h ? h : p,
        guildId: m,
        totalNumberOfSlotsToAssign: b,
        closeGuildPerksModal: g,
        disablePremiumUpsell: y,
        onSubscriptionConfirmation: v,
        onSubscribeComplete: O,
        applicationId: S,
        intent: T
      })
    }
  }, {
    modalKey: _,
    onCloseCallback: N,
    onCloseRequest: () => {
      (0, i.Mr3)(_), null == E || E(false)
    },
    contextKey: A
  })
}
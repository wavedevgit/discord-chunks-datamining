/** Chunk was on web.js **/
/** chunk id: 212637, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk166403 = require("./166403.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = "guild-boost-purchase-modal";
async function _(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: _,
    analyticsSourceLocation: h,
    guildId: m,
    closeLayer: g,
    onCloseModal: E,
    totalNumberOfSlotsToAssign: b = 1,
    disablePremiumUpsell: y,
    onSubscribeComplete: O,
    onSubscriptionConfirmation: A,
    inPopout: v,
    applicationId: S,
    intent: I
  } = e, T = v ? i.KX8 : i.SYi, C = l.A.getPremiumTypeSubscription();
  if (null != C && C.isPurchasedExternally && null != C.paymentGateway) {
    null != g && g(), a.A.show({
      title: f.intl.formatToPlainString(f.t["rTk9v/"], {
        paymentGatewayName: d.qmC[C.paymentGateway]
      }),
      body: f.intl.format(f.t.NY03WF, {
        paymentGatewayName: d.qmC[C.paymentGateway],
        subscriptionManagementLink: (0, u.tW)(C.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      })
    });
    return
  }
  Promise.all([(0, s.$o)(), (0, o.zS)()]);
  let N = () => {
    c.default.track(d.HAw.MODAL_DISMISSED, {
      type: d.JJy.PREMIUM_GUILD_PURCHASE_MODAL,
      location: _
    })
  };
  await (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("48982").then(n.bind(n, 34645));
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
        analyticsLocation: _,
        analyticsSourceLocation: null != h ? h : _,
        guildId: m,
        totalNumberOfSlotsToAssign: b,
        closeGuildPerksModal: g,
        disablePremiumUpsell: y,
        onSubscriptionConfirmation: A,
        onSubscribeComplete: O,
        applicationId: S,
        intent: I
      })
    }
  }, {
    modalKey: p,
    onCloseCallback: N,
    onCloseRequest: () => {
      (0, i.OoC)(p), null == E || E(false)
    },
    contextKey: T
  })
}
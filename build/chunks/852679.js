/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
  o = n(668781),
  a = n(355467),
  s = n(821849),
  l = n(78839),
  c = n(626135),
  u = n(74538),
  d = n(981631),
  f = n(388032);
let _ = "guild-boost-purchase-modal";
async function p(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: p,
    analyticsSourceLocation: h,
    guildId: g,
    closeLayer: m,
    onCloseModal: E,
    totalNumberOfSlotsToAssign: v = 1,
    disablePremiumUpsell: b,
    onSubscriptionConfirmation: y,
    inPopout: O,
    applicationId: S
  } = e, I = O ? i.u1M : i.z1l, T = l.ZP.getPremiumTypeSubscription();
  if (null != T && T.isPurchasedExternally && null != T.paymentGateway) {
    null != m && m(), o.Z.show({
      title: f.NW.formatToPlainString(f.t.rTk9v7, {
        paymentGatewayName: d.Vzj[T.paymentGateway]
      }),
      body: f.NW.format(f.t.NY03WF, {
        paymentGatewayName: d.Vzj[T.paymentGateway],
        subscriptionManagementLink: (0, u.JE)(T.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      })
    });
    return
  }
  Promise.all([(0, a.tZ)(), (0, s.Y2)()]);
  let N = () => {
    c.default.track(d.rMx.MODAL_DISMISSED, {
      type: d.jXE.PREMIUM_GUILD_PURCHASE_MODAL,
      location: p
    })
  };
  await (0, i.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("8016"), n.e("22646"), n.e("71491")]).then(n.bind(n, 343649));
    return n => {
      let {
        transitionState: i,
        onClose: o
      } = n;
      return (0, r.jsx)(e, {
        transitionState: i,
        onClose: e => {
          o(), null == E || E(e)
        },
        analyticsLocations: t,
        analyticsLocation: p,
        analyticsSourceLocation: null != h ? h : p,
        guildId: g,
        totalNumberOfSlotsToAssign: v,
        closeGuildPerksModal: m,
        disablePremiumUpsell: b,
        onSubscriptionConfirmation: y,
        applicationId: S
      })
    }
  }, {
    modalKey: _,
    onCloseCallback: N,
    onCloseRequest: () => {
      (0, i.Mr3)(_), null == E || E(!1)
    },
    contextKey: I
  })
}
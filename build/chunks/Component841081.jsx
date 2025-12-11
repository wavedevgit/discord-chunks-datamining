/** Chunk was on 12693 **/
/** chunk id: 841081, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk701464 = require("./701464.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926845 = require("./926845.js");

function g(i) {
  let {
    giftRecipient: e,
    onClose: t,
    transitionState: l,
    analyticsLocations: g,
    analyticsLocation: p,
    analyticsObject: f,
    giftMessage: I
  } = i, {
    priceOptions: _
  } = (0, a.JL)(), j = s.useCallback(i => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: e,
      subscriptionTier: i,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != g ? g : [],
      analyticsLocation: p,
      analyticsObject: null != f ? f : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      },
      giftMessage: I
    }), t()
  }, [e, g, p, f, I, t]);
  return (0, n.jsxs)(r.Y0X, {
    transitionState: l,
    size: r.CgR.DYNAMIC,
    className: h.modalContainer,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, n.jsx)(r.xBx, {
      className: h.modalHeader,
      "data-migration-pending": true,
      children: (0, n.jsxs)(r.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(r.olH, {
          onClick: t,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(r.hzk, {
      className: h.modalBody,
      "data-migration-pending": true,
      children: (0, n.jsx)(c.Z, {
        onSelectSku: j,
        giftRecipient: e,
        priceOptions: _,
        onWishlistItemClick: t
      })
    })]
  })
}

function p(i) {
  let {
    giftRecipient: e,
    onClose: t,
    transitionState: s,
    analyticsLocations: r,
    analyticsLocation: o,
    analyticsObject: c,
    giftMessage: u
  } = i;
  return (0, n.jsx)(a.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.nS,
    isGift: true,
    children: (0, n.jsx)(l.KB, {
      isGift: true,
      giftRecipient: e,
      giftingOrigin: d.Wt.DM_CHANNEL,
      children: (0, n.jsx)(g, {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: r,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u
      })
    })
  })
}
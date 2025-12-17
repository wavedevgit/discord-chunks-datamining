/** Chunk was on 32777 **/
/** chunk id: 841081, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  default: () => g
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
  Chunk19809 = require("./19809.js");

function f(i) {
  let {
    giftRecipient: e,
    onClose: t,
    transitionState: l,
    analyticsLocations: f,
    analyticsLocation: g,
    analyticsObject: p,
    giftMessage: I
  } = i, {
    priceOptions: b
  } = (0, a.JL)(), j = s.useCallback(i => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: e,
      subscriptionTier: i,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != f ? f : [],
      analyticsLocation: g,
      analyticsObject: null != p ? p : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      },
      giftMessage: I
    }), t()
  }, [e, f, g, p, I, t]);
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
        priceOptions: b,
        onWishlistItemClick: t
      })
    })]
  })
}

function g(i) {
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
      children: (0, n.jsx)(f, {
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
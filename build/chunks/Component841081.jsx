/** Chunk was on 76334 **/
/** chunk id: 841081, original params: e,i,t (module,exports,require) **/
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

function h(e) {
  let {
    giftRecipient: i,
    onClose: t,
    transitionState: l,
    analyticsLocations: h,
    analyticsObject: p
  } = e, {
    priceOptions: f
  } = (0, s.JL)(), g = r.useCallback(e => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: i,
      subscriptionTier: e,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != h ? h : [],
      analyticsObject: null != p ? p : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      }
    }), t()
  }, [i, h, p, t]);
  return (0, n.jsxs)(a.Y0X, {
    transitionState: l,
    size: a.CgR.DYNAMIC,
    className: _.modalContainer,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, n.jsx)(a.xBx, {
      className: _.modalHeader,
      "data-migration-pending": true,
      children: (0, n.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(a.olH, {
          onClick: t,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(a.hzk, {
      className: _.modalBody,
      "data-migration-pending": true,
      children: (0, n.jsx)(c.Z, {
        onSelectSku: g,
        giftRecipient: i,
        priceOptions: f,
        onWishlistItemClick: t
      })
    })]
  })
}

function p(e) {
  let {
    giftRecipient: i,
    onClose: t,
    transitionState: r,
    analyticsLocations: a,
    analyticsObject: o
  } = e;
  return (0, n.jsx)(s.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.nS,
    isGift: true,
    children: (0, n.jsx)(l.KB, {
      isGift: true,
      giftRecipient: i,
      giftingOrigin: d.Wt.DM_CHANNEL,
      children: (0, n.jsx)(h, {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: a,
        analyticsObject: o
      })
    })
  })
}
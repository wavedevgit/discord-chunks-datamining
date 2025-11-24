/** Chunk was on 76334 **/
/** chunk id: 841081, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function _(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: a,
    analyticsLocations: _,
    analyticsObject: f
  } = e, {
    priceOptions: p
  } = (0, s.JL)(), g = r.useCallback(e => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: t,
      subscriptionTier: e,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != _ ? _ : [],
      analyticsObject: null != f ? f : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      }
    }), i()
  }, [t, _, f, i]);
  return (0, n.jsxs)(l.Y0X, {
    transitionState: a,
    size: l.CgR.DYNAMIC,
    className: h.modalContainer,
    parentComponent: "GiftOptionSelectModal",
    children: [(0, n.jsx)(l.xBx, {
      className: h.modalHeader,
      children: (0, n.jsxs)(l.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(l.olH, {
          onClick: i
        })]
      })
    }), (0, n.jsx)(l.hzk, {
      className: h.modalBody,
      children: (0, n.jsx)(c.Z, {
        onSelectSku: g,
        giftRecipient: t,
        priceOptions: p,
        onWishlistItemClick: i
      })
    })]
  })
}

function f(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: r,
    analyticsLocations: l,
    analyticsObject: o
  } = e;
  return (0, n.jsx)(s.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.nS,
    isGift: true,
    children: (0, n.jsx)(a.KB, {
      isGift: true,
      giftRecipient: t,
      giftingOrigin: d.Wt.DM_CHANNEL,
      children: (0, n.jsx)(_, {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: l,
        analyticsObject: o
      })
    })
  })
}
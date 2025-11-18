/** Chunk was on 51275 **/
/** chunk id: 841081, original params: e,t,i (module,exports,require) **/
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
  Chunk518913 = require("./518913.js");

function h(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: l,
    analyticsLocations: h,
    analyticsObject: p
  } = e, {
    priceOptions: g
  } = (0, s.JL)(), b = n.useCallback(e => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: t,
      subscriptionTier: e,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != h ? h : [],
      analyticsObject: null != p ? p : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      }
    })
  }, [t, h, p]);
  return (0, r.jsxs)(a.Y0X, {
    transitionState: l,
    size: a.CgR.DYNAMIC,
    className: f.modalContainer,
    parentComponent: "GiftOptionSelectModal",
    children: [(0, r.jsx)(a.xBx, {
      className: f.modalHeader,
      children: (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, r.jsx)(a.olH, {
          onClick: i
        })]
      })
    }), (0, r.jsx)(a.hzk, {
      className: f.modalBody,
      children: (0, r.jsx)(c.Z, {
        onSelectSku: b,
        giftRecipient: t,
        priceOptions: g
      })
    })]
  })
}

function p(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: n,
    analyticsLocations: a,
    analyticsObject: o
  } = e;
  return (0, r.jsx)(s.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.nS,
    isGift: true,
    children: (0, r.jsx)(l.KB, {
      isGift: true,
      giftRecipient: t,
      giftingOrigin: d.Wt.DM_CHANNEL,
      children: (0, r.jsx)(h, {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: a,
        analyticsObject: o
      })
    })
  })
}
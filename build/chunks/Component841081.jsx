/** Chunk was on 93582 **/
/** chunk id: 841081, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    giftRecipient: i,
    onClose: t,
    transitionState: a,
    analyticsLocations: _,
    analyticsObject: f
  } = e, {
    priceOptions: p
  } = (0, l.JL)(), I = r.useCallback(e => {
    (0, o.Z)({
      isGift: true,
      giftRecipient: i,
      subscriptionTier: e,
      giftingOrigin: d.Wt.DM_CHANNEL,
      analyticsLocations: null != _ ? _ : [],
      analyticsObject: null != f ? f : {
        page: u.ZY5.DM_CHANNEL,
        section: u.jXE.CHANNEL_TEXT_AREA,
        object: u.qAy.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      }
    })
  }, [i, _, f]);
  return (0, n.jsxs)(s.Y0X, {
    transitionState: a,
    size: s.CgR.DYNAMIC,
    className: h.modalContainer,
    parentComponent: "GiftOptionSelectModal",
    children: [(0, n.jsx)(s.xBx, {
      className: h.modalHeader,
      children: (0, n.jsxs)(s.Kqy, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(s.olH, {
          onClick: t
        })]
      })
    }), (0, n.jsx)(s.hzk, {
      className: h.modalBody,
      children: (0, n.jsx)(c.Z, {
        onSelectSku: I,
        giftRecipient: i,
        priceOptions: p
      })
    })]
  })
}

function f(e) {
  let {
    giftRecipient: i,
    onClose: t,
    transitionState: r,
    analyticsLocations: s,
    analyticsObject: o
  } = e;
  return (0, n.jsx)(l.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.nS,
    isGift: true,
    children: (0, n.jsx)(a.KB, {
      isGift: true,
      giftRecipient: i,
      giftingOrigin: d.Wt.DM_CHANNEL,
      children: (0, n.jsx)(_, {
        giftRecipient: i,
        onClose: t,
        transitionState: r,
        analyticsLocations: s,
        analyticsObject: o
      })
    })
  })
}
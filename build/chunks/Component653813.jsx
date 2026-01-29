/** Chunk was on 91075 **/
/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk232516 = require("./232516.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk431389 = require("./431389.js");

function _(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: l,
    analyticsLocations: _,
    analyticsLocation: p,
    analyticsObject: g,
    giftMessage: h
  } = e, {
    priceOptions: I
  } = (0, s.P5)(), C = n.useCallback(e => {
    (0, o.A)({
      isGift: true,
      giftRecipient: t,
      subscriptionTier: e,
      giftingOrigin: u.vQ.DM_CHANNEL,
      analyticsLocations: null != _ ? _ : [],
      analyticsLocation: p,
      analyticsObject: null != g ? g : {
        page: c.liQ.DM_CHANNEL,
        section: c.JJy.CHANNEL_TEXT_AREA,
        object: c.ZSU.BUTTON_ICON,
        objectType: c.AnalyticsObjectTypes.GIFT
      },
      giftMessage: h
    }), i()
  }, [t, _, p, g, h, i]);
  return (0, r.jsxs)(a.EOs, {
    transitionState: l,
    size: a.rIJ.DYNAMIC,
    className: f.jT,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, r.jsx)(a.rQ0, {
      className: f.Hc,
      "data-migration-pending": true,
      children: (0, r.jsxs)(a.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, r.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, r.jsx)(a.s_y, {
          onClick: i,
          "data-migration-pending": true
        })]
      })
    }), (0, r.jsx)(a.$mQ, {
      className: f.S3,
      "data-migration-pending": true,
      children: (0, r.jsx)(d.A, {
        onSelectSku: C,
        giftRecipient: t,
        priceOptions: I,
        onWishlistItemClick: i
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
    analyticsLocation: o,
    analyticsObject: d,
    giftMessage: c
  } = e;
  return (0, r.jsx)(s.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: u.T7,
    isGift: true,
    children: (0, r.jsx)(l.dX, {
      isGift: true,
      giftRecipient: t,
      giftingOrigin: u.vQ.DM_CHANNEL,
      children: (0, r.jsx)(_, {
        giftRecipient: t,
        onClose: i,
        transitionState: n,
        analyticsLocations: a,
        analyticsLocation: o,
        analyticsObject: d,
        giftMessage: c
      })
    })
  })
}
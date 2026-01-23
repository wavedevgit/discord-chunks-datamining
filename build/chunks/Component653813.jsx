/** Chunk was on 55926 **/
/** chunk id: 653813, original params: i,e,t (module,exports,require) **/
require.d(exports, {
  default: () => g
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

function p(i) {
  let {
    giftRecipient: e,
    onClose: t,
    transitionState: r,
    analyticsLocations: p,
    analyticsLocation: g,
    analyticsObject: I,
    giftMessage: f
  } = i, {
    priceOptions: j
  } = (0, a.P5)(), x = s.useCallback(i => {
    (0, o.A)({
      isGift: true,
      giftRecipient: e,
      subscriptionTier: i,
      giftingOrigin: d.vQ.DM_CHANNEL,
      analyticsLocations: null != p ? p : [],
      analyticsLocation: g,
      analyticsObject: null != I ? I : {
        page: u.liQ.DM_CHANNEL,
        section: u.JJy.CHANNEL_TEXT_AREA,
        object: u.ZSU.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      },
      giftMessage: f
    }), t()
  }, [e, p, g, I, f, t]);
  return (0, n.jsxs)(l.EOs, {
    transitionState: r,
    size: l.rIJ.DYNAMIC,
    className: h.jT,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, n.jsx)(l.rQ0, {
      className: h.Hc,
      "data-migration-pending": true,
      children: (0, n.jsxs)(l.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(l.s_y, {
          onClick: t,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(l.$mQ, {
      className: h.S3,
      "data-migration-pending": true,
      children: (0, n.jsx)(c.A, {
        onSelectSku: x,
        giftRecipient: e,
        priceOptions: j,
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
    analyticsLocations: l,
    analyticsLocation: o,
    analyticsObject: c,
    giftMessage: u
  } = i;
  return (0, n.jsx)(a.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.T7,
    isGift: true,
    children: (0, n.jsx)(r.dX, {
      isGift: true,
      giftRecipient: e,
      giftingOrigin: d.vQ.DM_CHANNEL,
      children: (0, n.jsx)(p, {
        giftRecipient: e,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: c,
        giftMessage: u
      })
    })
  })
}
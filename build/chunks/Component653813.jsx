/** Chunk was on 58197 **/
/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function g(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: s,
    analyticsLocations: g,
    analyticsLocation: h,
    analyticsObject: f,
    giftMessage: _
  } = e, {
    priceOptions: b
  } = (0, o.P5)(), O = r.useCallback(e => {
    (0, a.A)({
      isGift: true,
      giftRecipient: t,
      subscriptionTier: e,
      giftingOrigin: u.vQ.DM_CHANNEL,
      analyticsLocations: null != g ? g : [],
      analyticsLocation: h,
      analyticsObject: null != f ? f : {
        page: d.liQ.DM_CHANNEL,
        section: d.JJy.CHANNEL_TEXT_AREA,
        object: d.ZSU.BUTTON_ICON,
        objectType: d.AnalyticsObjectTypes.GIFT
      },
      giftMessage: _
    }), i()
  }, [t, g, h, f, _, i]);
  return (0, n.jsxs)(l.EOs, {
    transitionState: s,
    size: l.rIJ.DYNAMIC,
    className: m.jT,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, n.jsx)(l.rQ0, {
      className: m.Hc,
      "data-migration-pending": true,
      children: (0, n.jsxs)(l.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: p.intl.string(p.t["wg/30i"])
        }), (0, n.jsx)(l.s_y, {
          onClick: i,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(l.$mQ, {
      className: m.S3,
      "data-migration-pending": true,
      children: (0, n.jsx)(c.A, {
        onSelectSku: O,
        giftRecipient: t,
        priceOptions: b,
        onWishlistItemClick: i
      })
    })]
  })
}

function h(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: r,
    analyticsLocations: l,
    analyticsLocation: a,
    analyticsObject: c,
    giftMessage: d
  } = e;
  return (0, n.jsx)(o.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: u.T7,
    isGift: true,
    children: (0, n.jsx)(s.dX, {
      isGift: true,
      giftRecipient: t,
      giftingOrigin: u.vQ.DM_CHANNEL,
      children: (0, n.jsx)(g, {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: l,
        analyticsLocation: a,
        analyticsObject: c,
        giftMessage: d
      })
    })
  })
}
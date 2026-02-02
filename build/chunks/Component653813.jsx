/** Chunk was on 62694 **/
/** chunk id: 653813, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => _
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

function f(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: s,
    analyticsLocations: f,
    analyticsLocation: _,
    analyticsObject: h,
    giftMessage: g
  } = e, {
    priceOptions: I
  } = (0, a.P5)(), S = r.useCallback(e => {
    (0, o.A)({
      isGift: true,
      giftRecipient: t,
      subscriptionTier: e,
      giftingOrigin: c.vQ.DM_CHANNEL,
      analyticsLocations: null != f ? f : [],
      analyticsLocation: _,
      analyticsObject: null != h ? h : {
        page: d.liQ.DM_CHANNEL,
        section: d.JJy.CHANNEL_TEXT_AREA,
        object: d.ZSU.BUTTON_ICON,
        objectType: d.AnalyticsObjectTypes.GIFT
      },
      giftMessage: g
    }), i()
  }, [t, f, _, h, g, i]);
  return (0, n.jsxs)(l.EOs, {
    transitionState: s,
    size: l.rIJ.DYNAMIC,
    className: p.jT,
    parentComponent: "GiftOptionSelectModal",
    "data-migration-pending": true,
    children: [(0, n.jsx)(l.rQ0, {
      className: p.Hc,
      "data-migration-pending": true,
      children: (0, n.jsxs)(l.BJc, {
        direction: "horizontal",
        justify: "space-between",
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: m.intl.string(m.t["wg/30i"])
        }), (0, n.jsx)(l.s_y, {
          onClick: i,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(l.$mQ, {
      className: p.S3,
      "data-migration-pending": true,
      children: (0, n.jsx)(u.A, {
        onSelectSku: S,
        giftRecipient: t,
        priceOptions: I,
        onWishlistItemClick: i
      })
    })]
  })
}

function _(e) {
  let {
    giftRecipient: t,
    onClose: i,
    transitionState: r,
    analyticsLocations: l,
    analyticsLocation: o,
    analyticsObject: u,
    giftMessage: d
  } = e;
  return (0, n.jsx)(a.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: c.T7,
    isGift: true,
    children: (0, n.jsx)(s.dX, {
      isGift: true,
      giftRecipient: t,
      giftingOrigin: c.vQ.DM_CHANNEL,
      children: (0, n.jsx)(f, {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: u,
        giftMessage: d
      })
    })
  })
}
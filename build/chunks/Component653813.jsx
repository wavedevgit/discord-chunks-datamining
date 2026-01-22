/** Chunk was on 55926 **/
/** chunk id: 653813, original params: e,i,t (module,exports,require) **/
require.d(exports, {
  default: () => f
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

function h(e) {
  let {
    giftRecipient: i,
    onClose: t,
    transitionState: r,
    analyticsLocations: h,
    analyticsLocation: f,
    analyticsObject: g,
    giftMessage: I
  } = e, {
    priceOptions: j
  } = (0, a.P5)(), x = s.useCallback(e => {
    (0, o.A)({
      isGift: true,
      giftRecipient: i,
      subscriptionTier: e,
      giftingOrigin: d.vQ.DM_CHANNEL,
      analyticsLocations: null != h ? h : [],
      analyticsLocation: f,
      analyticsObject: null != g ? g : {
        page: u.liQ.DM_CHANNEL,
        section: u.JJy.CHANNEL_TEXT_AREA,
        object: u.ZSU.BUTTON_ICON,
        objectType: u.AnalyticsObjectTypes.GIFT
      },
      giftMessage: I
    }), t()
  }, [i, h, f, g, I, t]);
  return (0, n.jsxs)(l.EOs, {
    transitionState: r,
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
          onClick: t,
          "data-migration-pending": true
        })]
      })
    }), (0, n.jsx)(l.$mQ, {
      className: p.S3,
      "data-migration-pending": true,
      children: (0, n.jsx)(c.A, {
        onSelectSku: x,
        giftRecipient: i,
        priceOptions: j,
        onWishlistItemClick: t
      })
    })]
  })
}

function f(e) {
  let {
    giftRecipient: i,
    onClose: t,
    transitionState: s,
    analyticsLocations: l,
    analyticsLocation: o,
    analyticsObject: c,
    giftMessage: u
  } = e;
  return (0, n.jsx)(a.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: d.T7,
    isGift: true,
    children: (0, n.jsx)(r.dX, {
      isGift: true,
      giftRecipient: i,
      giftingOrigin: d.vQ.DM_CHANNEL,
      children: (0, n.jsx)(h, {
        giftRecipient: i,
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
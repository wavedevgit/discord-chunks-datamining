/** Chunk was on 1272 **/
/** chunk id: 276792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => O
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk657707 = require("./657707.js"),
  Chunk704215 = require("./704215.js"),
  Chunk740111 = require("./740111.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk963249 = require("./963249.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605548 = require("./605548.js");

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  var t, n, O, v;
  let y, {
      content: I,
      renderModalProps: C,
      analyticsLocations: S,
      analyticsLocation: T,
      isLightTheme: N
    } = e,
    P = "AnnouncementModalVariant1_".concat(l.z[Number(I.dismissKey)]),
    {
      onClose: j
    } = C,
    A = null != (v = null == (t = I.button) ? true : t.copy) ? v : m.intl.string(m.t.YScQSE),
    x = (null == (n = I.button) ? true : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button";
  switch (null == (O = I.button) ? true : O.buttonAction) {
    case a.Wc.OPEN_MARKETING_PAGE:
      y = () => {
        (0, u.uL)(g.Z5c.APPLICATION_STORE), j()
      };
      break;
    case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
      y = () => (0, c.Z)({
        subscriptionTier: h.Si.TIER_1,
        analyticsLocations: S,
        analyticsObject: E(_({}, T), {
          object: g.qAy.BUTTON_CTA,
          objectType: g.Qqv.TIER_1
        }),
        onClose: e => {
          e && j()
        }
      });
      break;
    case a.Wc.OPEN_TIER_2_PAYMENT_MODAL:
    case a.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
    default:
      y = () => (0, c.Z)({
        subscriptionTier: h.Si.TIER_2,
        analyticsLocations: S,
        analyticsObject: E(_({}, T), {
          object: g.qAy.BUTTON_CTA,
          objectType: g.Qqv.TIER_2
        }),
        onClose: e => {
          e && j()
        }
      })
  }
  let Z = "" !== I.helpArticleId ? () => (0, r.jsxs)(r.Fragment, {
      children: ["\xa0", (0, r.jsx)(s.Anchor, {
        className: b.termsApplyAnchor,
        href: p.Z.getArticleURL(I.helpArticleId),
        children: m.intl.string(m.t["sBp+u7"])
      })]
    }) : true,
    w = {
      type: "video",
      src: N ? I.heroArtVideoLinkLightTheme : I.videoLink
    };
  null != I.heroArtVideoSubtitles && (w.subtitles = I.heroArtVideoSubtitles.map(e => ({
    locale: e.locale,
    src: e.link,
    isDefault: false
  }))), ("" !== I.heroArtImageLinkDarkTheme || "" !== I.heroArtImageLinkLightTheme) && (w = {
    type: "image",
    src: N ? I.heroArtImageLinkLightTheme : I.heroArtImageLinkDarkTheme
  });
  let L = "" !== I.modalTopPill ? () => (0, r.jsx)(f.mn, {
    text: I.modalTopPill,
    className: b.modalTopPill
  }) : true;
  return {
    renderModalProps: C,
    header: I.header,
    modalTopExtra: L,
    subHeader: I.subheader,
    subHeaderExtra: Z,
    body: I.body,
    heroArt: w,
    featureCards: I.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : true
    })),
    changeLogId: P,
    button: () => {
      let e = Date.now();
      return (0, r.jsx)(o.zxk, {
        variant: "expressive",
        size: "md",
        onClick: () => {
          d.default.track(g.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: P,
            cta_type: x,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: P
          }), y()
        },
        text: A,
        icon: i.SrA
      })
    },
    modalDismissibleContent: "" !== I.dismissKey ? Number(I.dismissKey) : true
  }
}
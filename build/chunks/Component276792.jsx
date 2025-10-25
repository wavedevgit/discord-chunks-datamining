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

function b(e) {
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
  var t, n, O, I;
  let v, {
      content: y,
      renderModalProps: C,
      analyticsLocations: S,
      analyticsLocation: T,
      isLightTheme: N
    } = e,
    j = "AnnouncementModalVariant1_".concat(l.z[Number(y.dismissKey)]),
    {
      onClose: P
    } = C,
    x = null != (I = null == (t = y.button) ? true : t.copy) ? I : g.intl.string(g.t.YScQSF),
    A = (null == (n = y.button) ? true : n.buttonAction) === a.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button";
  switch (null == (O = y.button) ? true : O.buttonAction) {
    case a.Wc.OPEN_MARKETING_PAGE:
      v = () => {
        (0, u.uL)(m.Z5c.APPLICATION_STORE), P()
      };
      break;
    case a.Wc.OPEN_TIER_1_PAYMENT_MODAL:
      v = () => (0, c.Z)({
        subscriptionTier: h.Si.TIER_1,
        analyticsLocations: S,
        analyticsObject: E(b({}, T), {
          object: m.qAy.BUTTON_CTA,
          objectType: m.AnalyticsObjectTypes.TIER_1
        }),
        onClose: e => {
          e && P()
        }
      });
      break;
    case a.Wc.OPEN_TIER_2_PAYMENT_MODAL:
    case a.Wc.OPEN_TIER_2_PAYMENT_MODAL_CUSTOM_CONFIRMATION_FOOTER:
    default:
      v = () => (0, c.Z)({
        subscriptionTier: h.Si.TIER_2,
        analyticsLocations: S,
        analyticsObject: E(b({}, T), {
          object: m.qAy.BUTTON_CTA,
          objectType: m.AnalyticsObjectTypes.TIER_2
        }),
        onClose: e => {
          e && P()
        }
      })
  }
  let Z = "" !== y.helpArticleId ? () => (0, r.jsxs)(r.Fragment, {
      children: ["\xa0", (0, r.jsx)(o.Anchor, {
        className: _.termsApplyAnchor,
        href: p.Z.getArticleURL(y.helpArticleId),
        children: g.intl.string(g.t["sBp+u0"])
      })]
    }) : true,
    w = {
      type: "video",
      src: N ? y.heroArtVideoLinkLightTheme : y.videoLink
    };
  null != y.heroArtVideoSubtitles && (w.subtitles = y.heroArtVideoSubtitles.map(e => ({
    locale: e.locale,
    src: e.link,
    isDefault: false
  }))), ("" !== y.heroArtImageLinkDarkTheme || "" !== y.heroArtImageLinkLightTheme) && (w = {
    type: "image",
    src: N ? y.heroArtImageLinkLightTheme : y.heroArtImageLinkDarkTheme
  });
  let L = "" !== y.modalTopPill ? () => (0, r.jsx)(f.mn, {
    text: y.modalTopPill,
    className: _.modalTopPill
  }) : true;
  return {
    renderModalProps: C,
    header: y.header,
    modalTopExtra: L,
    subHeader: y.subheader,
    subHeaderExtra: Z,
    body: y.body,
    heroArt: w,
    featureCards: y.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: N ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : true
    })),
    changeLogId: j,
    button: () => {
      let e = Date.now();
      return (0, r.jsx)(s.zxk, {
        variant: "expressive",
        size: "md",
        onClick: () => {
          d.default.track(m.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: j,
            cta_type: A,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: j
          }), v()
        },
        text: x,
        icon: i.SrA
      })
    },
    modalDismissibleContent: "" !== y.dismissKey ? Number(y.dismissKey) : true
  }
}
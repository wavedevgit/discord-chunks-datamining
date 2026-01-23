/** Chunk was on 21738 **/
/** chunk id: 716600, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk934551 = require("./934551.js"),
  Chunk232582 = require("./232582.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk498470 = require("./498470.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk787076 = require("./787076.js");

function f(e) {
  var t, n, f, m;
  let {
    componentId: A,
    promotionId: _,
    content: b,
    renderModalProps: E,
    analyticsLocations: O,
    analyticsLocation: y,
    isLightTheme: I
  } = e, v = "AnnouncementModalVariant1_".concat(A), {
    onClose: S
  } = E, C = null != (t = null == (n = b.button) ? true : n.copy) ? t : h.intl.string(h.t.YScQSF), N = (null == (f = b.button) ? true : f.buttonAction) === l.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", T = (0, d.h)({
    buttonAction: null == (m = b.button) ? true : m.buttonAction,
    analyticsLocations: O,
    analyticsLocation: y,
    onClose: S
  }), j = "" !== b.helpArticleId ? () => (0, r.jsxs)(r.Fragment, {
    children: ["\xa0", (0, r.jsx)(s.MzZ, {
      className: g.$T,
      href: c.A.getArticleURL(b.helpArticleId),
      children: h.intl.string(h.t["sBp+u0"])
    })]
  }) : true, x = {
    type: "video",
    src: I ? b.heroArtVideoLinkLightTheme : b.videoLink
  };
  null != b.heroArtVideoSubtitles && (x.subtitles = b.heroArtVideoSubtitles.map(e => ({
    locale: e.locale,
    src: e.link,
    isDefault: false
  }))), ("" !== b.heroArtImageLinkDarkTheme || "" !== b.heroArtImageLinkLightTheme) && (x = {
    type: "image",
    src: I ? b.heroArtImageLinkLightTheme : b.heroArtImageLinkDarkTheme
  });
  let P = "" !== b.modalTopPill ? () => (0, r.jsx)(u.R, {
    text: b.modalTopPill,
    className: g.ON
  }) : true;
  return {
    componentId: A,
    promotionId: _,
    renderModalProps: E,
    header: b.header,
    modalTopExtra: P,
    subHeader: b.subheader,
    subHeaderExtra: j,
    body: b.body,
    heroArt: x,
    featureCards: b.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : true
    })),
    changeLogId: v,
    button: () => {
      let e = Date.now();
      return (0, r.jsx)(a.$nd, {
        variant: "expressive",
        size: "md",
        onClick: () => {
          o.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: v,
            cta_type: N,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: v
          }), T()
        },
        text: C,
        icon: i.NitroWheelIcon
      })
    }
  }
}
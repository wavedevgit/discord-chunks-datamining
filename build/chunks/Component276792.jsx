/** Chunk was on 1272 **/
/** chunk id: 276792, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk740111 = require("./740111.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk671728 = require("./671728.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk256465 = require("./256465.js");

function h(e) {
  var t, n, h, m;
  let {
    componentId: b,
    promotionId: E,
    content: _,
    renderModalProps: O,
    analyticsLocations: v,
    analyticsLocation: y,
    isLightTheme: I
  } = e, C = "AnnouncementModalVariant1_".concat(b), {
    onClose: S
  } = O, T = null != (m = null == (t = _.button) ? true : t.copy) ? m : f.intl.string(f.t.YScQSF), N = (null == (n = _.button) ? true : n.buttonAction) === l.Wc.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", j = (0, d.K)({
    buttonAction: null == (h = _.button) ? true : h.buttonAction,
    analyticsLocations: v,
    analyticsLocation: y,
    onClose: S
  }), P = "" !== _.helpArticleId ? () => (0, r.jsxs)(r.Fragment, {
    children: ["\xa0", (0, r.jsx)(s.Anchor, {
      className: g.termsApplyAnchor,
      href: c.Z.getArticleURL(_.helpArticleId),
      children: f.intl.string(f.t["sBp+u0"])
    })]
  }) : true, x = {
    type: "video",
    src: I ? _.heroArtVideoLinkLightTheme : _.videoLink
  };
  null != _.heroArtVideoSubtitles && (x.subtitles = _.heroArtVideoSubtitles.map(e => ({
    locale: e.locale,
    src: e.link,
    isDefault: false
  }))), ("" !== _.heroArtImageLinkDarkTheme || "" !== _.heroArtImageLinkLightTheme) && (x = {
    type: "image",
    src: I ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme
  });
  let A = "" !== _.modalTopPill ? () => (0, r.jsx)(u.mn, {
    text: _.modalTopPill,
    className: g.modalTopPill
  }) : true;
  return {
    componentId: b,
    promotionId: E,
    renderModalProps: O,
    header: _.header,
    modalTopExtra: A,
    subHeader: _.subheader,
    subHeaderExtra: P,
    body: _.body,
    heroArt: x,
    featureCards: _.featureCards.map(e => ({
      header: e.header,
      subHeader: e.body,
      imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
      tagText: "" !== e.pill ? e.pill : true
    })),
    changeLogId: C,
    button: () => {
      let e = Date.now();
      return (0, r.jsx)(a.zxk, {
        variant: "expressive",
        size: "md",
        onClick: () => {
          o.default.track(p.rMx.CHANGE_LOG_CTA_CLICKED, {
            change_log_id: C,
            cta_type: N,
            seconds_open: Math.round((Date.now() - e) / 1e3),
            target: C
          }), j()
        },
        text: T,
        icon: i.SrA
      })
    }
  }
}
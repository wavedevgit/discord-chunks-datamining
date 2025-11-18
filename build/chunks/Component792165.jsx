/** Chunk was on web.js **/
/** chunk id: 792165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk538972 = require("./538972.js");

function y(e) {
  return e === m.PremiumTypes.TIER_2 ? E.intl.string(E.t.jqO5Qn) : null == e ? E.intl.string(E.t.f2qjw5) : E.intl.string(E.t.SblICW)
}

function O(e) {
  let {
    onClose: t,
    markAsDismissed: n
  } = e, O = (0, i.e7)([f.default], () => f.default.getCurrentUser()), v = y(null == O ? true : O.premiumType), I = _.ZP.canUseCustomCallSounds(O);

  function T() {
    (0, d.openUserSettings)(u.n.VOICE_AND_VIDEO_PANEL, {
      section: p.oAB.VOICE,
      subsection: g.GA
    }), null == t || t(), null == n || n(h.L.PRIMARY)
  }
  return (0, r.jsxs)(c.Z, {
    isShown: true,
    type: c.Y.PREMIUM,
    className: b.upsellOuter,
    backgroundClassName: b.upsellInner,
    children: [null != n ? (0, r.jsx)(s.P3F, {
      className: b.close,
      onClick: () => null == n ? true : n(h.L.DISMISS),
      "aria-label": E.intl.string(E.t.cpT0Cq),
      children: (0, r.jsx)(s.Dio, {
        size: "xs",
        color: "currentColor",
        className: b.closeIcon
      })
    }) : null, (0, r.jsxs)("div", {
      className: b.upsellTitle,
      children: [(0, r.jsx)(s.SrA, {
        size: "sm",
        color: "currentColor",
        className: b.nitroWheel
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-sm/bold",
        children: E.intl.string(E.t.dTbAxx)
      })]
    }), (0, r.jsx)(a.x, {
      variant: "text-sm/normal",
      children: v
    }), I ? (0, r.jsx)(s.Button, {
      onClick: T,
      text: E.intl.string(E.t.RzWDqY),
      fullWidth: true
    }) : (0, r.jsx)(l.Z, {
      textOptions: {
        textOverride: E.intl.string(E.t.pj0XBN)
      },
      subscriptionTier: m.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: p.jXE.SOUNDBOARD_SOUND_PICKER,
        object: p.qAy.BUTTON_CTA
      },
      color: o.zx.Colors.GREEN,
      onSubscribeModalClose: () => null == n ? true : n(h.L.PRIMARY)
    })]
  })
}
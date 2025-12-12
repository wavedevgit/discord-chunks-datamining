/** Chunk was on web.js **/
/** chunk id: 792165, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => v
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
  Chunk526665 = require("./526665.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424199 = require("./424199.js");

function O(e) {
  return e === g.PremiumTypes.TIER_2 ? b.intl.string(b.t.jqO5Qn) : null == e ? b.intl.string(b.t.f2qjw5) : b.intl.string(b.t.SblICW)
}

function v(e) {
  let {
    onClose: t,
    markAsDismissed: n
  } = e, v = (0, i.e7)([p.default], () => p.default.getCurrentUser()), S = O(null == v ? true : v.premiumType), I = _.ZP.canUseCustomCallSounds(v);

  function T() {
    let e = (0, d.Ml)("CustomCallSoundUpsell") ? u.n.SOUNDBOARD_CATEGORY : u.n.VOICE_AND_VIDEO_PANEL;
    (0, f.openUserSettings)(e, {
      section: m.oAB.VOICE,
      subsection: E.GA
    }), null == t || t(), null == n || n(h.L.PRIMARY)
  }
  return (0, r.jsxs)(c.Z, {
    isShown: true,
    type: c.Y.PREMIUM,
    className: y.upsellOuter,
    backgroundClassName: y.upsellInner,
    children: [null != n ? (0, r.jsx)(s.P3F, {
      className: y.close,
      onClick: () => null == n ? true : n(h.L.DISMISS),
      "aria-label": b.intl.string(b.t.cpT0Cq),
      children: (0, r.jsx)(s.Dio, {
        size: "xs",
        color: "currentColor",
        className: y.closeIcon
      })
    }) : null, (0, r.jsxs)("div", {
      className: y.upsellTitle,
      children: [(0, r.jsx)(s.SrA, {
        size: "sm",
        color: "currentColor",
        className: y.nitroWheel
      }), (0, r.jsx)(s.Heading, {
        variant: "heading-sm/bold",
        children: b.intl.string(b.t.dTbAxx)
      })]
    }), (0, r.jsx)(a.x, {
      variant: "text-sm/normal",
      children: S
    }), I ? (0, r.jsx)(s.Button, {
      onClick: T,
      text: b.intl.string(b.t.RzWDqY),
      fullWidth: true
    }) : (0, r.jsx)(l.Z, {
      textOptions: {
        textOverride: b.intl.string(b.t.pj0XBN)
      },
      subscriptionTier: g.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: m.jXE.SOUNDBOARD_SOUND_PICKER,
        object: m.qAy.BUTTON_CTA
      },
      color: o.zx.Colors.GREEN,
      onSubscribeModalClose: () => null == n ? true : n(h.L.PRIMARY)
    })]
  })
}
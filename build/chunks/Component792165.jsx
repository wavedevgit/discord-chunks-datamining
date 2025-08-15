/** Chunk was on 48091 **/
/** chunk id: 792165, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk993365 = require("./993365.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk504983 = require("./504983.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk262381 = require("./262381.js");

function _(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: _
  } = e, b = (0, i.e7)([u.default], () => u.default.getCurrentUser()), j = (t = null == b ? true : b.premiumType) === h.p9.TIER_2 ? v.intl.string(v.t.jqO5Qk) : null == t ? v.intl.string(v.t.f2qjw8) : v.intl.string(v.t.SblICQ), y = m.ZP.canUseCustomCallSounds(b);
  return (0, r.jsxs)(d.Z, {
    isShown: true,
    type: d.Y.PREMIUM,
    className: C.upsellOuter,
    backgroundClassName: C.upsellInner,
    children: [null != _ ? (0, r.jsx)(s.P3F, {
      className: C.close,
      onClick: () => null == _ ? true : _(f.L.DISMISS),
      "aria-label": v.intl.string(v.t.cpT0Cg),
      children: (0, r.jsx)(s.Dio, {
        size: "xs",
        color: "currentColor",
        className: C.closeIcon
      })
    }) : null, (0, r.jsxs)("div", {
      className: C.upsellTitle,
      children: [(0, r.jsx)(s.SrA, {
        size: "sm",
        color: "currentColor",
        className: C.nitroWheel
      }), (0, r.jsx)(s.X6q, {
        variant: "heading-sm/bold",
        children: v.intl.string(v.t.dTbAx8)
      })]
    }), (0, r.jsx)(l.x, {
      variant: "text-sm/normal",
      children: j
    }), y ? (0, r.jsx)(s.zxk, {
      onClick: function() {
        o.Z.open(p.oAB.VOICE, g.GA), null == n || n(), null == _ || _(f.L.PRIMARY)
      },
      text: v.intl.string(v.t.RzWDqa),
      fullWidth: true
    }) : (0, r.jsx)(c.Z, {
      textOptions: {
        textOverride: v.intl.string(v.t.pj0XBA)
      },
      subscriptionTier: h.Si.TIER_2,
      premiumModalAnalyticsLocation: {
        section: p.jXE.SOUNDBOARD_SOUND_PICKER,
        object: p.qAy.BUTTON_CTA
      },
      color: a.zx.Colors.GREEN,
      onSubscribeModalClose: () => null == _ ? true : _(f.L.PRIMARY)
    })]
  })
}
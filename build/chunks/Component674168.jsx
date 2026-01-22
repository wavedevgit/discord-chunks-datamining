/** Chunk was on web.js **/
/** chunk id: 674168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk571356 = require("./571356.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk956790 = require("./956790.js");

function O(e) {
  return e === g.PremiumTypes.TIER_2 ? b.intl.string(b.t.jqO5Qn) : null == e ? b.intl.string(b.t.f2qjw5) : b.intl.string(b.t.SblICW)
}

function A(e) {
  let {
    onClose: t,
    markAsDismissed: n
  } = e, A = (0, i.bG)([p.default], () => p.default.getCurrentUser()), v = O(null == A ? true : A.premiumType), S = _.Ay.canUseCustomCallSounds(A);

  function I() {
    let e = (0, d.qz)("CustomCallSoundUpsell") ? u.X.SOUNDBOARD_CATEGORY : u.X.VOICE_AND_VIDEO_PANEL;
    (0, f.openUserSettings)(e, {
      section: h.nc_.VOICE,
      subsection: E.MJ
    }), null == t || t(), null == n || n(m.i.PRIMARY)
  }
  return (0, r.jsxs)(c.A, {
    isShown: true,
    type: c.i.PREMIUM,
    className: y.ne,
    backgroundClassName: y.u4,
    children: [null != n ? (0, r.jsx)(o.DUT, {
      className: y.VN,
      onClick: () => null == n ? true : n(m.i.DISMISS),
      "aria-label": b.intl.string(b.t.cpT0Cq),
      children: (0, r.jsx)(o.PGe, {
        size: "xs",
        color: "currentColor",
        className: y.ut
      })
    }) : null, (0, r.jsxs)("div", {
      className: y.ex,
      children: [(0, r.jsx)(o.tvc, {
        size: "sm",
        color: "currentColor",
        className: y.ax
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: b.intl.string(b.t.dTbAxx)
      })]
    }), (0, r.jsx)(a.E, {
      variant: "text-sm/normal",
      children: v
    }), S ? (0, r.jsx)(o.Button, {
      onClick: I,
      text: b.intl.string(b.t.RzWDqY),
      fullWidth: true
    }) : (0, r.jsx)(l.A, {
      textOptions: {
        textOverride: b.intl.string(b.t.pj0XBN)
      },
      subscriptionTier: g.pe.TIER_2,
      premiumModalAnalyticsLocation: {
        section: h.JJy.SOUNDBOARD_SOUND_PICKER,
        object: h.ZSU.BUTTON_CTA
      },
      color: s.$n.Colors.GREEN,
      onSubscribeModalClose: () => null == n ? true : n(m.i.PRIMARY)
    })]
  })
}
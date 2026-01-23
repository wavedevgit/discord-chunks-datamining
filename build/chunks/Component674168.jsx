/** Chunk was on web.js **/
/** chunk id: 674168, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => v
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
  return e === g.PremiumTypes.TIER_2 ? y.intl.string(y.t.jqO5Qn) : null == e ? y.intl.string(y.t.f2qjw5) : y.intl.string(y.t.SblICW)
}

function v(e) {
  let {
    onClose: t,
    markAsDismissed: n
  } = e, v = (0, i.bG)([p.default], () => p.default.getCurrentUser()), A = O(null == v ? true : v.premiumType), I = _.Ay.canUseCustomCallSounds(v);

  function S() {
    let e = (0, d.qz)("CustomCallSoundUpsell") ? u.X.SOUNDBOARD_CATEGORY : u.X.VOICE_AND_VIDEO_PANEL;
    (0, f.openUserSettings)(e, {
      section: h.nc_.VOICE,
      subsection: E.MJ
    }), null == t || t(), null == n || n(m.i.PRIMARY)
  }
  return (0, r.jsxs)(c.A, {
    isShown: true,
    type: c.i.PREMIUM,
    className: b.ne,
    backgroundClassName: b.u4,
    children: [null != n ? (0, r.jsx)(o.DUT, {
      className: b.VN,
      onClick: () => null == n ? true : n(m.i.DISMISS),
      "aria-label": y.intl.string(y.t.cpT0Cq),
      children: (0, r.jsx)(o.PGe, {
        size: "xs",
        color: "currentColor",
        className: b.ut
      })
    }) : null, (0, r.jsxs)("div", {
      className: b.ex,
      children: [(0, r.jsx)(o.tvc, {
        size: "sm",
        color: "currentColor",
        className: b.ax
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: y.intl.string(y.t.dTbAxx)
      })]
    }), (0, r.jsx)(a.E, {
      variant: "text-sm/normal",
      children: A
    }), I ? (0, r.jsx)(o.Button, {
      onClick: S,
      text: y.intl.string(y.t.RzWDqY),
      fullWidth: true
    }) : (0, r.jsx)(l.A, {
      textOptions: {
        textOverride: y.intl.string(y.t.pj0XBN)
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
/** Chunk was on 84018 **/
/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
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
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk788868 = require("./788868.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk956790 = require("./956790.js");

function A(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: A
  } = e, O = (0, r.bG)([p.default], () => p.default.getCurrentUser()), v = (t = null == O ? true : O.premiumType) === y.PremiumTypes.TIER_2 ? _.intl.string(_.t.jqO5Qn) : null == t ? _.intl.string(_.t.f2qjw5) : _.intl.string(_.t.SblICW), E = h.Ay.canUseCustomCallSounds(O);
  return (0, i.jsxs)(c.A, {
    isShown: true,
    type: c.i.PREMIUM,
    className: b.ne,
    backgroundClassName: b.u4,
    children: [null != A ? (0, i.jsx)(o.DUT, {
      className: b.VN,
      onClick: () => null == A ? true : A(g.i.DISMISS),
      "aria-label": _.intl.string(_.t.cpT0Cq),
      children: (0, i.jsx)(o.PGe, {
        size: "xs",
        color: "currentColor",
        className: b.ut
      })
    }) : null, (0, i.jsxs)("div", {
      className: b.ex,
      children: [(0, i.jsx)(o.tvc, {
        size: "sm",
        color: "currentColor",
        className: b.ax
      }), (0, i.jsx)(o.Heading, {
        variant: "heading-sm/bold",
        children: _.intl.string(_.t.dTbAxx)
      })]
    }), (0, i.jsx)(s.E, {
      variant: "text-sm/normal",
      children: v
    }), E ? (0, i.jsx)(o.Button, {
      onClick: function() {
        (0, u.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, {
          section: f.nc_.VOICE,
          subsection: m.MJ
        }), null == n || n(), null == A || A(g.i.PRIMARY)
      },
      text: _.intl.string(_.t.RzWDqY),
      fullWidth: true
    }) : (0, i.jsx)(a.A, {
      textOptions: {
        textOverride: _.intl.string(_.t.pj0XBN)
      },
      subscriptionTier: y.pe.TIER_2,
      premiumModalAnalyticsLocation: {
        section: f.JJy.SOUNDBOARD_SOUND_PICKER,
        object: f.ZSU.BUTTON_CTA
      },
      color: l.$n.Colors.GREEN,
      onSubscribeModalClose: () => null == A ? true : A(g.i.PRIMARY)
    })]
  })
}
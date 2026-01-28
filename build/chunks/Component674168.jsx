/** Chunk was on 5606 **/
/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => E
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

function E(e) {
  var t;
  let {
    onClose: n,
    markAsDismissed: E
  } = e, x = (0, i.bG)([p.default], () => p.default.getCurrentUser()), O = (t = null == x ? true : x.premiumType) === f.PremiumTypes.TIER_2 ? h.intl.string(h.t.jqO5Qn) : null == t ? h.intl.string(h.t.f2qjw5) : h.intl.string(h.t.SblICW), C = _.Ay.canUseCustomCallSounds(x);
  return (0, r.jsxs)(c.A, {
    isShown: true,
    type: c.i.PREMIUM,
    className: A.ne,
    backgroundClassName: A.u4,
    children: [null != E ? (0, r.jsx)(a.DUT, {
      className: A.VN,
      onClick: () => null == E ? true : E(g.i.DISMISS),
      "aria-label": h.intl.string(h.t.cpT0Cq),
      children: (0, r.jsx)(a.PGe, {
        size: "xs",
        color: "currentColor",
        className: A.ut
      })
    }) : null, (0, r.jsxs)("div", {
      className: A.ex,
      children: [(0, r.jsx)(a.tvc, {
        size: "sm",
        color: "currentColor",
        className: A.ax
      }), (0, r.jsx)(a.Heading, {
        variant: "heading-sm/bold",
        children: h.intl.string(h.t.dTbAxx)
      })]
    }), (0, r.jsx)(l.E, {
      variant: "text-sm/normal",
      children: O
    }), C ? (0, r.jsx)(a.Button, {
      onClick: function() {
        (0, u.openUserSettings)(d.X.SOUNDBOARD_CATEGORY, {
          section: m.nc_.VOICE,
          subsection: b.MJ
        }), null == n || n(), null == E || E(g.i.PRIMARY)
      },
      text: h.intl.string(h.t.RzWDqY),
      fullWidth: true
    }) : (0, r.jsx)(o.A, {
      textOptions: {
        textOverride: h.intl.string(h.t.pj0XBN)
      },
      subscriptionTier: f.pe.TIER_2,
      premiumModalAnalyticsLocation: {
        section: m.JJy.SOUNDBOARD_SOUND_PICKER,
        object: m.ZSU.BUTTON_CTA
      },
      color: s.$n.Colors.GREEN,
      onSubscribeModalClose: () => null == E ? true : E(g.i.PRIMARY)
    })]
  })
}
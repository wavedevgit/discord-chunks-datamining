/** Chunk was on 63227 **/
/** chunk id: 428263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk438831 = require("./438831.js");
let E = e => {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return i.useEffect(() => {
    c.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
      type: _.cd.EMOJI_AUTOCOMPLETE_MODAL
    })
  }, []), (0, a.jsxs)(s.Y0X, {
    transitionState: t,
    size: s.CgR.SMALL,
    "aria-label": "",
    parentComponent: "ChannelAutocompleteEmojiUpsellModal",
    children: [(0, a.jsxs)(s.hzk, {
      className: m.content,
      children: [(0, a.jsx)("div", {
        role: "image",
        className: m.image
      }), (0, a.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        className: m.header,
        children: p.intl.string(p.t.Uq1zJY)
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: p.intl.format(p.t.xPaO3o, {
          onLearnMore: () => {
            n(), (0, r.openUserSettings)(l.n.NITRO_PANEL, {
              section: d.oAB.PREMIUM
            })
          }
        })
      })]
    }), (0, a.jsx)(s.mzw, {
      children: (0, a.jsx)(o.Z, {
        onClick: n,
        textOptions: {
          textOverride: p.intl.string(p.t.pj0XBN)
        },
        subscriptionTier: _.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          page: d.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
        }
      })
    }), (0, a.jsx)(s.olH, {
      className: m.closeButton,
      onClick: n
    })]
  })
}
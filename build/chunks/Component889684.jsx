/** Chunk was on 9766 **/
/** chunk id: 889684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk457048 = require("./457048.js");
let h = e => {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return i.useEffect(() => {
    c.default.track(d.rMx.PREMIUM_UPSELL_VIEWED, {
      type: p.cd.EMOJI_AUTOCOMPLETE_MODAL
    })
  }, []), (0, a.jsxs)(s.Y0X, {
    transitionState: t,
    size: s.CgR.SMALL,
    "aria-label": "",
    parentComponent: "ChannelAutocompleteEmojiUpsellModal",
    children: [(0, a.jsxs)(s.hzk, {
      className: E.content,
      children: [(0, a.jsx)("div", {
        role: "image",
        className: E.image
      }), (0, a.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        className: E.header,
        children: m.intl.string(m.t.Uq1zJS)
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: m.intl.format(m.t.xPaO3t, {
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
          textOverride: m.intl.string(m.t.pj0XBA)
        },
        subscriptionTier: p.Si.TIER_2,
        premiumModalAnalyticsLocation: {
          page: d.ZY5.CHANNEL_AUTOCOMPLETE_EMOJI_UPSELL_MODAL
        }
      })
    }), (0, a.jsx)(s.olH, {
      className: E.closeButton,
      onClick: n
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 808189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => m,
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535322 = require("./535322.jsx"),
  Chunk31698 = require("./31698.jsx"),
  Chunk528771 = require("./528771.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk212840 = require("./212840.js");
let m = [{
    tier: Chunk981631.Eu4.TIER_1,
    perks: [{
      icon: Chunk481060.EO4,
      getCopy: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.Tlz0x1, {
        numEmojiSlots: Chunk474936.HO[Chunk981631.Eu4.TIER_1].limits.emoji
      })
    }, {
      icon: Chunk481060.KY1,
      getCopy: () => Chunk388032.intl.formatToPlainString(Chunk388032.t["v+MIfo"], {
        numSoundboardSlots: Chunk474936.HO[Chunk981631.Eu4.TIER_1].limits.soundboardSounds
      }),
      isNew: true
    }, {
      icon: Chunk481060.OUq,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t.PbAyub)
    }, {
      icon: Chunk481060.gj8,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t["WH+OeI"])
    }]
  }, {
    tier: Chunk981631.Eu4.TIER_2,
    perks: [{
      icon: Chunk481060.hGI,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t.y4ft4D)
    }, {
      icon: Chunk481060.rG2,
      getCopy: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.aFRl53, {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.M6qV8j)
      })
    }, {
      icon: Chunk481060.EO4,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t["6PV6Qc"])
    }, {
      icon: Chunk481060.dRF,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t["1a5rjl"])
    }]
  }, {
    tier: Chunk981631.Eu4.TIER_3,
    perks: [{
      icon: Chunk481060.xPt,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t.adNGjW)
    }, {
      icon: Chunk481060.rG2,
      getCopy: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.aFRl53, {
        uploadSizeLimit: Chunk388032.intl.string(Chunk388032.t.yMOW8D)
      })
    }, {
      icon: Chunk481060.gj8,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t.Tsljqo)
    }, {
      icon: Chunk481060.OUq,
      getCopy: () => Chunk388032.intl.string(Chunk388032.t.nRKlmC)
    }, {
      icon: Chunk481060.ewx,
      getCopy: () => Chunk388032.intl.formatToPlainString(Chunk388032.t.hsZ88d, {
        numStageSeats: Chunk981631.RcX
      })
    }]
  }],
  g = function(e) {
    let {
      guild: t
    } = e;
    return (0, r.jsx)("div", {
      className: h.tierCards,
      children: m.map(e => (0, r.jsxs)("div", {
        className: h.tierCard,
        children: [e.tier === f.Eu4.TIER_3 && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight)
          }), (0, r.jsx)("div", {
            className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft)
          }), (0, r.jsxs)("div", {
            className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
            children: [(0, r.jsx)(u.Z, {
              className: h.tierCardSparkle1
            }), (0, r.jsx)(u.Z, {
              className: h.tierCardSparkle2
            }), (0, r.jsx)(c.Z, {
              className: h.tierCardSparkle3
            })]
          }), (0, r.jsx)("div", {
            className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightBottomLeft),
            children: (0, r.jsx)(u.Z, {
              className: h.tierCardSparkle1
            })
          })]
        }), e.tier === t.premiumTier && (0, r.jsx)(s.Text, {
          className: h.tierCardCurrentTier,
          tag: "div",
          variant: "text-xs/semibold",
          color: "always-white",
          children: p.intl.string(p.t["9JbE3J"])
        }), (0, r.jsxs)("div", {
          className: h.tierCardHeader,
          children: [(0, r.jsx)(s.Heading, {
            className: h.tierCardHeading,
            variant: "heading-xxl/semibold",
            color: "always-white",
            children: (0, d.nW)(e.tier, {
              useLevels: false
            })
          }), (0, r.jsx)(s.Text, {
            className: h.tierCardBoostRequirement,
            variant: "text-md/normal",
            color: "always-white",
            children: p.intl.format(p.t.vbAsA7, {
              numBoostsRequired: f.oCV[e.tier]
            })
          })]
        }), (0, r.jsx)("ul", {
          className: h.tierCardList,
          children: e.perks.map((e, t) => null == e.predicate || e.predicate() ? (0, r.jsxs)("li", {
            className: h.tierCardPerkRow,
            children: [(0, r.jsxs)(s.Text, {
              className: h.tierCardListItem,
              variant: "text-md/normal",
              color: "always-white",
              children: [(0, r.jsx)(e.icon, {
                className: h.tierCardListIcon,
                color: o.Z.colors.WHITE
              }), e.getCopy()]
            }), e.isNew ? (0, r.jsx)(l.Z, {
              className: h.tierCardNewFeatureBadge,
              forceUseColorForSparkles: true,
              shouldInheritBackgroundColor: true,
              shouldInheritTextColor: true
            }) : null]
          }, t) : null)
        })]
      }, e.tier))
    })
  }
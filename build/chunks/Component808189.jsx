/** Chunk was on web.js **/
/** chunk id: 808189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535322 = require("./535322.jsx"),
  Chunk31698 = require("./31698.jsx"),
  Chunk528771 = require("./528771.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk297159 = require("./297159.js"),
  Chunk132748 = require("./132748.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808705 = require("./808705.js");
let g = function(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)("div", {
    className: h.tierCards,
    children: p.C.map(e => (0, r.jsxs)("div", {
      className: h.tierCard,
      children: [e.tier === _.Eu4.TIER_3 && (0, r.jsxs)(r.Fragment, {
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
        children: m.intl.string(m.t["9JbE3J"])
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
          children: m.intl.format(m.t.vbAsA7, {
            numBoostsRequired: _.oCV[e.tier]
          })
        })]
      }), (0, r.jsx)("ul", {
        className: h.tierCardList,
        children: e.perks.map((e, t) => {
          let n = (0, f.P)(e.perkIcon);
          return null == e.predicate || e.predicate() ? (0, r.jsxs)("li", {
            className: h.tierCardPerkRow,
            children: [(0, r.jsxs)(s.Text, {
              className: h.tierCardListItem,
              variant: "text-md/normal",
              color: "always-white",
              children: [(0, r.jsx)(n, {
                className: h.tierCardListIcon,
                color: o.Z.colors.WHITE
              }), e.getCopy()]
            }), e.isNew ? (0, r.jsx)(l.Z, {
              className: h.tierCardNewFeatureBadge,
              forceUseColorForSparkles: true,
              shouldInheritBackgroundColor: true,
              shouldInheritTextColor: true
            }) : null]
          }, t) : null
        })
      })]
    }, e.tier))
  })
}
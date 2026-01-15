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
  Chunk118180 = require("./118180.js");
let g = function(e) {
  let {
    guild: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.tierCards,
    children: p.C.map(e => (0, r.jsxs)("div", {
      className: m.tierCard,
      children: [e.tier === _.Eu4.TIER_3 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: a()(m.tierCardBorderHighlight, m.tierCardBorderHighlightTopRight)
        }), (0, r.jsx)("div", {
          className: a()(m.tierCardBorderHighlight, m.tierCardBorderHighlightBottomLeft)
        }), (0, r.jsxs)("div", {
          className: a()(m.tierCardSparkleHighlight, m.tierCardSparkleHighlightTopRight),
          children: [(0, r.jsx)(u.Z, {
            className: m.tierCardSparkle1
          }), (0, r.jsx)(u.Z, {
            className: m.tierCardSparkle2
          }), (0, r.jsx)(c.Z, {
            className: m.tierCardSparkle3
          })]
        }), (0, r.jsx)("div", {
          className: a()(m.tierCardSparkleHighlight, m.tierCardSparkleHighlightBottomLeft),
          children: (0, r.jsx)(u.Z, {
            className: m.tierCardSparkle1
          })
        })]
      }), e.tier === t.premiumTier && (0, r.jsx)(s.Text, {
        className: m.tierCardCurrentTier,
        tag: "div",
        variant: "text-xs/semibold",
        color: "always-white",
        children: h.intl.string(h.t["9JbE3J"])
      }), (0, r.jsxs)("div", {
        className: m.tierCardHeader,
        children: [(0, r.jsx)(s.Heading, {
          className: m.tierCardHeading,
          variant: "heading-xxl/semibold",
          color: "always-white",
          children: (0, d.nW)(e.tier, {
            useLevels: false
          })
        }), (0, r.jsx)(s.Text, {
          className: m.tierCardBoostRequirement,
          variant: "text-md/normal",
          color: "always-white",
          children: h.intl.format(h.t.vbAsA7, {
            numBoostsRequired: _.oCV[e.tier]
          })
        })]
      }), (0, r.jsx)("ul", {
        className: m.tierCardList,
        children: e.perks.map((e, t) => {
          let n = (0, f.P)(e.perkIcon);
          return null == e.predicate || e.predicate() ? (0, r.jsxs)("li", {
            className: m.tierCardPerkRow,
            children: [(0, r.jsxs)(s.Text, {
              className: m.tierCardListItem,
              variant: "text-md/normal",
              color: "always-white",
              children: [(0, r.jsx)(n, {
                className: m.tierCardListIcon,
                color: o.Z.colors.WHITE
              }), e.getCopy()]
            }), e.isNew ? (0, r.jsx)(l.Z, {
              className: m.tierCardNewFeatureBadge,
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
/** Chunk was on 74891 **/
/** chunk id: 269210, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Gm: () => O,
  Uj: () => S,
  ZI: () => f
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk67136 = require("./67136.jsx"),
  Chunk368072 = require("./368072.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk692547 = require("./692547.js"),
  Chunk330711 = require("./330711.js"),
  Chunk870756 = require("./870756.js"),
  Chunk818632 = require("./818632.js");
let f = 5;

function S(t) {
  let {
    description: e,
    imgSrc: n,
    renderPurchaseButton: r,
    onPurchase: S,
    title: O,
    onDetails: I,
    benefitItems: b,
    benefitsSummary: g,
    subtitle: _,
    maxBenefits: y = f
  } = t;
  return (0, i.jsx)(o.tE, {
    children: (0, i.jsxs)("div", {
      className: l()(d.container, p.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != I ? I() : null != S && S()
      },
      onKeyUp: t => {
        "Enter" === t.key && (t.stopPropagation(), t.preventDefault(), null != I ? I() : null != S && S())
      },
      children: [(0, i.jsx)("div", {
        className: d.card,
        children: (0, i.jsxs)("div", {
          className: d.body,
          children: [(0, i.jsx)(u.x, {
            tag: "div",
            variant: "heading-lg/semibold",
            children: O
          }), (0, i.jsx)("div", {
            className: d.image,
            children: null != n ? (0, i.jsx)("img", {
              src: n.toString(),
              alt: ""
            }) : (0, i.jsx)(a.V, {
              color: s.Z.colors.ICON_PRIMARY,
              size: "custom",
              height: 48,
              width: 48
            })
          }), null != r ? r({
            onClick: t => {
              t.stopPropagation(), null == S || S()
            }
          }) : null, _, null != e && "" !== e && (0, i.jsx)(u.x, {
            className: d.description,
            color: "text-default",
            variant: "text-sm/medium",
            children: e
          })]
        })
      }), null != g && (0, i.jsx)("div", {
        className: d.benefitsSummary,
        children: (0, i.jsx)(u.x, {
          color: "interactive-normal",
          variant: "text-sm/medium",
          children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
            count: g
          })
        })
      }), null != b && b.length > 0 && (0, i.jsx)("div", {
        className: d.benefits,
        children: (0, i.jsx)("div", {
          className: d.benefitsContainer,
          children: (0, i.jsxs)("div", {
            className: d.benefitsList,
            children: [(0, i.jsx)(u.x, {
              color: "header-secondary",
              variant: "eyebrow",
              children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
            }), b.length > y ? (0, i.jsxs)(i.Fragment, {
              children: [b.slice(0, y), (0, i.jsx)(u.x, {
                variant: "text-md/semibold",
                color: "text-secondary",
                children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({
                  count: b.length - y
                })
              })]
            }) : b]
          })
        })
      })]
    })
  })
}

function O(t) {
  let {
    icon: e,
    header: n,
    description: r
  } = t;
  return (0, i.jsxs)("div", {
    className: d.cardBenefit,
    children: [(0, i.jsx)("div", {
      className: d.cardBenefitIcon,
      children: e
    }), (0, i.jsxs)("div", {
      children: [null != n && (0, i.jsx)(u.x, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n
      }), (0, i.jsx)(u.x, {
        variant: "text-sm/normal",
        children: r
      })]
    })]
  })
}
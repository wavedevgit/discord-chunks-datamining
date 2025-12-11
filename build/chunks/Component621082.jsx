/** Chunk was on web.js **/
/** chunk id: 621082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gm: () => m,
  Uj: () => _,
  ZI: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk781160 = require("./781160.jsx"),
  Chunk330711 = require("./330711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk655657 = require("./655657.js"),
  Chunk510924 = require("./510924.js");
let f = 48,
  p = 5;

function _(e) {
  let {
    description: t,
    imgSrc: n,
    renderPurchaseButton: i,
    onPurchase: _,
    title: m,
    onDetails: h,
    benefitItems: g,
    benefitsSummary: E,
    subtitle: b,
    maxBenefits: y = p
  } = e;
  return (0, r.jsx)(o.tE, {
    children: (0, r.jsxs)("div", {
      className: a()(u.container, d.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != h ? h() : null != _ && _()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != h ? h() : null != _ && _())
      },
      children: [(0, r.jsx)("div", {
        className: u.card,
        children: (0, r.jsxs)("div", {
          className: u.body,
          children: [(0, r.jsx)(l.xvT, {
            tag: "div",
            variant: "heading-lg/semibold",
            children: m
          }), (0, r.jsx)("div", {
            className: u.image,
            children: null != n ? (0, r.jsx)("img", {
              src: n.toString(),
              alt: ""
            }) : (0, r.jsx)(l.Vh5, {
              color: c.Z.colors.ICON_STRONG,
              size: "custom",
              height: f,
              width: f
            })
          }), null != i ? i({
            onClick: e => {
              e.stopPropagation(), null == _ || _()
            }
          }) : null, b, null != t && "" !== t && (0, r.jsx)(l.xvT, {
            className: u.description,
            color: "text-default",
            variant: "text-sm/medium",
            children: t
          })]
        })
      }), null != E && (0, r.jsx)("div", {
        className: u.benefitsSummary,
        children: (0, r.jsx)(l.xvT, {
          color: "interactive-text-default",
          variant: "text-sm/medium",
          children: s.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({
            count: E
          })
        })
      }), null != g && g.length > 0 && (0, r.jsx)("div", {
        className: u.benefits,
        children: (0, r.jsx)("div", {
          className: u.benefitsContainer,
          children: (0, r.jsxs)("div", {
            className: u.benefitsList,
            children: [(0, r.jsx)(l.xvT, {
              color: "text-default",
              variant: "eyebrow",
              children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE
            }), g.length > y ? (0, r.jsxs)(r.Fragment, {
              children: [g.slice(0, y), (0, r.jsx)(l.xvT, {
                variant: "text-md/semibold",
                color: "text-subtle",
                children: s.Z.Messages.STOREFRONT_MORE_BENEFITS.format({
                  count: g.length - y
                })
              })]
            }) : g]
          })
        })
      })]
    })
  })
}

function m(e) {
  let {
    icon: t,
    header: n,
    description: i
  } = e;
  return (0, r.jsxs)("div", {
    className: u.cardBenefit,
    children: [(0, r.jsx)("div", {
      className: u.cardBenefitIcon,
      children: t
    }), (0, r.jsxs)("div", {
      children: [null != n && (0, r.jsx)(l.xvT, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n
      }), (0, r.jsx)(l.xvT, {
        variant: "text-sm/normal",
        children: i
      })]
    })]
  })
}
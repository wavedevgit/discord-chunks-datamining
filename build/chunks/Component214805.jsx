/** Chunk was on 77803 **/
/** chunk id: 214805, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk67136 = require("./67136.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk382091 = require("./382091.js"),
  Chunk199162 = require("./199162.js");

function c(e) {
  let {
    title: n,
    description: t,
    headerImage: i,
    onDetails: c,
    onPurchase: d,
    PurchaseButton: p,
    GiftButton: m,
    availabilityLabel: b
  } = e;
  return (0, r.jsx)(s.tE, {
    children: (0, r.jsxs)("div", {
      className: l()(u.wrapper, a.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != d && d()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d())
      },
      children: [(0, r.jsx)("div", {
        className: u.cardHeaderImg,
        style: null != i ? {
          backgroundImage: null != i ? "url(".concat(i.toString(), ")") : true
        } : true,
        children: null == i && (0, r.jsx)(o.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })
      }), (0, r.jsxs)("div", {
        className: u.details,
        children: [(0, r.jsx)(o.xvT, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: n
        }), null != t && (0, r.jsx)(o.xvT, {
          className: u.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: t
        })]
      }), (null != p || null != m) && (0, r.jsxs)("div", {
        className: u.footer,
        children: [null != p && (0, r.jsx)(o.xvT, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: b
        }), (0, r.jsxs)("div", {
          className: u.buttonGroup,
          children: [null != p && (0, r.jsx)(p, {
            onClick: e => {
              e.stopPropagation(), null == d || d()
            }
          }), null != m && (0, r.jsx)(m, {})]
        })]
      })]
    })
  })
}
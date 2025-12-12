/** Chunk was on 77803 **/
/** chunk id: 214805, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk781160 = require("./781160.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk316492 = require("./316492.js"),
  Chunk494933 = require("./494933.js");

function c(e) {
  let {
    title: n,
    description: t,
    headerImage: l,
    onDetails: c,
    onPurchase: d,
    PurchaseButton: p,
    GiftButton: m,
    availabilityLabel: b
  } = e;
  return (0, r.jsx)(s.tE, {
    children: (0, r.jsxs)("div", {
      className: i()(u.wrapper, a.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != d && d()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d())
      },
      children: [(0, r.jsx)("div", {
        className: u.cardHeaderImg,
        style: null != l ? {
          backgroundImage: null != l ? "url(".concat(l.toString(), ")") : true
        } : true,
        children: null == l && (0, r.jsx)(o.Prq, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })
      }), (0, r.jsxs)("div", {
        className: u.details,
        children: [(0, r.jsx)(o.xvT, {
          color: "text-strong",
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
          color: "interactive-text-default",
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
/** Chunk was on 77803 **/
/** chunk id: 200207, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => d
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk708816 = require("./708816.jsx"),
  Chunk790472 = require("./790472.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk34322 = require("./34322.js"),
  Chunk818632 = require("./818632.js");

function d(e) {
  let {
    title: t,
    description: n,
    headerImage: i,
    onDetails: d,
    onPurchase: p,
    PurchaseButton: b,
    GiftButton: m,
    availabilityLabel: f
  } = e;
  return (0, r.jsx)(o.tE, {
    children: (0, r.jsxs)("div", {
      className: l()(u.wrapper, c.hoverCard),
      tabIndex: 0,
      onClick: () => {
        null != d ? d() : null != p && p()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != d ? d() : null != p && p())
      },
      children: [(0, r.jsx)("div", {
        className: u.cardHeaderImg,
        style: null != i ? {
          backgroundImage: null != i ? "url(".concat(i.toString(), ")") : true
        } : true,
        children: null == i && (0, r.jsx)(s.P, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })
      }), (0, r.jsxs)("div", {
        className: u.details,
        children: [(0, r.jsx)(a.x, {
          color: "header-primary",
          variant: "text-md/semibold",
          children: t
        }), null != n && (0, r.jsx)(a.x, {
          className: u.description,
          color: "text-muted",
          variant: "text-sm/normal",
          children: n
        })]
      }), (null != b || null != m) && (0, r.jsxs)("div", {
        className: u.footer,
        children: [null != b && (0, r.jsx)(a.x, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: f
        }), (0, r.jsxs)("div", {
          className: u.buttonGroup,
          children: [null != b && (0, r.jsx)(b, {
            onClick: e => {
              e.stopPropagation(), null == p || p()
            }
          }), null != m && (0, r.jsx)(m, {})]
        })]
      })]
    })
  })
}
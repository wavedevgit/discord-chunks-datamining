/** Chunk was on 33563 **/
/** chunk id: 216410, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk187322 = require("./187322.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk581444 = require("./581444.js"),
  Chunk671816 = require("./671816.js");

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
  return (0, r.jsx)(s.vN, {
    children: (0, r.jsxs)("div", {
      className: i()(u.iE, a.t),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != d && d()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d())
      },
      children: [(0, r.jsx)("div", {
        className: u.Td,
        style: null != l ? {
          backgroundImage: null != l ? "url(".concat(l.toString(), ")") : true
        } : true,
        children: null == l && (0, r.jsx)(o.qyI, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })
      }), (0, r.jsxs)("div", {
        className: u.zH,
        children: [(0, r.jsx)(o.EYj, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: n
        }), null != t && (0, r.jsx)(o.EYj, {
          className: u.h_,
          color: "text-muted",
          variant: "text-sm/normal",
          children: t
        })]
      }), (null != p || null != m) && (0, r.jsxs)("div", {
        className: u.qr,
        children: [null != p && (0, r.jsx)(o.EYj, {
          color: "interactive-text-default",
          variant: "text-sm/normal",
          children: b
        }), (0, r.jsxs)("div", {
          className: u.GC,
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
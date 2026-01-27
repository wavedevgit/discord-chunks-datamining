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
    headerImage: r,
    onDetails: c,
    onPurchase: d,
    PurchaseButton: p,
    GiftButton: m,
    availabilityLabel: b
  } = e;
  return (0, l.jsx)(s.vN, {
    children: (0, l.jsxs)("div", {
      className: i()(o.iE, a.t),
      tabIndex: 0,
      onClick: () => {
        null != c ? c() : null != d && d()
      },
      onKeyUp: e => {
        "Enter" === e.key && (e.stopPropagation(), e.preventDefault(), null != c ? c() : null != d && d())
      },
      children: [(0, l.jsx)("div", {
        className: o.Td,
        style: null != r ? {
          backgroundImage: null != r ? "url(".concat(r.toString(), ")") : true
        } : true,
        children: null == r && (0, l.jsx)(u.qyI, {
          color: "white",
          size: "custom",
          height: 80,
          width: 80
        })
      }), (0, l.jsxs)("div", {
        className: o.zH,
        children: [(0, l.jsx)(u.EYj, {
          color: "text-strong",
          variant: "text-md/semibold",
          children: n
        }), null != t && (0, l.jsx)(u.EYj, {
          className: o.h_,
          color: "text-muted",
          variant: "text-sm/normal",
          children: t
        })]
      }), (null != p || null != m) && (0, l.jsxs)("div", {
        className: o.qr,
        children: [null != p && (0, l.jsx)(u.EYj, {
          color: "interactive-text-default",
          variant: "text-sm/normal",
          children: b
        }), (0, l.jsxs)("div", {
          className: o.GC,
          children: [null != p && (0, l.jsx)(p, {
            onClick: e => {
              e.stopPropagation(), null == d || d()
            }
          }), null != m && (0, l.jsx)(m, {})]
        })]
      })]
    })
  })
}
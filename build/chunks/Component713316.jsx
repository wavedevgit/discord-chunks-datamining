/** Chunk was on web.js **/
/** chunk id: 713316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk680018 = require("./680018.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk27034 = require("./27034.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153196 = require("./153196.js");

function h(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: i,
    selectedSkuId: h,
    application: m
  } = (0, c.JL)(), {
    isGift: g,
    giftRecipient: E
  } = (0, l.wD)();
  o()(null != h, "Expected selectedSkuId"), o()(null != m, "Expected application");
  let b = i[h];
  o()(null != b, "Expected sku");
  let y = g ? _.intl.formatToPlainString(_.t["2VjPT0"], {
    itemName: b.name,
    giftRecipient: null != (t = null == E ? true : E.username) ? t : "your recipient"
  }) : _.intl.formatToPlainString(_.t.wK0IbG, {
    applicationName: m.name,
    itemName: b.name
  });
  return (0, r.jsxs)(f.C3, {
    children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)(u.Z, {}), (0, r.jsxs)("div", {
      className: p.confirmation,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-xxl/bold",
        className: p.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: y
      }), (0, r.jsx)("div", {
        className: p.divider
      }), (0, r.jsx)(a.z, {
        onClick: n,
        text: _.intl.string(_.t.cpT0Cg),
        fullWidth: true
      })]
    })]
  })
}
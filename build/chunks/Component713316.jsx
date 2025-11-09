/** Chunk was on web.js **/
/** chunk id: 713316, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk563132 = require("./563132.jsx"),
  Chunk698708 = require("./698708.jsx"),
  Chunk844068 = require("./844068.jsx"),
  Chunk614277 = require("./614277.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587490 = require("./587490.js");

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
  a()(null != h, "Expected selectedSkuId"), a()(null != m, "Expected application");
  let b = i[h];
  a()(null != b, "Expected sku");
  let y = g ? _.intl.formatToPlainString(_.t["2VjPTw"], {
    itemName: b.name,
    giftRecipient: null != (t = null == E ? true : E.username) ? t : "your recipient"
  }) : _.intl.formatToPlainString(_.t.wK0IbP, {
    applicationName: m.name,
    itemName: b.name
  });
  return (0, r.jsxs)(f.C3, {
    children: [(0, r.jsx)(d.Z, {}), (0, r.jsx)(u.Z, {}), (0, r.jsxs)("div", {
      className: p.confirmation,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        className: p.confirmationHeader,
        children: "Success!"
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: y
      }), (0, r.jsx)("div", {
        className: p.divider
      }), (0, r.jsx)(o.zxk, {
        onClick: n,
        text: _.intl.string(_.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  })
}
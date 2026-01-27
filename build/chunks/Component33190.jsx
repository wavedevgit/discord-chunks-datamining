/** Chunk was on web.js **/
/** chunk id: 33190, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk156312 = require("./156312.jsx"),
  Chunk921925 = require("./921925.jsx"),
  Chunk592362 = require("./592362.jsx"),
  Chunk482132 = require("./482132.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk724788 = require("./724788.js");

function h(e) {
  var t;
  let {
    handleClose: n
  } = e, {
    skusById: i,
    selectedSkuId: h,
    application: m
  } = (0, c.P5)(), {
    isGift: g,
    giftRecipient: E
  } = (0, l.Pv)();
  a()(null != h, "Expected selectedSkuId"), a()(null != m, "Expected application");
  let y = i[h];
  a()(null != y, "Expected sku");
  let b = g ? p.intl.formatToPlainString(p.t["2VjPTw"], {
    itemName: y.name,
    giftRecipient: null != (t = null == E ? true : E.username) ? t : "your recipient"
  }) : p.intl.formatToPlainString(p.t.wK0IbP, {
    applicationName: m.name,
    itemName: y.name
  });
  return (0, r.jsxs)(f.dZ, {
    children: [(0, r.jsx)(d.A, {}), (0, r.jsx)(u.A, {}), (0, r.jsxs)("div", {
      className: _.EL,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        className: _.RS,
        children: "Success!"
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: b
      }), (0, r.jsx)("div", {
        className: _.yF
      }), (0, r.jsx)(o.$nd, {
        onClick: n,
        text: p.intl.string(p.t.cpT0Cq),
        fullWidth: true
      })]
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 439293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849925 = require("./849925.js");

function c(e) {
  let {
    step: t,
    onClose: n,
    isGift: c
  } = e, u = (0, i.EQ)(t).with(o.h8.REVIEW, () => c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)).with(o.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak)).with(o.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"])).with(o.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H)).with(o.h8.CONFIRM, () => "").otherwise(() => null);
  return null == u ? null : (0, r.jsxs)(a.xBx, {
    "data-migration-pending": true,
    className: l.headerContainerGift,
    separator: t !== o.h8.CONFIRM,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: u
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      onClick: n,
      className: l.closeButtonGift
    })]
  })
}
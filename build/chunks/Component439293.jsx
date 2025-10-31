/** Chunk was on 45227 **/
/** chunk id: 439293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk525214 = require("./525214.js");

function c(e) {
  let {
    step: t,
    onClose: n,
    isGift: c
  } = e, d = (0, r.EQ)(t).with(l.h8.REVIEW, () => c ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)).with(l.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak)).with(l.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"])).with(l.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H)).with(l.h8.CONFIRM, () => "").otherwise(() => null);
  return null == d ? null : (0, i.jsxs)(a.xBx, {
    "data-migration-pending": true,
    className: o.headerContainerGift,
    separator: t !== l.h8.CONFIRM,
    children: [(0, i.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: d
    }), (0, i.jsx)(a.olH, {
      "data-migration-pending": true,
      onClick: n,
      className: o.closeButtonGift
    })]
  })
}
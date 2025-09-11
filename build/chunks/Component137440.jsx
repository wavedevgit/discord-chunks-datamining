/** Chunk was on 61670 **/
/** chunk id: 137440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk419592 = require("./419592.js");

function c(e) {
  let {
    step: t,
    onClose: n
  } = e, c = (0, l.EQ)(t).with(r.h8.REVIEW, () => s.intl.string(s.t.JbRd5u)).with(r.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOam)).with(r.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN//"])).with(r.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6O)).with(r.h8.CONFIRM, () => "").otherwise(() => null);
  return null == c ? null : (0, i.jsxs)(a.xBx, {
    className: o.headerContainerGift,
    separator: t !== r.h8.CONFIRM,
    children: [(0, i.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      children: c
    }), (0, i.jsx)(a.olH, {
      onClick: n,
      className: o.closeButtonGift
    })]
  })
}
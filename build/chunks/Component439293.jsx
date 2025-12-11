/** Chunk was on 45227 **/
/** chunk id: 439293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849925 = require("./849925.js");

function d(e) {
  let {
    step: t,
    onClose: n,
    isGift: d
  } = e, c = (0, a.EQ)(t).with(r.h8.REVIEW, () => d ? s.intl.string(s.t.wKaVLC) : s.intl.string(s.t.Whxhpm)).with(r.h8.ADD_PAYMENT_STEPS, () => s.intl.string(s.t.QiGOak)).with(r.h8.GIFT_CUSTOMIZATION, () => s.intl.string(s.t["JCFN/y"])).with(r.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => s.intl.string(s.t.lDbi6H)).with(r.h8.CONFIRM, () => "").otherwise(() => null);
  return null == c ? null : (0, i.jsxs)(l.xBx, {
    "data-migration-pending": true,
    className: o.headerContainerGift,
    separator: t !== r.h8.CONFIRM,
    children: [(0, i.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      children: c
    }), (0, i.jsx)(l.olH, {
      "data-migration-pending": true,
      onClick: n,
      className: o.closeButtonGift
    })]
  })
}
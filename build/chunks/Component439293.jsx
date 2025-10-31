/** Chunk was on 45227 **/
/** chunk id: 439293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk409813 = require("./409813.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk525214 = require("./525214.js");

function s(e) {
  let {
    step: t,
    onClose: n,
    isGift: s
  } = e, u = (0, i.EQ)(t).with(a.h8.REVIEW, () => s ? o.intl.string(o.t.wKaVLC) : o.intl.string(o.t.Whxhpm)).with(a.h8.ADD_PAYMENT_STEPS, () => o.intl.string(o.t.QiGOak)).with(a.h8.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN/y"])).with(a.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6H)).with(a.h8.CONFIRM, () => "").otherwise(() => null);
  return null == u ? null : (0, r.jsxs)(l.xBx, {
    "data-migration-pending": true,
    className: c.headerContainerGift,
    separator: t !== a.h8.CONFIRM,
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-lg/semibold",
      children: u
    }), (0, r.jsx)(l.olH, {
      "data-migration-pending": true,
      onClick: n,
      className: c.closeButtonGift
    })]
  })
}
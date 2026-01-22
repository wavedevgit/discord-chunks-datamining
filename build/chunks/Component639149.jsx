/** Chunk was on web.js **/
/** chunk id: 639149, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./801541.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk889137 = require("./889137.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166532 = require("./166532.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk818413 = require("./818413.js");

function c(e) {
  let {
    step: t,
    onClose: n,
    isGift: c
  } = e, u = (0, i.YW)(t).with(s.pn.REVIEW, () => c ? o.intl.string(o.t.wKaVLC) : o.intl.string(o.t.Whxhpm)).with(s.pn.ADD_PAYMENT_STEPS, () => o.intl.string(o.t.QiGOak)).with(s.pn.GIFT_CUSTOMIZATION, () => o.intl.string(o.t["JCFN/y"])).with(s.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => o.intl.string(o.t.lDbi6H)).with(s.pn.CONFIRM, () => "").otherwise(() => null);
  return null == u ? null : (0, r.jsxs)(a.rQ0, {
    "data-migration-pending": true,
    className: l.H,
    separator: t !== s.pn.CONFIRM,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: u
    }), (0, r.jsx)(a.s_y, {
      "data-migration-pending": true,
      onClick: n,
      className: l.P
    })]
  })
}
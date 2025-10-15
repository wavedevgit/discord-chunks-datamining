/** Chunk was on web.js **/
/** chunk id: 742956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./314940.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk109213 = require("./109213.js"),
  Chunk409813 = require("./409813.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944112 = require("./944112.js");

function d(e) {
  let {
    step: t,
    onClose: n,
    giftingOrigin: d
  } = e, {
    enabled: f
  } = o.G.useExperiment({
    location: "CollectiblesGiftPaymentModalHeader"
  }, {
    autoTrackExposure: false
  }), _ = (0, i.EQ)(t).with(s.h8.REVIEW, () => c.intl.string(c.t.JbRd5s)).with(s.h8.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOak)).with(s.h8.GIFT_CUSTOMIZATION, () => f && d === l.Wt.DM_CHANNEL ? c.intl.string(c.t["xU+d9M"]) : c.intl.string(c.t["JCFN/y"])).with(s.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6H)).with(s.h8.CONFIRM, () => "").otherwise(() => null);
  return null == _ ? null : (0, r.jsxs)(a.xBx, {
    "data-migration-pending": true,
    className: u.headerContainerGift,
    separator: t !== s.h8.CONFIRM,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: _
    }), (0, r.jsx)(a.olH, {
      "data-migration-pending": true,
      onClick: n,
      className: u.closeButtonGift
    })]
  })
}
/** Chunk was on web.js **/
/** chunk id: 231018, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./801541.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk889137 = require("./889137.js"),
  Chunk397927 = require("./397927.js"),
  Chunk547065 = require("./547065.js"),
  Chunk166532 = require("./166532.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk54196 = require("./54196.js");

function d(e) {
  let {
    step: t,
    onClose: n,
    giftingOrigin: d
  } = e, {
    enabled: f
  } = s.P.useExperiment({
    location: "CollectiblesGiftPaymentModalHeader"
  }, {
    autoTrackExposure: false
  }), p = (0, i.YW)(t).with(o.pn.REVIEW, () => c.intl.string(c.t.JbRd5s)).with(o.pn.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOak)).with(o.pn.GIFT_CUSTOMIZATION, () => f && d === l.vQ.DM_CHANNEL ? c.intl.string(c.t["xU+d9M"]) : c.intl.string(c.t["JCFN/y"])).with(o.pn.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6H)).with(o.pn.CONFIRM, () => "").otherwise(() => null);
  return null == p ? null : (0, r.jsxs)(a.rQ0, {
    "data-migration-pending": true,
    className: u.H,
    separator: t !== o.pn.CONFIRM,
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      children: p
    }), (0, r.jsx)(a.s_y, {
      "data-migration-pending": true,
      onClick: n,
      className: u.P
    })]
  })
}
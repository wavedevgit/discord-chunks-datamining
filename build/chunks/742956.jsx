/** Chunk was on web.js **/
/** chunk id: 742956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./314940.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk109213 = require("./109213.js"),
  Chunk409813 = require("./409813.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk368159 = require("./368159.js");

function d(e) {
  let {
    step: t,
    onClose: n,
    giftingOrigin: d
  } = e, {
    enabled: f
  } = a.G.useExperiment({
    location: "CollectiblesGiftPaymentModalHeader"
  }, {
    autoTrackExposure: false
  }), _ = (0, i.EQ)(t).with(s.h8.REVIEW, () => c.intl.string(c.t.JbRd5u)).with(s.h8.ADD_PAYMENT_STEPS, () => c.intl.string(c.t.QiGOam)).with(s.h8.GIFT_CUSTOMIZATION, () => f && d === l.Wt.DM_CHANNEL ? c.intl.string(c.t["xU+d9P"]) : c.intl.string(c.t["JCFN//"])).with(s.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.intl.string(c.t.lDbi6O)).with(s.h8.CONFIRM, () => "").otherwise(() => null);
  return null == _ ? null : <o.xBx className={u.headerContainerGift} separator={t !== s.h8.CONFIRM}>{<o.X6q variant={"heading-lg/semibold"}>{_}</o.X6q>}{<o.olH onClick={n} className={u.closeButtonGift} />}</o.xBx>
}
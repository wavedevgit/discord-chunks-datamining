/** Chunk was on web.js **/
/** chunk id: 396955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l,
  w: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258501 = require("./258501.js"),
  s = function(e) {
    return e.SELECT_PAYMENT_METHOD = "SELECT_PAYMENT_METHOD", e.ADD_NEW_PAYMENT_METHOD = "ADD_NEW_PAYMENT_METHOD", e
  }({});

function l(e) {
  let {
    paymentRestrictionBannerType: t
  } = e, n = "";
  if (!t) return null;
  switch (t) {
    case "SELECT_PAYMENT_METHOD":
      n = o.intl.string(o.t.Tdb5qa);
      break;
    case "ADD_NEW_PAYMENT_METHOD":
      n = o.intl.string(o.t["6d44Fx"])
  }
  return <div className={a.paymentRestrictionBannerContainer}>{<div className={a.appsIconContainer}>{<i.jje size={"md"} color={"white"} className={a.icon} />}{<i.jje size={"md"} color={"currentColor"} className={a.iconDark} />}</div>}{<i.Text variant={"text-sm/normal"}>{n}</i.Text>}{<div className={a.paymentRestrictionBannerBackgroundImage} />}</div>
}
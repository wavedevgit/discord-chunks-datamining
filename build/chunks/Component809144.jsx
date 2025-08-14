/** Chunk was on web.js **/
/** chunk id: 809144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk609194 = require("./609194.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk676766 = require("./676766.js");

function u(e) {
  let {
    giftMessage: t = l.intl.string(l.t.DrgnS0)
  } = e, {
    isGift: n,
    giftRecipient: u
  } = (0, s.wD)();
  return !n || (0, a.pO)(u) ? null : (0, r.jsx)(o.Z, {
    className: c.paymentNote,
    iconSize: o.Z.Sizes.SMALL,
    icon: i.OgN,
    color: null == t ? o.Z.Colors.PRIMARY : o.Z.Colors.SECONDARY,
    children: t
  })
}
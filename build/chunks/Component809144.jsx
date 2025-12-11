/** Chunk was on web.js **/
/** chunk id: 809144, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk609194 = require("./609194.jsx"),
  Chunk669079 = require("./669079.js"),
  Chunk987209 = require("./987209.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk480057 = require("./480057.js");

function u(e) {
  let {
    giftMessage: t = l.intl.string(l.t["DrgnS+"])
  } = e, {
    isGift: n,
    giftRecipient: u
  } = (0, s.wD)();
  return !n || (0, o.pO)(u) ? null : (0, r.jsx)(a.Z, {
    className: c.paymentNote,
    iconSize: a.Z.Sizes.SMALL,
    icon: i.OgN,
    color: null == t ? a.Z.Colors.PRIMARY : a.Z.Colors.SECONDARY,
    children: t
  })
}
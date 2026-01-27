/** Chunk was on web.js **/
/** chunk id: 50956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk102741 = require("./102741.jsx"),
  Chunk45938 = require("./45938.js"),
  Chunk937008 = require("./937008.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk389118 = require("./389118.js");

function u(e) {
  let {
    giftMessage: t = l.intl.string(l.t["DrgnS+"])
  } = e, {
    isGift: n,
    giftRecipient: u
  } = (0, s.Pv)();
  return !n || (0, o.Ik)(u) ? null : (0, r.jsx)(a.A, {
    className: c.z,
    iconSize: a.A.Sizes.SMALL,
    icon: i.okO,
    color: null == t ? a.A.Colors.PRIMARY : a.A.Colors.SECONDARY,
    children: t
  })
}
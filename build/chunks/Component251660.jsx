/** Chunk was on web.js **/
/** chunk id: 251660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk695681 = require("./695681.js");
let d = e => {
  let {
    className: t,
    giftRecipient: n
  } = e;
  return null == n ? null : (0, r.jsxs)("div", {
    className: o()(u.content, t),
    children: [(0, r.jsx)(a.vwX, {
      children: c.intl.string(c.t.xFn72t)
    }), (0, r.jsxs)("div", {
      className: u.giftRecipientInfo,
      children: [(0, r.jsx)(s.Z, {
        user: n,
        className: u.__invalid_giftRecipient,
        size: a.EFr.SIZE_44
      }), (0, r.jsx)(a.X6q, {
        className: u.giftRecipientName,
        variant: "text-md/normal",
        children: l.ZP.getName(n)
      }), (0, r.jsx)(a.X6q, {
        className: u.giftRecipientTag,
        variant: "text-md/normal",
        children: l.ZP.getUserTag(n)
      })]
    })]
  })
}
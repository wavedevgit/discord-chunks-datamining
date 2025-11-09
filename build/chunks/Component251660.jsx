/** Chunk was on web.js **/
/** chunk id: 251660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  s: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk700582 = require("./700582.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750994 = require("./750994.js");
let d = e => {
  let {
    className: t,
    giftRecipient: n
  } = e;
  return null == n ? null : (0, r.jsx)("div", {
    className: a()(u.content, t),
    children: (0, r.jsx)(o.gNt, {
      label: c.intl.string(c.t.xFn72s),
      children: (0, r.jsxs)("div", {
        className: u.giftRecipientInfo,
        children: [(0, r.jsx)(s.Z, {
          user: n,
          size: o.EFr.SIZE_44
        }), (0, r.jsx)(o.Text, {
          className: u.giftRecipientName,
          variant: "text-md/normal",
          children: l.ZP.getName(n)
        }), (0, r.jsx)(o.Text, {
          className: u.giftRecipientTag,
          variant: "text-md/normal",
          children: l.ZP.getUserTag(n)
        })]
      })
    })
  })
}
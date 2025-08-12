/** Chunk was on web.js **/
/** chunk id: 612853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk748969 = require("./748969.js"),
  Chunk794287 = require("./794287.js");

function u(e) {
  let {
    iconClassName: t,
    textClassName: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(l.paymentModalLockIcon, c.flex, c.alignCenter),
    children: [(0, r.jsx)(a.mBM, {
      size: "sm",
      color: "currentColor",
      className: o()(l.lockIcon, t)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      className: null != n ? n : true,
      children: s.intl.string(s.t.Kv6Z4O)
    })]
  })
}
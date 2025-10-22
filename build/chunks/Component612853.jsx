/** Chunk was on web.js **/
/** chunk id: 612853, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk621189 = require("./621189.js"),
  Chunk465106 = require("./465106.js");

function u(e) {
  let {
    iconClassName: t,
    textClassName: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(l.paymentModalLockIcon, c.flex, c.alignCenter),
    children: [(0, r.jsx)(o.mBM, {
      size: "sm",
      color: "currentColor",
      className: a()(l.lockIcon, t)
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      className: a()(l.lockIconText, null != n ? n : true),
      children: s.intl.string(s.t.Kv6Z4I)
    })]
  })
}
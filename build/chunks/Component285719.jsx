/** Chunk was on web.js **/
/** chunk id: 285719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk966327 = require("./966327.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536275 = require("./536275.js");
let d = e => {
  let {
    className: t,
    giftRecipient: n
  } = e;
  return null == n ? null : (0, r.jsx)("div", {
    className: a()(u.Qs, t),
    children: (0, r.jsx)(o.D0$, {
      label: c.intl.string(c.t.xFn72s),
      children: (0, r.jsxs)("div", {
        className: u.Ui,
        children: [(0, r.jsx)(s.A, {
          user: n,
          size: o._3J.SIZE_44
        }), (0, r.jsx)(o.Text, {
          className: u.Xp,
          variant: "text-md/normal",
          children: l.Ay.getName(n)
        }), (0, r.jsx)(o.Text, {
          className: u.Ik,
          variant: "text-md/normal",
          children: l.Ay.getUserTag(n)
        })]
      })
    })
  })
}
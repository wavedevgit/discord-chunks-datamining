/** Chunk was on 1784 **/
/** chunk id: 882342, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk580630 = require("./580630.js"),
  Chunk993408 = require("./993408.js"),
  Chunk641563 = require("./641563.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk778052 = require("./778052.js");

function m(e) {
  let {
    product: t
  } = e, n = (0, s.yt)(t, c.lid.PREMIUM_TIER_2);
  if (null == n) return null;
  let m = (0, a.RS)(n.amount, n.currency);
  return (0, r.jsxs)("div", {
    className: d.k,
    children: [(0, r.jsx)(l.m, {
      text: u.intl.string(u.t.MPFyJ5),
      "aria-label": u.intl.string(u.t.X3Ekj8),
      children: (0, r.jsx)(i.tvc, {
        size: "md",
        color: "currentColor",
        className: d.o
      })
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/medium",
      children: u.intl.format(u.t.Sv8iic, {
        price: m,
        subscribeNowHook: e => (0, r.jsx)(o.Z, {
          text: e
        })
      })
    })]
  })
}
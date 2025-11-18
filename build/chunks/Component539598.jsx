/** Chunk was on 48899 **/
/** chunk id: 539598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk200615 = require("./200615.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk242081 = require("./242081.js");

function m(e) {
  let {
    product: t
  } = e, n = (0, o.ql)(t, c.tuJ.PREMIUM_TIER_2);
  if (null == n) return null;
  let m = (0, l.qr)(n.amount, n.currency);
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(i.u, {
      text: u.intl.string(u.t.MPFyJ5),
      "aria-label": u.intl.string(u.t.X3Ekj8),
      children: (0, r.jsx)(a.SrA, {
        size: "md",
        color: "currentColor",
        className: d.nitroIcon
      })
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      children: u.intl.format(u.t.Sv8iic, {
        price: m,
        subscribeNowHook: e => (0, r.jsx)(s.F, {
          text: e
        })
      })
    })]
  })
}
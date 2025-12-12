/** Chunk was on web.js **/
/** chunk id: 473919, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk556638 = require("./556638.js"),
  Chunk175996 = require("./175996.js");

function u(e) {
  let {
    icon: t,
    tooltipText: n,
    tooltipAriaLabel: i,
    className: u,
    onTooltipShow: d
  } = e, f = (0, s.vjg)(s.Skl.ONLINE);
  return null == n ? (0, r.jsx)(t, {
    size: "custom",
    color: f,
    className: a()(c.icon, u)
  }) : (0, r.jsx)(o.u, {
    ariaHidden: true,
    text: n,
    delay: l.X,
    onTooltipShow: d,
    children: (0, r.jsx)(t, {
      size: "custom",
      color: f,
      className: a()(c.icon, u),
      "aria-label": i
    })
  })
}
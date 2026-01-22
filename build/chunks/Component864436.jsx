/** Chunk was on web.js **/
/** chunk id: 864436, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js");
require("./851883.js");
var Chunk123511 = require("./123511.js");

function c(e) {
  let {
    icon: t,
    tooltipText: n,
    tooltipAriaLabel: i,
    className: c,
    onTooltipShow: u
  } = e, d = (0, o.S31)(o.clD.ONLINE);
  return null == n ? (0, r.jsx)(t, {
    size: "custom",
    color: d,
    className: a()(l.Kk, c)
  }) : (0, r.jsx)(s.m, {
    ariaHidden: true,
    text: n,
    delay: 150,
    onTooltipShow: u,
    children: (0, r.jsx)(t, {
      size: "custom",
      color: d,
      className: a()(l.Kk, c),
      "aria-label": i
    })
  })
}
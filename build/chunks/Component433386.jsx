/** Chunk was on web.js **/
/** chunk id: 433386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");
let s = 250,
  l = e => {
    let {
      onGift: t,
      tooltipDelay: n = s
    } = e;
    return (0, r.jsx)(i.u, {
      text: a.intl.string(a.t["JCFN/y"]),
      delay: n,
      children: (0, r.jsx)(o.hU, {
        "aria-label": a.intl.string(a.t["JCFN/y"]),
        variant: "primary",
        icon: o.OgN,
        size: "md",
        onClick: t
      })
    })
  }
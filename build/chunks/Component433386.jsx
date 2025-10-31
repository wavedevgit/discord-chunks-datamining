/** Chunk was on web.js **/
/** chunk id: 433386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
      text: o.intl.string(o.t["JCFN/y"]),
      delay: n,
      children: (0, r.jsx)(a.hU, {
        "aria-label": o.intl.string(o.t["JCFN/y"]),
        variant: "primary",
        icon: a.OgN,
        size: "md",
        onClick: t
      })
    })
  }
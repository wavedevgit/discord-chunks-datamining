/** Chunk was on web.js **/
/** chunk id: 300182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");
let o = 250,
  l = e => {
    let {
      onGift: t,
      tooltipDelay: n = o
    } = e;
    return (0, r.jsx)(i.m, {
      text: s.intl.string(s.t["JCFN/y"]),
      delay: n,
      children: (0, r.jsx)(a.K0, {
        "aria-label": s.intl.string(s.t["JCFN/y"]),
        variant: "primary",
        icon: a.okO,
        size: "md",
        onClick: t
      })
    })
  }
/** Chunk was on web.js **/
/** chunk id: 703400, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk22928 = require("./22928.jsx"),
  Chunk73930 = require("./73930.js");
let s = 20,
  l = e => {
    let {
      application: t,
      iconSize: n = s
    } = e;
    return null == t ? null : (0, r.jsxs)("div", {
      className: a.container,
      children: [(0, r.jsx)(o.h, {
        application: t,
        iconSize: n
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: t.name
      })]
    })
  }
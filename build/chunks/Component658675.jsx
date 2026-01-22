/** Chunk was on web.js **/
/** chunk id: 658675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk460890 = require("./460890.jsx"),
  Chunk568385 = require("./568385.jsx"),
  Chunk27192 = require("./27192.jsx");

function o(e) {
  let {
    checked: t,
    disabled: n,
    size: o
  } = e;
  return (0, i.y6)("CheckboxIndicator") ? (0, r.jsx)(a.J, {
    checked: t,
    disabled: n,
    displayOnly: true,
    usageVariant: "indicator",
    "aria-hidden": true
  }) : (0, r.jsx)(s.Lc, {
    value: t,
    disabled: n,
    size: null != o ? o : 20
  })
}
/** Chunk was on web.js **/
/** chunk id: 658675, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk460890 = require("./460890.jsx"),
  Chunk568385 = require("./568385.jsx"),
  Chunk27192 = require("./27192.jsx");

function s(e) {
  let {
    checked: t,
    disabled: n,
    size: s
  } = e;
  return (0, i.y6)("CheckboxIndicator") ? (0, r.jsx)(a.J, {
    checked: t,
    disabled: n,
    displayOnly: true,
    usageVariant: "indicator",
    "aria-hidden": true
  }) : (0, r.jsx)(o.Lc, {
    value: t,
    disabled: n,
    size: null != s ? s : 20
  })
}
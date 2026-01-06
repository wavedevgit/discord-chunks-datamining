/** Chunk was on web.js **/
/** chunk id: 571155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk402453 = require("./402453.jsx"),
  Chunk982125 = require("./982125.jsx"),
  Chunk910989 = require("./910989.jsx");

function s(e) {
  let {
    checked: t,
    disabled: n,
    size: s
  } = e;
  return (0, i.A)("CheckboxIndicator") ? (0, r.jsx)(a.C, {
    checked: t,
    disabled: n,
    displayOnly: true,
    usageVariant: "indicator",
    "aria-hidden": true
  }) : (0, r.jsx)(o.Ik, {
    value: t,
    disabled: n,
    size: null != s ? s : 20
  })
}
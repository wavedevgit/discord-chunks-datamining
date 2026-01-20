/** Chunk was on web.js **/
/** chunk id: 190947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  b: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk991862 = require("./991862.js");

function o(e) {
  let {
    currencies: t,
    className: n,
    children: i
  } = e;
  return t.length < 2 ? null : (0, r.jsx)("div", {
    className: n,
    children: i
  })
}
let s = function(e) {
  let {
    label: t,
    currencies: n,
    onChange: o,
    selectedCurrency: s,
    disabled: l = false
  } = e;
  if (n.length < 2) return null;
  let c = n.map((e, t) => ({
      id: t.toString(),
      value: e,
      label: "".concat(e.toUpperCase(), " - ").concat((0, a.T)(e))
    })),
    u = e => {
      null != e && o(e)
    };
  return (0, r.jsx)(i.PhF, {
    selectionMode: "single",
    label: t,
    value: s,
    options: c,
    onSelectionChange: u,
    disabled: l
  })
}
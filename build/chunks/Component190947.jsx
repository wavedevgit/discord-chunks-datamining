/** Chunk was on web.js **/
/** chunk id: 190947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  b: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    currencies: t,
    onChange: n,
    selectedCurrency: o,
    className: s,
    disabled: l = false
  } = e;
  if (t.length < 2) return null;
  let c = t.map((e, t) => ({
      key: t,
      value: e,
      label: "".concat(e.toUpperCase(), " - ").concat((0, a.T)(e))
    })),
    u = e => {
      null != e && n(e)
    };
  return (0, r.jsx)(i.q4e, {
    value: o,
    options: c,
    onChange: u,
    className: s,
    isDisabled: l
  })
}
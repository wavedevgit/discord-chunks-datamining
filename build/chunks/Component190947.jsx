/** Chunk was on web.js **/
/** chunk id: 190947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s,
  b: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk199849 = require("./199849.jsx"),
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
    className: l,
    disabled: c = false
  } = e;
  if (n.length < 2) return null;
  let u = n.map((e, t) => ({
      key: t,
      value: e,
      label: "".concat(e.toUpperCase(), " - ").concat((0, a.T)(e))
    })),
    d = e => {
      null != e && o(e)
    };
  return (0, r.jsx)(i.y6, {
    label: t,
    value: s,
    options: u,
    onChange: d,
    className: l,
    isDisabled: c
  })
}
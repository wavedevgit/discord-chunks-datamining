/** Chunk was on web.js **/
/** chunk id: 821189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s,
  f: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk976114 = require("./976114.js");

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
      label: "".concat(e.toUpperCase(), " - ").concat((0, a.Q)(e))
    })),
    u = e => {
      null != e && o(e)
    };
  return (0, r.jsx)(i.l6P, {
    selectionMode: "single",
    label: t,
    value: s,
    options: c,
    onSelectionChange: u,
    disabled: l
  })
}
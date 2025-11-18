/** Chunk was on web.js **/
/** chunk id: 122192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk462566 = require("./462566.jsx"),
  Chunk603421 = require("./603421.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk605352 = require("./605352.js");
let u = e => {
  let {
    billingError: t,
    onCardInfoChange: n
  } = e, u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
  return (0, r.jsxs)(i.Fragment, {
    children: [u ? (0, r.jsx)("div", {
      className: c.errorBlock,
      children: (0, r.jsx)(a.M14, {
        type: "critical",
        children: l.intl.string(l.t["4vnhKV"])
      })
    }) : null, (0, r.jsx)(o.Z, {
      onCardInfoChange: n,
      error: t
    })]
  })
}
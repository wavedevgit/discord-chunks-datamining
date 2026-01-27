/** Chunk was on web.js **/
/** chunk id: 202626, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk502639 = require("./502639.jsx"),
  Chunk493822 = require("./493822.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk182468 = require("./182468.js");
let u = e => {
  let {
    billingError: t,
    onCardInfoChange: n
  } = e, u = null != t && (null == t.code || (0, s.ou)(t) === s.gj.CREDIT_CARD_INFORMATION);
  return (0, r.jsxs)(i.Fragment, {
    children: [u ? (0, r.jsx)("div", {
      className: c.QK,
      children: (0, r.jsx)(a.wx6, {
        type: "critical",
        children: l.intl.string(l.t["4vnhKV"])
      })
    }) : null, (0, r.jsx)(o.A, {
      onCardInfoChange: n,
      error: t
    })]
  })
}
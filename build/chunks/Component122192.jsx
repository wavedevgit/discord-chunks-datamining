/** Chunk was on web.js **/
/** chunk id: 122192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk462566 = require("./462566.jsx"),
  Chunk603421 = require("./603421.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk448106 = require("./448106.js");
let u = e => {
  let {
    billingError: t,
    onCardInfoChange: n
  } = e, u = null != t && (null == t.code || (0, s.ly)(t) === s.Rg.CREDIT_CARD_INFORMATION);
  return (0, r.jsxs)(i.Fragment, {
    children: [u ? (0, r.jsx)(a.kzN, {
      className: c.errorBlock,
      children: l.intl.string(l.t["4vnhKS"])
    }) : null, (0, r.jsx)(o.Z, {
      onCardInfoChange: n,
      error: t
    })]
  })
}
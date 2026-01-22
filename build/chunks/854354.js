/** Chunk was on web.js **/
/** chunk id: 854354, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk927578 = require("./927578.js"),
  Chunk985018 = require("./985018.jsx");
let a = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      addTaxLineItem: true
    },
    {
      manualLineItems: n,
      addTaxLineItem: a
    } = t,
    s = [];
  return s = null != n ? [...n] : e.invoiceItems.map(e => ({
    id: e.id,
    label: (0, r.Mn)(e.subscriptionPlanId),
    amount: e.amount * e.quantity
  })), false !== a && s.push({
    id: "tax",
    label: i.intl.string(i.t.jiRvC7),
    amount: e.tax
  }), s
}
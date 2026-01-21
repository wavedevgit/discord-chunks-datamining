/** Chunk was on web.js **/
/** chunk id: 570414, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a
}), require("./388685.js"), require("./539854.js");
var Chunk74538 = require("./74538.js"),
  Chunk388032 = require("./388032.jsx");
let a = function(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {
      addTaxLineItem: true
    },
    {
      manualLineItems: n,
      addTaxLineItem: a
    } = t,
    o = [];
  return o = null != n ? [...n] : e.invoiceItems.map(e => ({
    id: e.id,
    label: (0, r.Gf)(e.subscriptionPlanId),
    amount: e.amount * e.quantity
  })), false !== a && o.push({
    id: "tax",
    label: i.intl.string(i.t.jiRvC7),
    amount: e.tax
  }), o
}
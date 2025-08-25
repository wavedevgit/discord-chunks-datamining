/** Chunk was on web.js **/
/** chunk id: 492112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk423650 = require("./423650.js"),
  i = require.n(Chunk423650),
  Chunk388032 = require("./388032.jsx");
let a = "1290718710658629658";

function s(e) {
  let {
    entityName: t
  } = e, n = [{
    key: "NOT_INTERESTED",
    text: o.intl.formatToPlainString(o.t.AZRWVV, {
      entityName: t
    })
  }, {
    key: "INVALUABLE",
    text: o.intl.string(o.t.ETU4NT)
  }, {
    key: "TOO_LONG",
    text: o.intl.string(o.t.uRIIpK)
  }, {
    key: "UNSURE_HOW",
    text: o.intl.string(o.t["5dxvxs"])
  }, {
    key: "OTHER",
    text: o.intl.string(o.t.RFasgo)
  }];
  return {
    id: a,
    title: o.intl.string(o.t.ugbhDQ),
    subtitle: o.intl.string(o.t.FIYcpK),
    choices: i()(n.slice(0, 4)).concat(n[4])
  }
}
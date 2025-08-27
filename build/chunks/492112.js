/** Chunk was on web.js **/
/** chunk id: 492112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk423650 = require("./423650.js"),
  i = require.n(Chunk423650),
  Chunk388032 = require("./388032.jsx");
let o = "1290718710658629658";

function s(e) {
  let {
    entityName: t
  } = e, n = [{
    key: "NOT_INTERESTED",
    text: a.intl.formatToPlainString(a.t.AZRWVV, {
      entityName: t
    })
  }, {
    key: "INVALUABLE",
    text: a.intl.string(a.t.ETU4NT)
  }, {
    key: "TOO_LONG",
    text: a.intl.string(a.t.uRIIpK)
  }, {
    key: "UNSURE_HOW",
    text: a.intl.string(a.t["5dxvxs"])
  }, {
    key: "OTHER",
    text: a.intl.string(a.t.RFasgo)
  }];
  return {
    id: o,
    title: a.intl.string(a.t.ugbhDQ),
    subtitle: a.intl.string(a.t.FIYcpK),
    choices: i()(n.slice(0, 4)).concat(n[4])
  }
}
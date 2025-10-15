/** Chunk was on web.js **/
/** chunk id: 492112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk423650 = require("./423650.js"),
  i = require.n(Chunk423650),
  Chunk509212 = require("./509212.js"),
  Chunk388032 = require("./388032.jsx");
let s = "1290718710658629658";

function l(e) {
  let t = [{
    key: "NOT_INTERESTED",
    text: (0, a.q8)(e) ? o.intl.string(o.t["tgi+np"]) : o.intl.formatToPlainString(o.t.AZRWVV, {
      entityName: e.config.messages.gameTitle
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
    id: s,
    title: o.intl.string(o.t.ugbhDQ),
    subtitle: o.intl.string(o.t.FIYcpK),
    choices: i()(t.slice(0, 4)).concat(t[4])
  }
}
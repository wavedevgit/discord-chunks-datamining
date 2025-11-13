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
    text: (0, a.q8)(e) ? o.intl.string(o.t.wHRWkE) : o.intl.formatToPlainString(o.t.AZRWVY, {
      entityName: e.config.messages.gameTitle
    })
  }, {
    key: "INVALUABLE",
    text: o.intl.string(o.t.ETU4Na)
  }, {
    key: "TOO_LONG",
    text: o.intl.string(o.t.uRIIpD)
  }, {
    key: "UNSURE_HOW",
    text: o.intl.string(o.t["5dxvxs"])
  }, {
    key: "OTHER",
    text: o.intl.string(o.t.RFasgu)
  }];
  return {
    id: s,
    title: o.intl.string(o.t.ugbhDS),
    subtitle: o.intl.string(o.t.FIYcpC),
    choices: i()(t.slice(0, 4)).concat(t[4])
  }
}
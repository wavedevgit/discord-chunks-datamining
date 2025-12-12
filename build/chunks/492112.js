/** Chunk was on web.js **/
/** chunk id: 492112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk423650 = require("./423650.js"),
  i = require.n(Chunk423650),
  Chunk254579 = require("./254579.js"),
  Chunk388032 = require("./388032.jsx");
let s = "1290718710658629658";

function l(e) {
  let t = [{
    key: "NOT_INTERESTED",
    text: (0, o.q8)(e) ? a.intl.string(a.t.wHRWkE) : a.intl.formatToPlainString(a.t.AZRWVY, {
      entityName: e.config.messages.gameTitle
    })
  }, {
    key: "INVALUABLE",
    text: a.intl.string(a.t.ETU4Na)
  }, {
    key: "TOO_LONG",
    text: a.intl.string(a.t.uRIIpD)
  }, {
    key: "UNSURE_HOW",
    text: a.intl.string(a.t["5dxvxs"])
  }, {
    key: "OTHER",
    text: a.intl.string(a.t.RFasgu)
  }];
  return {
    id: s,
    title: a.intl.string(a.t.ugbhDS),
    subtitle: a.intl.string(a.t.FIYcpC),
    choices: i()(t.slice(0, 4)).concat(t[4])
  }
}
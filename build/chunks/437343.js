/** Chunk was on web.js **/
/** chunk id: 437343, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk588350 = require("./588350.js"),
  i = require.n(Chunk588350),
  Chunk792620 = require("./792620.js"),
  Chunk985018 = require("./985018.jsx");
let o = "1290718710658629658";

function l(e) {
  let t = [{
    key: "NOT_INTERESTED",
    text: (0, a.vv)(e) ? s.intl.string(s.t.wHRWkE) : s.intl.formatToPlainString(s.t.AZRWVY, {
      entityName: e.config.messages.gameTitle
    })
  }, {
    key: "INVALUABLE",
    text: s.intl.string(s.t.ETU4Na)
  }, {
    key: "TOO_LONG",
    text: s.intl.string(s.t.uRIIpD)
  }, {
    key: "UNSURE_HOW",
    text: s.intl.string(s.t["5dxvxs"])
  }, {
    key: "OTHER",
    text: s.intl.string(s.t.RFasgu)
  }];
  return {
    id: o,
    title: s.intl.string(s.t.ugbhDS),
    subtitle: s.intl.string(s.t.FIYcpC),
    choices: i()(t.slice(0, 4)).concat(t[4])
  }
}
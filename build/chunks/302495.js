/** Chunk was on web.js **/
/** chunk id: 302495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => c
}), require("./896048.js");
var Chunk418781 = require("./418781.js"),
  i = require.n(Chunk418781),
  Chunk323125 = require("./323125.js"),
  Chunk901123 = require("./901123.js"),
  Chunk746080 = require("./746080.js");

function l(e, t) {
  let {
    optional: n = false
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  return new a.x(":".concat(i()(e), "(").concat(t, ")").concat(n ? "?" : ""))
}
let c = {
  guildId() {
    let {
      name: e = "guildId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = o.Cr.map(i()).join("|");
    return l(e, "".concat(n, "|\\d+"), {
      optional: t
    })
  },
  channelId() {
    let {
      name: e = "channelId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = [...s.qW].map(i()).join("|");
    return l(e, "".concat(n, "|\\d+"), {
      optional: t
    })
  }
}
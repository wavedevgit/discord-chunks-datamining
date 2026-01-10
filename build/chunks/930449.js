/** Chunk was on web.js **/
/** chunk id: 930449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => c
}), require("./388685.js");
var Chunk370055 = require("./370055.js"),
  i = require.n(Chunk370055),
  Chunk860911 = require("./860911.js"),
  Chunk416145 = require("./416145.js"),
  Chunk176505 = require("./176505.js");

function l(e, t) {
  let {
    optional: n = false
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  return new a.Zn(":".concat(i()(e), "(").concat(t, ")").concat(n ? "?" : ""))
}
let c = {
  guildId() {
    let {
      name: e = "guildId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = o.Ze.map(i()).join("|");
    return l(e, "".concat(n, "|\\d+"), {
      optional: t
    })
  },
  channelId() {
    let {
      name: e = "channelId",
      optional: t = false
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {}, n = [...s.Vg].map(i()).join("|");
    return l(e, "".concat(n, "|\\d+"), {
      optional: t
    })
  }
}
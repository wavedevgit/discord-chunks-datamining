/** Chunk was on web.js **/
/** chunk id: 325100, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  uH: () => c
}), require("./35282.js");
var Chunk593473 = require("./593473.js"),
  Chunk873546 = require("./873546.js"),
  Chunk833549 = require("./833549.js"),
  Chunk981631 = require("./981631.js");
let s = e => {
    let {
      location: t
    } = e, n = l({
      location: t
    });
    return i.tq && i.bO && n
  },
  l = e => {
    let {
      location: t
    } = e, {
      enabled: n
    } = a.E.useConfig({
      location: t
    });
    return n
  },
  c = e => {
    let {
      location: t
    } = e, {
      deep_link_type: n
    } = (0, r.parse)(window.location.search), i = s({
      location: t
    });
    return n === o.MUe.APPLE_PAYMENT_LINK && i
  }
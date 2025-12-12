/** Chunk was on web.js **/
/** chunk id: 585602, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk937615 = require("./937615.js"),
  Chunk811334 = require("./811334.jsx"),
  Chunk388032 = require("./388032.jsx");

function s(e) {
  let {
    invoice: t
  } = e;
  return t.taxInclusive || t.tax <= 0 ? null : (0, r.jsx)(o.B1, {
    label: a.intl.string(a.t.jiRvC7),
    value: (0, i.T4)(t.tax, t.currency)
  })
}
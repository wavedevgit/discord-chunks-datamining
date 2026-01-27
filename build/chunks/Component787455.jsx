/** Chunk was on web.js **/
/** chunk id: 787455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk580630 = require("./580630.js"),
  Chunk735164 = require("./735164.jsx"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  let {
    invoice: t
  } = e;
  return t.taxInclusive || t.tax <= 0 ? null : (0, r.jsx)(a.oR, {
    label: o.intl.string(o.t.jiRvC7),
    value: (0, i.$g)(t.tax, t.currency)
  })
}
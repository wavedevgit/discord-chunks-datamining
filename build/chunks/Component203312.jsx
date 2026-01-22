/** Chunk was on 59275 **/
/** chunk id: 203312, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk993408 = require("./993408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933122 = require("./933122.js");
let u = e => {
  let {
    category: t,
    daysRemainingText: l = o.t.Io7ozn,
    className: r
  } = e;
  if (!(0, i.HF)(t.unpublishedAt)) return null;
  let u = (0, i.WU)(t.unpublishedAt),
    d = u > 1 ? o.intl.formatToPlainString(l, {
      days: u
    }) : o.intl.string(o.t.Bc13HF);
  return (0, n.jsx)(a.LpS, {
    disableColor: true,
    text: d,
    className: s()(c.q, r)
  })
}
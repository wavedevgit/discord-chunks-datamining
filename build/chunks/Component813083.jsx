/** Chunk was on 45620 **/
/** chunk id: 813083, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478422 = require("./478422.js");
let u = e => {
  let {
    category: t,
    daysRemainingText: n = a.t.Io7ozn,
    className: l
  } = e;
  if (null == t.unpublishedAt) return null;
  let u = (0, o.OT)(t.unpublishedAt),
    d = u > 1 ? a.intl.formatToPlainString(n, {
      days: u
    }) : a.intl.string(a.t.Bc13HF);
  return (0, r.jsx)(s.IGR, {
    disableColor: true,
    text: d,
    className: i()(c.badge, l)
  })
}
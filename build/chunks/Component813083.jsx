/** Chunk was on 45620 **/
/** chunk id: 813083, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk60779 = require("./60779.js");
let u = e => {
  let {
    category: t,
    daysRemainingText: n = s.t.Io7ozn,
    className: l
  } = e;
  if (null == t.unpublishedAt) return null;
  let u = (0, o.OT)(t.unpublishedAt),
    d = u > 1 ? s.intl.formatToPlainString(n, {
      days: u
    }) : s.intl.string(s.t.Bc13HF);
  return (0, r.jsx)(i.IGR, {
    disableColor: true,
    text: d,
    className: a()(c.badge, l)
  })
}
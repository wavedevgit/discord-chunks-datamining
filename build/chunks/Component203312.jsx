/** Chunk was on 77313 **/
/** chunk id: 203312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk993408 = require("./993408.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933122 = require("./933122.js");
let u = e => {
  let {
    category: t,
    daysRemainingText: n = o.t.Io7ozn,
    className: l
  } = e;
  if (!(0, s.HF)(t.unpublishedAt)) return null;
  let u = (0, s.WU)(t.unpublishedAt),
    d = u > 1 ? o.intl.formatToPlainString(n, {
      days: u
    }) : o.intl.string(o.t.Bc13HF);
  return (0, r.jsx)(a.LpS, {
    disableColor: true,
    text: d,
    className: i()(c.q, l)
  })
}
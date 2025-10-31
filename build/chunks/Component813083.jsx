/** Chunk was on 48502 **/
/** chunk id: 813083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478422 = require("./478422.js");
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
  return (0, r.jsx)(a.IGR, {
    disableColor: true,
    text: d,
    className: i()(c.badge, l)
  })
}
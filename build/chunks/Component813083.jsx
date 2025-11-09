/** Chunk was on 78825 **/
/** chunk id: 813083, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk910842 = require("./910842.js");
let c = e => {
  let {
    category: n,
    daysRemainingText: t = s.t.Io7ozn,
    className: l
  } = e;
  if (null == n.unpublishedAt) return null;
  let c = (0, o.OT)(n.unpublishedAt),
    d = c > 1 ? s.intl.formatToPlainString(t, {
      days: c
    }) : s.intl.string(s.t.Bc13HF);
  return (0, r.jsx)(a.IGR, {
    disableColor: true,
    text: d,
    className: i()(u.badge, l)
  })
}
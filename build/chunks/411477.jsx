/** Chunk was on 77942 **/
/** chunk id: 411477, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.js"),
  Chunk237844 = require("./237844.js");

function s(t) {
  let {
    text: e,
    className: n,
    button: r,
    reducedRightPadding: s = false
  } = t;
  return <div className={i()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n)}>{<div className={c.noticeLeft}>{<a.SrA size={"md"} className={c.icon} color={l.JX.PREMIUM_TIER_2} />}{<a.Text className={c.text} variant={"text-md/normal"} color={"header-primary"}>{e}</a.Text>}</div>}{r}</div>
}
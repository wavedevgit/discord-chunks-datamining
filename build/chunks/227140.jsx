/** Chunk was on 1272 **/
/** chunk id: 227140, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk679768 = require("./679768.js"),
  Chunk456411 = require("./456411.js");

function c(e) {
  let {
    copy: t,
    showStars: n = true,
    className: i
  } = e;
  return <div className={l()(s.badgeContainer, i)}>{n && <r.Fragment>{<span className={l()(s.star, s.starLeft)}><o.Z width={"10"} height={"10"} /></span>}{<span className={l()(s.star, s.starRight)}><o.Z width={"14"} height={"14"} /></span>}</r.Fragment>}{<a.Text variant={"eyebrow"} className={s.newBadge}>{t}</a.Text>}</div>
}
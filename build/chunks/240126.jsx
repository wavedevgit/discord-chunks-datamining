/** Chunk was on 34779 **/
/** chunk id: 240126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk499033 = require("./499033.js"),
  Chunk388032 = require("./388032.js"),
  Chunk35539 = require("./35539.js");

function a(e) {
  let {
    Icon: t,
    header: n,
    tip: a,
    disableStars: c
  } = e;
  return <div className={s.container}>{<div className={s.iconContainer}>{<t color={"currentColor"} size={"custom"} className={s.icon} width={36} height={36} />}{c ? null : <l.Z className={s.stars} />}</div>}{<i.X6q className={s.header} variant={"heading-xl/semibold"}>{n}</i.X6q>}{<i.Text color={"header-secondary"} variant={"text-xs/normal"}>{c ? null : <i.Text tag={"span"} className={s.protip} variant={"text-xs/bold"} color={"text-feedback-positive"}>{o.intl.string(o.t["8tvIiI"])}{":"}{" "}</i.Text>}{a}</i.Text>}</div>
}
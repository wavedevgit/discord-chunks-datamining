/** Chunk was on 75708 **/
/** chunk id: 361045, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk882051 = require("./882051.js");

function c(e) {
  let {
    markAsDismissed: t,
    onCTA: c
  } = e;
  return <div className={o.popup}>{<div className={o.background}>{<div className={o.blur0} />}{<div className={o.blur1} />}{<div className={o.blur2} />}</div>}{<div className={o.content}>{<r.P3F className={o.closeIcon} onClick={() => t(a.L.USER_DISMISS)}><r.Dio /></r.P3F>}{<img src={n(414190)} className={o.art} alt={""} />}{<div>{<r.X6q variant={"heading-md/semibold"} color={"header-primary"} className={o.heading}>{l.intl.string(l.t.MLt8Hx)}{<s.Z className={o.betaTag} />}</r.X6q>}{<r.Text variant={"text-sm/normal"} color={"header-secondary"}>{l.intl.string(l.t["l+lSLi"])}</r.Text>}</div>}{<r.zxk variant={"primary"} text={l.intl.string(l.t["9WdoBw"])} fullWidth={true} onClick={() => {
          t(a.L.TAKE_ACTION), c()
        }} />}</div>}</div>
}
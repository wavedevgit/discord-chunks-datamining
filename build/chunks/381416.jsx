/** Chunk was on 1272 **/
/** chunk id: 381416, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk568410 = require("./568410.js");

function o(e) {
  let {
    onDiscardApplication: t,
    onContinueApplication: n,
    guild: o
  } = e;
  return <div className={a.confirmation}>{<div className={a.iconWrapper}><i.Gzi size={"md"} color={i.TVs.colors.INTERACTIVE_ACTIVE} /></div>}{<i.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{null != o ? l.intl.formatToPlainString(l.t.f5Jaw8, {
        guildName: o.name
      }) : l.intl.string(l.t["0sTyER"])}</i.X6q>}{<div className={a.incompleteButtonsContainer}>{<i.zxk fullWidth={true} onClick={n} variant={"secondary"} size={"md"} text={l.intl.string(l.t.h3aGmp)} />}{<i.zxk fullWidth={true} onClick={t} variant={"critical-primary"} size={"md"} text={l.intl.string(l.t.OQFlFB)} />}</div>}</div>
}
/** Chunk was on 75708 **/
/** chunk id: 74650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk767714 = require("./767714.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk921944 = require("./921944.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.js"),
  Chunk441425 = require("./441425.js"),
  Chunk217379 = require("./217379.js");

function h(e) {
  let {
    markAsDismissed: t,
    onCTA: n
  } = e, h = (0, r.e7)([o.default], () => o.default.getCurrentUser()), f = (0, c.M5)(h, u.p9.TIER_2);
  return <div className={p.popup}><div className={p.content}>{<a.P3F className={p.closeIcon} onClick={() => t(d.L.USER_DISMISS)}><a.Dio size={"xs"} /></a.P3F>}{<img src={g} alt={""} className={p.asset} />}{<div>{<a.X6q variant={"heading-md/semibold"} color={"text-primary"} className={p.title}>{m.intl.string(m.t["PRXV4+"])}</a.X6q>}{<a.Text variant={"text-sm/medium"} color={"text-secondary"}>{m.intl.string(m.t.RSHtFx)}</a.Text>}</div>}{f ? <a.zxk text={m.intl.string(m.t.LhcHi4)} fullWidth={true} onClick={() => {
          t(d.L.TAKE_ACTION), n()
        }} /> : <l.Z onClick={() => {
          t(d.L.TAKE_ACTION)
        }} showGradient={true} subscriptionTier={u.Si.TIER_2} size={s.zx.Sizes.LARGE} color={s.zx.Colors.CUSTOM} textOptions={{
          textOverride: m.intl.string(m.t.pj0XBA)
        }} className={p.button} />}</div></div>
}
/** Chunk was on 86513 **/
/** chunk id: 931905, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => c,
  m: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17894 = require("./17894.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157020 = require("./157020.js");
let c = e => {
  let {
    onConfirm: t,
    onCancel: n,
    title: r,
    subtitle: c,
    confirmCta: u,
    showOpenDiscord: d = true
  } = e;
  return <div className={s.confirmationContainer}>{<l.X6q className={s.confirmationHeader} variant={"heading-lg/extrabold"}>{r}</l.X6q>}{null != c ? <l.Text className={s.confirmationSubtitle} variant={"text-sm/normal"} color={"header-secondary"}>{c}</l.Text> : null}{<div className={s.buttonContainer}>{d && <l.zxk variant={"primary"} text={o.intl.string(o.t["8L5bZG"])} fullWidth={true} onClick={() => (0, a.Z)("application_sub_mweb_success_modal")} />}{<l.zxk variant={"secondary"} text={u} fullWidth={true} onClick={t} />}{null != n && <l.zxk variant={"secondary"} text={o.intl.string(o.t.iAfxo6)} fullWidth={true} onClick={n} />}</div>}</div>
};

function u(e) {
  let {
    onConfirm: t,
    tierName: n,
    subscription: c
  } = e;
  return <div className={s.confirmationContainer}>{<l.X6q className={s.confirmationHeader} variant={"heading-lg/extrabold"}>{o.intl.format(o.t["wLFT6+"], {
        tier: n
      })}</l.X6q>}{<l.Text className={s.confirmationSubtitle} variant={"text-sm/normal"} color={"header-secondary"}>{o.intl.format(o.t.OsAK9v, {
        timestamp: null == c ? true : c.currentPeriodEnd
      })}</l.Text>}{<div className={s.buttonContainer}>{<div data-button-hoisted-classname-wrapper={true} className={s.__invalid_openDiscordButton}><l.zxk variant={"primary"} text={o.intl.string(o.t["8L5bZG"])} onClick={() => (0, a.Z)("application_sub_mweb_success_modal")} /></div>}{<r.zx className={s.__invalid_doneButton} look={r.zx.Looks.BLANK} onClick={t}>{o.intl.string(o.t.nlkyw8)}</r.zx>}</div>}</div>
}
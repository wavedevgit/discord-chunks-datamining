/** Chunk was on 7654 **/
/** chunk id: 585385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => h
}), require("./997841.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk948851 = require("./948851.js"),
  Chunk868728 = require("./868728.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk821022 = require("./821022.js"),
  Chunk20493 = require("./20493.js");
let h = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: m,
    onToggleTemporary: p,
    onSelectMaxAge: v,
    onSelectMaxUses: x,
    isGuestInviteCreationToggleEnabled: I,
    onSetInviteFlags: f
  } = e, j = (0, a.ZP)(), {
    maxAge: N,
    maxUses: _,
    temporary: S,
    flags: E
  } = i;
  return <l.Fragment>{<s.xBx>{<div className={c.closeButton}><s.olH onClick={t} /></div>}{<div className={c.headerContainer}><s.vwX id={n} tag={"h2"} className={r()(g.marginReset, c.headerCloseButtonSpacing, c.headerText)}>{d.intl.string(d.t.Atdlys)}</s.vwX></div>}</s.xBx>}{<o.Z shouldHideTemporaryInviteToggle={h} maxAge={N} maxUses={_} temporary={S} onToggleTemporary={p} onSelectMaxAge={v} onSelectMaxUses={x} onGenerateNewLink={m} isGuestInviteCreationToggleEnabled={I} onSetInviteFlags={f} inviteFlags={E} />}{<s.mzw className={c.settingsFooter}><u.Z theme={j} onConfirm={() => {
          m(), t()
        }} onDismiss={t} /></s.mzw>}</l.Fragment>
}
/** Chunk was on 75708 **/
/** chunk id: 451392, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk498607 = require("./498607.js"),
  l = require.n(Chunk498607),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk220082 = require("./220082.js"),
  Chunk687158 = require("./687158.js"),
  Chunk576635 = require("./576635.js"),
  Chunk74538 = require("./74538.js"),
  Chunk193528 = require("./193528.jsx"),
  Chunk993413 = require("./993413.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk732391 = require("./732391.js");

function x(e) {
  let {
    user: t,
    pendingAvatarSrc: n,
    pendingColors: r,
    onThemeColorsChange: a,
    preventDisabled: x,
    guildId: _,
    className: j,
    showPremiumIcon: E = true,
    showResetThemeButton: C = false,
    forcedDivider: O
  } = e, v = (0, u.ZP)(t.id, _), {
    primaryColor: S,
    secondaryColor: T
  } = (0, m.Z)({
    user: t,
    displayProfile: v,
    pendingThemeColors: r,
    isPreview: true
  }), I = p.ZP.canUsePremiumProfileCustomization(t), N = null != n ? n : t.getAvatarURL(_, 80), y = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(), A = (0, d.Cf)(N, y, false);
  if (null == S || null == T) return null;
  let P = e => {
    a(l()(e, null == v ? true : v.themeColors) ? true : e)
  };
  return <h.Z title={f.intl.string(f.t.DMeO2d)} disabled={!I && !x} className={s()(b.__invalid_profileThemesSection, j)} showPremiumIcon={E} forcedDivider={O}><div className={b.sectionContainer}>{<div className={b.sparkleContainer}><g.Z onChange={e => P([e, T])} color={S} suggestedColors={A} showEyeDropper={true} label={(0, i.jsx)(c.Text, {
            className: b.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: f.intl.string(f.t.C3KTQk)
          })} /></div>}{<div className={b.sparkleContainer}><g.Z onChange={e => P([S, e])} color={T} suggestedColors={A} showEyeDropper={true} label={(0, i.jsx)(c.Text, {
            className: b.colorSwatchLabel,
            color: "header-secondary",
            variant: "text-xs/normal",
            "aria-hidden": true,
            children: f.intl.string(f.t["8elvy8"])
          })} /></div>}{C && null != _ && <div data-button-hoisted-classname-wrapper={true} className={b.resetButton}><c.zxk variant={"secondary"} size={"sm"} text={f.intl.string(f.t["L+Gmoa"])} onClick={() => P([null, null])} /></div>}</div></h.Z>
}
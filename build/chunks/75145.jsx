/** Chunk was on web.js **/
/** chunk id: 75145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kn: () => m,
  ZP: () => E,
  fi: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk243778 = require("./243778.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.js"),
  Chunk230889 = require("./230889.js");
let h = .2,
  m = 41;

function g() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    [t, o] = (0, Chunk243778.US)([Chunk704215.z.TRIAL_NUX_EMOJI_PICKER]),
    h = exports === Chunk704215.z.TRIAL_NUX_EMOJI_PICKER;
  return Chunk73800.useEffect(() => () => {
    h && Chunk120356(Chunk921944.L.TAKE_ACTION)
  }, [h, Chunk120356]), <div className={Chunk230889.nitroTopDividerContainer}>{<div className={Chunk230889.nitroTopDividerUpper} />}{<div className={a()(Chunk230889.nitroTopDividerShadow, Chunk230889.glow, {
        [Chunk230889.reducedMotion]: module || !h
      })} />}{<div className={Chunk230889.nitroTopDividerLockContainer}>{<div className={Chunk230889.nitroTopDividerLockBorder} />}{!module && h && <Chunk481060.Fmz className={Chunk230889.premiumUnlockAnimation} loop={false} importData={() => require.e("21812").then(require.t.bind(require, 741855, 19))} />}{<div className={a()(Chunk230889.premiumUnlockedWithNitroPillContainer, {
          [Chunk230889.reducedMotion]: module || !h
        })}>{<Chunk481060.SrA size={"xs"} color={"white"} />}{<Chunk481060.Text variant={"text-xs/medium"} color={"always-white"} lineClamp={1}>{Chunk388032.intl.string(Chunk388032.t["BMw+7O"])}</Chunk481060.Text>}</div>}{<div className={Chunk230889.nitroTopDividerLockBorderReversed} />}</div>}{<div className={Chunk230889.reverseTrialTopDividerLower} />}</div>
}
let E = function(e) {
  let {
    glowOpacity: t,
    className: n,
    colorOpacity: i = h
  } = e;
  return <div className={a()(p.nitroTopDividerContainer, n)}>{<div className={p.nitroTopDividerUpper} />}{<div style={{
        opacity: t
      }} className={p.nitroTopDividerShadow} />}{<div className={p.nitroTopDividerLockContainer}>{<div className={p.nitroTopDividerLockBorder} />}{<div className={p.nitroTopDividerLockCircle}><c.mBM size={"xs"} color={"white"} /></div>}{<div className={p.nitroTopDividerLockBorderReversed} />}</div>}{<div style={{
        opacity: i
      }} className={p.nitroTopDividerLower} />}</div>
}
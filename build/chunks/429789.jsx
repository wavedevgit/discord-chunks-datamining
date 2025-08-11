/** Chunk was on 75708 **/
/** chunk id: 429789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk313201 = require("./313201.js"),
  Chunk921801 = require("./921801.js"),
  Chunk131951 = require("./131951.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk20493 = require("./20493.js");
let h = (0, Chunk313201.hQ)();

function f(e) {
  let {
    refreshStyles: t
  } = e, {
    attenuation: n,
    attenuateWhileSpeakingSelf: r,
    attenuateWhileSpeakingOthers: c
  } = (0, a.cj)([u.Z], () => ({
    attenuation: u.Z.getAttenuation(),
    attenuateWhileSpeakingSelf: u.Z.getAttenuateWhileSpeakingSelf(),
    attenuateWhileSpeakingOthers: u.Z.getAttenuateWhileSpeakingOthers()
  })), f = <i.Fragment>{<l.vwX id={h} tag={l.RB0.H5} className={g.marginBottom8}>{p.intl.string(p.t.oSdBvb)}</l.vwX>}{<l.iRW initialValue={n} onValueChange={e => {
        o.Z.setAttenuation(e, r, c)
      }} aria-labelledby={h} />}{<l.R94 className={s()({
        [g.marginBottom20]: !t
      })} type={l.R94.Types.DESCRIPTION}>{p.intl.string(p.t["0A/8Rk"])}</l.R94>}{!t && <l.$i$ className={g.marginBottom20} />}{<l.j7V value={r} onChange={e => o.Z.setAttenuation(n, e, c)} hideBorder={t}>{p.intl.string(p.t["9dHxRU"])}</l.j7V>}{<l.j7V value={c} onChange={e => o.Z.setAttenuation(n, r, e)} hideBorder={t}>{p.intl.string(p.t.SMt0Gh)}</l.j7V>}</i.Fragment>;
  return <d.F setting={m.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION}>{t ? f : (0, i.jsx)(l.hjN, {
      className: g.marginBottom20,
      children: f
    })}</d.F>
}
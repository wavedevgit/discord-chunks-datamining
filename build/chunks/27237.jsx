/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk808189 = require("./808189.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.js"),
  Chunk262212 = require("./262212.js"),
  Chunk226278 = require("./226278.js"),
  Chunk279604 = require("./279604.js"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.js"),
  Chunk246499 = require("./246499.js"),
  Chunk568413 = require("./568413.js");

function E(e) {
  let t, {
    active: n,
    nextActive: o,
    position: i
  } = e;
  return t = n && false !== o ? "full" : n && false === o ? "half" : "none", <div className={h.progressContainer}>{<div className={l()(h.progress, h[i], h[t])} />}{<div className={l()(h.boostContainer, j.boostProgressBackground, {
        [h.boostContainerActive]: n,
        [j.active]: n
      })}><a.$Eu size={"sm"} color={"white"} /></div>}</div>
}

function C(e) {
  let {
    isActive: t,
    index: n
  } = e, i = (0, g.d)(t), l = (0, g.u)(t), a = o.useMemo(() => {
    let e = c.C[n];
    if (null == e) return [];
    let t = e.tier === _.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => <div className={h.perkRow}>{<e.icon color={l} size={"sm"} />}{<s.xv className={h.perkText} color={i} variant={"text-sm/medium"}>{e.getCopy()}</s.xv>}</div>)
  }, [n, l, i]);
  return <div className={h.perkRowContainer}>{a}{<div className={h.perkRow}><s.xv color={i} variant={"text-sm/medium"}>{b.intl.string(v.default.nIj3LS)}</s.xv></div>}</div>
}

function I(e) {
  let {
    guildId: t,
    index: n,
    powerup: i,
    nextPowerup: l
  } = e, s = (0, u.ZP)(t, i), a = (0, u.ZP)(t, l), c = s.type !== x.A3.INACTIVE, _ = a.type !== x.A3.INACTIVE, v = s.type === x.A3.TIER_OVERRIDE_ACTIVATED, [b, j] = o.useState(true);
  (0, m.KT)(b);
  let I = (0, g.d)(c);
  return <f.Z guildId={t} powerup={i} className={h.card}>{<E position={0 === n ? "start" : null == l ? "end" : "middle"} active={c} nextActive={null != l ? _ : true} />}{<d.Q9 title={i.title} textColor={I} footer={!v && (0, r.jsx)(f.g, {
        className: h.footer,
        guildId: t,
        powerup: i
      })}><C isActive={c} index={n} /></d.Q9>}{!v && <d.N4><p.ZP guildId={t} powerup={i} onError={j} /></d.N4>}</f.Z>
}
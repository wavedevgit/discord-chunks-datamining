/** Chunk was on 22988 **/
/** chunk id: 166805, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk580685 = require("./580685.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.js"),
  Chunk484614 = require("./484614.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk246946 = require("./246946.js"),
  Chunk330010 = require("./330010.js"),
  Chunk999382 = require("./999382.js"),
  Chunk800223 = require("./800223.js"),
  Chunk24318 = require("./24318.js"),
  Chunk822693 = require("./822693.js"),
  Chunk388032 = require("./388032.js"),
  Chunk832721 = require("./832721.js");

function _(e) {
  let {
    guildId: t
  } = e, {
    guildProfile: c,
    fetchGuildProfile: g,
    fetchStatus: _
  } = (0, m.u)(t), O = _ !== u.a.FETCHED, {
    fetchedEmbed: y,
    embedEnabled: C,
    embedChannelId: N
  } = (0, s.cj)([h.Z], () => {
    let {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    } = h.Z.getProps();
    return {
      fetchedEmbed: e,
      embedEnabled: t,
      embedChannelId: n
    }
  }), I = i.useMemo(() => (0, b.S)(t), [t]), E = i.useMemo(() => (0, b.a)(t), [t]), [S, T] = i.useState(false), P = null != c && l.Y.VISIBLE.has(c.visibility), w = !O && !P && !C;
  i.useEffect(() => {
    y || (0, p.R)(t)
  }, [y, t]), i.useEffect(() => {
    g()
  }, [t, g]);
  let R = i.useCallback(async e => {
    T(true), await (0, f.c)(t, e, N), T(false)
  }, [N, t]);
  return y ? <div>{<o.j7V disabled={S} value={C} hideBorder={true} onChange={R}>{j.intl.string(j.t.NR6hub)}</o.j7V>}{w ? <a.xv variant={"text-sm/normal"} color={"text-secondary"} className={v.subtext}>{j.intl.string(j.t.zCGuJy)}</a.xv> : null}{C ? <r.Fragment>{<div className={v.divider} />}{<o.vwX>{j.intl.string(j.t.LUo0Q0)}</o.vwX>}{<x.m guildId={t} widgetEnabled={C} widgetChannelId={N} enableLocalUpdate={true} />}{<a.xv variant={"text-sm/medium"} color={"text-secondary"} className={v.subtext}>{j.intl.string(j.t.LxVR9P)}</a.xv>}{<div className={v.twoColumns}>{<div className={v.column}>{<o.vwX>{j.intl.string(j.t.TRyLUl)}</o.vwX>}{<d.Z value={t} />}</div>}{<div className={v.column}>{<o.vwX>{j.intl.string(j.t.VECJcH)}</o.vwX>}{<d.Z value={I} />}</div>}</div>}{<div className={v.divider} />}{<div className={v.twoColumns}>{<div className={v.column}>{<o.vwX>{j.intl.string(j.t.XVGbn5)}</o.vwX>}{<d.Z value={E} />}{<a.xv variant={"text-sm/medium"} color={"text-secondary"} className={v.subtext}>{j.intl.string(j.t["+baN19"])}</a.xv>}</div>}{<img className={v.column} data-accessibility={"desaturate"} alt={""} src={n(329488)} />}</div>}</r.Fragment> : null}</div> : <o.$jN />
}

function O(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([g.Z], () => g.Z.enabled);
  return <o.hjN title={j.intl.string(j.t.qlhNb2)}>{<a.xv variant={"text-sm/medium"} color={"text-secondary"} className={v.description}>{j.intl.string(j.t["dNn/1t"])}</a.xv>}{n ? <c.Z /> : <_ guildId={t} />}</o.hjN>
}
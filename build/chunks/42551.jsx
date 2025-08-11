/** Chunk was on 6850 **/
/** chunk id: 42551, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk954955 = require("./954955.js"),
  u = require.n(Chunk954955),
  Chunk498607 = require("./498607.js"),
  C = require.n(Chunk498607),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk563115 = require("./563115.js"),
  Chunk910693 = require("./910693.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk285173 = require("./285173.js"),
  Chunk388032 = require("./388032.js"),
  Chunk506192 = require("./506192.js"),
  Chunk350381 = require("./350381.js");
let O = new Set;

function H(e) {
  let {
    guildId: t,
    onClose: n
  } = e, o = (0, f.BG)(t), a = (0, m.e7)([h.Z], () => h.Z.getSearchStateByGuildId(t), [t], C()), [c, d] = l.useState(a.selectedRoleIds), H = (0, p.h)(t, O, true), _ = (e, n) => {
    let {
      record: l
    } = e;
    return <b.lo1 value={l.id}><div className={v.roleNameContainer}>{<div className={v.roleLabel}>{<div className={i()(v.labelBackground, n && v.selected)} />}{<b.lo1.Label><g.Z className={y.roleTooltipItem} role={l} guildId={t} /></b.lo1.Label>}</div>}{<div className={v.checkboxContainer}><b.lo1.Checkbox checked={n} /></div>}</div></b.lo1>
  }, w = (e, t) => H.reduce((n, r) => {
    let {
      record: l
    } = r, o = e.has(l.id);
    return s()(t.toLowerCase(), l.name.toLowerCase()) ? n.push(_(r, o)) : o && n.push(_(r, o)), n
  }, []), N = l.useCallback(e => {
    (0, j.Dr)(t, {
      selectedRoleIds: e
    }), o(e)
  }, [t, o]), S = l.useMemo(() => u()(N, 300), [N]), Z = l.useCallback(e => {
    let t;
    d(t = new Set(c.has(e) ? [...c].filter(t => t !== e) : [...c, e])), S(t)
  }, [c, S]);
  return <b.DBG className={v.rolePopout} placeholder={x.intl.string(x.t.ZveC7e)} value={c} onChange={Z} onClose={() => {
      n()
    }} multiSelect={true} showScrollbar={true} autoFocus={true}>{e => w(c, e)}</b.DBG>
}
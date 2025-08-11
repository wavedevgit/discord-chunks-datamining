/** Chunk was on 22988 **/
/** chunk id: 464610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727072 = require("./727072.js"),
  Chunk85960 = require("./85960.js"),
  Chunk676317 = require("./676317.js"),
  Chunk823379 = require("./823379.js"),
  Chunk403170 = require("./403170.jsx"),
  Chunk84613 = require("./84613.js"),
  Chunk740903 = require("./740903.js"),
  Chunk598622 = require("./598622.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk902893 = require("./902893.js");

function f(e) {
  let {
    title: t,
    subtitle: n,
    icon: i,
    page: a
  } = e;
  return <div className={h.safetyStepRow}>{<div className={h.safetyStepContent}>{<l.qEK src={i} size={l.EFr.SIZE_40} aria-label={t} />}{<div>{<l.X6q variant={"heading-md/semibold"} color={"header-primary"}>{t}</l.X6q>}{<l.Text variant={"text-xs/medium"} color={"header-secondary"}>{n}</l.Text>}</div>}</div>}{<l.zxk size={"sm"} variant={"secondary"} onClick={() => (0, u.K)(a)} text={p.intl.string(p.t.bt75u7)} />}</div>
}

function b(e) {
  let {
    guild: t
  } = e;
  (0, a.RD)(t.id);
  let u = (0, s.Z6)(t.id),
    {
      rulesByTriggerType: b
    } = (0, a.pH)(t.id),
    {
      numEnabledRules: x,
      numRules: j
    } = i.useMemo(() => {
      let e = 0,
        t = 0;
      return null == b || Object.values(u).flat().forEach(n => {
        var r;
        let i = null == (r = b[n]) ? true : r.filter(c.lm);
        if (null == i || 0 === i.length) return void t++;
        i.forEach(n => {
          n.enabled && e++, t++
        })
      }), {
        numEnabledRules: e,
        numRules: t
      }
    }, [u, b]),
    v = (0, g.Q)(t),
    _ = v[m.u.CAPTCHA_AND_RAID_PROTECTION],
    O = v[m.u.DM_AND_SPAM_PROTECTION],
    y = v[m.u.PERMISSIONS],
    C = (0, o.pr)(t.id);
  return <div>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={h.header}>{p.intl.string(p.t["0A+VSE"])}</l.X6q>}{<d.z guild={t} />}{<div className={h.safetyChecklist}>{<f icon={n(14215)} title={p.intl.string(p.t["53eF5u"])} subtitle={p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: _.filter(e => e.enabled).length,
          total: _.length
        })} page={m.u.CAPTCHA_AND_RAID_PROTECTION} />}{<div className={h.divider} />}{<f icon={n(128724)} title={p.intl.string(p.t.O0SfFx)} subtitle={p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: O.filter(e => e.enabled).length,
          total: O.length
        })} page={m.u.DM_AND_SPAM_PROTECTION} />}{<div className={h.divider} />}{C && <r.Fragment>{<f icon={n(145136)} title={p.intl.string(p.t.uRelg4)} subtitle={p.intl.formatToPlainString(p.t.TG7NYG, {
            enabled: x,
            total: j
          })} page={m.u.AUTOMOD} />}{<div className={h.divider} />}</r.Fragment>}{<f icon={n(913414)} title={p.intl.string(p.t.xrmhRU)} subtitle={p.intl.formatToPlainString(p.t.TG7NYG, {
          enabled: y.filter(e => e.enabled).length,
          total: y.length
        })} page={m.u.PERMISSIONS} />}</div>}</div>
}
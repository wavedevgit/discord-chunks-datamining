/** Chunk was on 22988 **/
/** chunk id: 557359, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk296991 = require("./296991.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk217472 = require("./217472.js"),
  Chunk651390 = require("./651390.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk52930 = require("./52930.js");

function f(e) {
  let {
    requireTerms: t,
    rules: n
  } = e, l = (0, o.e7)([u.Z], () => u.Z.getProps().guild), f = null == l ? true : l.id, b = i.useCallback(e => {
    if (null == f || null == n) return null;
    m.Z.setPendingInviteRules(f, e, [...n])
  }, [f, n]), x = i.useCallback(e => {
    if (null == f) return null;
    m.Z.setPendingInviteRules(f, t, e)
  }, [f, t]);
  return null == l ? null : null == n ? <c.$jN /> : <r.Fragment>{<div className={h.headerContainer}>{<div className={h.headerText}>{<s.X6 variant={"heading-md/semibold"} color={"header-primary"}>{p.intl.string(p.t.d21uOj)}</s.X6>}{<s.xv tag={"p"} variant={"text-sm/medium"} color={"text-secondary"} className={h.bodyText}>{p.intl.string(p.t.SzpUBA)}</s.xv>}</div>}{<c.rsf onChange={b} checked={t} />}</div>}{t && <g.c guildId={l.id} />}{<div className={a()(h.rules, {
        [h.disabled]: !t
      })}><div inert={t ? true : ""}>{<s.X6 variant={"text-xs/bold"} color={"text-muted"} className={h.rulesHeader}>{p.intl.string(p.t.XcAzbm)}</s.X6>}{<d.k guild={l} rules={n} setRules={x} disabled={!t} />}</div></div>}</r.Fragment>
}
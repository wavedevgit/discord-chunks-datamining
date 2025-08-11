/** Chunk was on 42483 **/
/** chunk id: 446706, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk539379 = require("./539379.js"),
  Chunk109983 = require("./109983.jsx"),
  Chunk834891 = require("./834891.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk867562 = require("./867562.js");

function u(t) {
  let {
    guildTemplate: n,
    onClick: e,
    autoFocus: a
  } = t, s = l.useCallback(() => {
    e(n)
  }, [n, e]);
  return <o.Z icon={c.U[n.id]} message={n.label} onClick={s} autoFocus={a} />
}

function _(t) {
  let {
    className: n,
    isNewUser: e,
    onClose: l,
    onChooseTemplate: a,
    onJoin: c
  } = t, o = (0, m.E)();
  return <i.Fragment>{<r.xBx direction={d.Z.Direction.VERTICAL} className={p.header} separator={false}>{<r.X6q className={p.title} variant={"heading-xl/semibold"}>{e ? C.intl.string(C.t["9U0b1t"]) : C.intl.string(C.t["5HZu09"])}</r.X6q>}{<r.Text className={p.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{C.intl.string(C.t["wti/Hx"])}</r.Text>}{null != l && <r.olH className={p.closeButton} onClick={l} />}</r.xBx>}{<r.hzk className={s()(p.templatesList, n)} paddingFix={false}>{<u guildTemplate={o[m.l.CREATE]} onClick={a} autoFocus={true} />}{<r.Text className={p.optionHeader} color={"header-secondary"} variant={"text-xs/bold"}>{C.intl.string(C.t.JGDkfn)}</r.Text>}{<u guildTemplate={o[m.l.GAMING]} onClick={a} />}{<u guildTemplate={o[m.l.FRIENDS]} onClick={a} />}{<u guildTemplate={o[m.l.STUDY]} onClick={a} />}{<u guildTemplate={o[m.l.SCHOOL_CLUB]} onClick={a} />}{<u guildTemplate={o[m.l.LOCAL_COMMUNITY]} onClick={a} />}{<u guildTemplate={o[m.l.CREATORS]} onClick={a} />}</r.hzk>}{null != c && <r.mzw className={p.footer}>{<r.X6q variant={"heading-lg/semibold"} className={p.footerTitle}>{C.intl.string(C.t["N+Mi/f"])}</r.X6q>}{<div data-button-hoisted-classname-wrapper={true} className={p.footerButton}><r.zxk variant={"secondary"} fullWidth={true} text={C.intl.string(C.t.riOUtL)} onClick={c} /></div>}</r.mzw>}</i.Fragment>
}
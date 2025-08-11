/** Chunk was on 44799 **/
/** chunk id: 838968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N4: () => v,
  P2: () => m,
  Q9: () => b,
  aB: () => j,
  c: () => x,
  rL: () => g,
  uf: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk192371 = require("./192371.js"),
  Chunk834209 = require("./834209.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk246499 = require("./246499.js");

function m(e) {
  let {
    text: t
  } = e;
  return <div className={f.inline}>{<s.owK size={"xs"} color={s.TVs.colors.STATUS_POSITIVE} />}{<s.Text color={"text-feedback-positive"} variant={"text-sm/bold"}>{t}</s.Text>}</div>
}

function g(e) {
  let {
    dateString: t
  } = e;
  return <div className={f.inline}>{<s.Mgn size={"xs"} color={s.TVs.colors.STATUS_WARNING} />}{<s.Text color={"status-warning"} variant={"text-sm/bold"}>{p.intl.formatToMarkdownString(d.default["ol/ao6"], {
        dateString: (0, c.Z)(t)
      })}</s.Text>}</div>
}

function x(e) {
  let {
    removingAt: t
  } = e;
  return <div className={f.rollbackInline}>{<s.Mgn size={"xs"} color={s.TVs.colors.STATUS_WARNING} />}{<s.Text color={"status-warning"} variant={"text-sm/bold"}>{p.intl.formatToPlainString(d.default["6e2ry8"], {
        dateString: (0, u.Z)(t)
      })}</s.Text>}</div>
}

function _(e) {
  let {
    cost: t,
    costDecorator: n,
    status: o,
    className: i
  } = e, a = true !== t ? f.labelContainer : f.labelContainerEnd;
  return <div className={l()(a, i)}>{true !== t && <div className={l()(f.inline, f.inlineBoost)}>{<s.$Eu size={"sm"} color={s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} />}{<s.Text className={f.price} tag={"div"} variant={"heading-md/semibold"} color={"text-secondary"}>{p.intl.formatToPlainString(p.t.t2Wbo6, {
          required: t,
          decorator: null != n ? n : ""
        })}</s.Text>}</div>}{(null == o ? true : o.type) === "expiring" && <g dateString={o.expiringAt} />}{(null == o ? true : o.type) === "removing" && <x removingAt={o.removingAt} />}{(null == o ? true : o.type) === "active" && <m text={o.statusText} />}</div>
}

function v(e) {
  let {
    children: t
  } = e;
  return <div className={f.buttonContainer}>{t}</div>
}

function b(e) {
  let {
    title: t,
    textColor: n,
    children: o,
    footer: i
  } = e;
  return <div className={f.contentContainer}>{<div>{<div className={f.headerContainer}><s.X6q color={n} variant={"heading-md/bold"}>{t}</s.X6q></div>}{o}</div>}{i}</div>
}
let j = Chunk73800.forwardRef(function(e, t) {
  let {
    className: n,
    label: o,
    isActive: i,
    isWarning: c,
    badge: u,
    canRollback: d,
    onClick: m,
    onMouseOver: g,
    onMouseLeave: x,
    children: _
  } = e;
  return <div className={l()(f.parentContainer, {
      [f.rollbackInactive]: d && !i
    })} ref={t}><s.kL8 aria-label={o} onClick={m} onMouseOver={g} onMouseLeave={x} className={l()(f.container, {
        [f.active]: i,
        [f.warning]: c || d && i
      }, n)}>{"new" === u && <s.IGR className={f.new} text={p.intl.string(p.t.y2b7CA)} />}{"beta" === u && <s.IGR className={f.new} text={p.intl.string(p.t.oW0eUV)} color={a.Z.BG_BRAND} />}{_}</s.kL8></div>
})
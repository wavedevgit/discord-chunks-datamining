/** Chunk was on 64767 **/
/** chunk id: 507155, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk762762 = require("./762762.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.js"),
  Chunk795338 = require("./795338.js"),
  Chunk880419 = require("./880419.js"),
  Chunk279604 = require("./279604.jsx"),
  Chunk787188 = require("./787188.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk153013 = require("./153013.js");

function v(e) {
  let {
    canUseBoosts: t,
    guildId: r,
    powerup: a
  } = e, [v, C] = o.useState(false), g = (0, d.ZP)(r, a), b = (0, x._)(a, g, false), h = (0, d.UP)(g), {
    disabled: y
  } = (0, l.Z)(r, a, h), {
    onShowDeactivate: O,
    onActivate: k
  } = (0, f.ZP)(r, a), P = !t || y, _ = h && !P, w = <n.Fragment>{<div className={i()(j.perkCardImage, {
        [j.active]: h
      })}><u.m powerup={a} isHovering={v} /></div>}{<div className={j.footerContainer}>{<div className={j.footerDetails}>{<div><s.Text variant={"text-sm/medium"} color={h || v ? "text-primary" : "text-secondary"}>{a.description}</s.Text></div>}{<div>{(null == b ? true : b.type) === "expiring" && <c.rL dateString={b.expiringAt} />}{(null == b ? true : b.type) === "removing" && <c.c removingAt={b.removingAt} />}{(null == b ? true : b.type) === "active" && <c.P2 text={b.statusText} />}{null == b && <div className={j.statusContainer}>{<s.$Eu size={"sm"} color={s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} />}{<s.Text variant={"text-sm/medium"} color={"text-secondary"}>{m.intl.formatToPlainString(m.t.t2Wbo6, {
                required: a.cost,
                decorator: ""
              })}</s.Text>}</div>}</div>}</div>}{_ && <p.Z compact={true} iconSize={"md"} guildId={r} powerup={a} onClick={O} className={j.toggleButton} />}</div>}</n.Fragment>;
  return h ? <div className={i()(j.perkCard, j.activeCard, {
      [j.disabled]: P
    })} onMouseEnter={() => C(true)} onMouseLeave={() => C(false)}>{w}</div> : <s.P3F className={i()(j.perkCard, {
      [j.disabled]: P
    })} onMouseEnter={() => C(true)} onMouseLeave={() => C(false)} aria-disabled={P} onClick={e => {
      e.stopPropagation(), P || null == k || k(e, {
        shouldCloseAllModals: false
      })
    }}>{w}</s.P3F>
}
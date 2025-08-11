/** Chunk was on 85668 **/
/** chunk id: 720553, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk313201 = require("./313201.js"),
  Chunk724723 = require("./724723.js"),
  Chunk626135 = require("./626135.js"),
  Chunk988158 = require("./988158.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk946555 = require("./946555.js");

function p(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: p,
    onConfirm: C,
    onCancel: k,
    onClose: g,
    transitionState: f
  } = t, _ = (0, o.Dt)(), v = (0, c.q)("MaskedLinkModal"), {
    protocol: b,
    authorityPrefix: j,
    hostname: T,
    theRestOfTheUrl: M,
    shouldTrustUrl: y,
    setShouldTrustUrl: D,
    handleConfirm: L,
    handleCancel: N
  } = (0, x.X)({
    url: e,
    trustUrl: n,
    onConfirm: C,
    onCancel: k,
    onClose: g
  }), X = () => {
    L(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
      is_trust_url_selected: y,
      action_type: "confirm"
    })
  }, E = () => {
    N(), d.default.track(m.rMx.MASKED_LINK_MODAL_CLICKED, {
      is_trust_url_selected: y,
      action_type: "cancel"
    })
  };
  return (0, s.Z)({
    type: l.ImpressionTypes.MODAL,
    name: l.ImpressionNames.MASKED_LINK_MODAL
  }), v ? <i.Modal size={"md"} transitionState={f} onClose={g} title={h.intl.string(h.t["3w1QGh"])} subtitle={p ? h.intl.format(h.t.aCYv19, {}) : h.intl.string(h.t.soRxRU)} actions={[{
      text: h.intl.string(h.t["/g10LC"]),
      onClick: E,
      variant: "secondary"
    }, {
      text: p ? h.intl.string(h.t.COq6kp) : h.intl.string(h.t.NcJfJC),
      onClick: X,
      variant: "primary"
    }]}>{<r.Ttm className={u.linkCalloutContainer}>{<r.Text tag={"span"} variant={p ? "text-md/semibold" : "text-md/normal"} color={p ? "text-default" : "text-muted"}>{b}{j}</r.Text>}{<r.Text tag={"span"} variant={p ? "text-md/normal" : "text-md/semibold"} color={p ? "text-muted" : "text-default"}>{T}</r.Text>}{<r.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{M}</r.Text>}</r.Ttm>}{<r.XZJ className={u.checkboxMana} type={r.XZJ.Types.INVERTED} value={y} onChange={(t, e) => D(e)}><r.Text variant={"text-sm/normal"}>{p ? h.intl.format(h.t["haA+X1"], {
          protocol: b.replace(":", "")
        }) : h.intl.format(h.t.ZgXDsL, {
          domain: T
        })}</r.Text></r.XZJ>}</i.Modal> : <r.Y0X size={r.CgR.DYNAMIC} transitionState={f} aria-labelledby={_} parentComponent={"MaskedLinkModal"}>{<r.hzk>{<r.X6q id={_} variant={"heading-xl/bold"} className={u.title}>{h.intl.string(h.t["3w1QGh"])}</r.X6q>}{<r.Text className={u.warningText} variant={"text-md/normal"}>{p ? h.intl.format(h.t.aCYv19, {}) : h.intl.string(h.t.soRxRU)}</r.Text>}{<r.Ttm className={u.linkCalloutContainer}>{<r.Text tag={"span"} variant={p ? "text-md/semibold" : "text-md/normal"} color={p ? "text-default" : "text-muted"}>{b}{j}</r.Text>}{<r.Text tag={"span"} variant={p ? "text-md/normal" : "text-md/semibold"} color={p ? "text-muted" : "text-default"}>{T}</r.Text>}{<r.Text tag={"span"} variant={"text-md/normal"} color={"text-muted"}>{M}</r.Text>}</r.Ttm>}{<r.XZJ className={u.checkbox} type={r.XZJ.Types.INVERTED} value={y} onChange={(t, e) => D(e)}><r.Text variant={"text-sm/normal"}>{p ? h.intl.format(h.t["haA+X1"], {
            protocol: b.replace(":", "")
          }) : h.intl.format(h.t.ZgXDsL, {
            domain: T
          })}</r.Text></r.XZJ>}</r.hzk>}{<r.mzw><r.hE2 direction={"horizontal-reverse"}>{<r.zxk variant={"primary"} text={p ? h.intl.string(h.t.COq6kp) : h.intl.string(h.t.NcJfJC)} type={"button"} onClick={X} />}{<r.zxk variant={"secondary"} text={h.intl.string(h.t["/g10LC"])} type={"button"} onClick={E} />}</r.hE2></r.mzw>}</r.Y0X>
}
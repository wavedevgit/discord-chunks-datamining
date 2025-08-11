/** Chunk was on 65652 **/
/** chunk id: 451426, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk600164 = require("./600164.js"),
  Chunk103879 = require("./103879.js"),
  Chunk236289 = require("./236289.js"),
  Chunk788080 = require("./788080.js"),
  Chunk613734 = require("./613734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk67164 = require("./67164.js"),
  Chunk91463 = require("./91463.js");

function g(e) {
  let {
    className: n,
    isDsaEligible: t,
    onClose: g,
    onNext: C,
    onBack: N
  } = e, j = (0, s.e7)([d.Z], () => d.Z.getAppealClassificationId()), {
    classification: I
  } = (0, m.YG)(null != j ? j : p.lds), E = (0, x.c7)(null == I ? true : I.description), T = (0, s.e7)([d.Z], () => d.Z.getIsSubmitting()), v = (0, s.e7)([d.Z], () => d.Z.getAppealSignal()), f = (0, s.e7)([d.Z], () => d.Z.getFreeTextAppealReason()), [S, k] = a.useState(false), [A, Z] = a.useState(""), L = a.useCallback(e => {
    r.Z.dispatch({
      type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
      userInput: e
    })
  }, []), b = a.useCallback(async () => {
    if (null !== j) try {
      Z(""), await c.uR(j, v, f), null == C || C()
    } catch (n) {
      var e;
      Z((0, x.Zs)(null == (e = n.body) ? true : e.code))
    }
  }, [j, v, f, C]);
  return <i.Fragment>{<l.xBx data-migration-pending={true} direction={o.Z.Direction.VERTICAL} className={h.header} separator={false}>{<l.X6q className={h.title} variant={"heading-xl/semibold"}>{u.intl.string(u.t["C5q+pa"])}</l.X6q>}{<l.Text className={h.subtitle} color={"header-secondary"} variant={"text-md/normal"}>{u.intl.string(u.t["G2g/g4"])}</l.Text>}{null != g && <l.olH className={h.closeButton} onClick={g} />}</l.xBx>}{<l.hzk data-migration-pending={true} className={n} paddingFix={false}>{<ul className={_.listContainer}>{[(0, x.ox)(v), f].filter(e => e.length > 0).map((e, n) => (0, i.jsx)("li", {
          className: _.listItem,
          children: (0, i.jsx)(l.Text, {
            tag: "span",
            variant: "text-md/normal",
            children: e
          })
        }, n))}</ul>}{t && <div className={_.anchorContainer}><l.eee onClick={() => k(e => !e)}><l.X6q variant={"heading-md/normal"} color={"text-link"}>{f.length > 0 ? u.intl.string(u.t.tnE3bW) : u.intl.string(u.t.uoQFIi)}</l.X6q></l.eee></div>}{S && t && <div className={_.inputContainer}><l.Kx8 value={f} onChange={L} /></div>}{<div className={h.policyContainer}><l.Text variant={"text-md/semibold"}>{E}</l.Text></div>}{<l.Text variant={"text-xs/medium"} color={"header-secondary"} className={_.footerText}>{u.intl.string(u.t.d6qgY2)}</l.Text>}</l.hzk>}{<l.mzw data-migration-pending={true} direction={o.Z.Direction.VERTICAL}>{"" !== A && <l.Text className={_.errorText} variant={"text-lg/normal"} color={"text-danger"}>{A}</l.Text>}{<div className={_.buttonContainer}><l.hE2 direction={"horizontal-reverse"}>{<l.zxk variant={"secondary"} text={u.intl.string(u.t["13/7kZ"])} onClick={N} disabled={T} />}{<l.zxk variant={"critical-primary"} text={u.intl.string(u.t.geKm7u)} onClick={b} loading={T} />}</l.hE2></div>}</l.mzw>}</i.Fragment>
}